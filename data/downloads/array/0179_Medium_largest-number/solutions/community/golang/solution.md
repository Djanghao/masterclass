# golang

**Author:** caihua
**Votes:** 7
**Link:** [https://leetcode.com/problems/largest-number/solutions/255814/](https://leetcode.com/problems/largest-number/solutions/255814/)

---

```
func largestNumber(nums []int) string {
	strs := make([]string, len(nums))
	for i := 0; i < len(nums); i++ {
		strs[i] = strconv.Itoa(nums[i])
	}
	sort.Slice(strs, func(i, j int) bool {
		return (strs[i] + strs[j]) > (strs[j] + strs[i])
	})
	numsStr := strings.Join(strs, "")
	numsStr = strings.TrimLeft(numsStr, "0")
	if numsStr == "" {
		return "0"
	}
	return numsStr
}

```