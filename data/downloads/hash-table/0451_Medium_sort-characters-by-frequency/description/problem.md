# [451. Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 9052 | 328 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sorting`](https://leetcode.com/tag/sorting), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue), [`bucket-sort`](https://leetcode.com/tag/bucket-sort), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `google`, `amazon`, `facebook`, `bloomberg`, `microsoft`, `ibm`, `epam-systems`, `apple`, `adobe`, `walmart-labs`, `zoho`, `nvidia`, `uber`, `accenture`, `flipkart`, `tcs`

## Description

Given a string `s`, sort it in **decreasing order** based on the **frequency** of the characters. The **frequency** of a character is the number of times it appears in the string.

Return *the sorted string*. If there are multiple answers, return *any of them*.

 

**Example 1:**

```

Input: s = &quot;tree&quot;
Output: &quot;eert&quot;
Explanation: &#39;e&#39; appears twice while &#39;r&#39; and &#39;t&#39; both appear once.
So &#39;e&#39; must appear before both &#39;r&#39; and &#39;t&#39;. Therefore &quot;eetr&quot; is also a valid answer.

```

**Example 2:**

```

Input: s = &quot;cccaaa&quot;
Output: &quot;aaaccc&quot;
Explanation: Both &#39;c&#39; and &#39;a&#39; appear three times, so both &quot;cccaaa&quot; and &quot;aaaccc&quot; are valid answers.
Note that &quot;cacaca&quot; is incorrect, as the same characters must be together.

```

**Example 3:**

```

Input: s = &quot;Aabb&quot;
Output: &quot;bbAa&quot;
Explanation: &quot;bbaA&quot; is also a valid answer, but &quot;Aabb&quot; is incorrect.
Note that &#39;A&#39; and &#39;a&#39; are treated as two different characters.

```

 

**Constraints:**

	- `1 <= s.length <= 5 * 10^5`

	- `s` consists of uppercase and lowercase English letters and digits.

---

**Links:** [Submissions](https://leetcode.com/problems/sort-characters-by-frequency/) | [Solutions](https://leetcode.com/problems/sort-characters-by-frequency/)
