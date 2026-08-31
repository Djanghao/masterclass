# Swift reduce 1 liner, brute force

**Author:** tzef
**Votes:** 3
**Link:** [https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/5197797/](https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/5197797/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Brute force with native function

# Code
```
class Solution {
    func beautifulSubsets(_ nums: [Int], _ k: Int) -> Int {
        nums.reduce([[Int]()]) { result, next in
            result + result
                .filter { !$0.contains { abs($0 - next) == k } }
                .map { $0 + [next] }
        }.count - 1 // minus empty subset
    }
}
```