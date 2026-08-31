# go virtual whitelist

**Author:** xyx530538772
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-pick-with-blacklist/solutions/2561158/](https://leetcode.com/problems/random-pick-with-blacklist/solutions/2561158/)

---

```go
type Solution struct {
	blackListMapping map[int]int
	n                int
}

func Constructor(n int, blacklist []int) Solution {
	rand.Seed(time.Now().UnixNano())
	blackListMapping := make(map[int]int) // black list element -> whitelisted elements in the last
	l := n - 1
	for _, val := range blacklist {
		blackListMapping[val] = -1
	}
	for _, val := range blacklist {
		if val >= n-len(blacklist) {
			continue
		}
		for {
			// found the last element that not in the black list for constructing the mapping
			if _, ok := blackListMapping[l]; ok {
				l--
			} else {
				break
			}
		}
		blackListMapping[val] = l
		l--
	}
	return Solution{
		blackListMapping: blackListMapping,
		n:                n - len(blacklist),
	}
}

func (this *Solution) Pick() int {
	i := rand.Intn(this.n)
	if newVal, ok := this.blackListMapping[i]; ok {
		return newVal
	}
	return i
}
```