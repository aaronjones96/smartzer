
describe('Check video controls function', () => {

    it('Open video player and click play button', () => {
        cy.visit('https://player.smartzer.com/v/5695094313189376')
        cy.get('#playPause').click()
    })

    it('click play/pause button', () => {
        cy.get('div.playbarButtonWrapper.styles_buttonWrapperBaseStyling__3TyK_.styles_order1__3I4-m > button').should('have.attr', 'aria-label').get('div.playbarButtonWrapper.styles_buttonWrapperBaseStyling__3TyK_.styles_order1__3I4-m > button').click()
    })
    it('Hover over the volume button and check slider becomes visible', () => {
        cy.get('div.playbarButtonWrapper.styles_buttonWrapperBaseStyling__3TyK_.styles_order2__2cKPC > div > button').trigger('mouseover')
        cy.get('.slider').should('be.visible')
    })
})
