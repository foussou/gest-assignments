import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomMenuItem } from '../models/menu-item.model';

@Injectable({
    providedIn: 'root',
})
/**
 * menu data service
 */
export class MenuDataService {

    public toggleMenuBar: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    getMenuList(): CustomMenuItem[] {
        return [
            {
                Label: 'Accueil', Icon: 'fa-home', RouterLink: '/main/dashboard', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Etudiants', Icon: 'fa-users', RouterLink: '/main/etudiants', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Assignments', Icon: 'fa-sitemap', RouterLink: '/main/assignments', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Ajout assignments', Icon: 'fa-sitemap', RouterLink: '/main/assignments/assignments-add', Childs: null, IsChildVisible: false
            },
            {
                Label: 'A propos de nous', Icon: 'fa-info-circle', RouterLink: '/main/apropos', Childs: null, IsChildVisible: false
            }
        ];
    }
}
