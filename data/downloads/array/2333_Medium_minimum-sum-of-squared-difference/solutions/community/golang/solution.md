# Go Solution || Linear Time Complexity

**Author:** 14mayank14
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-squared-difference/solutions/4668168/](https://leetcode.com/problems/minimum-sum-of-squared-difference/solutions/4668168/)

---

# Approach
##### Calculate Initial Differences:
- Iterate through both arrays (arr1 and arr2).
- For each pair of corresponding elements, calculate the absolute difference and update the frequency of that difference in the freq unordered map.
- Keep track of the maximum difference encountered (maxDiff).

##### Perform Operations to Minimize Differences:
- While there are remaining operations k > 0 and there are differences to be adjusted maxDiff > 0, check if the current maxDiff exists in the frequency map.
- If it does, determine the minimum mn between the remaining operations k and the frequency of the current difference.
- Update the frequency map and decrement the remaining operations and the frequency of the current difference accordingly.
- Increment the frequency of the difference one less than the current maximum difference freq[maxDiff-1] by mn.

##### Calculate Minimum Sum of Squared Differences:
- For each entry in the map, calculate the sum of squared differences (difference * difference * frequency) and accumulate the result res.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n + maxDiff)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func minSumSquareDiff(arr1 []int, arr2 []int, k1 int, k2 int) int64 {
    n := len(arr1)
    k := k1 + k2
    var maxDiff int

    freq := make(map[int]int)
    for i := 0; i<n; i++ {
        diff := abs(arr1[i] - arr2[i])
        freq[diff]++
        maxDiff = max(diff, maxDiff)
    }

    for maxDiff > 0 && k > 0 {
        if val, exists := freq[maxDiff]; exists {
            mn := min(k, val)
            k -= mn
            freq[maxDiff] -= mn
            freq[maxDiff-1] += mn
        }

        maxDiff--
    }

    var res int64
    for diff, diffFreq := range freq {
        res = res + (int64)(diff * diff * diffFreq)
    }

    return res
}

func abs(x int) int {
    if x >= 0 {
        return x
    }

    return -x
}

func max(x int, y int) int {
    if x >= y {
        return x
    }

    return y
}

func min(x int, y int) int {
    if x <= y {
        return x
    }

    return y
}
```