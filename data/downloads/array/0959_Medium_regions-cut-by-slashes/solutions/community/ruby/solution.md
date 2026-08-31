# Explorando Regiões Conectadas em uma Grade Expandida com DFS

**Author:** cawell
**Votes:** 0
**Link:** [https://leetcode.com/problems/regions-cut-by-slashes/solutions/5829751/](https://leetcode.com/problems/regions-cut-by-slashes/solutions/5829751/)

---

# Intuition
Quando olhamos para a grade, podemos ver que os caracteres `'/'` e `'\\\\'` dividem a c\xE9lula em diferentes sub-regi\xF5es. Nossa ideia inicial \xE9 tratar cada c\xE9lula como se fosse dividida em pequenas partes. Expandindo a grade, podemos capturar as divis\xF5es formadas por essas barras de uma maneira mais detalhada. Em seguida, podemos contar quantas regi\xF5es cont\xEDguas se formam explorando essas partes.


# Approach
A abordagem utilizada envolve os seguintes passos:

1. **Expandir a grade**: Como cada c\xE9lula da grade original pode ser dividida por barras, expandimos cada c\xE9lula para uma grade de 3x3. Por exemplo, um caractere `'/'` divide a c\xE9lula em uma diagonal, o que pode ser representado por uma matriz de 3x3 com valores de `1` (ocupado) e `0` (livre).
   
2. **Explorar as regi\xF5es**: Ap\xF3s expandir a grade, percorremos cada c\xE9lula expandida e, para cada c\xE9lula n\xE3o visitada, iniciamos uma busca DFS (Depth-First Search). A DFS explora todas as regi\xF5es conectadas que ainda n\xE3o foram marcadas como visitadas. Cada vez que a DFS encontra uma nova regi\xE3o, contamos como uma nova "regi\xE3o cont\xEDgua".

3. **Marcar as \xE1reas visitadas**: Utilizamos DFS para marcar todas as c\xE9lulas conectadas na mesma regi\xE3o, e ao final, contamos quantas regi\xF5es distintas foram encontradas.


# Complexity
### Time Complexity
A complexidade de tempo da solu\xE7\xE3o \xE9 dominada pela constru\xE7\xE3o e explora\xE7\xE3o da grade expandida. Detalharei as etapas:

1. **Constru\xE7\xE3o da grade expandida**: 
   - A grade original possui tamanho `n x n`. Para representar as divis\xF5es internas criadas por `'/'` e `'\\\\'`, expandimos cada c\xE9lula da grade original para uma sub-grade de `3x3`.
   - Portanto, a nova grade ter\xE1 um tamanho de `3n x 3n`, resultando em `9n\xB2` c\xE9lulas.
   - O tempo necess\xE1rio para preencher essa grade expandida \xE9 proporcional ao n\xFAmero total de c\xE9lulas, ou seja, $$O(n^2)$$.

2. **DFS (Depth-First Search)**:
   - Uma vez que a grade foi expandida, usamos DFS para explorar as regi\xF5es conectadas dentro da grade expandida. Cada c\xE9lula da grade expandida \xE9 visitada exatamente uma vez.
   - Como a grade expandida possui `9n\xB2` c\xE9lulas, a DFS percorre essas c\xE9lulas em tempo $$O(n^2)$$.

Portanto, a complexidade total de tempo da solu\xE7\xE3o \xE9 $$O(n^2)$$, sendo que a constru\xE7\xE3o da grade e a execu\xE7\xE3o da DFS ocorrem de forma linear em rela\xE7\xE3o ao n\xFAmero de c\xE9lulas da grade expandida.

### Space Complexity
A complexidade de espa\xE7o tamb\xE9m pode ser analisada da seguinte maneira:

1. **Grade expandida**:
   - A principal utiliza\xE7\xE3o de espa\xE7o ocorre na cria\xE7\xE3o da grade expandida, que ocupa `9n\xB2` c\xE9lulas. No entanto, ao simplificar, a nota\xE7\xE3o assint\xF3tica da complexidade de espa\xE7o \xE9 $$O(n^2)$$.

2. **Pilhas de chamadas DFS**:
   - Durante a execu\xE7\xE3o da DFS, no pior cen\xE1rio, a pilha de chamadas pode atingir uma profundidade m\xE1xima igual ao n\xFAmero de c\xE9lulas da grade expandida, o que resulta em uma ocupa\xE7\xE3o m\xE1xima de $$O(n^2)$$ espa\xE7o.

Assim, a complexidade de espa\xE7o total \xE9 $$O(n^2)$$, sendo o fator principal o armazenamento da grade expandida e as chamadas recursivas da DFS.

# Code
```ruby []
# @param {String[]} grid
# @return {Integer}
def regions_by_slashes(grid)
  grid_size = grid.size
  expanded_grid = build_expanded_grid(grid, grid_size)

  total_regions = count_regions(expanded_grid)

  total_regions
end

private

# Constantes para dire\xE7\xF5es de DFS (baixo, cima, direita, esquerda)
DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]].freeze

# Expande a grade original em uma nova grade 3x maior
def build_expanded_grid(grid, grid_size)
  Array.new(grid_size * 3) { Array.new(grid_size * 3, 0) }.tap do |expanded_grid|
    grid.each_with_index do |row, row_index|
      row.chars.each_with_index do |cell, col_index|
        fill_grid_cell(expanded_grid, row_index, col_index, cell)
      end
    end
  end
end

# Preenche a c\xE9lula expandida de acordo com os caracteres '/' e '\\'
def fill_grid_cell(expanded_grid, row_index, col_index, cell)
  case cell
  when '/'
    expanded_grid[row_index * 3][col_index * 3 + 2] = 1
    expanded_grid[row_index * 3 + 1][col_index * 3 + 1] = 1
    expanded_grid[row_index * 3 + 2][col_index * 3] = 1
  when '\\\\'
    expanded_grid[row_index * 3][col_index * 3] = 1
    expanded_grid[row_index * 3 + 1][col_index * 3 + 1] = 1
    expanded_grid[row_index * 3 + 2][col_index * 3 + 2] = 1
  end
end

# Conta quantas regi\xF5es distintas existem na grade expandida
def count_regions(expanded_grid)
  expanded_grid_size = expanded_grid.size
  region_count = 0

  # Define a l\xF3gica DFS dentro de um lambda para manter o escopo fechado
  dfs = lambda do |x, y|
    return if x < 0 || y < 0 || x >= expanded_grid_size || y >= expanded_grid_size || expanded_grid[x][y] == 1

    # Marca como visitado
    expanded_grid[x][y] = 1

    # Explora todas as dire\xE7\xF5es poss\xEDveis
    DIRECTIONS.each do |dx, dy|
      dfs.call(x + dx, y + dy)
    end
  end

  # Itera sobre a grade expandida e executa DFS sempre que encontra uma c\xE9lula n\xE3o visitada
  expanded_grid.each_with_index do |row, row_index|
    row.each_with_index do |cell, col_index|
      if cell == 0
        region_count += 1
        dfs.call(row_index, col_index)
      end
    end
  end

  region_count
end

```