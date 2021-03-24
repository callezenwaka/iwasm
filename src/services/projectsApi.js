'use strict'

import { API_PROD_URL } from '@/services/Api'
import { API_DEV_URL } from '@/services/Api'
import axios from 'axios'

export default {
	async getProjects (idToken) {
		const res = await axios({
			method: 'get',
			url: `${API_DEV_URL}projects/fetchAll`,
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${idToken}`,
			},
			json: true,
		});
		return res;
	},
	async addProjectImage(idToken, params) {
		const res = await axios({
			method: 'post',
			url: `${API_DEV_URL}projects/image/addOne`,
			data: params,
			headers: { 
				'content-type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${idToken}`, 
			},
			json: true,
		});
		return res;
	},
	async addProject(idToken, params) {
		const res = await axios({
			method: 'post',
			url: `${API_DEV_URL}projects/addOne`,
			data: params,
			headers: { 
				'content-type': 'application/json', 
				'Accept': 'application/json',
				'Authorization': `Bearer ${idToken}`, 
			},
			json: true,
		});
		return res;
	},
	async updateProject(idToken, params) {
		const res = await axios({
			method: 'put',
			url: `${API_DEV_URL}projects/updateOne/${params.id}`,
			data: params,
			headers: { 
				'content-type': 'application/json', 
				'Accept': 'application/json',
				'Authorization': `Bearer ${idToken}`, 
			},
			json: true,
		});
		return res;
	},
	async getProject(idToken, lesson_id) {
		const res = await axios({
			method: 'get',
			url: `${API_PROD_URL}projects/fetchOne/${lesson_id}`,
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${idToken}`,
			},
			json: true,
		});
		return res;
	},
	async deleteProject(idToken, lesson_id) {
        const res = await axios({ 
            method: 'delete',
			url: `${API_PROD_URL}projects/deleteOne/${lesson_id}`,
            // data: params,
            headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${idToken}`,
			},
			json: true,
        })
        return res;
	},
}