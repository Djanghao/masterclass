# Python Elegant & Short | Counter

**Author:** Kyrylo-Ktl
**Votes:** 14
**Link:** [https://leetcode.com/problems/largest-palindromic-number/solutions/2518633/](https://leetcode.com/problems/largest-palindromic-number/solutions/2518633/)

---

	def largestPalindromic(self, num: str) -> str:
		count = Counter(num)
		palindrome = mid = ''

		for d in sorted(count.keys(), reverse=True):
			mid = max(mid, d * (count[d] & 1))
			palindrome += d * (count[d] // 2)

		palindrome = palindrome.lstrip('0')
		return (palindrome + mid + palindrome[::-1]) or '0'
