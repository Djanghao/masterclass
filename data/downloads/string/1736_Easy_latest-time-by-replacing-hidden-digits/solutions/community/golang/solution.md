# Golang O(1) solution

**Author:** nathannaveen
**Votes:** 3
**Link:** [https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/1249646/](https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/1249646/)

---

```
func maximumTime(time string) string {
	res := strings.Split(time, "")
	
	if (res[1] == "?" || res[1] <= "3") && res[0] == "?" {
		res[0] = "2"
	} else if res[0] == "?" {
		res[0] = "1"
	}

	if res[0] == "2" && res[1] == "?" {
		res[1] = "3"
	} else if res[1] == "?" {
		res[1] = "9"
	}

	if res[3] == "?" { res[3] = "5" }

	if res[4] == "?" { res[4] = "9" }

	return strings.Join(res, "")
}
```

*(Since I have not writen a solution feel free to ask questions in the comment section)*