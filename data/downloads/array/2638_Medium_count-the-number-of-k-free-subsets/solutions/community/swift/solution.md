# Similar as 2597. The Number of Beautiful Subsets

**Author:** Yan_feng
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-k-free-subsets/solutions/5374723/](https://leetcode.com/problems/count-the-number-of-k-free-subsets/solutions/5374723/)

---

# Complexity
- Time complexity:
nlog(n)

# Code
```
class Solution {
    // Similar as 2597. The Number of Beautiful Subsets
    func countTheNumOfKFreeSubsets(_ nums: [Int], _ k: Int) -> Int {
        var nums = nums.sorted()
        var size = [Int:Int]()
        var m = 0
        for num in nums {
            size[num] = size[num-k, default: 0] + 1
            size.removeValue(forKey: num - k)
            m = max(m, size[num] ?? Int.min)
        }

        var fib = Array(repeating: 0, count: m+2)
        fib[0] = 1
        fib[1] = 1
        for i in 2..<m+2 {
            fib[i] = fib[i-1] + fib[i-2]
        }

        var res = 1
        for v in size.values {
            res *= fib[v+1]
        }

        return res
    }
}
```