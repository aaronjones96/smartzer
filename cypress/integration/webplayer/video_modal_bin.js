describe('Open Product Modal and test BIN', () => {
    it('Open video player and click play button', () => {
        cy.visit('https://player.smartzer.com/v/5695094313189376')
        cy.get('#playPause').click()
    })
    it('Click on the video and open the buy it now modal', () => {
        cy.get('button:nth-child(2)').click()
        cy.get('#container > div > div.flex._1C67iIFBCgVzrnVTEByxa > div._2RCtSgX_lepGRXfGysnGEU > div.overlayContainer.open.false > div.styles_transformationLeft__2T87v.drawerPadding > div').should('be.visible')
    })
    it('Click buy it now button and check new page is opened', () => {
        cy.get('.bnw > ._3QMhza8PKdFtu7KIgHnyL3 > div').click()
        cy.get('.kgjNPIQg7SnS4tgHWSLQr.wZsGHE5yNWmrplvlE2TzW.overlayPopup > div > div > div:nth-child(2) > div > div:nth-child(4) > a').should('have.attr', 'target', '_blank')
    })
    
})