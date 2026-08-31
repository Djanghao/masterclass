# [2466. Count Ways To Build Good Strings](https://leetcode.com/problems/count-ways-to-build-good-strings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2208 | 211 |

**Tags:** [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `squarepoint-capital`, `amazon`, `oracle`

## Description

Given the integers `zero`, `one`, `low`, and `high`, we can construct a string by starting with an empty string, and then at each step perform either of the following:

	- Append the character `'0'` `zero` times.

	- Append the character `'1'` `one` times.

This can be performed any number of times.

A **good** string is a string constructed by the above process having a **length** between `low` and `high` (**inclusive**).

Return *the number of **different** good strings that can be constructed satisfying these properties.* Since the answer can be large, return it **modulo** `10^9 + 7`.

 

**Example 1:**

```

Input: low = 3, high = 3, zero = 1, one = 1
Output: 8
Explanation: 
One possible valid good string is &quot;011&quot;. 
It can be constructed as follows: &quot;&quot; -&gt; &quot;0&quot; -&gt; &quot;01&quot; -&gt; &quot;011&quot;. 
All binary strings from &quot;000&quot; to &quot;111&quot; are good strings in this example.

```

**Example 2:**

```

Input: low = 2, high = 3, zero = 1, one = 2
Output: 5
Explanation: The good strings are &quot;00&quot;, &quot;11&quot;, &quot;000&quot;, &quot;110&quot;, and &quot;011&quot;.

```

 

**Constraints:**

	- `1 <= low <= high <= 10^5`

	- `1 <= zero, one <= low`

---

**Links:** [Submissions](https://leetcode.com/problems/count-ways-to-build-good-strings/) | [Solutions](https://leetcode.com/problems/count-ways-to-build-good-strings/)
