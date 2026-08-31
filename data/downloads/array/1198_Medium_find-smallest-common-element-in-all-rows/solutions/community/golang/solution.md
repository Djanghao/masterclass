# Row Positions with optimization using binary search

**Author:** bachngocson0812
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/4955930/](https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/4955930/)

---

# Intuition
Use `lowerbound` function to advance `pos[i]` instead of simple loop

# Approach
For each row, we track the position of the current element starting from zero. Then, we find the smallest element among all positions, and advance the position for the corresponding row. We find our answer when all positions point to elements with the same value.

# Complexity
- Time complexity: $$O(mn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func smallestCommonElement(mat [][]int) int {
    m, n := len(mat), len(mat[0])
    pos := make([]int, m)
    curMax, cnt := 0, 0
    for {
        for i := 0; i < m; i++ { 
            // use binary search instead of scan loop
            pos[i] += lowerBound(mat[i][pos[i]:], curMax)
            if pos[i] == n {
                return -1
            }
            if mat[i][pos[i]] != curMax {
                cnt = 1
                curMax = mat[i][pos[i]]
            } else {
                cnt++
                if cnt == m {
                    return curMax
                }
            }
        }
    }
}

func lowerBound(arr[] int, x int) int {
    l, h := 0, len(arr)
    for l < h {
        mid :=  l + (h - l) / 2
        if x <= arr[mid] {
            h = mid
        } else {
            l = mid + 1
        }
    }
    return l
}
```