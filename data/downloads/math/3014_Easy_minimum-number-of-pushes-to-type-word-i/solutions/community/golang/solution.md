# GO | 2 Solutions

**Author:** 2107mohitverma
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/5595118/](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/5595118/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func minimumPushes(word string) int {
	length := len(word)

	pushes := 0
	if length <= 8 {
		pushes += (1 * length)
	} else if length <= 16 {
		pushes += (1 * 8) + (2 * (length - 8))
	} else if length <= 24 {
		pushes += (1 * 8) + (2 * 8) + (3 * (length - 16))
	} else {
		pushes += (1 * 8) + (2 * 8) + (3 * 8) + (4 * (length - 24))
	}

    return pushes
}

// MORE GENERIC SOLUTION -> IF LENGTH OF WORD IS LARGE
// func minimumPushes(word string) int {
// 	freqChars := make([]int, 26)
// 	for i := 0; i < len(word); i++ {
// 		freqChars[word[i]-'a']++
// 	}
// 	sort.Slice(freqChars, func(i, j int) bool {
// 		return freqChars[i] > freqChars[j]
// 	})
// 	pushes := 0
// 	for i := 0; i < 26; i++ {
// 		if i < 8 {
// 			pushes += freqChars[i]
// 		} else if i < 16 {
// 			pushes += (freqChars[i] * 2)
// 		} else if i < 24 {
// 			pushes += (freqChars[i] * 3)
// 		} else {
// 			pushes += (freqChars[i] * 4)
// 		}
// 	}
// 	return pushes
// }
```