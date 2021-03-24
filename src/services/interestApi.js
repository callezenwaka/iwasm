'use strict'

import { API_PROD_URL } from '@/services/Api'
import { API_DEV_URL } from '@/services/Api'
import axios from 'axios'

export default {
	async getInterests (idToken) {
		const res = await axios({
			method: 'get',
			url: `${API_DEV_URL}interests/fetchAll`,
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${idToken}`,
			},
			json: true,
		});
		return res;
	},
	async addInterestImage(idToken, params) {
		const res = await axios({
			method: 'post',
			url: `${API_DEV_URL}interests/image/addOne`,
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
	async addInterest(idToken, params) {
		const res = await axios({
			method: 'post',
			url: `${API_DEV_URL}interests/addOne`,
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
	async updateInterest(idToken, params) {
		const res = await axios({
			method: 'put',
			url: `${API_DEV_URL}interests/updateOne/${params.id}`,
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
	async getInterest(idToken, lesson_id) {
		const res = await axios({
			method: 'get',
			url: `${API_PROD_URL}interests/fetchOne/${lesson_id}`,
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${idToken}`,
			},
			json: true,
		});
		return res;
	},
	async deleteInterest(idToken, lesson_id) {
        const res = await axios({ 
            method: 'delete',
			url: `${API_PROD_URL}interests/deleteOne/${lesson_id}`,
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