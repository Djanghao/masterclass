# 🔥🔥 100% Faster Solution || One Line Solutioon ✔✔

**Author:** Boolean_Autocrats
**Votes:** 2
**Link:** [https://leetcode.com/problems/alice-and-bob-playing-flower-game/solutions/4637545/](https://leetcode.com/problems/alice-and-bob-playing-flower-game/solutions/4637545/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
**Alice can only win if the total number of flowers in both clockwise and anticlockwise directions is an odd number. This way, Alice will always be able to pick the last flower, guaranteeing her victory.**
# Approach
<!-- Describe your approach to solving the problem. -->
1. We need to discover pairs of numbers (x, y) where the sum of x and y is an odd number. Both x and y should fall within the ranges of 1 to n and 1 to m, respectively.
1. Sum of x and y will be odd if :
   - x is odd and y is even 
   - y is odd and x is even
1. Count of pairs (x,y) where x is odd and y is event - floor((n+1)/2)* floor(m/2)
2. Count of pairs (x,y) where x is even and y is odd  - floor((m+1)/2)* floor(n/2)
3. Total count will be sum of above counts .
# Complexity
- Time complexity:    $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flowerGame = function(n, m) {
    return (Math.floor((n+1)/2) * Math.floor(m/2) + Math.floor((m+1)/2)* Math.floor(n/2));
};
```
Feel free to show your support by liking and commenting if you find my solution helpful. Your feedback is appreciated!\uD83D\uDC4D\uD83D\uDC4D.
