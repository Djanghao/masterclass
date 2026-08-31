# Swift

**Author:** memo2
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/solutions/3897029/](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/solutions/3897029/)

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
```
class Solution {
    func minimumTime(_ jobs: [Int], _ workers: [Int]) -> Int {
        let sortedJobs = jobs.sorted(by: >)
    let sortedWorkers = workers.sorted(by: >)
    var maxDays = 0
    for i in 0..<jobs.count {
      let worker = sortedWorkers[i]
      var job = sortedJobs[i]
      let currentDays = (CGFloat(job) / CGFloat(worker)).rounded(.up)

      maxDays = max(maxDays, Int(currentDays))
    }
    return max(maxDays, 1)
    }
}
```