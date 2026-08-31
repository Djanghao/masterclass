# [471. Encode String with Shortest Length](https://leetcode.com/problems/encode-string-with-shortest-length/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 631 | 55 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `google`

## Description

Given a string `s`, encode the string such that its encoded length is the shortest.

The encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times. `k` should be a positive integer.

If an encoding process does not make the string shorter, then do not encode it. If there are several solutions, return **any of them**.

 

**Example 1:**

```

Input: s = &quot;aaa&quot;
Output: &quot;aaa&quot;
Explanation: There is no way to encode it such that it is shorter than the input string, so we do not encode it.

```

**Example 2:**

```

Input: s = &quot;aaaaa&quot;
Output: &quot;5[a]&quot;
Explanation: &quot;5[a]&quot; is shorter than &quot;aaaaa&quot; by 1 character.

```

**Example 3:**

```

Input: s = &quot;aaaaaaaaaa&quot;
Output: &quot;10[a]&quot;
Explanation: &quot;a9[a]&quot; or &quot;9[a]a&quot; are also valid solutions, both of them have the same length = 5, which is the same as &quot;10[a]&quot;.

```

 

**Constraints:**

	- `1 <= s.length <= 150`

	- `s` consists of only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/encode-string-with-shortest-length/) | [Solutions](https://leetcode.com/problems/encode-string-with-shortest-length/)
