# Typescript | Javascript | Two solutions | With comments

**Author:** OsidAbu-Alrub
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/2534808/](https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/2534808/)

---

First solution (not very good memory wise):
```
function checkValid(matrix: number[][]): boolean {
  const rows = new Map<number, Set<number>>();
  const columns = new Map<number, Set<number>>();
  const n = matrix.length;
  for(let i = 0 ; i < n ; i++){
    if(!rows.has(i))
      rows.set(i, new Set<number>());
    for(let j = 0 ; j < n ; j++){
      if(!columns.has(j))
        columns.set(j, new Set<number>());
      rows.get(i).add(matrix[i][j]);
      columns.get(j).add(matrix[i][j]);
    }
  }
  
  for(let i = 0 ; i < n ; i++)
    if(rows.get(i).size !== n || columns.get(i).size !== n)
      return false;
  return true;
};
```

Second solution (much better memory usage)
```
function checkValid(matrix: number[][]): boolean {
  const n = matrix.length;
  for(let i = 0 ; i < n ; i++){
    const row = new Set<number>();
    const column = new Set<number>();
    for(let j = 0 ; j < n ; j++){
      if(row.has(matrix[i][j]) || column.has(matrix[j][i]))
        return false;
      row.add(matrix[i][j]);
      column.add(matrix[j][i]);
    }
  }
  
  return true;
};
```