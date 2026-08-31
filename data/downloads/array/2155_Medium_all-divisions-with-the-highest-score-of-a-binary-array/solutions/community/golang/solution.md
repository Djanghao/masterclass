# Golang

**Author:** german_gorelkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/solutions/5144229/](https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/solutions/5144229/)

---


# Code
```
func maxScoreIndices(nums []int) []int {
	var result []int
	var numsL, numsR int

	for _, v := range nums {
		if v == 1 {
			numsR++
		}
	}

	maxSum := numsR
	result = append(result, 0)

	for i, v := range nums {
		if v == 1 {
			numsR--
		} else {
			numsL++
		}

		if maxSum == numsL+numsR {
			result = append(result, i+1)
		} else if maxSum < numsL+numsR {
			maxSum = numsL + numsR
			result = result[:0]
			result = append(result, i+1)
		}
	}

	return result
}
```