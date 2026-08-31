# Go Solution with beats 140 ms

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-subsequence-repeated-k-times/solutions/4696546/](https://leetcode.com/problems/longest-subsequence-repeated-k-times/solutions/4696546/)

---

# Intuition
You are given a string s of length n, and an integer k. You are tasked to find the longest subsequence repeated k times in string s.

A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

A subsequence seq is repeated k times in the string s if seq * k is a subsequence of s, where seq * k represents a string constructed by concatenating seq k times.

For example, "bba" is repeated 2 times in the string "bababcba", because the string "bbabba", constructed by concatenating "bba" 2 times, is a subsequence of the string "bababcba".
Return the longest subsequence repeated k times in string s. If multiple such subsequences are found, return the lexicographically largest one. If there is no such subsequence, return an empty string.

# Approach

1.**Initialization**: Initialize an empty queue to hold the subsequences, initialize an empty string ans to store the result, and create arrays count and bit to keep track of character frequencies and whether a character appears at least k times, respectively.

2.**Count Characters**: Iterate through the input string str and count the occurrences of each character. If a character appears k times or more, set the corresponding index in the bit array to true.

3.**Breadth-First Search (BFS)**: Perform a BFS to generate all possible subsequences that include characters appearing at least k times. Start with an empty string in the queue and iterate until the queue is empty.

4.**Generate Subsequences**: At each step of the BFS, append each possible character to the current subsequence and check if it satisfies the condition of appearing at least k times in the original string. If it does, update the result ans and add the subsequence to the queue for further exploration.

5.**Return Result**: After the BFS completes, return the longest subsequence found.

# Complexity

- **Time complexity**:Let n be the length of the input string str.
    - Counting characters and initializing arrays: This step takes O(n) time.
    - BFS: In the worst case, every character in the input string is unique, resulting in 26 possible characters. Thus, the BFS step takes O(26^n) time in the worst case.
    - Generating subsequences: Each character can be included or excluded from the subsequence, resulting in an exponential number of possible subsequences. However, since only characters appearing at least k times are considered, the actual number of generated subsequences will be much smaller.
    - Overall, the time complexity is dominated by the BFS step, resulting in O(26^n) time complexity in the worst case.

- **Space complexity**:
    - count and bit arrays: O(26) = O(1) space.
    - Queue: The size of the queue can grow exponentially with the length of the input string in the worst case, resulting in O(26^n) space complexity.
    - Overall, the space complexity is dominated by the queue, resulting in O(26^n) space complexity in the worst case.
# Code
```
var A []rune

func longestSubsequenceRepeatedK(str string, k int) string {
	A = []rune(str)
	queue := []string{""}
	ans := ""
	count := make([]int, 26)
	bit := make([]bool, 26)

	for _, ch := range A {
		count[ch-'a']++
		if count[ch-'a'] >= k {
			bit[ch-'a'] = true
		}
	}

	for len(queue) > 0 {
		sb := queue[0]
		queue = queue[1:]

		for i := 0; i < 26; i++ {
			if bit[i] {
				res := sb + string('a'+i)
				if check(k, res) {
					ans = res
					queue = append(queue, res)
				}
			}
		}
	}

	return ans
}

func check(k int, subsequence string) bool {
	cnt := 0
	for _, ch := range A {
		if rune(subsequence[cnt%len(subsequence)]) == ch {
			cnt++
			if cnt >= k*len(subsequence) {
				return true
			}
		}
	}
	return false
}

```