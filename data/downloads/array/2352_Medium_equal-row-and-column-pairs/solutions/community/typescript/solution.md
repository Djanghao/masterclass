# Human Readable Elegant Solution

**Author:** stazcp
**Votes:** 6
**Link:** [https://leetcode.com/problems/equal-row-and-column-pairs/solutions/3591014/](https://leetcode.com/problems/equal-row-and-column-pairs/solutions/3591014/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
A Dictionary helps me keep track of iterations and multiply cols * rows to get the pairs. I didn't realize originally you had to multiply them which caused a lot of tests to fail, but this is what it means by pairs.
ex. 2 rows x 2 cols = 4 (answer)
# Approach
<!-- Describe your approach to solving the problem. -->
I'm using toString() because in JS/TS two arrays that look the same can be considered different objects under the hood, also you won't be able to access the keys, so the stringified version helps me access the keys with get.

Also providing your own key function will improve efficiency but on normal development it provides such small benefit that I am not sure if it's worth the trouble.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N^2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N^2)
# Code
```
function equalPairs(grid: number[][]): number {
  const rows = new Map()
  const cols = new Map()

  for(let i = 0; i < grid.length; ++i){
    const row = [], col = []
    for (let j = 0; j < grid[0].length; ++j){
      row.push(grid[i][j])
      col.push(grid[j][i].toString())
    }
    const strRow = row.toString()
    const strCol = col.toString()
    rows.set(strRow, (rows.get(strRow) ?? 0) + 1)
    cols.set(strCol, (cols.get(strCol) ?? 0) + 1)
  }
  let ans = 0
  for(const [row,value] of rows){
    if(cols.has(row)){
      ans += cols.get(row) * value
    }
  }


  return ans
};
```