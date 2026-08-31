# GoLang | Recursion with Memoization

**Author:** aristorinjuang
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-possible-full-binary-trees/solutions/3430140/](https://leetcode.com/problems/all-possible-full-binary-trees/solutions/3430140/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Editorial solution in Go.

# Approach
<!-- Describe your approach to solving the problem. -->
Recursion with Memoization

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(2 ^ n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(2 ^ n)$$

# Code
```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
var memo = map[int][]*TreeNode{}

func allPossibleFBT(n int) []*TreeNode {
    if _, ok := memo[n]; !ok {
        result := []*TreeNode{}

        switch {
        case n == 1:
            result = append(result, &TreeNode{})
        case n % 2 == 1:
            for i := 1; i < n; i += 2 {
                left := allPossibleFBT(i)
                right := allPossibleFBT(n - i - 1)

                for _, l := range left {
                    for _, r := range right {
                        result = append(result, &TreeNode{ 0, l, r })
                    }
                }
            }
        }

        memo[n] = result
    }

    return memo[n]
}
```