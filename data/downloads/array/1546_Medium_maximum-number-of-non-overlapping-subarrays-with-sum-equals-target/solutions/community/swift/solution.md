# Swift solution O(n)

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/1233818/](https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/1233818/)

---

Let's find an subarray with a sum equal to target, using the prefix sums of the elements.

To keep the previously found prefix sums, we use `presums: Set<Int>` with the initial value `[0]`, since we need a zero prefix sum.

For each index `i`, we increase `presum` by `nums[i]` and check whether `presum - target` is already in the `presums`. If so, a valid subarray ending at index `i` is found.

Add 1 to the result and repeat search starting from the index `i + 1`
```
class Solution {
    func maxNonOverlapping(_ nums: [Int], _ target: Int) -> Int {
        let n = nums.count
        var border = -1, result = -1
        func helper(_ start: Int) -> Int {
            guard start < n else { return -1 }
            var presums: Set<Int> = [0], presum = 0
            for i in start..<n {
                presum += nums[i]
                if presums.contains(presum - target) {
                    return i
                }
                presums.insert(presum)
            }
            return -1
        }
        repeat {
            result += 1
            border = helper(border + 1)
        } while border >= 0
        return result
    }
}
```