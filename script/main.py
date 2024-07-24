import requests
import pandas as pd

api_url = "https://localhost:3000/products"

def main():
    response = requests.get(api_url)

    if response.status_code == 200:
        produtcs = response.json()
    else:
        raise Exception(f"Erro ao acessar a API: {response.status_code}")

    df = pd.DataFrame(produtcs)

    menor_estoque = df.loc[df['estoque'].idxmin()]
    maior_estoque = df.loc[df['estoque'].idxmax()]
    estoque_medio = df['estoque'].mean()
    desvio_padrao_estoque = df['estoque'].std()
    
    results = pd.DataFrame([menor_estoque, maior_estoque, estoque_medio, desvio_padrao_estoque])

    results.to_csv("stock_report.csv", index=False)

    # # Salvando os resultados em um arquivo JSON
    # results.to_json("stock_report.json", orient="records", lines=True)

    print("Relatórios gerados com sucesso: 'stock_report.csv'.")

if __name__ == "__main__":
    main()
