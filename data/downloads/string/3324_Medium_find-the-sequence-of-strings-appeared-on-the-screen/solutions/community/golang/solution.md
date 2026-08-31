# Golang fast solution

**Author:** Jack9988
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/solutions/6072897/](https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/solutions/6072897/)

---

# Intuition
All arrays are preallocated, eliminating the need for memory reallocation.
Conversion to string is minimized (only performed when writing the result).
Each iteration reuses the same subseq, avoiding the creation of new objects.

# Steps
1. Calculate Total Size:
Compute the total number of substrings by summing (target[i] - 'a' + 1) for each character in target.
2. Allocate Memory:
Preallocate res array of size totalSize to store all substrings.
3. Generate Substrings:
For each character tI in target: Replace tI with letters from 'a' to tI.
Form substrings by copying the prefix (target[:i]) and appending the current letter.
Add each substring to res.

# Complexity
- Time complexity: O(n)
- Space complexity: O(total\xA0substrings)

# Code
```golang []
func stringSequence(target string) []string {
	n := len(target)
	totalSize := 0

	// Counting the total number of rows in the result
	for i := 0; i < n; i++ {
		totalSize += int(target[i] - 'a' + 1)
	}

	// Pre-allocate memory
	res := make([]string, totalSize)
	subseq := make([]byte, 0, n)
	index := 0 // res fill pointer

	for i := 0; i < n; i++ {
		tI := target[i]
		start := len(subseq) // current subseq len

		// Add characters from 'a' to tI
		for l := uint8('a'); l <= tI; l++ {
			subseq = append(subseq[:start], l)
			// Convert to string only before writing to result
			res[index] = string(subseq)
			index++
		}
	}

	return res
}

```