# 2 Lines TypeScript Solution

**Author:** hiba1
**Votes:** 4
**Link:** [https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solutions/3501017/](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solutions/3501017/)

---

# Intuition
Count the ones on each row and store them with the row index
Sort the array by the count
Return the first K index

# Code
```
function kWeakestRows(mat: number[][], k: number): number[] {
    let counts = mat.map((x,i)=>({index:i, count: x.reduce((a,b)=>a+b,0)}));
    return counts.sort((a,b)=>a.count-b.count).slice(0,k).map(x=>x.index);
};
```