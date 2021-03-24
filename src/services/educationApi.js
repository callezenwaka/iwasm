'use strict'

import { API_PROD_URL } from '@/services/Api'
import { API_DEV_URL } from '@/services/Api'
import axios from 'axios'

export default {
	async getEducations (idToken) {
		const res = await axios({
			method: 'get',
			url: `${API_DEV_URL}educations/fetchAll`,
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${idToken}`,
			},
			json: true,
		});
		return res;
	},
	async addEducationImage(idToken, params) {
		const res = await axios({
			method: 'post',
			url: `${API_DEV_URL}educations/image/addOne`,
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
	async addEducation(idToken, params) {
		const res = await axios({
			method: 'post',
			url: `${API_DEV_URL}educations/addOne`,
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
	async updateEducation(idToken, params) {
		const res = await axios({
			method: 'put',
			url: `${API_DEV_URL}educations/updateOne/${params.id}`,
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
	async getEducation(idToken, lesson_id) {
		const res = await axios({
			method: 'get',
			url: `${API_PROD_URL}educations/fetchOne/${lesson_id}`,
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${idToken}`,
			},
			json: true,
		});
		return res;
	},
	async deleteEducation(idToken, lesson_id) {
        const res = await axios({ 
            method: 'delete',
			url: `${API_PROD_URL}educations/deleteOne/${lesson_id}`,
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