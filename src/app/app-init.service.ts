import { HttpClient } from '@angular/common/http';

export var initialValue: any;

export function initApp(http: HttpClient) {
    return () => {
        return http.get(`./assets/sample.json`)
            .toPromise()
            .then(
                (resp) => {
                    initialValue = resp;
                }
            );
    };
}