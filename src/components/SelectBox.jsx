import { useEffect, useRef, useState } from "react";

function SelectBox() {
  const [data, setData] = useState({});
  const [selectedValue, setSelectedValue] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  const closeStyle = {
    padding: 0,
    height: 0,
    overflow: "hidden",
  };
  const ref = useRef();
  const itemRef = useRef();

  const handleChange = () => {
    const url = new URL(`http://localhost:8000/?search=${ref.current.value}`);
    url.searchParams.set("search", `${ref.current.value}`);
    //url doroste
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        // console.log(data);
        setData(data);
      });
      setIsSelected(false)
      setSelectedValue("");
  };

  return (
    <div className="c-box">
      <input
        ref={ref}
        onChange={handleChange}
        value={selectedValue}
        className="tpc"
        placeholder="topic"
        type="text"
      />
      <div className="c-selectbox">
        {isSelected ? (
          <div style={closeStyle}>topic</div>
        ) : (
          <div className="item">
            {data.data
              ? data.data.matchedTechs.map((item) => {
                  return (
                    <ul>
                      <div
                        onClick={() => {
                          setSelectedValue(item.name);
                          setIsSelected(true);
                        }}
                      >
                        <label ref={itemRef} htmlFor={item.id}>
                          {item.name}
                        </label>
                        <input type="radio" name={item.name} id={item.id} />
                      </div>
                    </ul>
                  );
                })
              : " "}
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectBox;
