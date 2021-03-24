'use strict'

// import firebase from 'firebase'
import firebase from '../../firebase.js';

const state = {
	// Credentials
	user: {},
	isAdmin: false,
	idToken: '',
	idTokenResult: '',
};

const getters = {
	user: state => state.user,
	isAdmin: state => state.isAdmin,
	idToken: state => state.idToken,
	idTokenResult: state => state.idTokenResult,
};

const actions = {
	async setUser({ commit }, user) {
		// api call
		commit('SET_USER', user)
	},
	async setIsAdmin({ commit }, isAdmin) {
		// api call
		commit('SET_IS_ADMIN', isAdmin);
	},
	async setIdToken({ commit }, idToken) {
		// api call
		commit('SET_ID_TOKEN', idToken);
	},
	async setIdTokenResult({ commit }, idTokenResult) {
		// api call
		commit('SET_ID_TOKEN_RESULT', idTokenResult);
	},
	async signUp({ dispatch, commit }, payload) {
		return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
		.then( async (user) => {
			await firebase.auth().currentUser.sendEmailVerification();
			// await firebase.auth().currentUser.updateProfile({
			// 	displayName: payload.name,
			// 	phoneNumber: payload.phone,
			// 	// photoURL: 'https://firebasestorage.googleapis.com/v0/b/dev-capsule.appspot.com/o/avatar.jpeg?alt=media&token=55f88f28-76c8-4670-8caa-e08267b096fa',
			// });
			firebase.auth().onAuthStateChanged(currentUser => {
				if (currentUser) {
					currentUser.getIdToken( /* forceRefresh */)
					.then(idToken => {
						commit('SET_ID_TOKEN', idToken);
					})
					.catch(err => {
						dispatch('getMessage', err.message);
						return;
					});
				}
			})
			// if (firebase.auth().currentUser.emailVerified) {
			// 	commit('SET_USER', user);
			// }
			return user;
		})
		.catch(err => {
			dispatch('getMessage', err.message);
			return;
		});
	},
	async signIn ({ dispatch, commit }, payload) {
		return firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
		.then(user => {
			if (user && firebase.auth().currentUser.emailVerified) {
			// if (user) {
				firebase.auth().onAuthStateChanged(currentUser => {
					if (currentUser) {
						currentUser.getIdToken(/* forceRefresh */ )
						.then(idToken => {
							commit('SET_ID_TOKEN', idToken);
						})
						.catch(err => {
							dispatch('getMessage', err.message);
							return;
						});
					}
				});
				commit('SET_USER', user);
			}
			// if (firebase.auth().currentUser.emailVerified) {
			// 	commit('SET_USER', user);
			// }
			// console.log('here')
			// console.log(user)
			return user;
		})
		.catch(err => {
			dispatch('getMessage', err.message);
			return;
		});
	},
	async signOut ({ dispatch, commit }) {
		firebase.auth().signOut()
		.then(() => {
			commit('SET_IS_USER', null);
			commit('SET_USER', {});
			commit('SET_ID_TOKEN', null);
			commit('SET_ID_TOKEN_RESULT', null);
			commit('SIGN_OUT');
			// Sign-out successful.
			dispatch('getMessage', {message: 'Your sign out was successful!!!', status: true});
		})
		.catch(err => {
			dispatch('getMessage', {message: err.message, status: false});
			return;
		});
	},
};

const mutations = {
	SET_USER(state, user) {
		state.user = user;
	},
	SET_IS_ADMIN(state, isAdmin) {
		state.isAdmin = isAdmin;
	},
	SET_ID_TOKEN(state, idToken) {
		state.idToken = idToken;
	},
	SET_ID_TOKEN_RESULT(state, idTokenResult) {
		state.idTokenResult = idTokenResult;
	},
	SIGN_OUT(state) {
		state.idToken = '';
		state.idTokenResult = '';
		state.user = {};
		state.isUser = false;
		state.isAdmin = false;
		state.profile = {};
	},
};

export default {
	state,
	getters,
	actions,
	mutations
};