# Golang Solution ||| Brude - Force ||| A lot of Explanations

**Author:** https_whxyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4947746/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4947746/)

---

# Intuition
Brude-force all subarrays, and get the ans.

# Approach
**Since n does not exceed 50**, the brude-force is quite appropriate here.

First of all, **let's create a variable that will store the minimum size of the array.** Each time we find an array where the beaten or will be >= k, we will update the minimum array size.
```go
    minSz := n + 1
```

**We'll start going through all the subarrays.**
$$l$$ will mean the beginning of the subarray to be searched, $$r$$ - the end. 

```go
    for l := 0; l <= n - 1; l++ {
        for r := l; r <= n - 1; r++ {
            // Above we go through all possible 
            // initial indices and final mass indices.
```

**After**, in each such enumerated array, **we will count its beaten or all elements.**

```go
    for l := 0; l <= n - 1; l++ {
        for r := l; r <= n - 1; r++ {
            // It's start finding bitwise OR
            num := nums[l]
            for index := l; index <= r; index++ {
                num = num | nums[index]
            }
            // We have bitwise OR in num variable
```

**If it turns out that the beaten or in the enumerated array >= k**, **we** 
**update minRz to the minimum of**
* minRz
* (r - l + 1)

```go
    for l := 0; l <= n - 1; l++ {
        for r := l; r <= n - 1; r++ {
            num := nums[l]
            for index := l; index <= r; index++ {
                num = num | nums[index]
            }
            // Our if
            if num >= k {
                // Updating minSz
                minSz = min(minSz, (r - l + 1))
            }
        }
    }
```

**If after the enumeration minSz remains equal to n + 1**, it means **that we have no suitable arrays** *(even where all elements of the array are involved)* t**hat their beat or are >= k, and therefore we will return -1**

```go
if minSz == n + 1 {
    return -1
}
```

# Complexity
# Time complexity: O(n^3)
**Because:**
- We loop through all possible initial indices of the array (O(n))
- All possible ends of all arrays (O(n))
- And in each enumerated array we find the beaten or (O(n))

# Space complexity: $$O(n)$$

# Code
```
func minimumSubarrayLength(nums []int, k int) int {
    n := len(nums)
    minSz := n + 1
    for l := 0; l <= n - 1; l++ {
        for r := l; r <= n - 1; r++ {
            num := nums[l]
            for index := l; index <= r; index++ {
                num = num | nums[index]
            }
            if num >= k {
                minSz = min(minSz, (r - l + 1))
            }
        }
    }
    if minSz == n + 1 {
        return -1
    }
    return minSz
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```