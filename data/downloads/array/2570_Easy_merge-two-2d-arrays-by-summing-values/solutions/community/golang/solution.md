# Golang solution

**Author:** the-arcade-01
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/6040495/](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/6040495/)

---

# Complexity
- Time complexity: O(n+m), n = len(nums1), m = len(nums2)

- Space complexity: O(n), n = total sum of both the nums arrays 

# Code
```golang []
func mergeArrays(nums1 [][]int, nums2 [][]int) [][]int {
	i, j := 0, 0
	ans := [][]int{}
	for i < len(nums1) && j < len(nums2) {
		if nums1[i][0] == nums2[j][0] {
			ans = append(ans, []int{nums1[i][0], nums1[i][1] + nums2[j][1]})
			i++
			j++
		} else if nums1[i][0] > nums2[j][0] {
			ans = append(ans, nums2[j])
			j++
		} else {
			ans = append(ans, nums1[i])
			i++
		}
	}
	for i < len(nums1) {
		ans = append(ans, nums1[i])
		i++
	}
	for j < len(nums2) {
		ans = append(ans, nums2[j])
		j++
	}
	return ans
}
```