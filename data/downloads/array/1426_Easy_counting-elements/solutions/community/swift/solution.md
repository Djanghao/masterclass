# Easy fast solution

**Author:** nvprokofiev
**Votes:** 0
**Link:** [https://leetcode.com/problems/counting-elements/solutions/5691547/](https://leetcode.com/problems/counting-elements/solutions/5691547/)

---

# Intuition
Use a set for quick lookups.

# Approach
1. Convert the array to a set for O(1) lookups.
2. Iterate through the array, checking if x + 1 exists in the set.
3. Increment the count for each match.
4. Return the final count.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```swift []
class Solution {
    func countElements(_ arr: [Int]) -> Int {
        var s = Set(arr)
        var count = 0
        
        for i in arr {
            if s.contains(i + 1) {
                count += 1
            }
        }

        return count
    }
}
```