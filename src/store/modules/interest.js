'use strict'

import interestApi from '@/services/interestApi';

const state = {
	interests: [
		{
			name: 'Machine Learning',
			id: 8,
		},
		{
			name: 'Artificial Intelligence',
			id: 7,
		},
		{
			name: 'Bioinformatics',
			id: 6,
		},
		{
			name: 'Data Science',
			id: 5,
		},
		{
			name: 'Program Management',
			id: 4,
		},
		{
			name: 'Product Development',
			id: 3,
		},
	],
	interest: {},
};

const getters = {
	interests: state => state.interests,
	interest: state => state.interest,
	interestById: state => id => {
		return state.interests.find(interest => interest.id === id)
	},
};

const actions = {
	async addInterestImage({ dispatch, rootGetters }, payload) {
		// api call
		return interestApi.addInterestImage(rootGetters.idToken, payload)
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
    async addInterest({ dispatch, rootGetters }, payload) {
		// api call
        return interestApi.addInterest(rootGetters.idToken, payload)
		.then(response => {
			// return response
			if (response.data) {
				// dispatch success message
				dispatch('getMessage', {message: response.data, status: true});
				// dispatch payload
				dispatch('getInterests', payload);
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
    async getInterest({ state, getters, dispatch, commit, rootGetters }, payload) {
        // filter interest then api call
        if (payload.id == state.interest.id) {
			return state.interest
		}
	
		var interest = getters.interestById(payload.id);
	
		if (interest) {
			commit('GET_INTEREST', interest)
			return interest;
		} else {
            return interestApi.getInterest(rootGetters.idToken, payload.id)
			.then(res => {
				// dispatch success message
				dispatch('getMessage', {message: 'Interest successfully retrieved from the database!', status: true});
				// commit interest
				commit('GET_INTEREST', res.data)
				return res;
			})
			.catch( err => {
				// dispatch error message
				dispatch('getMessage', {message: err.message, status: false});
			return;
			});
		}
    },
    async getInterests({ state, dispatch, commit, rootGetters }, payload) {
		// check vuex store for data
        if (!payload && state.interests && !!state.interests.length) {
			return state.interests;
		}
		// api call
		return interestApi.getInterests(rootGetters.idToken)
		.then(res => {
			// dispatch success message
			dispatch('getMessage', {message: `${res.data.length} interest(s) successfully retrieved!`, status: true});
			// commit interests
			commit('GET_INTERESTS', res.data);
			return res.data;
		})
		.catch( err => {
			// dispatch error message
			dispatch('getMessage', {message: err.message, status: false});
			return;
		});
    },
    async updateInterest({ dispatch, commit, rootGetters }, payload) {
        // api call
        return interestApi.updateInterest(rootGetters.idToken, payload)
		.then(response => {
			// fix best case
			// return response
			if (response.data) {
				// dispatch success message
				dispatch('getMessage', {message: response.data, status: true});
				// commit payload
				commit('UPDATE_INTEREST', payload);
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
    async deleteInterest({ dispatch, commit, rootGetters }, payload) {
        // api call
        return interestApi.deleteInterest(rootGetters.idToken, payload.id)
		.then(response => {
			// dispatch success message
			dispatch('getMessage', {message: response.data, status: true});
			// commit payload
			commit('DELETE_INTEREST', payload);
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
	ADD_INTEREST_IMAGE(state, image) {
		state.image = image;
	},
    ADD_INTEREST(state, interest) {
        state.interests.unshift(interest);
    },
    GET_INTEREST(state, interest) {
        state.interest = interest;
    },
    GET_INTERESTS(state, interests) {
        state.interests = interests;
    },
    UPDATE_INTEREST(state, payload) {
        const index = state.interests.findIndex(interest => interest.id === payload.id);
        if (index !== -1) {
          state.interests.splice(index, 1, payload);
        }
    },
    DELETE_INTEREST(state, payload) {
        state.interests = state.interests.filter(interest => interest.id !== payload.id);
    },
};

export default {
	state,
	getters,
	actions,
	mutations
};