describe('cases cytogenetics test', () => {
	before(function() {
		cy.visit('https://mitelmandatabase.isb-cgc.org/case_search')
		cy.url().should('include','case_search')
	})

    it('should open the about button', () => {
        //todo
    });

    it('should select the advanced search option', () => {
        //todo
    });

    it('should test the ten regular search features', () => {
        //todo
    });

    it('should reset filter options', () => {
        //todo
    });

    it('should test the ten regular search features', () => {
        //todo
    });

    it('should test cytogentic characteristics filters', () => {
        //todo
    });

    it('should test patient characteristics', () => {
        //todo
    });

    it('should test present tumor characteristics', () => {
        //todo
    });

    it('should test previous tumor characteristics', () => {
        //todo
    });

    it('should test the references filter options', () => {
        //todo
    });

    it('should search filter panel', () => {
        //todo
    });

    it('should load results page', () => {
        //todo
    });

})
