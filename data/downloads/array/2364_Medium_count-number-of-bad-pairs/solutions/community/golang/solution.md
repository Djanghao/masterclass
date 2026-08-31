# [Golang] O(n) solution

**Author:** SilencerBUPT
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-bad-pairs/solutions/2390264/](https://leetcode.com/problems/count-number-of-bad-pairs/solutions/2390264/)

---

Bad pairs: ```j > i && j-i != nums[j]-nums[i]```.
Let *T* be the number of total pairs, *T := n * (n-1) / 2*. Let *b* and *g* be the number of bad and good pairs, respectively. *b + g = T*.
For good pairs, ```j > i && j-i == nums[j]-nums[i]```, which equals to ```j > i && nums[j]-j == nums[i]-i```.

```
func countBadPairs(nums []int) int64 {
    n := len(nums)
	m := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		m[nums[i]-i]++
	}
	res := int64(n * (n - 1) / 2)
	for _, v := range m {
		if v > 1 {
			res -= int64(v * (v - 1) / 2)
		}
	}
	return res
}
```