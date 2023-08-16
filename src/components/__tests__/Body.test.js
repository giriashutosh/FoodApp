import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Body from "../Body/Body"
import { RESTAURANT_DATA } from "../../mocks/restaurantData"
import store from '../../store/store'
import { Provider } from 'react-redux'
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_DATA)
        }
    })
})

test("Should render Body",  async () => {
    const body = render(
        <Provider store={store}>
            <Body />
        </Provider>
    )
    //await waitFor(() => body.getByText("Search"));
    console.log("Hyy")
    const input = body.getByTestId("search-input");
    fireEvent.change(input, {
        target: {
            value: "pizza"
        }
    })
    const resList = body.getByTestId("restaurant-list")
    expect(resList.children.length).toBe(2)
})