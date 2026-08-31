# Golang solution ( beat 100% cpu & memory)

**Author:** klakovskiy
**Votes:** 9
**Link:** [https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/1684339/](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/1684339/)

---

Pretty solution:
```
func sortedArrayToBST(nums []int) *TreeNode {
	if len(nums) == 0 {
		return nil
	}
	i := len(nums) / 2
	root := &TreeNode{Val: nums[i]}
	root.Left = sortedArrayToBST(nums[:i])
	root.Right = sortedArrayToBST(nums[i+1:])
	return root
}
```

beat 100% cpu&mem:
```
func sortedArrayToBST(nums []int) *TreeNode {
	if len(nums) == 0 {
		return nil
	}
	i := len(nums) / 2
	root := &TreeNode{Val: nums[i]}
	if i != 0 {
		root.Left = sortedArrayToBST(nums[:i])
	}
	if i != len(nums)-1 {
		root.Right = sortedArrayToBST(nums[i+1:])
	}
	return root
}
```