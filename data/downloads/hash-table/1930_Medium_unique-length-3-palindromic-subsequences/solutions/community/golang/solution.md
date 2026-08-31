# Go Solution | O(n) | Explanation

**Author:** zell_dev
**Votes:** 6
**Link:** [https://leetcode.com/problems/unique-length-3-palindromic-subsequences/solutions/4285040/](https://leetcode.com/problems/unique-length-3-palindromic-subsequences/solutions/4285040/)

---

**Step 1: Initialize Position Tracking**
Create an array order of size 26 (for each letter of the alphabet), where each element is a pair of integers, initialized to [-1, -1].
This array will track the first and last positions of each character in the string s.

**Step 2: Record Character Positions**
Iterate through the string s. For each character, calculate its index (idx) relative to 'a'.
Update the order array:
If the character has not been seen before (order[idx][0] == -1), record its position as the first occurrence.
Otherwise, update its position as the last occurrence.

**Step 3: Count Unique Middle Characters**
Initialize count to 0 to accumulate the number of palindromic subsequences.
For each character (represented in order), check if there is more than one character between its first and last occurrence (pos[1] - pos[0] > 1).
If so, create a set (unique) of unique characters found between these positions.
Increment count by the number of unique characters, as each represents a different palindromic subsequence.

**Step 4: Return the Total Count**
Return the final count which represents the total number of distinct palindromic subsequences of length 3 in the string s.

```
func countPalindromicSubsequence(s string) int {
	order := make([][2]int, 26)
	for i := range order {
		order[i] = [2]int{-1, -1}
	}

	for i, ch := range s {
		idx := ch - 'a'
		if order[idx][0] != -1 {
			order[idx][1] = i
		} else {
			order[idx][0] = i
		}
	}

	count := 0
	for _, pos := range order {
		if pos[1]-pos[0] > 1 {
			unique := make(map[rune]struct{})
			for _, midChar := range s[pos[0]+1 : pos[1]] {
				unique[midChar] = struct{}{}
			}
			count += len(unique)
		}
	}

	return count
}

```

If you found it helpful, please consider giving it an upvote! It'll motivate me to share more solutions in the future. If you have any questions or suggestions, please let me know. Happy coding