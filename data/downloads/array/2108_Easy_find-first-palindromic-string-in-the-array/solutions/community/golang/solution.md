# Find First Palindromic String in the Array - Simple Solution in Golang !!

**Author:** deleted_user
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/4719253/](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/4719253/)

---

# Code
```
package main

import (
	"fmt"
)

func firstPalindrome(words []string) string {
	for _, word := range words {
		if isPalindrome(word) {
			return word
		}
	}
	return ""
}

func isPalindrome(s string) bool {
	i := 0
	j := len(s) - 1
	for i < j {
		if s[i] != s[j] {
			return false
		}
		i++
		j--
	}
	return true
}


```