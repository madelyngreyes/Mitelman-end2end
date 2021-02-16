describe('recurrent chromosome  numerical abberations test', () => {
	before(function() {
		cy.visit('https://mitelmandatabase.isb-cgc.org/ref_search')
		cy.url().should('include','ref_search')
        cy.get('.search-header').contains('Reference Searcher')
	})

    it('should open the about button', () => {
        cy.get('.btn-sm').click()
        cy.get('.card > :nth-child(1) > strong').contains('Reference Searcher')
    });

    it('should test reference filters', () => {
        cy.get('#indCheck').click()
        cy.get('#inputAuth').type('john')
        cy.get('#inputJournal').type('nature')
        cy.get('#inputYear').type('2000')
        cy.get('#inputRefNo').type('1')
    });

    it('should reset filter options', () => {
        cy.get('.col-sm-9 > .btn-outline-secondary').click()
    });

    it('should test refence filters', () => {
        cy.get('#indCheck').click()
        cy.get('#inputAuth').type('fuente')
        cy.get('#inputJournal').type('medicine')
        cy.get('#inputYear').type('2019')
        cy.get('#inputRefNo').type('15802')
    });
    it('should open the journal list', () => {
        cy.get('.col-sm-4 > a > .fas')
        cy.get(':nth-child(6) > td')        
    });

    it('should select search filter panel', () => {
        cy.get('.btn-outline-primary').click()
    });

    it('should load results page', () => {
        cy.get('.col-md-12 > .btn').should('be.visible')
        cy.get('.custom-select').should('be.visible')
        cy.get('#DataTables_Table_0_filter > label > .form-control').should('be.visible').type('Bu')
        cy.get('.dt-buttons > .btn').should('be.visible')
        cy.get('.sorting_1 > a').click()
    });

    it('verifcation of successfull search', () => {
        cy.get(':nth-child(2) > .col-sm-10').should('be.visible').contains('15802')
        cy.get(':nth-child(5) > .col-sm-10 > a').should('be.visible').contains('Medicine')
        
    });

})
