# Pattern-based

**Author:** VBjWXAyNZG
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-largest-palindrome-divisible-by-k/solutions/6009267/](https://leetcode.com/problems/find-the-largest-palindrome-divisible-by-k/solutions/6009267/)

---

# Code
```golang []
const (
	five   = '5'
	sixx   = "66"
	eights = "888"
)

var (
	nine     = []byte{'9'}
	pattern6 = []string{"77", "8"}
	pattern7 = []string{"7", "77", "5", "77", "7", "99", "4", "44", "6", "44", "4", "99"}
)

func largestPalindrome(n int, k int) string {
	var result = bytes.Repeat(nine, n) // will be used as is for k = 1, 3, 9

	switch k {
	case 2, 4, 8:
		wrap := min(bits.Len(uint(k))-1, n)
		copy(result[:wrap], eights)
		copy(result[n-wrap:], eights)

	case 5:
		result[0], result[n-1] = five, five

	case 6:
		if n < 3 {
			return sixx[:n]
		}
		result[0], result[n-1] = eights[0], eights[0]
		copy(result[(n-1)/2:], pattern6[n%2])

	case 7:
		copy(result[(n-1)/2:], pattern7[(n-1)%12])
	}

	return string(result)
}
```