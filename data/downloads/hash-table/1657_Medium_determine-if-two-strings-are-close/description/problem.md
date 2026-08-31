# [1657. Determine if Two Strings Are Close](https://leetcode.com/problems/determine-if-two-strings-are-close/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 4064 | 351 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sorting`](https://leetcode.com/tag/sorting), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `phonepe`, `bloomberg`, `amazon`, `apple`, `adobe`, `google`, `facebook`, `postmates`

## Description

Two strings are considered **close** if you can attain one from the other using the following operations:

	- Operation 1: Swap any two **existing** characters.

	
		For example, `abcde -> aecdb`

	
	
	- Operation 2: Transform **every** occurrence of one **existing** character into another **existing** character, and do the same with the other character.
	
		For example, `aacabb -> bbcbaa` (all `a`'s turn into `b`'s, and all `b`'s turn into `a`'s)

	
	

You can use the operations on either string as many times as necessary.

Given two strings, `word1` and `word2`, return `true`* if *`word1`* and *`word2`* are **close**, and *`false`* otherwise.*

 

**Example 1:**

```

Input: word1 = &quot;abc&quot;, word2 = &quot;bca&quot;
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: &quot;abc&quot; -&gt; &quot;acb&quot;
Apply Operation 1: &quot;acb&quot; -&gt; &quot;bca&quot;

```

**Example 2:**

```

Input: word1 = &quot;a&quot;, word2 = &quot;aa&quot;
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.

```

**Example 3:**

```

Input: word1 = &quot;cabbba&quot;, word2 = &quot;abbccc&quot;
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: &quot;cabbba&quot; -&gt; &quot;caabbb&quot;
Apply Operation 2: &quot;caabbb&quot; -&gt; &quot;baaccc&quot;
Apply Operation 2: &quot;baaccc&quot; -&gt; &quot;abbccc&quot;

```

 

**Constraints:**

	- `1 <= word1.length, word2.length <= 10^5`

	- `word1` and `word2` contain only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/determine-if-two-strings-are-close/) | [Solutions](https://leetcode.com/problems/determine-if-two-strings-are-close/)
