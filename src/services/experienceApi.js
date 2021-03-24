'use strict'

import { API_PROD_URL } from '@/services/Api'
import { API_DEV_URL } from '@/services/Api'
import axios from 'axios'

export default {
	async getExperiences (idToken) {
		const res = await axios({
			method: 'get',
			url: `${API_DEV_URL}experiences/fetchAll`,
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${idToken}`,
			},
			json: true,
		});
		return res;
	},
	async addExperienceImage(idToken, params) {
		const res = await axios({
			method: 'post',
			url: `${API_DEV_URL}experiences/image/addOne`,
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
	async addExperience(idToken, params) {
		const res = await axios({
			method: 'post',
			url: `${API_DEV_URL}experiences/addOne`,
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
	async updateExperience(idToken, params) {
		const res = await axios({
			method: 'put',
			url: `${API_DEV_URL}experiences/updateOne/${params.id}`,
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
	async getExperience(idToken, lesson_id) {
		const res = await axios({
			method: 'get',
			url: `${API_PROD_URL}experiences/fetchOne/${lesson_id}`,
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${idToken}`,
			},
			json: true,
		});
		return res;
	},
	async deleteExperience(idToken, lesson_id) {
        const res = await axios({ 
            method: 'delete',
			url: `${API_PROD_URL}experiences/deleteOne/${lesson_id}`,
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