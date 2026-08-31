# 🍦 [javascript / es6] Sort Solution

**Author:** quintessential
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-ice-cream-bars/solutions/1164502/](https://leetcode.com/problems/maximum-ice-cream-bars/solutions/1164502/)

---

*Explanation* 
If we sort the array beforehand, we can buy from left to right until we can't afford anymore ice cream bars.
1. Sort the `costs` array
2. Keep a `count` of each ice cream bars bought
3. Iterate the `costs` array from left to right, 
	a. If the `cost` is `less than or equal` to the `coins` we have, then buy it and add it to the `count`. 
	b. And substract the `cost` from our `coins`. 
6. If we can't purchase the next ice cream bar then break out of loop and return the `count`


```
var maxIceCream = function(costs, coins) {
  costs.sort((a, b) => a - b); 
  let count = 0;
  
  for (let i = 0; i < costs.length; i++) {
    if (costs[i] <= coins) {
      count++;
      coins -= costs[i]
    } else {
      break;  // a small optimization, end the loop early if coins go down to zero before we reach end of the length of costs.
    }
  }
  return count;
};
```

Time complexity: O(sort)
Space complexity: O(1)