# Golang | sliding window

**Author:** gauravgola96
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/1518212/](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/1518212/)

---

```
func numberOfSubstrings(s string) int {
	windEnd := 0
	var counter = make(map[byte]int, 3)
	ans := 0
	res := 0
	for windStart:=0; windStart<len(s) ; windStart++{
		counter[s[windStart]]++

		for windEnd<len(s) && counter['a']>0 && counter['b']>0 && counter['c']>0 {
			ans++
			counter[s[windEnd]]--
			windEnd++
		}
		res += ans

	}

	return res

}
```