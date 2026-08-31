# Sort & use hashmap to count

**Author:** elliotvu
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-of-doubled-pairs/solutions/5773879/](https://leetcode.com/problems/array-of-doubled-pairs/solutions/5773879/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(n)

# Code
```swift []
class Solution {
    func canReorderDoubled(_ arr: [Int]) -> Bool {
        var map = [Int: Int]()
        arr.forEach { number in
            map[number, default: 0] += 1
        }
        
        let sortedArray = arr.sorted { lhs, rhs in
            return abs(lhs) < abs(rhs)
        }
        
        for number in sortedArray {
            if map[number] == 0 {
                continue
            }
            
            map[number]! -= 1
            
            let doubleNumber = number * 2
            guard let doubleNumberCount = map[doubleNumber], doubleNumberCount > 0 else {
                return false
            }
            
            map[doubleNumber] = doubleNumberCount - 1
        }
        
        return true
    }
}

print(Solution().canReorderDoubled([4,-2,2,-4]))

```