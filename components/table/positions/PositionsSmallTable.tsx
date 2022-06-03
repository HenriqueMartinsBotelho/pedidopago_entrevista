import { useState } from "react";

const PositionsSmallTable = ({ rows }) => {
  const [selected, setSelected] = useState(null);
  const [qtnPositions, setQtnPositions] = useState(6);

  const toogle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div>
      <div className="psc_wrapper">
        <div className="psc_accordion">
          {rows.slice(0, qtnPositions).map((item, i) => (
            <div key={item.id} className="psc_item" onClick={() => toogle(i)}>
              <div className="psc_title">
                <div className="psc_main">
                  <div className="psc_name_title">Cargo</div>
                  <div className="psc_depsc">
                    <div className="psc_name">{item.name}</div>
                  </div>
                </div>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? "psc_show" : "psc_content"}>
                <div className="psc_cards">
                  <div className="psc_card">
                    <div>Cargo</div>
                    <div>{item?.name}</div>
                  </div>
                  <div className="psc_card">
                    <div>Departamento</div>
                    <div>{item?.departament}</div>
                  </div>
                  <div className="psc_card">
                    <div>Colaborador</div>
                    <div>{item?.agents_quantity}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={() => {
              setQtnPositions((range) => range + 5);
            }}
            className="psc_btn"
          >
            Carregar Mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default PositionsSmallTable;
