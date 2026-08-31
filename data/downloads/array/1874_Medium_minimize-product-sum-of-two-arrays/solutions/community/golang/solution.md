# ✅1874. Minimize Product Sum of Two Arrays

**Author:** tekashi
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/3712666/](https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/3712666/)

---

# Code
```
func reverse(array []int) {
	for i, j := 0, len(array)-1; i < j; i, j = i+1, j-1 {
		array[i], array[j] = array[j], array[i]
	}
}

func minProductSum(nums1 []int, nums2 []int) (ans int) {
	sort.Ints(nums1)
	sort.Ints(nums2)
	reverse(nums2)
	for i := 0; i < len(nums1); i++ {
		ans += nums1[i] * nums2[i]
	}
	return
}

```