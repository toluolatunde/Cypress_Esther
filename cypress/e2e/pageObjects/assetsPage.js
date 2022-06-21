class Assets {
  getSpace(spacename) {
    cy.get(".sidebar__linklist-inner--with-star > .sidebar__link")
      .should("contain", spacename)
      .click();
    cy.wait(5000);
  }
  getAsset() {
    cy.get('[href="#!/me/spaces/162399/assets"]')
      .should("contain", "Assets")
      .click();
  }
  assertPage() {
    cy.get(".list__message_e").should("contain", "No assets found");
  }
  uploadAssetbtn() {
    cy.get(".modal__footer > .uk-button-primary").contains("Confirm").click();
  }
  getAssetPage(spacename) {
    this.getSpace(spacename);
    this.getAsset();
  }
  replaceBtn() {
    cy.get(".popover__inner > .uk-form-file > .upload-select").click();
  }
  selectRow1() {
    cy.get(":nth-child(1) > .list__flex > .list__select > input").click();
  }

  deleteAssets() {
    cy.get(".list__checkall form__cb").click();
    cy.get(".popover__inner > :nth-child(2)").click();
  }
  createFolder() {
    cy.get(".util__grow > .uk-width-1-1").type("Esther");
    cy.get(".uk-position-relative > .uk-button").click();
  }

  getUploadButton() {
    return cy.xpath(
      "//body/div[@id='root']/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[1]/span[1]",
      { timeout: 20000 }
    );
  }
  getreplacebtn() {
    cy.get("index__content", { timeout: 25000 }).should('include', 'IMG_8119.HEIC');
  }
}

export default Assets;
