import {idiom, ng, notify} from 'entcore';
import {http, HttpResponse} from 'entcore-toolkit';
import {School} from '../models';

export interface SchoolService {
    list() : Promise<HttpResponse>;
    listNeo() : Promise<HttpResponse>;
    create(schools: School[]) : Promise<HttpResponse>;
    delete(schoolId: number) : Promise<HttpResponse>;
}

export const schoolService: SchoolService = {

    async list() : Promise<HttpResponse> {
        try {
            return http.get('/pmb/schools');
        } catch (err) {
            notify.error(idiom.translate('pmb.error.schoolService.list'));
            throw err;
        }
    },

    async listNeo() : Promise<HttpResponse> {
        try {
            return http.get('/pmb/schools/neo');
        } catch (err) {
            notify.error(idiom.translate('pmb.error.schoolService.list'));
            throw err;
        }
    },

    async create(schools: School[]) : Promise<HttpResponse> {
        try {
            return http.post('/pmb/schools', schools);
        } catch (err) {
            notify.error(idiom.translate('pmb.error.schoolService.create'));
            throw err;
        }
    },

    async delete(schoolId: number) : Promise<HttpResponse> {
        try {
            return await http.delete(`/pmb/schools/${schoolId}`);
        } catch (err) {
            notify.error(idiom.translate('pmb.error.schoolService.delete'));
            throw err;
        }
    }

};

export const SchoolService = ng.service('SchoolService', (): SchoolService => schoolService);