import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import CountriesTable from "./countries-table";

const data = [
    {id: '7f3bacff-accc-404f-8788-a2222be66557', countryName: 'Afghanistan', totalConfirmed: 157951, TotalDeaths: 7354, TotalRecovered: 0},
    {id: '6da7549e-89e9-44e4-ab24-3d3873d02d5e', countryName: 'Albania', totalConfirmed: 207709, TotalDeaths: 3194, TotalRecovered: 0},
    {id: '5eb1b411-1d15-4d75-b4f4-9b5718dedc6e', countryName: 'Algeria', totalConfirmed: 216637, TotalDeaths: 6238, TotalRecovered: 0},
    {id: '6620508b-11c6-4df6-9ef0-ac64e9895e4e', countryName: 'Andorra', totalConfirmed: 21730, TotalDeaths: 139, TotalRecovered: 0},
    {id: '37fadc3d-9a96-4133-b03c-ad6d6e9662fb', countryName: 'Angola', totalConfirmed: 71752, TotalDeaths: 1749, TotalRecovered: 0},
    {id: '29eea2b1-a284-46d4-a091-6a5a43ea9db1', countryName: 'Antigua and Barbuda', totalConfirmed: 4236, TotalDeaths: 118, TotalRecovered: 0},
    {id: 'a9472c0b-c354-4e9c-9936-cce38cf59597', countryName: 'Argentina', totalConfirmed: 5460042, TotalDeaths: 117035, TotalRecovered: 0},
    {id: 'b26b7bfa-9c10-4621-a6b3-a77e481a9049', countryName: 'Armenia', totalConfirmed: 344481, TotalDeaths: 7943, TotalRecovered: 0},
    {id: '01103ae9-8627-42f5-beb1-b09b3d53daed', countryName: 'Australia', totalConfirmed: 300594, TotalDeaths: 2190, TotalRecovered: 0},
    {id: '7c29d92a-b93b-4ca2-8062-9797f3f65100', countryName: 'Austria', totalConfirmed: 1264553, TotalDeaths: 13634, TotalRecovered: 0},
    {id: 'ce2573b9-eac6-4806-afc0-afb17d881477', countryName: 'Azerbaijan', totalConfirmed: 614630, TotalDeaths: 8297, TotalRecovered: 0},
    {id: '83b3fc38-6f74-4e1a-b8b5-e5a76bc529c3', countryName: 'Bahamas', totalConfirmed: 23539, TotalDeaths: 713, TotalRecovered: 0},
    {id: 'af530ecf-4adf-47dd-b9ce-58dd8b1610c3', countryName: 'Bahrain', totalConfirmed: 279805, TotalDeaths: 1394, TotalRecovered: 0},
    {id: '503641b9-a30e-4e6b-af31-f14db9ed1e72', countryName: 'Bangladesh', totalConfirmed: 1583253, TotalDeaths: 28060, TotalRecovered: 0},
    {id: '06a3d145-c77e-4d6a-8396-1d4d3e9d3b9f', countryName: 'Barbados', totalConfirmed: 27673, TotalDeaths: 260, TotalRecovered: 0},
    {id: '083432a8-8984-4f16-a397-1093438a2b39', countryName: 'Belarus', totalConfirmed: 693584, TotalDeaths: 54, TotalRecovered: 0}
];

const sortedByNameData = [
    {id: '083432a8-8984-4f16-a397-1093438a2b39', countryName: 'Belarus', totalConfirmed: 693584, TotalDeaths: 54, TotalRecovered: 0},
    {id: '06a3d145-c77e-4d6a-8396-1d4d3e9d3b9f', countryName: 'Barbados', totalConfirmed: 27673, TotalDeaths: 260, TotalRecovered: 0},
    {id: '503641b9-a30e-4e6b-af31-f14db9ed1e72', countryName: 'Bangladesh', totalConfirmed: 1583253, TotalDeaths: 28060, TotalRecovered: 0},
    {id: 'af530ecf-4adf-47dd-b9ce-58dd8b1610c3', countryName: 'Bahrain', totalConfirmed: 279805, TotalDeaths: 1394, TotalRecovered: 0},
    {id: '83b3fc38-6f74-4e1a-b8b5-e5a76bc529c3', countryName: 'Bahamas', totalConfirmed: 23539, TotalDeaths: 713, TotalRecovered: 0},
    {id: 'ce2573b9-eac6-4806-afc0-afb17d881477', countryName: 'Azerbaijan', totalConfirmed: 614630, TotalDeaths: 8297, TotalRecovered: 0},
    {id: '7c29d92a-b93b-4ca2-8062-9797f3f65100', countryName: 'Austria', totalConfirmed: 1264553, TotalDeaths: 13634, TotalRecovered: 0},
    {id: '01103ae9-8627-42f5-beb1-b09b3d53daed', countryName: 'Australia', totalConfirmed: 300594, TotalDeaths: 2190, TotalRecovered: 0},
    {id: 'b26b7bfa-9c10-4621-a6b3-a77e481a9049', countryName: 'Armenia', totalConfirmed: 344481, TotalDeaths: 7943, TotalRecovered: 0},
    {id: 'a9472c0b-c354-4e9c-9936-cce38cf59597', countryName: 'Argentina', totalConfirmed: 5460042, TotalDeaths: 117035, TotalRecovered: 0},
    {id: '29eea2b1-a284-46d4-a091-6a5a43ea9db1', countryName: 'Antigua and Barbuda', totalConfirmed: 4236, TotalDeaths: 118, TotalRecovered: 0},
    {id: '37fadc3d-9a96-4133-b03c-ad6d6e9662fb', countryName: 'Angola', totalConfirmed: 71752, TotalDeaths: 1749, TotalRecovered: 0},
    {id: '6620508b-11c6-4df6-9ef0-ac64e9895e4e', countryName: 'Andorra', totalConfirmed: 21730, TotalDeaths: 139, TotalRecovered: 0},
    {id: '5eb1b411-1d15-4d75-b4f4-9b5718dedc6e', countryName: 'Algeria', totalConfirmed: 216637, TotalDeaths: 6238, TotalRecovered: 0},
    {id: '6da7549e-89e9-44e4-ab24-3d3873d02d5e', countryName: 'Albania', totalConfirmed: 207709, TotalDeaths: 3194, TotalRecovered: 0},
    {id: '7f3bacff-accc-404f-8788-a2222be66557', countryName: 'Afghanistan', totalConfirmed: 157951, TotalDeaths: 7354, TotalRecovered: 0}
];

const sortedByTotalConfirmed = [
    {id: 'a9472c0b-c354-4e9c-9936-cce38cf59597', countryName: 'Argentina', totalConfirmed: 5460042, TotalDeaths: 117035, TotalRecovered: 0},
    {id: '503641b9-a30e-4e6b-af31-f14db9ed1e72', countryName: 'Bangladesh', totalConfirmed: 1583253, TotalDeaths: 28060, TotalRecovered: 0},
    {id: '7c29d92a-b93b-4ca2-8062-9797f3f65100', countryName: 'Austria', totalConfirmed: 1264553, TotalDeaths: 13634, TotalRecovered: 0},
    {id: '083432a8-8984-4f16-a397-1093438a2b39', countryName: 'Belarus', totalConfirmed: 693584, TotalDeaths: 54, TotalRecovered: 0},
    {id: 'ce2573b9-eac6-4806-afc0-afb17d881477', countryName: 'Azerbaijan', totalConfirmed: 614630, TotalDeaths: 8297, TotalRecovered: 0},
    {id: 'b26b7bfa-9c10-4621-a6b3-a77e481a9049', countryName: 'Armenia', totalConfirmed: 344481, TotalDeaths: 7943, TotalRecovered: 0},
    {id: '01103ae9-8627-42f5-beb1-b09b3d53daed', countryName: 'Australia', totalConfirmed: 300594, TotalDeaths: 2190, TotalRecovered: 0},
    {id: 'af530ecf-4adf-47dd-b9ce-58dd8b1610c3', countryName: 'Bahrain', totalConfirmed: 279805, TotalDeaths: 1394, TotalRecovered: 0},
    {id: '5eb1b411-1d15-4d75-b4f4-9b5718dedc6e', countryName: 'Algeria', totalConfirmed: 216637, TotalDeaths: 6238, TotalRecovered: 0},
    {id: '6da7549e-89e9-44e4-ab24-3d3873d02d5e', countryName: 'Albania', totalConfirmed: 207709, TotalDeaths: 3194, TotalRecovered: 0},
    {id: '7f3bacff-accc-404f-8788-a2222be66557', countryName: 'Afghanistan', totalConfirmed: 157951, TotalDeaths: 7354, TotalRecovered: 0},
    {id: '37fadc3d-9a96-4133-b03c-ad6d6e9662fb', countryName: 'Angola', totalConfirmed: 71752, TotalDeaths: 1749, TotalRecovered: 0},
    {id: '06a3d145-c77e-4d6a-8396-1d4d3e9d3b9f', countryName: 'Barbados', totalConfirmed: 27673, TotalDeaths: 260, TotalRecovered: 0},
    {id: '83b3fc38-6f74-4e1a-b8b5-e5a76bc529c3', countryName: 'Bahamas', totalConfirmed: 23539, TotalDeaths: 713, TotalRecovered: 0},
    {id: '6620508b-11c6-4df6-9ef0-ac64e9895e4e', countryName: 'Andorra', totalConfirmed: 21730, TotalDeaths: 139, TotalRecovered: 0},
    {id: '29eea2b1-a284-46d4-a091-6a5a43ea9db1', countryName: 'Antigua and Barbuda', totalConfirmed: 4236, TotalDeaths: 118, TotalRecovered: 0}
];

describe("<CountriesTable />", () => {
    const {queryByText} = screen;
    const {click}= fireEvent;

    it("sort our list by Country", () => {
        let currentFiltered = data;
        render(<CountriesTable 
            filtered = {currentFiltered} 
            setFiltered={(sortedData) => { currentFiltered = sortedData; }} />);

        click(queryByText(/Country/i));
        
        expect(currentFiltered).toStrictEqual(sortedByNameData);
    });

    it ("sort our list twice by Country, list becomes the same", () => {
        let currentFiltered = data;
        render(<CountriesTable 
            filtered = {currentFiltered} 
            setFiltered={(sortedData) => { currentFiltered = sortedData; }} />);

        click(queryByText(/Country/i));
        click(queryByText(/Country/i));
        
        expect(currentFiltered).toStrictEqual(data);
    });
    
    it("sort our list by Total Confirmed", () => {
        let currentFiltered = data;
        render(<CountriesTable 
            filtered = {currentFiltered} 
            setFiltered={(sortedData) => { currentFiltered = sortedData; }} />);

        click(queryByText(/Total Confirmed/i));
        
        expect(currentFiltered).toStrictEqual(sortedByTotalConfirmed);
    });
});