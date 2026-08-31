# Golang sort solution

**Author:** tjucoder
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/1828441/](https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/1828441/)

---

```go
func sortJumbled(mapping []int, nums []int) []int {
	trans := make(map[int][2]int)
	for i, num := range nums {
		trans[num] = [2]int{transNum(mapping, num), i}
	}
	sort.Slice(nums, func(i, j int) bool {
		if trans[nums[i]][0] == trans[nums[j]][0] {
			return trans[nums[i]][1] < trans[nums[j]][1]
		}
		return trans[nums[i]][0] < trans[nums[j]][0]
	})
    return nums
}

func transNum(mapping []int, input int) int {
	res := 0
	inputString := strconv.Itoa(input)
	for _, c := range inputString {
		res = res*10 + mapping[c-'0']
	}
	return res
}
```