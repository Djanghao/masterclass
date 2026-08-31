# SWIFT // Sliding window template in 2 steps 🙊

**Author:** grigorev_rsv
**Votes:** 2
**Link:** [https://leetcode.com/problems/fruit-into-baskets/solutions/3156244/](https://leetcode.com/problems/fruit-into-baskets/solutions/3156244/)

---

# Prelude
You can use it in most of the others "sliding window" ploblems
"l" stands for left
"r" stands for right

# Code
```
class Solution {
    func totalFruit(_ fruits: [Int]) -> Int {
        var basket: [Int: Int] = [:]
        var l = 0
        var r = 0
        var result = 0

        while r < fruits.count {
            //1) add a new value to the sliding window
            basket[fruits[r], default: 0] += 1
            r += 1 // increase right immediately

            //2) 'repair' the window if it violates the constraints
            while basket.count == 3 {
                basket[fruits[l]]! -= 1 //remove a value from the sliding window

                if basket[fruits[l]] == 0 {
                    basket.removeValue(forKey: fruits[l])
                }
                l += 1
            }
            
            result = max(result, r - l)
        }

        return result 
    }
}
```