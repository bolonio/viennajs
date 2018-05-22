import React from "react";

export default function Address(props: Props) {
    return (
        <div className="whml-address border margin">
            <input className="street"
                placeholder="Straße"
                data-ng-model="street"
                data-ng-change="handleStreetChanged(street)" />

            <span className="horizontal-separator"></span>

            <select data-ng-options="country.name for country in countries track by country.id"
                    data-ng-model="selectedCountry"
                    data-ng-change="handleCountrySelectionChanged(selectedCountry)"
                    className="country"
                    defaultValue="-141">
                    <option value="-137">Deutschland</option>
                    <option value="-141">Österreich</option>
            </select>

            <span className="horizontal-separator"></span>

            <div className="plz-container">
                <input className="plz"
                    type="number"
                    placeholder="PLZ *"
                    data-ng-model="postCode"
                    data-ng-change="handlePostCodeChanged(postCode)"
                    data-whml-valid
                    required />
                <span className="vertical-separator"></span>

                <input
                    className="city"
                    data-ng-model="cityInput.customCity"
                    data-ng-change="setCustomLocation()"
                    placeholder="Bitte Ort manuell eintragen *"
                    data-whml-valid
                    required />
            </div>
        </div>
    );
}