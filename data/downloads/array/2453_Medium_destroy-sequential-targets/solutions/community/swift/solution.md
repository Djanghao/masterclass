# Swift O(n) solution, using dictionary

**Author:** AndreevIVdev
**Votes:** 0
**Link:** [https://leetcode.com/problems/destroy-sequential-targets/solutions/2757209/](https://leetcode.com/problems/destroy-sequential-targets/solutions/2757209/)

---

# Solution
Elements with the same % space can be destroyed together, we should find minimum of that elements.

# Code
```
class Solution {
    func destroyTargets(_ nums: [Int], _ space: Int) -> Int {
        let remainders = Dictionary(nums.map{ ($0 % space, 1) }, uniquingKeysWith: +)
        var res: Int = Int.max
        let mostFrequent = remainders.values.max()!
        
        for num in nums where remainders[num % space, default: 0] == mostFrequent {
            res = min(res, num)
        }

        return res
    }
}
```