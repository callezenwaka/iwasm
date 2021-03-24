'use strict'

import projectApi from '@/services/projectApi';

const state = {
	projects: [],
	project: {},
};

const getters = {
	projects: state => state.projects,
	project: state => state.project,
	projectById: state => id => {
		return state.projects.find(project => project.id === id)
	},
};

const actions = {
	async addProjectImage({ dispatch, rootGetters }, payload) {
		// api call
		return projectApi.addProjectImage(rootGetters.idToken, payload)
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
    async addProject({ dispatch, rootGetters }, payload) {
		// api call
        return projectApi.addProject(rootGetters.idToken, payload)
		.then(response => {
			// return response
			if (response.data) {
				// dispatch success message
				dispatch('getMessage', {message: response.data, status: true});
				// dispatch payload
				dispatch('getProjects', payload);
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
    async getProject({ state, getters, dispatch, commit, rootGetters }, payload) {
        // filter project then api call
        if (payload.id == state.project.id) {
			return state.project
		}
	
		var project = getters.projectById(payload.id);
	
		if (project) {
			commit('GET_PROJECT', project)
			return project;
		} else {
            return projectApi.getProject(rootGetters.idToken, payload.id)
			.then(res => {
				// dispatch success message
				dispatch('getMessage', {message: 'Project successfully retrieved from the database!', status: true});
				// commit project
				commit('GET_PROJECT', res.data)
				return res;
			})
			.catch( err => {
				// dispatch error message
				dispatch('getMessage', {message: err.message, status: false});
			return;
			});
		}
    },
    async getProjects({ state, dispatch, commit, rootGetters }, payload) {
		// check vuex store for data
        if (!payload && state.projects && !!state.projects.length) {
			return state.projects;
		}
		// api call
		return projectApi.getProjects(rootGetters.idToken)
		.then(res => {
			// dispatch success message
			dispatch('getMessage', {message: `${res.data.length} project(s) successfully retrieved!`, status: true});
			// commit projects
			commit('GET_PROJECTS', res.data);
			return res.data;
		})
		.catch( err => {
			// dispatch error message
			dispatch('getMessage', {message: err.message, status: false});
			return;
		});
    },
    async updateProject({ dispatch, commit, rootGetters }, payload) {
        // api call
        return projectApi.updateProject(rootGetters.idToken, payload)
		.then(response => {
			// fix best case
			// return response
			if (response.data) {
				// dispatch success message
				dispatch('getMessage', {message: response.data, status: true});
				// commit payload
				commit('UPDATE_PROJECT', payload);
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
    async deleteProject({ dispatch, commit, rootGetters }, payload) {
        // api call
        return projectApi.deleteProject(rootGetters.idToken, payload.id)
		.then(response => {
			// dispatch success message
			dispatch('getMessage', {message: response.data, status: true});
			// commit payload
			commit('DELETE_PROJECT', payload);
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
	ADD_PROJECT_IMAGE(state, image) {
		state.image = image;
	},
    ADD_PROJECT(state, project) {
        state.projects.unshift(project);
    },
    GET_PROJECT(state, project) {
        state.project = project;
    },
    GET_PROJECTS(state, projects) {
        state.projects = projects;
    },
    UPDATE_PROJECT(state, payload) {
        const index = state.projects.findIndex(project => project.id === payload.id);
        if (index !== -1) {
          state.projects.splice(index, 1, payload);
        }
    },
    DELETE_PROJECT(state, payload) {
        state.projects = state.projects.filter(project => project.id !== payload.id);
    },
};

export default {
	state,
	getters,
	actions,
	mutations
};