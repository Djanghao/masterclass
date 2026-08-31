# Monotonic stack + merging

**Author:** lautman
**Votes:** 0
**Link:** [https://leetcode.com/problems/create-maximum-number/solutions/4606393/](https://leetcode.com/problems/create-maximum-number/solutions/4606393/)

---

# Intuition
My first thought was to use dynamic programming, where at each step the algorithm chooses to select or discard the next number from each of the lists and then selects the best of those four candidates. This led to a memoization keyed by the position in nums1, the position in nums2, and the number that still need to be selected. Unfortunately this solution timed out due to all of the work needed to compare slices and all of the slice copying needed to build each of the candidates and memos.

This solution, like many of the others here, recognizes that we can determine which digits need to be in the maximum number from each of the two slices by composing the largest possible number in each slice with the number of digits that need to come from each of them, and that we can then merge the provided digits to create the largest possible number for that split between nums1 and nums2. We then only need to decide between the candidate splits.


# Approach

We can use a monotonically decreasing stack to determine the digits from each of the lists, maintaining the monotonically decreasing property by removing greedily added digits that are less than the digit we are attempting to add. We maintain the property until we run out of digits in the slice that can be dropped while still yielding the desired number of digits. This approach has the property of placing higher digits as early in the slice as possible, guaranteeing that the generated number is the largest possible.

Merging is mostly simple in that we always choose the larger digit to write to the result, writing all remaining digits once one of the slices has been exhausted. However, there's a tricky detail in the case where both slices are offering the same digit and we need to decide which one to consume. Consider merging [5, 1] and [5, 9]. If we always select the first list we'd generate [5, 5, 9, 1]. However, it is possible to generate [5, 9, 5, 1] by selecting the second list first. This leads to the policy of selecting from the list that has the next highest non-matching digit as we want to make progress towards "uncovering" the larger digit sooner.

Given a merged solution for a given split of k, we can then test if it is better than the current best encountered solution, and replace it if so.

# Complexity
- Time complexity:

  - Finding the max number of length k in a single list takes $$O(n)$$ time as each element of the list needs to be considered.
  - Merging two lists to a list of size k takes $$O(k^2)$$, as there is a degenerate case where both slices are all the same digit and are approximately equal length where we may need to test O(k) candidates for each of the k positions.
  - Comparing two possible solutions takes $$O(k)$$ time.

Since we need to repeat each step $$O(k)$$ times for all possible splits of k between nums1 and nums2, the overall time complexity is $$O(k * (n + k + k^2))$$ or $$O(k^3)$$.

- Space complexity:

Finding the max number of length k in a single list uses $$O(k)$$ space. Merging two lists into a single list of total length k uses $$O(k)$$ space. Therefore this solution takes $$O(k)$$ space.

# Code
```
func maxNumber(nums1 []int, nums2 []int, k int) []int {
	// for each split of k, select the maxNumber from each of nums1 and nums2 and then merge.
    // Merge selects the largest from each selected queue for each digit.
    var best []int
    for countFromNums2 := 0; countFromNums2 <= k; countFromNums2++ {
        if countFromNums2 > len(nums2) || k - countFromNums2 > len(nums1) {
            continue
        }
        fromNums1 := maxNumberSingle(nums1, k - countFromNums2)
        fromNums2 := maxNumberSingle(nums2, countFromNums2)
        candidate := merge(fromNums1, fromNums2)
        best = findBest(best, candidate)
    }
    return best
}

func findBest(a, b []int) []int {
    if greaterDigitsA(a, b, 0, 0) {
        return a
    }
    return b
}

func merge(a, b []int) []int {
    result := make([]int, 0, len(a) + len(b))
    shouldWriteB := func(aIdx, bIdx int) bool {
        if bIdx >= len(b) {
            return false
        }
        if a[aIdx] < b[bIdx] {
            return true
        }
        if a[aIdx] == b[bIdx] && !greaterDigitsA(a, b, aIdx, bIdx) {
            return true
        }
        return false
    }
    bIdx := 0
    for aIdx := 0; aIdx < len(a); aIdx++ {
        for ; shouldWriteB(aIdx, bIdx); bIdx++ {
            result = append(result, b[bIdx])
        }
        result = append(result, a[aIdx])
    }
    for ; bIdx < len(b); bIdx++ {
        result = append(result, b[bIdx])
    }
    return result
}

func greaterDigitsA(a, b []int, aIdx, bIdx int) bool {
    for aIdx < len(a) && bIdx < len(b) && a[aIdx] == b[bIdx] {
        aIdx++
        bIdx++
    }
    if aIdx >= len(a) {
        return false
    }
    if bIdx >= len(b) {
        return true
    }
    return a[aIdx] > b[bIdx]
}

func maxNumberSingle(nums []int, k int) []int {
    result := make([]int, 0, k)
    for i := 0; i < len(nums); i++ {
        // backtrack any lesser digits as long as we can still form the required number size
        for len(result) > 0 && len(nums) - i > k - len(result) && result[len(result) - 1] < nums[i] {
            result = result[:len(result) - 1]
        }
        if len(result) < k {
            result = append(result, nums[i])
        }
    }
    return result
}
```