# Two Golang solutions both faster than 100%

**Author:** nathannaveen
**Votes:** 4
**Link:** [https://leetcode.com/problems/sum-of-unique-elements/solutions/1065372/](https://leetcode.com/problems/sum-of-unique-elements/solutions/1065372/)

---

`First solution = O(1) space`
`Second solution = O(n) space` *`map`*

**First solution**
```
func sumOfUnique(nums []int) int {
	sum := 0
	sort.Ints(nums)
	if len(nums) > 2 {
		if nums[0] != nums[1] {
			sum += nums[0]
		}
		if nums[len(nums)-1] != nums[len(nums)-2] {
			sum += nums[len(nums)-1]
		}
	} else if len(nums) == 1 {
		sum += nums[0]
	} else if len(nums) == 2 {
		if nums[0] != nums[1] {
			sum += nums[1] + nums[0]
		}
	}
	
	
	for i := 1; i < len(nums)-1; i++ {
		if nums[i] != nums[i-1] && nums[i] != nums[i+1] {
			sum += nums[i]
		}
	}
	return sum
}
```

**Second Solution**
```
func sumOfUnique(nums []int) int {
	sum := 0
	m := make(map[int] int)
	for _, num := range nums {
		m[num]++
	}
	for i, i2 := range m {
		if i2 == 1 {
			sum += i
		}
	}
	return sum
}
```