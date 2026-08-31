# [Golang] Recursive and binary search

**Author:** user0440H
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-nodes-that-are-great-enough/solutions/3826568/](https://leetcode.com/problems/count-nodes-that-are-great-enough/solutions/3826568/)

---

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
func countGreatEnoughNodes(root *TreeNode, k int) int {
  var res int
  helper(root, k, &res)
  return res
}

func helper(root *TreeNode, k int, res *int) []int {
  curr := []int{root.Val}
  if root.Left != nil {
    left := helper(root.Left, k, res)
    curr = merge(curr, left)
  }
  if root.Right != nil {
    right := helper(root.Right, k, res)
    curr = merge(curr, right)
  }
  // We'll find the position of first occurrence of root.Val in curr
  // we must have at least k elements that are less than root.Val
  pos := lowerBound(curr, root.Val)
  if pos >= k {
    *res++
  }
  // curr is the sorted list of elements in current subtree
  if len(curr) > k {
    return curr[:k] // only return up to k nodes
  }
  return curr
}

func lowerBound(nums []int, target int) int {
  left, right := 0, len(nums)-1
  for left <= right {
    mid := left + (right - left)/2
    if nums[mid] >= target {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
}

func merge(nums1, nums2 []int) []int {
  res := make([]int, 0, len(nums1) + len(nums2))
  i, j := 0, 0
  for i < len(nums1) && j < len(nums2) {
    if nums1[i] <= nums2[j] {
      res = append(res, nums1[i])
      i++
    } else {
      res = append(res, nums2[j])
      j++
    }
  }
  for i < len(nums1) {
    res = append(res, nums1[i])
    i++
  }
  for j < len(nums2) {
    res = append(res, nums2[j])
    j++
  }
  return res
}

```