import { render } from "@testing-library/react"
import Cart from "../../pages/Cart"
import store from "../../store/store"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom/server";
import "@testing-library/jest-dom";

test("should render cart", async () => {
    const menu = render(
        <StaticRouter>

            <Provider store={store}>
                <Cart />
            </Provider>
        </StaticRouter>

    )
    const completeCart = menu.getByTestId("complete-cart")
    console.log(completeCart)
    expect(completeCart).toBeInTheDocument()
})