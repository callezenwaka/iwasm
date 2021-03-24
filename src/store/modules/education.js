'use strict'

import educationApi from '@/services/educationApi';

const state = {
	educations: [
		{
			degree: 'B.Eng in Biomedical Engineering',
			school: 'University of Ilorin',
			year: '2017',
			id: '3452',
		}
	],
	education: {},
};

const getters = {
	educations: state => state.educations,
	education: state => state.education,
	educationById: state => id => {
		return state.educations.find(education => education.id === id)
	},
};

const actions = {
	async addEducationImage({ dispatch, rootGetters }, payload) {
		// api call
		return educationApi.addEducationImage(rootGetters.idToken, payload)
		.then(res => {
			// dispatch success message
			dispatch('getMessage', {message: 'Image successfully uploaded to the database!', status: true});
			// return response
			return res;
		})
		.catch( err => {
			// dispatch error message
			dispatch('getMessage', {message: err.message, status: false});
			return;
		});
	},
    async addEducation({ dispatch, rootGetters }, payload) {
		// api call
        return educationApi.addEducation(rootGetters.idToken, payload)
		.then(response => {
			// return response
			if (response.data) {
				// dispatch success message
				dispatch('getMessage', {message: response.data, status: true});
				// dispatch payload
				dispatch('getEducations', payload);
				return response;
			}
			return;
		})
		.catch( err => {
			// dispatch error message
			dispatch('getMessage', {message: err.message, status: false});
			return;
		});
    },
    async getEducation({ state, getters, dispatch, commit, rootGetters }, payload) {
        // filter education then api call
        if (payload.id == state.education.id) {
			return state.education
		}
	
		var education = getters.educationById(payload.id);
	
		if (education) {
			commit('GET_EDUCATION', education)
			return education;
		} else {
            return educationApi.getEducation(rootGetters.idToken, payload.id)
			.then(res => {
				// dispatch success message
				dispatch('getMessage', {message: 'Education successfully retrieved from the database!', status: true});
				// commit education
				commit('GET_EDUCATION', res.data)
				return res;
			})
			.catch( err => {
				// dispatch error message
				dispatch('getMessage', {message: err.message, status: false});
			return;
			});
		}
    },
    async getEducations({ state, dispatch, commit, rootGetters }, payload) {
		// check vuex store for data
        if (!payload && state.educations && !!state.educations.length) {
			return state.educations;
		}
		// api call
		return educationApi.getEducations(rootGetters.idToken)
		.then(res => {
			// dispatch success message
			dispatch('getMessage', {message: `${res.data.length} education(s) successfully retrieved!`, status: true});
			// commit educations
			commit('GET_EDUCATIONS', res.data);
			return res.data;
		})
		.catch( err => {
			// dispatch error message
			dispatch('getMessage', {message: err.message, status: false});
			return;
		});
    },
    async updateEducation({ dispatch, commit, rootGetters }, payload) {
        // api call
        return educationApi.updateEducation(rootGetters.idToken, payload)
		.then(response => {
			// fix best case
			// return response
			if (response.data) {
				// dispatch success message
				dispatch('getMessage', {message: response.data, status: true});
				// commit payload
				commit('UPDATE_EDUCATION', payload);
				return response;
			}
			return;
		})
		.catch( err => {
			// dispatch error message
			dispatch('getMessage', {message: err.message, status: false});
			return;
		});
    },
    async deleteEducation({ dispatch, commit, rootGetters }, payload) {
        // api call
        return educationApi.deleteEducation(rootGetters.idToken, payload.id)
		.then(response => {
			// dispatch success message
			dispatch('getMessage', {message: response.data, status: true});
			// commit payload
			commit('DELETE_EDUCATION', payload);
			return response;
		})
		.catch( err => {
			// dispatch error message
			dispatch('getMessage', {message: err.message, status: false});
			return;
		});
    },
};

const mutations = {
	ADD_EDUCATION_IMAGE(state, image) {
		state.image = image;
	},
    ADD_EDUCATION(state, education) {
        state.educations.unshift(education);
    },
    GET_EDUCATION(state, education) {
        state.education = education;
    },
    GET_EDUCATIONS(state, educations) {
        state.educations = educations;
    },
    UPDATE_EDUCATION(state, payload) {
        const index = state.educations.findIndex(education => education.id === payload.id);
        if (index !== -1) {
          state.educations.splice(index, 1, payload);
        }
    },
    DELETE_EDUCATION(state, payload) {
        state.educations = state.educations.filter(education => education.id !== payload.id);
    },
};

export default {
	state,
	getters,
	actions,
	mutations
};