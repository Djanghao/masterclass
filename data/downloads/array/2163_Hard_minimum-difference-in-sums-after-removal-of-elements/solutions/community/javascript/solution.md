# Solution using Priority Queue and prefixSum&suffixSum

**Author:** drxxdj
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/solutions/5076521/](https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/solutions/5076521/)

---

# Intuition
The lowest possible difference can be obtained when the sum of the first n elements in the resultant array is minimum, and the sum of the next n elements is maximum. For every index i, find the minimum possible sum of n elements with indices lesser or equal to i, store in preSum array; and find the maximum possible sum of n elements with indices greater or equal to i, store it in suffixSum array.



# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDifference = function(nums) {
    const n = nums.length / 3
    let preSum = Array.from({length: 2*n+1}, () => 0)
    let suffixSum = Array.from({length: 3*n+1}, () => 0)
    let pq = new MaxPriorityQueue({compare: (a,b) => b-a})
    for(let i = 0; i < 2 * n; i++) {
        if (i < n) {
            preSum[i+1] = preSum[i] + nums[i]
            pq.enqueue(nums[i])
        } else {
            if (pq.front() > nums[i]) {
                preSum[i+1] = preSum[i] - pq.dequeue() + nums[i]
                pq.enqueue(nums[i])
            } else {
                preSum[i+1] = preSum[i]
            }
        }
    }

    let suffixPQ = new MinPriorityQueue({compare: (a,b) => a-b})
    for(let i = 3*n -1; i >= n; i--) {
        if (i >= 2*n) {
            suffixSum[i] = suffixSum[i+1] + nums[i]
            suffixPQ.enqueue(nums[i])
        } else {
            if (suffixPQ.front() < nums[i]) {
                suffixSum[i] = suffixSum[i+1] - suffixPQ.dequeue() + nums[i]
                suffixPQ.enqueue(nums[i])
            } else {
                suffixSum[i] = suffixSum[i+1]
            }
        }
    }

    let res = Infinity
    for(let i = n-1; i < 2*n; i++) {
        // preSum[i+1] include nums[i], [0, i]
        // suffixSum[i+1] not include nums[i], [i+1, 3*n-1]
        res = Math.min(preSum[i+1]-suffixSum[i+1], res)
    }
    return res
};
```