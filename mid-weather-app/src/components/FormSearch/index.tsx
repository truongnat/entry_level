export default function FormSearch() {
  return (
    <section className="inputSection">
      <div className="searchBar">
        <input className="inputField" id="userInputField" type="text" />
        <button className="unitsBtn metric clickable" id="unitsBtn">
          °C
        </button>
        <button
          className="inputBtn metric clickable"
          id="userInputBtn"
          type="button"
        >
          Go
        </button>
      </div>
      <ul id="suggestions" className="hidden suggestions"></ul>
    </section>
  );
}
