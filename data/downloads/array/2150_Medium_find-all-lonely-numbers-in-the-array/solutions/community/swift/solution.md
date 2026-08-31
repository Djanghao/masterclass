# O(n) - Swift readable concise solution

**Author:** ahmdmhasn
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/6022599/](https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/6022599/)

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
    func findLonely(_ nums: [Int]) -> [Int] {
        // Dictionary of numbers and occurances per number
        let numberCountPairs = Dictionary(nums.map { ($0, 1) }, uniquingKeysWith: +)

        return numberCountPairs.reduce(into: []) { result, numberCountPair in
            let num = numberCountPair.key
            let occurances = numberCountPair.value

            // PreviousNumber
            if numberCountPairs.keys.contains(num - 1) {
                return
            }

            // Next Number
            if numberCountPairs.keys.contains(num + 1) {
                return
            }

            // Current Number
            if occurances == 1 {
                result.append(num)
            }
        }
    }
}
```