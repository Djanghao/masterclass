# Swift Solution

**Author:** khaledkamal
**Votes:** 0
**Link:** [https://leetcode.com/problems/four-divisors/solutions/5831476/](https://leetcode.com/problems/four-divisors/solutions/5831476/)

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
```swift []
class Solution {
    func sumFourDivisors(_ nums: [Int]) -> Int {
    var calcBefore: [Int: Int] = [:]
    var sum = 0
    
    for num in nums {
        if let value = calcBefore[num] {
            sum += value
        } else {
            var list : [Int] = []
            for i in 1 ... num {
                if num % i == 0 {
                    list.append(i)
                }
            }
            var _sum = 0
            if list.count == 4 {
                _sum = list.reduce(0, +)
            }
            calcBefore[num] = _sum
            sum += _sum
        }
    }
    
    return sum 
    }
}
```