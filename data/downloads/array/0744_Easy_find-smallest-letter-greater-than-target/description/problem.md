# [744. Find Smallest Letter Greater Than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 4810 | 2218 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search)

**Companies:** `linkedin`, `google`, `bloomberg`, `facebook`

## Description

You are given an array of characters `letters` that is sorted in **non-decreasing order**, and a character `target`. There are **at least two different** characters in `letters`.

Return *the smallest character in *`letters`* that is lexicographically greater than *`target`. If such a character does not exist, return the first character in `letters`.

 

**Example 1:**

```

Input: letters = [&quot;c&quot;,&quot;f&quot;,&quot;j&quot;], target = &quot;a&quot;
Output: &quot;c&quot;
Explanation: The smallest character that is lexicographically greater than &#39;a&#39; in letters is &#39;c&#39;.

```

**Example 2:**

```

Input: letters = [&quot;c&quot;,&quot;f&quot;,&quot;j&quot;], target = &quot;c&quot;
Output: &quot;f&quot;
Explanation: The smallest character that is lexicographically greater than &#39;c&#39; in letters is &#39;f&#39;.

```

**Example 3:**

```

Input: letters = [&quot;x&quot;,&quot;x&quot;,&quot;y&quot;,&quot;y&quot;], target = &quot;z&quot;
Output: &quot;x&quot;
Explanation: There are no characters in letters that is lexicographically greater than &#39;z&#39; so we return letters[0].

```

 

**Constraints:**

	- `2 <= letters.length <= 10^4`

	- `letters[i]` is a lowercase English letter.

	- `letters` is sorted in **non-decreasing** order.

	- `letters` contains at least two different characters.

	- `target` is a lowercase English letter.

---

**Links:** [Submissions](https://leetcode.com/problems/find-smallest-letter-greater-than-target/) | [Solutions](https://leetcode.com/problems/find-smallest-letter-greater-than-target/)
