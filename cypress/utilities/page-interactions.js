
 class PageInteractions {
    /**
     * This is the method to get page field element so that you can do actions on it
     * @return {element} page field element
     */
    getElement(selector, timeout) {
      return cy.get(selector, {timeout: timeout});
    }
  
    /**
     * This is the method to click elem
     */
    clickButton(selector, timeout) {
      this.getElement(selector, timeout).click({force: true});
    }
  
    /**
     * This is the method to get check if elem contains certain txt
     */
    checkText(selector, text) {
      return this.getElement(selector).should('have.text', text);
    }
  
    /**
     * This is the method to write txt
     */
    writeText(selector, text) {
      this.getElement(selector).type(text, {force: true});
    }
  
    /**
     * This is the method to check that certain text displayed
     */
    assertText(text) {
      cy.contains(text).should('be.visible');
    }
  
    assertExistance(selector) {
      cy.get(selector).should("exist")
    }
  
    assertNotExistance(selector) {
    cy.get(selector).should("not.exist")
    }
    
    clearText(selector) {
      this.getElem(selector).clear();
    }

  }
  
  export default PageInteractions;
  