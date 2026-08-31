# 1712. Ways to Split Array Into Three Subarrays

**Author:** Salvador2022
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/3633572/](https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/3633572/)

---

# Complexity
- Time complexity: $O(n)$

- Space complexity: $O(n)$

# Code
```
/*
First, we prepare the prefix sum array, so that we can compute subarray sums. Then, we move the boundary of the first subarray left to right. This is the first pointer: i.

For each point i, we find the minimum (j) and maximum (k) boundaries of the second subarray.

Final thing is to realize that j and k will only move forward, which result in a linear-time solution: O(N).
*/

class Solution {
    let mod = Int(pow(Double(10), Double(9))) + 7
    
    func waysToSplit(_ nums: [Int]) -> Int {
        let n = nums.count
        var result = 0
        var prefixSum = Array(repeating: 0, count: n)

        prefixSum[0] = nums[0]
        for i in 1..<n {
            prefixSum[i] = prefixSum[i - 1] + nums[i]
        }

        // i is the end of left subarray
        // j is the min end of mid subarray
        // k is the max end of mid subarray
        var j = 0
        var k = 0
        for i in 0..<(n - 2) {
            // j must always be greater than i, right subarray should have at least 1 element, so j < n - 1
            // while the accumulated in left subarray is bigger than the accumulated in the mid subarray
            while j <= i || (j < n - 1 && prefixSum[j] - prefixSum[i] < prefixSum[i]) {
                // Inequality is strict lesser because we want the minimum (first) end of the mid subarray
                j += 1
            }

            // k must always be greater equal to j, right subarray should have at least 1 element, so k < n - 1
            // while the accumulated in right subarray is bigger or equal than the accumulated in the mid subarray
            while k < j || ((k < n - 1) && prefixSum[k] - prefixSum[i] <= prefixSum[n - 1] - prefixSum[k]) {
                // Inequality is lesser because we want the maximum (last) end of the mid subarray
                k += 1
            }

            // after the above while loop, 
            // the condition (k < n - 1 && prefixSum[k] - prefixSum[i] <= prefixSum[n - 1] - prefixSum[k]) is not met
            // so we should decrement k by 1
            k -= 1
            result = (result + k - j + 1) % mod
        }

        return result
    }
}
```