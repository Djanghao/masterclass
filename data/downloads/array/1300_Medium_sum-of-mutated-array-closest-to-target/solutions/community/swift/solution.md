# Readable Swift | Binary search

**Author:** tinhpv
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/3518776/](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/3518776/)

---

# Complexity
- Time complexity: $$O(nlog * max(arr))$$
- Space complexity: $$O(1)$$

# Code
```
class Solution {
    func findBestValue(_ arr: [Int], _ target: Int) -> Int {
        var l = target / arr.count
        var r = arr.max()!

        var ans = r
        var total = arr.reduce(0, +)
        var diff = abs(total - target)

        while l <= r {
            let mid = (l + r) / 2

            var sum = 0
            for num in arr {
                sum += num <= mid ? num : mid
            }

            if sum > target {
                r = mid - 1
            } else {
                l = mid + 1
            }

            if abs(sum - target) < diff || abs(sum - target) == diff && mid < ans  {
                diff = abs(sum - target)
                ans = mid
            }
        }

        return ans
    }
}
```