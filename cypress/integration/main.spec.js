describe('Main Test', function () {
  it('Visits DevTools', function () {
    cy.visit('http://localhost:4200/')
    cy.get('.atool').each(($el, index, $list) => {

      let fixtureName = String($el.attr('toolname')).replace("Service", "").toLowerCase()

      cy.fixture("../../src/assets/tools.json").then((tools) => {

        cy.fixture(fixtureName).then((fixture) => {

          cy.wrap($el).click().wait(100)

          let selectValues = tools[index].select

          selectValues.forEach((select, i) => {

            cy.get('select').select(select).wait(100).get('#input').focus().type('123')
              .get("#process").click()
              .wait(100)

          })

          cy.get('#closeModal').click()

        })

      })

    })
  })
}) 