# Typescript | Simple bitmask iterative solution | O(2^n * n)

**Author:** kirsar
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-in-an-archery-competition/solutions/2499795/](https://leetcode.com/problems/maximum-points-in-an-archery-competition/solutions/2499795/)

---

Simply enumerate through all possible subsets of arrows distribution
If there is a case when fewer number of arrows is enough to achieve the result, just add the rest to 0 score section

```
function maximumBobPoints(numArrows: number, aliceArrows: number[]): number[] {
  const n = 12;
  const maxMask = 1 << n;
  
  let res = 0;
  let bobArrows;
  for(let i=1; i<maxMask; i++) {
    let score = 0;
    let totalArrows = 0;
    const currArrows = Array(n).fill(0);
    for(let j=0; j<n; j++) {
      if(i & (1 << j)) {
        score += j;
        currArrows[j] = aliceArrows[j] + 1;
        totalArrows += aliceArrows[j] + 1;
      }  
    }
    
    const rest = numArrows - totalArrows;
    
    if (rest >= 0 && score > res) {
      res = score;
      currArrows[0] += rest;
      bobArrows = currArrows;
    }
  }
  
  return bobArrows;
};
```