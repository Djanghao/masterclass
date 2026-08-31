# Functional approach using Swift

**Author:** barabash
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4197243/](https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4197243/)

---

# Intuition
Reference from https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4194360/c-code-with-simple-explaination/

# Approach
1. Count repetiotions
2. Calculate max possible result 'maxCount'
3. Iterate from max result to 1 and validate if all counters are passing the rulles:
    a) mod is high enough to have i-1 numbers
    b) if not, then distribute it over the i-1 groups and update the mod with 'prevI'

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    func minGroupsForValidAssignment(_ nums: [Int]) -> Int {
        let dict = nums.reduce(into: [Int: Int]()) { $0[$1, default: 0] += 1 }
        let counts = dict.map(\\.value)
        let maxCount = dict.reduce(Int.max) { min($0, $1.value) } + 1
        let valid: (Int) -> Bool = { i in
            counts.allSatisfy { count -> Bool in
                let prevI = i - 1
                var mod = count % i
                mod = mod < prevI && count / i >= prevI - mod ? prevI : mod
                return !(mod > 0 && mod < i - 1)
            }
        }
        let result: (Int) -> Int = { i in counts.reduce(into: 0) { $0 += $1/i + ($1%i == 0 ? 0 : 1) } }
        return stride(from: maxCount, through: 1, by: -1).first(where: valid).map(result) ?? -1
    }
}
```