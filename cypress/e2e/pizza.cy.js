describe("Check Pizza Form App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza")
    })

    it("sanity check to make sure tests work", () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({}); // ==
    })

    //Helpers (ie Getters)
    const userNameInput = () => cy.get("input[name=username]");
    const sizeChoose = () => cy.get("select");
    const sauceChoose = () => cy.get('[type="radio"]');
    const toppingChoose = () => cy.get('[type="checkbox"]');
    const glutenChoose = () => cy.get('[type="checkbox"]');
    const specialInput = () => cy.get("input[name=special");
    const orderBtn = () => cy.get('button[id="order-button"]')

    it("the proper elements are showing.", () => {
        userNameInput().should("exist");
        sizeChoose().should("exist");
        sauceChoose().should("exist");
        toppingChoose().should("exist");
        glutenChoose().should("exist");
        specialInput().should("exist");
        orderBtn().should("exist");
    })

    it("can type in the inputs", () => {
        userNameInput()
            .should("have.value", "")
            .type("BJ Composer Kim")
            .should("have.value", "BJ Composer Kim")

        specialInput()
            .should("have.value", "")
            .type("Please bring me a awesome Pizza")
            .should("have.value", "Please bring me a awesome Pizza")
    })

    it("can select size", () => {
        sizeChoose()
            .select("small")
            .should("have.value", "small")
            .select("medieum")
            .should("have.value", "medieum")
            .select("large")
            .should("have.value", "large")
    })

    it("can select multiple toppings", () => {
        toppingChoose()
            .check()
            .should("be.checked")
    })

    it("can submit the form", () => {
        userNameInput().type("Manhattan")
        sizeChoose().select("large")
        sauceChoose()
            .first()
            .check()
            .should("have.value", "Original Red")
        toppingChoose()
            .check()
            .should("be.checked")
        orderBtn()
            .click()
    })
})

