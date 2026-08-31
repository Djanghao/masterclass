# Swift | Beats 100% - Greedy approach

**Author:** sharmips
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/solutions/3432310/](https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/solutions/3432310/)

---



# Code
```
class Solution {
    func minimumPartition(_ s: String, _ k: Int) -> Int {
        let nums = Array(s).map { return Int(String($0)) ?? 0 }
        var i = 0
        var count = 0

        while i < nums.count {
            var j = i
            if nums[j] > k { return -1 }

            var temp = 0
            while j < nums.count {
                if temp * 10 + nums[j] <= k {
                    temp = temp * 10 + nums[j]
                    j = j + 1
                } else {
                    break
                }  
            }
            count = count + 1
            i = j
        }
        return count
    }
}
```