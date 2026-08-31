# go 1.21, clean code

**Author:** Colix
**Votes:** 1
**Link:** [https://leetcode.com/problems/4sum-ii/solutions/5220463/](https://leetcode.com/problems/4sum-ii/solutions/5220463/)

---

```
func fourSumCount(nums1 []int, nums2 []int, nums3 []int, nums4 []int) int {
	data := make(map[int]int, len(nums1)*len(nums2))
	for _, num1 := range nums1 {
		for _, num2 := range nums2 {
			data[num1+num2]++
		}
	}
	var ret int
	for _, num3 := range nums3 {
		for _, num4 := range nums4 {
			ret += data[-num3-num4]
		}
	}
	return ret
}
```