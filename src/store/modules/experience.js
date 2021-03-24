'use strict'

import experienceApi from '@/services/experienceApi';

const state = {
	experiences: [
		{
			role: 'Founder / CTO',
			company: 'Algoboard',
			starttime: '2020',
			endtime: '',
			id: '8835',
		},
		{
			role: 'Program Specialist, Emerging Tech.',
			company: 'GE Gas Power',
			starttime: '2020',
			endtime: '2020',
			id: '8833',
		},
		{
			role: 'Program Specialist, IT Operations',
			company: 'GE Gas Power',
			starttime: '2019',
			endtime: '2020',
			id: '8837',
		},
		{
			role: 'Project Specialist',
			company: 'GE Healthcare',
			starttime: '2018',
			endtime: '2019',
			id: '434'
		},
	],
	experience: {},
};

const getters = {
	experiences: state => state.experiences,
	experience: state => state.experience,
	experienceById: state => id => {
		return state.experiences.find(experience => experience.id === id)
	},
};

const actions = {
	async addExperienceImage({ dispatch, rootGetters }, payload) {
		// api call
		return experienceApi.addExperienceImage(rootGetters.idToken, payload)
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
    async addExperience({ dispatch, rootGetters }, payload) {
		// api call
        return experienceApi.addExperience(rootGetters.idToken, payload)
		.then(response => {
			// return response
			if (response.data) {
				// dispatch success message
				dispatch('getMessage', {message: response.data, status: true});
				// dispatch payload
				dispatch('getExperiences', payload);
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
    async getExperience({ state, getters, dispatch, commit, rootGetters }, payload) {
        // filter experience then api call
        if (payload.id == state.experience.id) {
			return state.experience
		}
	
		var experience = getters.experienceById(payload.id);
	
		if (experience) {
			commit('GET_EXPERIENCE', experience)
			return experience;
		} else {
            return experienceApi.getExperience(rootGetters.idToken, payload.id)
			.then(res => {
				// dispatch success message
				dispatch('getMessage', {message: 'Experience successfully retrieved from the database!', status: true});
				// commit experience
				commit('GET_EXPERIENCE', res.data)
				return res;
			})
			.catch( err => {
				// dispatch error message
				dispatch('getMessage', {message: err.message, status: false});
			return;
			});
		}
    },
    async getExperiences({ state, dispatch, commit, rootGetters }, payload) {
		// check vuex store for data
        if (!payload && state.experiences && !!state.experiences.length) {
			return state.experiences;
		}
		// api call
		return experienceApi.getExperiences(rootGetters.idToken)
		.then(res => {
			// dispatch success message
			dispatch('getMessage', {message: `${res.data.length} experience(s) successfully retrieved!`, status: true});
			// commit experiences
			commit('GET_EXPERIENCES', res.data);
			return res.data;
		})
		.catch( err => {
			// dispatch error message
			dispatch('getMessage', {message: err.message, status: false});
			return;
		});
    },
    async updateExperience({ dispatch, commit, rootGetters }, payload) {
        // api call
        return experienceApi.updateExperience(rootGetters.idToken, payload)
		.then(response => {
			// fix best case
			// return response
			if (response.data) {
				// dispatch success message
				dispatch('getMessage', {message: response.data, status: true});
				// commit payload
				commit('UPDATE_EXPERIENCE', payload);
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
    async deleteExperience({ dispatch, commit, rootGetters }, payload) {
        // api call
        return experienceApi.deleteExperience(rootGetters.idToken, payload.id)
		.then(response => {
			// dispatch success message
			dispatch('getMessage', {message: response.data, status: true});
			// commit payload
			commit('DELETE_EXPERIENCE', payload);
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
	ADD_EXPERIENCE_IMAGE(state, image) {
		state.image = image;
	},
    ADD_EXPERIENCE(state, experience) {
        state.experiences.unshift(experience);
    },
    GET_EXPERIENCE(state, experience) {
        state.experience = experience;
    },
    GET_EXPERIENCES(state, experiences) {
        state.experiences = experiences;
    },
    UPDATE_EXPERIENCE(state, payload) {
        const index = state.experiences.findIndex(experience => experience.id === payload.id);
        if (index !== -1) {
          state.experiences.splice(index, 1, payload);
        }
    },
    DELETE_EXPERIENCE(state, payload) {
        state.experiences = state.experiences.filter(experience => experience.id !== payload.id);
    },
};

export default {
	state,
	getters,
	actions,
	mutations
};