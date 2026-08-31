# Actual bit manipulation, 98% runtime, 94%mem

**Author:** Skirnir
**Votes:** 1
**Link:** [https://leetcode.com/problems/repeated-dna-sequences/solutions/4214866/](https://leetcode.com/problems/repeated-dna-sequences/solutions/4214866/)

---

# Approach
Since we only have four letters, we can easily encode them using only two bits, therefore every 10-letter sequence can be represented as 20 bits i.e. a single integer (no matter int32 or int64).

Further, if we look at the given letters we find out we can encode them using cheap bitwise operations (`b & 6 >> 1`):

	Letter	Code	ASCII dec.	ASCII bin.
	A 		00 		65 			01000001
	C 		01 		67 			01000011
	G 		11 		71 			01000111
	T 		10 		84 			01010100

Once encoded, we can use a single int variable as sliding window to count occurrences of every 10-letter subsequence.

At last, we decode only those sequences that repeat two or more times.


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```

func findRepeatedDnaSequences(s string) []string {
	if len(s) < 11 {
		return []string{}
	}

	var a int

	m := make(map[int]int, len(s)-9)

    // fill the window
	for i := 0; i <= 9; i++ {
		a = (a << 2) | toBits(s[i])
	}
	m[a]++

    // slide
	for i := 10; i < len(s); i++ {
		a = (a << 2 & 1048575) | toBits(s[i])
		m[a]++
	}

    // we can trade some time to count elements of m with 
    // values > 1 to avoid allocating extra space
	res := make([]string, 0, len(m))
	for k, v := range m {
		if v > 1 {
			res = append(res, toString(k))
		}
	}

	return res
}

func toBits(b byte) int {
	return int(b & 6 >> 1)
}

func toString(x int) string {
	res := make([]byte, 0, 10)
	for i := 9; i >= 0; i-- {
		v := 3 << (i * 2) & x >> (i * 2)
		switch v {
		case 0:
			res = append(res, 65)
		case 1:
			res = append(res, 67)
		case 2:
			res = append(res, 84)
		case 3:
			res = append(res, 71)
		}
	}
	return string(res)
}
```