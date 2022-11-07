/// <reference types="cypress" />
import '../commands/login-commands.js'
import '../commands/home-popups-commands.js'
import '../commands/create-schedule-job.js'
import PageInteractions from '../utilities/page-interactions.js';

const dayjs = require('dayjs');
let page = new PageInteractions();


 describe('Login Tests', function() {
   before(function() {
     cy.fixture('login.json').as('login');
     cy.fixture('ongoing-jobs.json').as('ongoing');
   });
 
   describe('Happy scenarios for default login', function() {
     it('Check login with valid credentials', function() {
      
      cy.login(this.login.testData.email, this.login.testData.password);
      cy.dismissHomePopups();
      cy.createScheduleJobAfterOneMinute((jobId)=>{
        cy.wait(1000);
        cy.visit("/scheduled");
        page.assertExistance("jobId-"+jobId+"}");
        cy.wait(65000);
        cy.visit("/active?job"+jobId);
        page.checkText(this.ongoing.ongoingOrderIdLabel, "#"+jobId);
      });

     });
   });
 });

