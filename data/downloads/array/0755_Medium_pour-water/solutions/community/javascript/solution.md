# JS straightforward recursion

**Author:** gorkiy
**Votes:** 3
**Link:** [https://leetcode.com/problems/pour-water/solutions/396823/](https://leetcode.com/problems/pour-water/solutions/396823/)

---

```
var pourWater = function(heights, V, K) {
  if (!V) return heights;
  let bottom = K;
  
  for (let i = K; i >= 0; i--) {
    if (heights[i] > heights[bottom]) break;
    if (heights[i] < heights[bottom]) bottom = i;
  }
  
  if (bottom !== K) {
    heights[bottom]++;
    return pourWater(heights, V - 1, K);
  }
  
  for (let i = K + 1; i < heights.length; i++) {
    if (heights[i] > heights[bottom]) break;
    if (heights[i] < heights[bottom]) bottom = i;
    
  }
  
  heights[bottom]++;
  return pourWater(heights, V - 1, K);
};
```