/// <reference types="cypress" />
import '../commands/login-commands.js'
import '../commands/home-popups-commands.js'
import '../commands/create-schedule-job.js'
import PageInteractions from '../utilities/page-interactions.js';

const dayjs = require('dayjs');
let page = new PageInteractions();


 describe('Create Schedule Job', function() {
   before(function() {
     cy.fixture('login.json').as('login');
     cy.fixture('ongoing-jobs.json').as('ongoing');
   });
 
   describe('When the job should start after 1.5 minute', function() {
     it('The job should created in schedule section then move to ongoing', function() {
      cy.viewport("macbook-16");
      cy.login(this.login.testData.email, this.login.testData.password);
      cy.dismissHomePopups();
      cy.createScheduleJobAfterOneMinute((jobId)=>{
        cy.wait(1000);
        cy.visit("/scheduled");
        page.assertExistance("span#jobId-"+jobId+"\\}");
        cy.wait(60000);
        cy.visit("/active?job"+jobId);
        page.checkText(this.ongoing.ongoingOrderIdLabel, "#"+jobId);
      });

     });
   });
 });

