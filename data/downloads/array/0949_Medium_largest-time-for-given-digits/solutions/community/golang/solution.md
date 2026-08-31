# GO | Using Permutations

**Author:** 2107mohitverma
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-time-for-given-digits/solutions/5865056/](https://leetcode.com/problems/largest-time-for-given-digits/solutions/5865056/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func largestTimeFromDigits(arr []int) string {
	permutations := make([]int, 0)
	solve(0, arr, &permutations)
	sort.Ints(permutations)
	if len(permutations) > 0 {
		largestTimeInInt := permutations[len(permutations)-1]
        if largestTimeInInt == 0 {
            return "00:00"
        }
		largestTimeInString := strconv.Itoa(largestTimeInInt)
		zeroesToAppend := 4
		for largestTimeInInt != 0 {
			zeroesToAppend--
			largestTimeInInt /= 10
		}
		largestTimeInString = strings.Repeat("0", zeroesToAppend) + largestTimeInString

		return largestTimeInString[:2] + ":" + largestTimeInString[2:]
	}
	return ""
}

func solve(idx int, arr []int, permutations *[]int) {
	if idx == len(arr) {
		firstTwoDigits := arr[0]*10 + arr[1]
		lastTwoDigits := arr[2]*10 + arr[3]
		if !(firstTwoDigits > 23 || lastTwoDigits > 59) {
			number := arr[0]*1000 + arr[1]*100 + arr[2]*10 + arr[3]
			(*permutations) = append(*permutations, number)
		}
		return
	}
	for i := idx; i < len(arr); i++ {
		arr[idx], arr[i] = arr[i], arr[idx]
		solve(idx+1, arr, permutations)
		arr[idx], arr[i] = arr[i], arr[idx]
	}
}
```