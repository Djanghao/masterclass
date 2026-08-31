# Beats 100%. Simple solution

**Author:** kliuchev
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-array-is-good/solutions/6038789/](https://leetcode.com/problems/check-if-array-is-good/solutions/6038789/)

---

# Approach
To determine if this array is "good" it must meet only three criteria:

1. The number **n** should appear exactly twice in the array.
2. All other elements must be less than **n**
3. The sum of all elements in the array should match 
**n** \xD7 ( **n** + 1 ) / 2 + **N**

# Complexity
- Time complexity:
O(N) - However it works as O(N) in the worst-case scenario. Irl it depends on the input

- Space complexity:
O(1)

# Code
```swift []
class Solution {
    func isGood(_ nums: [Int]) -> Bool  {
        let n = nums.count - 1
        let referenceSum = (n * (n + 1) / 2) + n

        var sum = 0
        var counter = 0

        for i in nums {
            sum += i
            
            if i == n {
                counter += 1
            }
            
            if sum > referenceSum || i > n || counter > 2 {
                return false
            }

        }
        
        return counter == 2 && sum == referenceSum
    }
}
```