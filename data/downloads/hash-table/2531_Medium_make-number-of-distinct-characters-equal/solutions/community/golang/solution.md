# Go Solution with Beats 10ms

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-number-of-distinct-characters-equal/solutions/4685454/](https://leetcode.com/problems/make-number-of-distinct-characters-equal/solutions/4685454/)

---

# Intuition
You are given two 0-indexed strings word1 and word2.

A move consists of choosing two indices i and j such that 0 <= i < word1.length and 0 <= j < word2.length and swapping word1[i] with word2[j].

Return true if it is possible to get the number of distinct characters in word1 and word2 to be equal with exactly one move. Return false otherwise.

# Approach
**1. Counting Character Frequencies:**
- Two arrays aa and bb of size 26 are initialized to count the occurrences of each character in word1 and word2 respectively. These arrays represent the frequency of each lowercase English letter ('a' to 'z').
- For each character in word1 and word2, the count of the corresponding character is incremented in the respective arrays.

**2. Checking for Possibility:**
- Two nested loops iterate over each possible pair of characters from word1 and word2.
- For each pair of characters (i, j), the count of character i in word1 is decremented, and the count of character j is incremented. Similarly, the count of character j in word2 is decremented, and the count of character i is incremented.
- After swapping characters (i, j), if the number of distinct characters in word1 becomes equal to the number of distinct characters in word2, the function returns true, indicating that it is possible to make the number of distinct characters equal in both words.
- If no such pair (i, j) is found, the function returns false, indicating that it is not possible to achieve the required number of distinct characters in both words with one move.

**3. Helper Function to Calculate Size:**
- The size function calculates the number of distinct characters in an array representing character frequencies.
- It iterates over the array and increments a counter c whenever it encounters a nonzero frequency.

**4. Main Function and Test Cases:**
- In the main function, test cases are provided to validate the isItPossible function.
- Each test case consists of two input words (word1 and word2), and the result of calling the isItPossible function with these inputs is printed.

# Code
```
import (
	"fmt"
)
func isItPossible(word1 string, word2 string) bool {
    aa := make([]int, 26)
	bb := make([]int, 26)

	for _, x := range word1 {
		aa[x-'a']++
	}

	for _, x := range word2 {
		bb[x-'a']++
	}

	for i := 0; i < 26; i++ {
		if aa[i] == 0 {
			continue
		}

		for j := 0; j < 26; j++ {
			if bb[j] == 0 {
				continue
			}

			aa[j]++
			aa[i]--
			bb[i]++
			bb[j]--

			if size(aa) == size(bb) {
				return true
			}

			aa[j]--
			aa[i]++
			bb[i]--
			bb[j]++
		}
	}

	return false
}

func size(aa []int) int {
	c := 0
	for i := 0; i < 26; i++ {
		if aa[i] > 0 {
			c++
		}
	}
	return c
}
```