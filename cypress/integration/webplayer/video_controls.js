Cypress.Commands.add('playVideo', { prevSubject: 'element' }, playVideo)
describe('Check video controls function', () => {
    it('Open video player and click play button', () => {
        cy.visit('https://player.smartzer.com/v/5695094313189376')
        cy.get('#playPause').click()
    })
    if (video.paused) {
        cy.wait(100)
        cy.get('div.playbarButtonWrapper.styles_buttonWrapperBaseStyling__3TyK_.styles_order1__3I4-m', options).click()
    }
})
