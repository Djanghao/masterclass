# Golang Solution ||| Segment Tree + Binary Search + HashTable ||| Explanations

**Author:** https_whxyan
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/solutions/5018215/](https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/solutions/5018215/)

---

## **Explanations in code**
# Complexity
- Time complexity:
O(N * log^2(N))

- Space complexity:
$$O(N)$$

# Code
```
// Tree building function
func build(tree *[]int, v int, l, r int, nums *[]int) {
    if l == r {
        (*tree)[v] = (*nums)[l]
        return 
    }
    mid := (l + r) / 2
    build(tree, 2 * v, l, mid, nums)
    build(tree, 2 * v + 1, mid + 1, r, nums)
    (*tree)[v] = max((*tree)[2 * v], (*tree)[2 * v + 1])
}

// Answer getting function 
func getMax(tree *[]int, v int, l, r int, ll, rr int) int {
    if l <= ll && rr <= r {
        return (*tree)[v]
    }
    if rr < l || r < ll {
        return math.MinInt32
    }
    
    mid := (ll + rr) / 2
    lAns := getMax(tree, v * 2, l, r, ll, mid)
    rAns := getMax(tree, v * 2 + 1, l, r, mid + 1, rr)
    return max(lAns, rAns)
}

// This function determines the maximum in a map 
// for which it is true that in the segment [indexes[l], indexes[r]] 
// the maximum number will be equal to indexes[l] = indexes[r]]
//
// This relationship is linear at fixed l, so 
// I used binary search here.
func getMxPossibleIndex(start int, indexes *[]int, tree *[]int, nNums int) int {
    mxValue := getMax(tree, 1, (*indexes)[start], (*indexes)[start], 0, nNums - 1)
    l, r := start, len(*indexes) - 1
    
    // Binary Search, O(log(N))
    for l < r {
        mid := (l + r) / 2
        
        if getMax(tree, 1, (*indexes)[l], (*indexes)[mid], 0, nNums - 1) == mxValue {
            l = mid
        } else {
            r = mid - 1
        }
        
        if l + 1 == r {
            if getMax(tree, 1, (*indexes)[l], (*indexes)[r], 0, nNums - 1) == mxValue {
                l = r
            } else {
                r = l
            }
        }
    }
    
    return l
}

func getAnsForIndexes(l int, indexes *[]int, tree *[]int, nNums int) int64 {
    return int64(getMxPossibleIndex(l, indexes, tree, nNums) - l + 1)
}

func numberOfSubarrays(nums []int) int64 {
    n := len(nums)
    // For each value, I save the idexes. 
    mpValues := make(map[int][]int)
    for i, num := range nums {
        mpValues[num] = append(mpValues[num], i)
    }
    
    // I'm building a segment tree
    tree := make([]int, 5 * n)
    build(&tree, 1, 0, n - 1, &nums)
    

    var ans int64 = 0
    // For each group of indices whose values are the same
    for _, indexes := range mpValues {
        nIndexes := len(indexes)
        // I'm going over the beginning of the segment
        for l := 0; l <= nIndexes - 1; l++ {
            // And determining the answer for the beginning of the answer.
            ans += getAnsForIndexes(l, &indexes, &tree, n)
        }
    }
    
    return ans
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```