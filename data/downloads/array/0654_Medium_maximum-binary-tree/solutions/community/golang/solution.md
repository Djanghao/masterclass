# Beat 82% golang submission

**Author:** xunsavior
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-binary-tree/solutions/448902/](https://leetcode.com/problems/maximum-binary-tree/solutions/448902/)

---

```
func constructMaximumBinaryTree654(nums []int) *TNode {
	if len(nums) == 0 {
		return nil
	}
	i, v := helper654(nums)
	return &TNode{
		Val:   v,
		Left:  constructMaximumBinaryTree654(nums[:i]),
		Right: constructMaximumBinaryTree654(nums[i+1:]),
	}
}

// get max val and its index of a slice
func helper654(nums []int) (index int, value int) {
	if len(nums) == 1 {
		return 0, nums[0]
	}

	for i, v := range nums {
		if v > value {
			value = v
			index = i
		}
	}
	return
}
```