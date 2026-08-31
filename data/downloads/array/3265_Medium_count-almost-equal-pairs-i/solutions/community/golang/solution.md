# Golang solution

**Author:** DenChenn
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-almost-equal-pairs-i/solutions/5687691/](https://leetcode.com/problems/count-almost-equal-pairs-i/solutions/5687691/)

---

# Intuition
A little improvement on some case

# Approach
case 1: when length are the same
case 2: try swap only when encountering zero

# Code
```golang []

func countPairs(nums []int) int {
	cnt := 0
	var (
		s1, s2 string
		l1, l2 int
	)
	for i := 0;i < len(nums)-1;i++ {
		for j := i+1;j < len(nums);j++ {
			s1 = strconv.Itoa(nums[i])
			s2 = strconv.Itoa(nums[j])
			l1 = len(s1)
			l2 = len(s2)

			if l1 == l2 {
				diff := 0
				mp1 := make(map[byte]bool)
				mp2 := make(map[byte]bool)
				for k := 0;k < l1;k++ {
					if s1[k] != s2[k] {
						diff++
						mp1[s1[k]] = true
						mp2[s2[k]] = true
						if diff > 2 {
							break
						}
					}
				}

				if diff == 0 {
					cnt++
				} else if diff == 2 {
					isWorked := true
					for k, _ := range mp1 {
						if !mp2[k] {
							isWorked = false
							break
						}
					}
					if isWorked {
						cnt++
					}
				}
			} else {
				if l1 > l2 && l1 > 0 {
					for k := 0;k < l1;k++ {
						if s1[k] == '0' {
							s1B := []byte(s1)
							s1B[k] = s1B[0]
							val1, _ := strconv.Atoi(string(s1B[1:]))
							val2, _ := strconv.Atoi(s2)
							if val1 == val2 {
								cnt++
								break
							}
						}
					}
				} else if l2 > l1 && l2 > 0 {
					for k := 0;k < l2;k++ {
						if s2[k] == '0' {
							s2B := []byte(s2)
							s2B[k] = s2B[0]
							val2, _ := strconv.Atoi(string(s2B[1:]))
							val1, _ := strconv.Atoi(s1)
							if val2 == val1 {
								cnt++
								break
							}

						}
					}
				}
			}
		}
	}

	return cnt
}


```