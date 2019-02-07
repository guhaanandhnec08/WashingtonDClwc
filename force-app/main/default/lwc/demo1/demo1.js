import {
    LightningElement,
    track
} from 'lwc';

import trailheadLogo from '@salesforce/resourceUrl/trailhead_logo';
import trailheadCharacters from '@salesforce/resourceUrl/trailhead_characters';

export default class HelloWorld extends LightningElement {

    //Decorator Declarations
    @track renderEventStr = false;
    @track firstName = '';
    @track lastName = '';
    @track eventName = '';

    // Expose the static resource URL for use in the template
    trailheadLogoUrl = trailheadLogo;
    // Expose URL of assets included inside an archive file
    einsteinUrl = trailheadCharacters + '/images/einstein.png';

    //Function 
    changeHandler(event) {
        const field = event.target.name;

        if (field === 'firstName') {
            this.firstName = (event.target.value).trim().toUpperCase();
        } else if (field === 'lastName') {
            this.lastName = (event.target.value).trim().toUpperCase();
        } else if (field === 'eventName') {
            this.eventName = event.target.value;
            if (event.target.value !== '' && event.target.value != null && event.target.value != undefined) {
                this.renderEventStr = true;
            }
        }
    }
}