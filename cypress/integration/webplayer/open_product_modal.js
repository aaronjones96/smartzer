describe('Open Product Moda;', () => {
    it('Open video player and click play button', () => {
        cy.visit('https://player.smartzer.com/v/5695094313189376')
        cy.get('#playPause').click()
    })
    it('Open/Close side panel', () => {
        cy.get('.drawerButtonIcon').click()
        cy.get('ul.flex').should('be.visible')
        cy.get('.drawerButtonIcon').click()
    })
    it('Click product and check modal is opened', () => {
        cy.get(':nth-child(1) > .bbtn > .drawerItem').click()
        cy.get('#container > div > div.flex._1C67iIFBCgVzrnVTEByxa > div._2RCtSgX_lepGRXfGysnGEU > div.overlayContainer.open.false > div.styles_transformationLeft__2T87v.drawerPadding > div').should('be.visible')
    })
    it('Close modal and check no longer visible', () => {
        cy.get('.desktopCloseButtonContainer').click()
        cy.get('#container > div > div.flex._1C67iIFBCgVzrnVTEByxa > div._2RCtSgX_lepGRXfGysnGEU > div.overlayContainer.open.false > div.styles_transformationLeft__2T87v.drawerPadding > div').should('not.be.visible')
    })
  })