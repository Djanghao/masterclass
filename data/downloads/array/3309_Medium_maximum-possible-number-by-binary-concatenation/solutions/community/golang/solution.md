# 6 possible permutations. Try them all.

**Author:** cakuang1
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/solutions/5878994/](https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/solutions/5878994/)

---


# Code
```golang []

func toBinary(n int) string {
	return strconv.FormatInt(int64(n), 2)
}

func maxGoodNumber(nums []int) int {
	permutations := [][]int{
		{nums[0], nums[1], nums[2]},
		{nums[0], nums[2], nums[1]},
		{nums[1], nums[0], nums[2]},
		{nums[1], nums[2], nums[0]},
		{nums[2], nums[0], nums[1]},
		{nums[2], nums[1], nums[0]},
	}

	maxVal := math.MinInt64

	for _, perm := range permutations {
		binaryConcat := toBinary(perm[0]) + toBinary(perm[1]) + toBinary(perm[2])		
		numVal, _ := strconv.ParseInt(binaryConcat, 2, 64)
		if int(numVal) > maxVal {
			maxVal = int(numVal)
		}
	}

	return maxVal
}
```