# Go Solution with 37ms

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/solutions/4691618/](https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/solutions/4691618/)

---

# Intuition
You are given a string s, an integer k, a letter letter, and an integer repetition.

Return the lexicographically smallest subsequence of s of length k that has the letter letter appear at least repetition times. The test cases are generated so that the letter appears in s at least repetition times.

A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

A string a is lexicographically smaller than a string b if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b.

# Approach
**1. Suffix Array Calculation:**

- Initialize a suffix array suf of length n where n is the length of the input string s.
- Traverse the input string s from right to left.
- For each character in s, if it matches the specified letter, increment the suffix count by 1 and store it in the suf array.

**2. Greedy Approach with Stack:**

- Initialize an empty stack st to store the smallest subsequence.
- Initialize a variable currLetter to keep track of the number of occurrences of the specified letter in the current subsequence.
- Iterate over each character in the input string s.
- While the stack size plus the number of remaining characters in s minus one is greater than or equal to k (ensuring enough characters left to form the subsequence), and while the stack is not empty and the top of the stack is greater than the current character:
    - If the top of the stack is the specified letter, check if removing it still maintains the required repetition count. If yes, pop it from the stack and decrement currLetter.
    - If the top of the stack is not the specified letter, check if removing it is valid (i.e., it doesn't violate the repetition count and there's enough space left in the subsequence). If valid, pop it from the stack.
- If the stack size is less than k:
    - If the current character is the specified letter, increment currLetter and push it onto the stack.
    - If the current character is not the specified letter, check if adding it maintains the required repetition count or there's enough space left in the subsequence. If valid, push it onto the stack.

**3. Construct Result String:**

- Once all characters are processed, construct the result string by popping characters from the stack and appending them in reverse order.

# Complexity

- **Time complexity:**
    - Calculating the suffix array takes linear time O(n), where n is the length of the input string s.
    - Iterating over each character of the string takes linear time O(n), where n is the length of the input string s.
    - The stack operations (pushing and popping) take O(1) time per operation, so the overall time complexity of the algorithm is O(n).


- **Space complexity:**
    - The space complexity is O(n) due to the storage of the suffix array suf, the stack st, and a few other variables which are of constant size regardless of the input size.

# Code
```
func smallestSubsequence(s string, k int, letter byte, repetition int) string {
    n := len(s)
	suf := make([]int, n)
	if s[n-1] == letter {
		suf[n-1] = 1
	}
	for i := n - 2; i >= 0; i-- {
		suf[i] = suf[i+1]
		if s[i] == letter {
			suf[i]++
		}
	}

	var st []byte
	currLetter := 0

	for i := 0; i < n; i++ {
		for len(st)+n-i-1 >= k && len(st) > 0 && st[len(st)-1] > s[i] {
			if st[len(st)-1] == letter {
				if currLetter-1+suf[i] >= repetition {
					st = st[:len(st)-1]
					currLetter--
				} else {
					break
				}
			} else if currLetter+suf[i] >= repetition {
				st = st[:len(st)-1]
			} else {
				break
			}
		}

		if len(st) < k {
			if s[i] == letter {
				currLetter++
				st = append(st, s[i])
			} else if repetition-currLetter <= 0 || repetition-currLetter <= k-len(st)-1 {
				st = append(st, s[i])
			}
		}
	}

	return string(st)  
}
```