# Funny solution - I was not able to do it during the contest

**Author:** tuanbieber
**Votes:** 1
**Link:** [https://leetcode.com/problems/query-kth-smallest-trimmed-number/solutions/2299177/](https://leetcode.com/problems/query-kth-smallest-trimmed-number/solutions/2299177/)

---

```
func smallestTrimmedNumbers(nums []string, queries [][]int) []int {
	result := make([]int, len(queries))

	var toInt func(string) int
	toInt = func(s string) int {
		res, err := strconv.Atoi(s)

		if err != nil {
			panic(err)
		}

		return res
	}

	var isSmaller func(string, string) bool
	isSmaller = func(s1 string, s2 string) bool {
        if len(s1) < len(s2) {
            return true
        }
        
        if len(s1) > len(s2) {
            return false
        }

		for i := 0; i < len(s1); i++ {
			if s1[i] < s2[i] {
				return true
			} else if s1[i] > s2[i] {
				return false
			}
		}

		return true
	}

	for i, query := range queries {
		var currentNums [][2]string

		trim := query[1]
		index := query[0]

		for numIdx, num := range nums {
			currentNums = append(currentNums, [2]string{num[len(num)-trim:], fmt.Sprintf("%v", numIdx)})
		}

		sort.Slice(currentNums, func(i, j int) bool {
			if currentNums[i][0] != currentNums[j][0] {
				return isSmaller(currentNums[i][0], currentNums[j][0])
			} else {
                return isSmaller(currentNums[i][1], currentNums[j][1])
			}
		})

		result[i] = toInt(currentNums[index-1][1])

	}

	return result
}

```