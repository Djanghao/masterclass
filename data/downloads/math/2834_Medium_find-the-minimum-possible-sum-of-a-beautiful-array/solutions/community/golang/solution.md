# Minimum Possible Sum of a Beautiful Array - Math O(1) Solution

**Author:** devyetii
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/solutions/4910259/](https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/solutions/4910259/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is an obvious math problem, related to arithmatic series, also since we're looking for the minimum sum, we gonna be greedy with the part to remove from the series so as to be "beautiful".

# Approach
The solution is to remove the intersecting part between the 2nd half of the series `S(1, target)` and the series `S(1, n)` from the series `S(1, n)` and compensate that removed part with a part of the same length starting from `max(n+1, target)`, hence removing the larger integers causing the array to be "unbeatuiful" and compensating them with the minimum possible elements.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(1)$$ (BEATS 100% !)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code (Go)
```
const MOD = 1000000007

func minimumPossibleSum(n int, target int) int {
    removalStart := (target / 2) + 1
    if removalStart > n {
        return int(sumInclusive(1, n) % MOD)
    }

    removalEnd := target - 1
    if n < removalEnd {
        removalEnd = n
    }

    removedCount := removalEnd - removalStart + 1

    additionStart := n + 1
    if target > additionStart {
        additionStart = target
    }

    additionEnd := additionStart + removedCount - 1

    originalSum := sumInclusive(1, n)
    removedPart := sumInclusive(removalStart, removalEnd)
    addedPart := sumInclusive(additionStart, additionEnd)
    return int((originalSum - removedPart + addedPart) % MOD)
}

// sum(a,b) = a + (a+1) + .... + b
func sumInclusive(a int, b int) int64 {
    return (int64(b * (b+1)) - int64(a * (a - 1))) / 2
}
```