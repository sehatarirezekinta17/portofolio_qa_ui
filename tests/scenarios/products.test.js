
import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import { CONTACTUS } from "@tests/const/routes";
import * as loginPage from "@tests/pages/login.page";
import * as contactusPage from "@tests/pages/contactus.page";
import * as productPage from "@tests/pages/products.page";
import * as login from "@tests/data/login.data";
import * as assert from "@helpers/asserts";
import { VALID_LOGIN } from "@tests/data/login.data";
import { INVALID_LOGIN } from "../data/login.data";
import { PRODUCTS } from "../const/routes";

describe("Products Test", function () {
  beforeEach(() => {
    route.visit(PRODUCTS.product);
  });

  it("Successfull search product", () => {
    element.clearAndFillField(productPage.searchBar, "blue top");
    element.click(productPage.searchIcon)

    assert.containText("Blue Top ");
  });

})
