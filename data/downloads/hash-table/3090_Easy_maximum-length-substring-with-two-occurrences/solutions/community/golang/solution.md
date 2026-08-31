# Go easy solution

**Author:** Sudarshan_A_M
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/5742303/](https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/5742303/)

---



# Code
```golang []
func maximumLengthSubstring(s string) int {
	start, end, max := 0, 0, -1

	var mp = make(map[string]int)
	count := 0
	for end < len(s){
		mp[string(s[end])]++
		count++
		for _, v := range mp {
			if v > 2 {
				mp[string(s[start])]--
				start++
				count--
			}
			
		}
		if count > max {
			max = count
		}
		end++

	}
	return max
}
```