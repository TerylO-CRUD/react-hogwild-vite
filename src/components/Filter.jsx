function Filter({ greasedOnly, onGreasedChange, sortBy, onSortChange }) {
    return (
        <div className="filterWrapper ui form">
            <div className="inline fields">
                <div className="field">
                 <input id="greased-filter" type="checkbox" checked={greasedOnly}
                onChange={(e) => onGreasedChange(e.target.checked)} />
                <label htmlFor="greased-filter">Greased Pigs Only?</label>
            </div>
            <div className="field">
                <label htmlFor="sort-by">Sort by:</label>
                <select id="sort-by" value={sortBy}
                  onChange={(e) => onSortChange(e.target.value)}>
                  <option value="">None</option>
                  <option value="name">Name</option>
                  <option value="weight">Weight</option>
                </select>

            </div>
        </div>
        </div>
    );
}

export default Filter;