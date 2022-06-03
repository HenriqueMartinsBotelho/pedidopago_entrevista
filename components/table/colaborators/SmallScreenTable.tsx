import { useState } from "react";

export const SmallScreenTable = ({ rows }) => {
  const [selected, setSelected] = useState(null);
  const [qtnColaborators, setQtnColaborators] = useState(6);

  const toogle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div>
      <div className="sc_wrapper">
        <div className="sc_accordion">
          {rows.slice(0, qtnColaborators).map((item, i) => (
            <div key={item.id} className="sc_item" onClick={() => toogle(i)}>
              <div className="sc_title">
                <div className="sc_main">
                  <div className="sc_name_title">Nome Completo</div>
                  <div className="sc_desc">
                    <div className="sc_image">
                      <img
                        style={{ borderRadius: "50%" }}
                        src="https://picsum.photos/30/30"
                      />
                    </div>
                    <div className="sc_name">{item.name}</div>
                  </div>
                </div>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? "sc_show" : "sc_content"}>
                <div className="sc_cards">
                  <div className="sc_card">
                    <div>Departamento</div>
                    <div>Administrativo</div>
                  </div>
                  <div className="sc_card">
                    <div>Departamento</div>
                    <div>Administrativo</div>
                  </div>
                  <div className="sc_card">
                    <div>Departamento</div>
                    <div>Administrativo</div>
                  </div>
                  <div className="sc_card">
                    <div>Departamento</div>
                    <div>Administrativo</div>
                  </div>
                  <div className="sc_card">
                    <div>Departamento</div>
                    <div>Administrativo</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={() => {
              setQtnColaborators((range) => range + 5);
            }}
            className="sc_btn"
          >
            Carregar Mais
          </button>
        </div>
      </div>
    </div>
  );
};
