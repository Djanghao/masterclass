# Swift | One-liner explained

**Author:** VladimirTheLeet
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-complement/solutions/5671516/](https://leetcode.com/problems/number-complement/solutions/5671516/)

---

# Approach
`~num` inverts all bits in `num`
For example, `5` which is `00000000000000000000000000000|101` in binary, becomes `11111111111111111111111111111|010` 

To get rid of these leading `1`-s we first bitshift this number to the left by `num.leadingZeroBitCount` postions, getting `010|00000000000000000000000000000`, then back right by the same number, obtaining the desired result `00000000000000000000000000000|010`

# Complexity
- Time complexity: $O(1)$
- Space complexity: $O(1)$

# Code
```swift []
class Solution {
    func findComplement(_ num: Int) -> Int {
        (~num << num.leadingZeroBitCount) >> num.leadingZeroBitCount
    }
}
```