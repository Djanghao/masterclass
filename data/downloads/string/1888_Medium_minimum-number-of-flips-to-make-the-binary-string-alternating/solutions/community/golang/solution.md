# Go O(n) solution, using map cleaner than multiple if condtions

**Author:** firas5445
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/5193039/](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/5193039/)

---

# Code
```
type pair struct {
	val    byte
	isEven bool
}


func minFlips(s string) int {
	m := map[pair]int{} // maps a val,isEven pair to the number of occurrences, will have maximum length 4
	toPair := func(sIdx int, parityIdx int) pair {
		return pair{s[sIdx], parityIdx%2 == 0}
	}
	getFlips := func() int {
		return min(m[pair{'1', true}]+m[pair{'0', false}], m[pair{'1', false}]+m[pair{'0', true}])
	}

	// do first window
	for i := 0; i < len(s); i++ {
		m[toPair(i, i)]++
	}
	// do the rest of the fixed size windows
	res := getFlips()

	lo := 0
	for hi := len(s); hi < 2*len(s); hi++ {
		// extend window
		m[toPair(hi%len(s), hi)]++
		// shrink from the side of lo
		m[toPair(lo, lo)]--
		lo++

		res = min(res, getFlips())
	}
	return res
}
```