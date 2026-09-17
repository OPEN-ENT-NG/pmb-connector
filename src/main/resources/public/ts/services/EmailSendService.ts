import {idiom, ng, notify} from 'entcore';
import {http, HttpResponse} from 'entcore-toolkit';
import {School} from '../models';

export interface EmailSendService {
    send(schools: School[]) : Promise<HttpResponse>;
}

export const emailSendService: EmailSendService = {

    async send(schools: School[]) : Promise<HttpResponse> {
        try {
            return http.post('/pmb/email/send', schools);
        } catch (err) {
            notify.error(idiom.translate('pmb.error.emailSendService.send'));
            throw err;
        }
    }

};

export const EmailSendService = ng.service('EmailSendService', (): EmailSendService => emailSendService);