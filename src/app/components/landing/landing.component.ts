import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    productFeatures = [
        {
            description: 'Queue notifications with REST',
            short_desc: 'Use notify\'s REST endpoint. All your messages are queued and processed timely',
            icon: 'add_to_queue'
        },
        {
            description: 'Manage configurations by applications',
            short_desc: 'Register each application in notify and configure the app related settings in one place',
            icon: 'settings_applications'
        },
        {
            description: 'Analytics of each application',
            short_desc: 'View count of push notifications for each application in nicely formatted charts',
            icon: 'insert_chart'
        },
        {
            description: 'Real-time logging console',
            short_desc: 'Debug the errors and get full overview with real time log messages',
            icon: 'live_help'
        }
    ]
}
