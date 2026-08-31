# Short solution with Go(Golang) and hash tables

**Author:** IvanTerekh
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/solutions/5430084/](https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/solutions/5430084/)

---

# Intuition
We can go through the given array and find candidates for inclusion to the subarrays.

For any value in the subarray the following is true:
```
n & k == k
```
This is true because `n` has to contain all the bits from `k`. All the extra bits are wiped out because they are not set in `k`.

Any such element is either a subarray itself if `n==k`, or a candidate for inclusion in a subarray.

# Approach
<!-- Describe your approach to solving the problem. -->
Let's go through the array and for any new candidate count the ways to add up to certain value. On i'th iteration we would consider array like
```
n(j), n(j+1), ..., n(i-1), n(i)
```
Here possible new subarrays are `[n(i)], [n(i-1), n(i)], [n(i-2), n(i-1), n(i)]`. They all contain either only `n(i)` or both `n(i)` and `n(i-1)`. This is why we can consider only the amount of "candidate sums" from the previous step.

Let's assume on step `i-1` there were `m` options to sum up to `k`. Therefore, on i'th step there will be `m` more subarrays to sum up to `k`. Istead of just tracking the count of values that sum up to `k`, we track all such sums `s` that `s&k == k` because `s&n[i]` can sump up to `k` eventually.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func countSubarrays(nums []int, k int) int64 {
    cntByVal := make(map[int]int)
    total := int64(0)
    for _, n := range nums {
        newCntByVal := make(map[int]int)
        if n & k == k {
            newCntByVal[n] = 1
            for v, cnt := range cntByVal {
                newVal := v & n
                if newVal & k == k {
                    newCntByVal[newVal] += cnt
                }
            }
            total += int64(newCntByVal[k])
        }
        cntByVal = newCntByVal
    }
    return total
}

```