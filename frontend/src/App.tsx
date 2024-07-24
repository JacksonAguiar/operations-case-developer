import { useState } from "react";
import "./App.css";
const categories: string[] = [
  "Eletrônicos",
  "Roupas",
  "Alimentos",
  "Móveis",
  "Brinquedos",
  "Ferramentas",
  "Livros",
  "Beleza",
  "Esportes",
  "Jardinagem",
];
function App() {
  const [range, setRange] = useState(0);

  return (
    <div className="App">
      <section className="new-product">
        <h1>Adicionar produto</h1>
        <div className="group-inputs">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Descrição" />
          <select>
            <option defaultChecked disabled>
              Selecione
            </option>
            {categories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>
          <input type="number" placeholder="Preço" />
          <input type="number" placeholder="Estoque" />
          <button>Salvar</button>
        </div>
      </section>
      <section className="products">
        <h1>Produtos</h1>
        <div className="filters">
          <select>
            <option defaultChecked>Todos</option>
            {categories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>
          <div>
            R${1}
            <input
              type="range"
              onChange={(e) => setRange(Number(e.target.value))}
              min={1}
              max={400}
              value={range}
              step={1}
              className="custom-slider"
            />
            R${range}
          </div>
          <button>Filtrar</button>
        </div>
        <div className="tbl-header">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Estoque</th>
                <th>Ações</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table>
            <tbody>
              {[...Array(30)].map((_, index) => (
                <tr>
                  <td>AAC</td>
                  <td>AUSTRALIAN COMPANY </td>
                  <td>$1.38</td>
                  <td>+2.01</td>
                  <td>
                    <button>Editar</button>
                    <button style={{backgroundColor:"red"}}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default App;
