# [Go] 8ms beats 100% (previous 100% was 40ms)

**Author:** sebnyberg
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-beauty-of-all-substrings/solutions/1179470/](https://leetcode.com/problems/sum-of-beauty-of-all-substrings/solutions/1179470/)

---

I was a bit surprised that this solution was so much faster than the previous best solution that I figured it was worth posting.

* Keep two frequency lists, one for the number of characters at a certain frequency, and one for the frequency of a given character
* When adding a new character, reduce the count in that frequency group and increment the character frequency
* If the frequency of the current character is the current min value, check if the count of that frequency group is zero. If it is, increment the min value
* Also, if the new frequency is higher than the previous max, adjust maximum

This makes for quick min/max tracking while adding new numbers.


```go
func beautySum(s string) int {
	n := len(s)
	var totalBeauty int
	for i := range s {
		var charFreq [26]int
		countPerFreq := make([]int, 500)
		max := 0
		min := math.MaxInt32
		for j := i; j < n; j++ {
			ch := s[j] - 'a'
			f := charFreq[ch]
			countPerFreq[f]--
			countPerFreq[f+1]++
			charFreq[ch]++
			if f+1 > max {
				max = f + 1
			}
			if f+1 < min || (min == f && countPerFreq[min] == 0) {
				min = f + 1
			}
			if max > min {
				totalBeauty += max - min
			}
		}
	}
	return totalBeauty
}
```