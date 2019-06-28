describe('Main Test', () => {
  it('Should be true', () => {


    const toolToTest = 7

    cy.visit('http://localhost:4200/')
    cy.get('.atool').each(($el, toolIndex, $list) => {



      let fixtureName = String($el.attr('toolname')).replace("Service", "").toLowerCase()

      cy.fixture("../../src/assets/tools.json").then((tools) => {

        cy.fixture(fixtureName).then((fixture) => {

          cy.wrap($el).click()

          let selectValues = tools[toolIndex].select

          selectValues.forEach((select, subToolIndex) => {

            if (fixture[tools[toolIndex].functions[subToolIndex]] && toolToTest == toolIndex) {

              let cases = fixture[tools[toolIndex].functions[subToolIndex]]

              console.log(tools[toolIndex].select[subToolIndex], 'has', cases.length, 'cases')

              cases.forEach((_case, caseIndex) => {

                cy.get('#input').clear().get('#output').clear()

                cy.get('select').select(select).get('#input').focus().type(_case.input)
                  .get("#process").click()
                  .wait(100)


                cy.get('#output').should('have.value', _case.output)



              })

            } else {

              console.error(tools[toolIndex].select[subToolIndex], 'has no cases')

            }

          })

          cy.get('#closeModal').click()

        })

      })



    })
  })
}) 