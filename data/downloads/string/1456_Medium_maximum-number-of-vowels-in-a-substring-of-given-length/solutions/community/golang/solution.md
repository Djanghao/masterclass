# [ Go Solution ]Great explanation and Full Description

**Author:** sansaian
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/3685518/](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/3685518/)

---

# Intuition
The problem asks for the maximum number of vowels that can be found in a substring of the given string `s` of length `k`. This can be solved by using a sliding window approach where we slide a window of length `k` through the string and keep track of the number of vowels in the window.

# Approach
We initialize two pointers `l` and `r` to `0`, a variable `sumVow` to keep track of the number of vowels in the current window, and a variable `result` to store the maximum number of vowels found so far.

We then start a loop where we move the right pointer `r` through the string. If the current character is a vowel and `sumVow` is less than `k`, we increment `sumVow`.

Once the window size exceeds `k`, we move the left pointer `l` to the right. If the character at `l` is a vowel, we decrement `sumVow`.

After each iteration, we update `result` to be the maximum of `result` and `sumVow`.

Finally, we return `result`, which is the maximum number of vowels that can be found in a substring of length `k`.

# Complexity
- Time complexity: The time complexity for this algorithm is O(n), where `n` is the length of `s`. This is because we perform a single pass over the `s`.

- Space complexity: The space complexity is O(1), as we use a constant amount of space to store the pointers, `sumVow`, and `result`.

# Code
```

func maxVowels(s string, k int) int {
	var r, l, sumVow, result int
	for ; r < len(s); r++ {
		if isVowel(s[r]) && sumVow < k {
			sumVow++
		}
		for r-l >= k {
			if isVowel(s[l]) {
				sumVow--
			}
			l++
		}
		result = max(result, sumVow)
	}
	return result
}

func max(x, y int) int {
	if x > y {
		return x
	}
	return y
}

func isVowel(ch byte) bool {
	switch ch {
	case 'a':
		return true
	case 'e':
		return true
	case 'i':
		return true
	case 'o':
		return true
	case 'u':
		return true
	}
	return false
}
```