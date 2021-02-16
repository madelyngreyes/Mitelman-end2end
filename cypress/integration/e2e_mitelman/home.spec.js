describe('recurrent chromosome  numerical abberations test', () => {
	before(function() {
		cy.visit('https://mitelmandatabase.isb-cgc.org/ref_search')
		cy.url().should('include','ref_search')
        cy.get('.search-header').contains('Reference Searcher')
	})

    it('should verify title', () => {
        
    });

    it('should verify all links are working', () => {

    });

})
