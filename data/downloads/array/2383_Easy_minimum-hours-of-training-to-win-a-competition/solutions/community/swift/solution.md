# Swift | One Liner | O(n) time, O(1) space | Beats 100%

**Author:** iosdevzone
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/3821902/](https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/3821902/)

---


# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
class Solution {
    func minNumberOfHours(_ initialEnergy: Int, _ initialExperience: Int, _ energy: [Int], _ experience: [Int]) -> Int {
        max(energy.reduce(1-initialEnergy, +),0)
        + experience.reduce((initialExperience, 0)) { ($0.0 + $1, max($0.1, 0, $1 - $0.0 + 1)) }.1
    }
}
```