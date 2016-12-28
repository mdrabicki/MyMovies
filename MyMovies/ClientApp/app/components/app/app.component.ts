import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')]
    // styles: [require('../../../../node_modules/material-components-web/material-components-web.scss')],
    // encapsulation: ViewEncapsulation.None,

})
export class AppComponent {
}
