# 🚀 Fastest Solution, Beats 100%, 17ms on Jul 29th 2024

**Author:** koolair
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-number-of-teams/solutions/5551717/](https://leetcode.com/problems/count-number-of-teams/solutions/5551717/)

---



# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

![Screenshot 2024-07-29 at 13.15.50.png](./images/0.png)


# Code
```
class Solution {
    func numTeams(_ rating: [Int]) -> Int {
        let n = rating.count
        var count = 0
        
        for j in 0..<n {
            var leftLess = 0, leftGreater = 0
            var rightLess = 0, rightGreater = 0
            
            for i in 0..<j {
                if rating[i] < rating[j] {
                    leftLess += 1
                } else if rating[i] > rating[j] {
                    leftGreater += 1
                }
            }
            
            for k in (j+1)..<n {
                if rating[k] < rating[j] {
                    rightLess += 1
                } else if rating[k] > rating[j] {
                    rightGreater += 1
                }
            }
            
            count += leftLess * rightGreater + leftGreater * rightLess
        }
        
        return count
    }
}
```