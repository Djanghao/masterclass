# Golang | Beats 100% | Memoization | Recursive solution

**Author:** dimaglushkov
**Votes:** 1
**Link:** [https://leetcode.com/problems/scramble-string/solutions/3359020/](https://leetcode.com/problems/scramble-string/solutions/3359020/)

---

# Code
```
func isScramble(s1 string, s2 string) bool {
	if len(s1) != len(s1) {
		return false
	}
	var s1Letters, s2Letters [26]int
	for _, l := range s1 {
		s1Letters[int(l-'a')]++
	}
	for _, l := range s2 {
		s2Letters[int(l-'a')]++
	}
	if s1Letters != s2Letters {
		return false
	}

	memo := make(map[string]bool)
	var test func(s, t string) bool
	test = func(s, t string) bool {
		if s == t || len(s) == 1 {
			return true
		}
		n := len(s)
		key := s + t
		if val, ok := memo[key]; ok {
			return val
		}
		
		var sl1, sl2, tl [26]int
		for i := 1; i < n; i++ {
			sl1[s[i-1]-'a']++
			sl2[s[n-i]-'a']++
			tl[t[i-1]-'a']++

			if sl1 == tl && test(s[:i], t[:i]) && test(s[i:], t[i:]) {
				memo[key] = true
				return true
			}
			if sl2 == tl && test(s[n-i:], t[:i]) && test(s[:n-i], t[i:]) {
				memo[key] = true
				return true
			}
			memo[key] = false
		}

		return false
	}
	
	return test(s1, s2)
}
```