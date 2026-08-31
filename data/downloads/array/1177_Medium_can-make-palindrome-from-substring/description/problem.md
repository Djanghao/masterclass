# [1177. Can Make Palindrome from Substring](https://leetcode.com/problems/can-make-palindrome-from-substring/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 866 | 281 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `akuna-capital`

## Description

You are given a string `s` and array `queries` where `queries[i] = [left_i, right_i, k_i]`. We may rearrange the substring `s[left_i...right_i]` for each query and then choose up to `k_i` of them to replace with any lowercase English letter.

If the substring is possible to be a palindrome string after the operations above, the result of the query is `true`. Otherwise, the result is `false`.

Return a boolean array `answer` where `answer[i]` is the result of the `i^th` query `queries[i]`.

Note that each letter is counted individually for replacement, so if, for example `s[left_i...right_i] = "aaa"`, and `k_i = 2`, we can only replace two of the letters. Also, note that no query modifies the initial string `s`.

 

**Example :**

```

Input: s = &quot;abcda&quot;, queries = [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]]
Output: [true,false,false,true,true]
Explanation:
queries[0]: substring = &quot;d&quot;, is palidrome.
queries[1]: substring = &quot;bc&quot;, is not palidrome.
queries[2]: substring = &quot;abcd&quot;, is not palidrome after replacing only 1 character.
queries[3]: substring = &quot;abcd&quot;, could be changed to &quot;abba&quot; which is palidrome. Also this can be changed to &quot;baab&quot; first rearrange it &quot;bacd&quot; then replace &quot;cd&quot; with &quot;ab&quot;.
queries[4]: substring = &quot;abcda&quot;, could be changed to &quot;abcba&quot; which is palidrome.

```

**Example 2:**

```

Input: s = &quot;lyb&quot;, queries = [[0,1,0],[2,2,1]]
Output: [false,true]

```

 

**Constraints:**

	- `1 <= s.length, queries.length <= 10^5`

	- `0 <= left_i <= right_i < s.length`

	- `0 <= k_i <= s.length`

	- `s` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/can-make-palindrome-from-substring/) | [Solutions](https://leetcode.com/problems/can-make-palindrome-from-substring/)
