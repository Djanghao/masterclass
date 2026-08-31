# Rust Binary Search & Recursion

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ships-in-a-rectangle/solutions/2828721/](https://leetcode.com/problems/number-of-ships-in-a-rectangle/solutions/2828721/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * // This is Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * struct Sea;
 * impl Sea {
 *    pub fn hasShips(topRight: Vec<i32>,bottomLeft: Vec<i32>)->bool{}
 * }
 */

impl Solution {
    pub fn count_ships(sea: &Sea, topRight: Vec<i32>, bottomLeft: Vec<i32>) -> i32 {
        if sea.hasShips(topRight.clone(), bottomLeft.clone()) == false { return 0 }
        if topRight[0] == bottomLeft[0] && topRight[1] == bottomLeft[1] { return 1 }
        
        if topRight[0] > bottomLeft[0] {
            let mid = bottomLeft[0] + (topRight[0] - bottomLeft[0]) / 2;
            
            let midup = vec![mid, topRight[1]];
            let midlow = vec![mid + 1, bottomLeft[1]];
            
            return Self::count_ships(sea, midup, bottomLeft) + Self::count_ships(sea, topRight, midlow)
        }
        
        let mid = bottomLeft[1] + (topRight[1] - bottomLeft[1]) / 2;
            
        let midleft = vec![bottomLeft[0], mid + 1];
        let midright = vec![topRight[0], mid];
            
        Self::count_ships(sea, midright, bottomLeft) + Self::count_ships(sea, topRight, midleft)
    }
}
```