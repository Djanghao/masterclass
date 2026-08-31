# Swift solution with comments

**Author:** KickerChen
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-palindrome/solutions/1046663/](https://leetcode.com/problems/prime-palindrome/solutions/1046663/)

---

According to one of the 11's divisibility rule, form the alternating sum of the digits.
If the result can be divisible by 11, the original number must be 11's multiple. 
ex. 2486 => 2 - 4 + 8 - 6 = 0 * 11

So we can know: **any palindrome with even number of digits must be divisible by 11**
ex. abba => a - b + b - a = 0 * 11

That is, any palindrome with even number of digits is not a prime. Then we can skip them.

```
func primePalindrome(_ N: Int) -> Int {
	// edge case (11 is the only prime palindrome with even number of digits)
	if 8 <= N && N <= 11 { return 11 }

	var _N = N
	while true {
		if isPrime(_N) && isPalindrome(String(_N)) { return _N }
		let digits = String(_N).count
		_N = digits % 2 == 0 ? Int(pow(10, Double(digits)) + 1) : _N + 1
	}
}

func isPrime(_ n: Int) -> Bool {
	guard n > 1 else { return false }
	guard n != 2 else { return true }
	guard n % 2 != 0 else { return false }

	var i = 3
	while i * i <= n {
		if n % i == 0 { return false }
		i += 1
	}
	return true
}
        
func isPalindrome(_ s: String) -> Bool {
	return s == String(s.reversed())
}
```