# Go | Beats 100% runtime | Explained solution | With comments | Binary search

**Author:** dimaglushkov
**Votes:** 4
**Link:** [https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/3217654/](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/3217654/)

---

# Code\r
```\r
func shipWithinDays(weights []int, days int) int {\r
    // Defining a function to check if it's possible to send\r
    // all the packages withing a given days with some capacity\r
	fitsCapacity := func(cap int) bool {\r
		s, d := 0, 0\r
		for i := 0; i < len(weights) && d < days; i++ {\r
			w := weights[i]\r
			if s+w <= cap {\r
				s += w\r
			} else {\r
				d++\r
				s = w\r
			}\r
		}\r
		return d < days\r
	}\r
\r
    // Calculating possible values for the capacity\r
    // - For min capacity - it can't be less than the max weight, \r
    // because it would be impossible to the max weight otherwise\r
    // - For max capacity - it's a sum of all the weights \r
    // to be able to send everything in any number of days (e.g. in 1 day)\r
	i, j := 0, 0\r
	for _, w := range weights {\r
		if w > i {\r
			i = w\r
		}\r
		j += w\r
	}\r
\r
    // Using binary search from the min cap to the max cap\r
    // to find the answer\r
	for i < j {\r
		h := int(uint(i+j) >> 1)\r
		if !fitsCapacity(h) {\r
			i = h + 1\r
		} else {\r
			j = h\r
		}\r
	}\r
	return i\r
}\r
```