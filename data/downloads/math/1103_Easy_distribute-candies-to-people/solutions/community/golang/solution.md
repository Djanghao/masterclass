# Golang Beginner Solution

**Author:** Avinash92c
**Votes:** 1
**Link:** [https://leetcode.com/problems/distribute-candies-to-people/solutions/361961/](https://leetcode.com/problems/distribute-candies-to-people/solutions/361961/)

---

```
func distributeCandies(candies int, num_people int) []int {
	result := make([]int, num_people)
	pidx := 0
	ctr := 1
	for candies > 0 {
		// fmt.Println(pidx, candies, ctr)
		if pidx == num_people {
			pidx = 0
		}
		if candies < ctr {
			result[pidx] += candies
			break
		}
		result[pidx] += ctr
		candies -= ctr
		ctr++
		pidx++
	}
	return result
}
```