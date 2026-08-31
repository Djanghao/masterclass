# Binary Search + Sweep Line Solution

**Author:** vkuzbida
**Votes:** 1
**Link:** [https://leetcode.com/problems/zero-array-transformation-ii/solutions/6070872/](https://leetcode.com/problems/zero-array-transformation-ii/solutions/6070872/)

---

# Intuition
The goal is to determine the minimum number of range operations (queries) needed to make every element of the nums array non-positive (less than or equal to 0). This is done efficiently using binary search combined with a sweep line technique (difference array + prefix sum).

# Approach
1. Binary Search:
* Use binary search over the range of queries to determine the smallest prefix of queries (k) that makes the array nums valid (i.e., all elements non-positive after applying the operations).
* The search range is [0, m] where m is the number of queries.

2. Validation Function (isGood):
* For a given k (midpoint in binary search), simulate applying the first k queries using a difference array (sweep line).
* This efficiently applies range updates to the nums array by adjusting the start and end+1 indices of the range.
* Compute the prefix sum to get the actual decrements at each index, and verify if all elements of nums become non-positive.

3. Binary Search Adjustment:

* If the first k queries can make nums valid (`isGood(k) is true`), update the binary search range to consider smaller prefixes (`r = mid`).
* Otherwise, adjust the range to consider larger prefixes (`l = mid`).

4. Result:
* After binary search, if `r` equals `m + 1`, no prefix of queries can make the array valid, so return `-1`.
* Otherwise, return `r`, the smallest prefix size that satisfies the condition.

# Complexity
- Time complexity:
O(log(m) * (n + m)), where `m` number of queries and `n` number of elements in nums.

- Space complexity:
O(n) for building prefix array.

# Code
```javascript []
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function(nums, queries) {
    const n = nums.length;
    const m = queries.length;

    let l = -1;
    let r = m+1;
    let mid;

    while ((r-l) > 1) {
        mid = l + Math.floor((r-l)/2)
        if (isGood(mid)) {
            r = mid;
        } else {
            l = mid
        }
    }

    return r === (m+1) ? -1 : r;
    

    function isGood(k) {
        const sweepLine = new Array(n+1).fill(0);

        for (let i = 0; i < k; i++) {
            const [s, e, val] = queries[i];
            sweepLine[s] += val;
            sweepLine[e+1] -= val;
        }
        let acc = 0;

        for (let i = 0; i < n; i++) {
            acc += sweepLine[i];
            if (nums[i] > acc) {
                return false
            }
        }

        return true;
    }

};
```