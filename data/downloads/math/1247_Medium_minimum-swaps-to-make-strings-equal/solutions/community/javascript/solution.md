# Easy to understand

**Author:** andyoung
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/solutions/434829/](https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/solutions/434829/)

---

```
var minimumSwap = function(s1, s2) {
  // not same length
  if (s1.length !== s2.length) return -1;
  
  let xCount = 0, yCount = 0;
  (s1 + s2).split('').forEach(c => {
    xCount += c == 'x' ? 1 : 0;
    yCount += c == 'y' ? 1 : 0;
  });
  // xCount and yCount have to be even number
  if (xCount % 2 || yCount % 2) return -1;
  
  let xDiff = 0, yDiff = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] != s2[i]) {
      xDiff += s1[i] == 'x' ? 1 : 0;
      yDiff += s1[i] == 'y' ? 1 : 0;
    }
  }
  // every 'xx' or 'yy' needs one swap
  // if left one 'xy' pair, needs two more swaps.
  // xDiff and yDiff should be both even or odd, 
  // because xCount and yCount are even number,
  // if one odd and one even, then after %, 
  // there're only either one 'x' or one 'y' left,
  // which contradicts with above
  let res = 0;
  res += Math.floor(xDiff / 2);
  res += Math.floor(yDiff / 2);
  res += xDiff % 2 ? 2 : 0;
  
  return res;
};
```