# Golang 123 ms 8.5 MB

**Author:** maxhero90
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-element-iv/solutions/2764797/](https://leetcode.com/problems/next-greater-element-iv/solutions/2764797/)

---

```
func secondGreaterElement(nums []int) []int {
	s1 := make([]int32, 0, 1)
	s2 := make([]int32, 0, 1)

	for i, num := range nums {
		for len(s2) != 0 && nums[s2[len(s2)-1]] < num {
			nums[s2[len(s2)-1]] = num
			s2 = s2[:len(s2)-1]
		}

		idx := sort.Search(len(s1), func(i int) bool {
			return nums[s1[i]] < num
		})
		if idx == len(s1) {
			s1 = append(s1, int32(i))
		} else {
			s2 = append(s2, s1[idx:]...)
			s1[idx] = int32(i)
			s1 = s1[:idx+1]
		}
	}
	for _, s := range [...][]int32{s1, s2} {
		for _, idx := range s {
			nums[idx] = -1
		}
	}
	return nums
}
```