describe('recurrent chromosome  numerical abberations test', () => {
	before(function() {
		cy.visit('https://mitelmandatabase.isb-cgc.org/recab_search')
		cy.url().should('include','recab_search')
        cy.get('.search-header').should('be.visible')
	})

    it('should open the about button', () => {
        //todo
    });

    it('should test numeric abberations filters', () => {
        cy.get('#aberCheckboxNum').click()
        cy.get('#inputBreak').should('be.hidden')
        cy.get('#inputTopo_chosen > .chosen-single').click()
            .type('ac {del} {del}').wait(10000)
    });

    it('should reset filter options', () => {
        //todo
    });

    it('should test numeric abberations filters', () => {
        //todo
    });

    it('should test tumor characteristics', () => {
        //todo
    });


    it('should select search filter panel', () => {
        //todo
    });

    it('should load results page', () => {
        //todo
    });

})
