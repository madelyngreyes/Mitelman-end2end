describe('clinical associations cytogenetics test', () => {
	before(function() {
		cy.visit('https://mitelmandatabase.isb-cgc.org/clinical_search')
		cy.url().should('include','clinical_search')
	})

    it('should open the about button', () => {
        //todo
    });

    it('should test cytogentic characteristics filters', () => {
        //todo
    });

    it('should reset filter options', () => {
        //todo
    });

    it('should test gene characteristics', () => {
        //todo
    });

    it('should test tumor characteristics', () => {
        //todo
    });

    it('should test references characteristics', () => {
        //todo
    });

    it('should search filter panel', () => {
        //todo
    });

    it('should load results page', () => {
        //todo
    });

})
