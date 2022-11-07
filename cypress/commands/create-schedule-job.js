const dayjs = require('dayjs');
  
  Cypress.Commands.add('createScheduleJobAfterOneMinute', function(callback) {

    cy.getCookies()
      .should('exist')
      .then((cookies) => {

        // get all browsers cookies and convert them to string
        let cookiesString = cookies
        .map((cookie)=> {
          return cookie.name + "=" + cookie.value;
        }).join(";");

        // create date time string after 1 minute
        let pickupTimeAfterOneMuite = dayjs().add(1,'Minute').format("YYYY-MM-DDTHH:mm:ss.SSSZ");

        cy.request({
          method: 'POST',
          url: '/gql',
          headers: {
            "Host": "dashboard.sandbox.stuart.com",
            "Content-Type": "application/json",
            "Origin": "https://dashboard.sandbox.stuart.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": cookiesString,
            "Connection": "keep-alive",
            "Accept": "*/*", 
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15",
            "Referer": "https://dashboard.sandbox.stuart.com/new",
            "Content-Length": "798",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
          },
          body: {
              operationName: "CreateNewJob",
              variables: {
                job: {
                  source: "dashboard",
                  assignmentCode: "",
                  pickups: [
                    {
                      address: "3 Bd Diderot, 75012 Paris, France",
                      comment: "Floor 3, Apartment 3",
                      contact: {
                        company: "",
                        firstname: "Aya",
                        lastname: "Twfeek",
                        phone: "+34680206693",
                        email: "aya.twfeek32@gmail.com"
                      }
                    }
                  ],
                  dropoffs: [
                    {
                      address: "150 Bd Diderot, 75012 Paris, France",
                      comment: "Floor 3 Apartment 3",
                      contact: {
                        company: "",
                        firstname: "Omar",
                        lastname: "Tarek",
                        phone: "+34626268926",
                        email: "dev.omartarek@gmail.com"
                      },
                      clientReference: "Desk Monitor ",
                      packageDescription: "LCD Screen 22 inch"
                    }
                  ],
                  transportType: "van",
                  pickupAt: pickupTimeAfterOneMuite,
                  quotedPrice: "60"
                }
              },
              query: "mutation CreateNewJob($job: NewJobInput) {\n  createNewJob(job: $job) {\n    id\n    __typename\n  }\n}\n"
          },
        }).then((response)=>{
          callback(response.body.data.createNewJob.id);
        })

     });

  });