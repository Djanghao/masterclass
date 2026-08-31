# Javascript O(k + n) Sliding Window

**Author:** liphenste
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/1624330/](https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/1624330/)

---

One may initially believe that this is a backtracking problem. Yes, this could probably be solved with backtracking - however, the key insight is that an optimal solution can only have up to 1 "turn", since having 2+ turns is simply wasting steps!
    
Suppose you walk the path of always going left. You can then alter the path by changing 2 steps at the beginning: 1 to step right, and 1 to return to startPos. Then we lose the two steps at the end of our walk (the leftmost amounts). Do that again for the next path, and so on, and this gives us a **sliding window approach** where every time we add 1 step to the right, we drop 2 steps to the left.

O(k + n) time (where n is the size of the fruits array), O(n) space for the map.
```
var maxTotalFruits = function(fruits, startPos, k) {
    // map - position: amount
    let map = {};
    for (let i = 0; i < fruits.length; i++) {
        map[fruits[i][0]] = fruits[i][1];
    }
    
    // start at leftmost window and slide it to the right oh yeah~
    let maxAmountL = 0;
    for (let i = startPos - k; i <= startPos; i++) {
        maxAmountL += map[i + ''] || 0;
    }
    
    let left = startPos - k;
    let right = startPos;
    let curAmount = maxAmountL;
    while (Math.abs(left - startPos) >= Math.abs(right - startPos) && left <= startPos) {
        curAmount -= map[left++ + ''] || 0;
        curAmount -= map[left++ + ''] || 0;
        curAmount += map[++right + ''] || 0;
        maxAmountL = Math.max(maxAmountL, curAmount);
    }
    
    // start at rightmost window and slide it to the left uh huh~
    let maxAmountR = 0;
    for (let i = startPos + k; i >= startPos; i--) {
        maxAmountR += map[i + ''] || 0;
    }
    
    left = startPos;
    right = startPos + k;
    curAmount = maxAmountR;
    while (Math.abs(left - startPos) <= Math.abs(right - startPos) && right >= startPos) {
        curAmount -= map[right-- + ''] || 0;
        curAmount -= map[right-- + ''] || 0;
        curAmount += map[--left + ''] || 0;
        maxAmountR = Math.max(maxAmountR, curAmount);
    }
    
    return Math.max(maxAmountL, maxAmountR);
};
```
