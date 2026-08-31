# Brute force with Backtracking beats 100% at the moment of submission :-)

**Author:** ilya-pimenov
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/solutions/4545913/](https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/solutions/4545913/)

---

# Intuition & Approach

I don't understand the catch as each step is seemingly independent.

So just pick the lower non-decreasing number each time?

PS Ah, the catch is that it is a _sub array_ that doesn't necessarily start at the beginning.

Sol:

Each time we "go" with a smaller number -> backtrack to it if we had to stop.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(1)$$

# Code
```
func maxNonDecreasingLength(nums1 []int, nums2 []int) int {    
    min := func(a, b int) int {
        if a < b {
            return a
        }
        return b
    }

    prev := nums1[0]
    if nums2[0] < prev {
        prev = nums2[0]
    }    
    ans := 1
    opt := 1
    lastMin := -1
    i := 1
    for ; i < len(nums1); i++ {
        smaller, bigger := nums1[i], nums2[i]
        if smaller > bigger {
            smaller, bigger = bigger, smaller
        }
        if prev <= smaller {
            prev = smaller
            opt++
        } else if prev <= bigger {
            if lastMin < 0 {
                lastMin = i
            }
            prev = bigger
            opt++
        } else { /* current sequence broke, restart */
            if opt > ans {
                ans = opt
            }
            if lastMin > 0 { /* we saw a point where we had to choose bigger value in the past to preserve sequence */
                i = lastMin
                lastMin = -1
                opt = 1
                prev = min(nums1[i], nums2[i])
            } else {
                opt = 1
                prev = smaller
            }
        }
    }
    if opt > ans {
        ans = opt
    }
    return ans
}
```