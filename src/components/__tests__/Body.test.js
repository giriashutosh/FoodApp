import {render} from "@testing-library/react"
import Body from "../Body/Body"
import { RESTAURANT_DATA } from "../../mocks/restaurantData"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_DATA)
        }
    })
})

test("Should render test", () => {
    const body = render(<Body/>)
})