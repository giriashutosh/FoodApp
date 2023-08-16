import Footer from "../Footer/Footer"

test("Footer Should load when page is loaded", () => {
    const footerComponent = render(<Footer />)
    const footer = footerComponent.getByTestId("footer")
    expect(footer).toBeInTheDocument();
})