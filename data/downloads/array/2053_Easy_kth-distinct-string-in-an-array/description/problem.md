# [2053. Kth Distinct String in an Array](https://leetcode.com/problems/kth-distinct-string-in-an-array/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1301 | 52 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `amazon`

## Description

A **distinct string** is a string that is present only **once** in an array.

Given an array of strings `arr`, and an integer `k`, return *the *`k^th`* **distinct string** present in *`arr`. If there are **fewer** than `k` distinct strings, return *an **empty string ***`""`.

Note that the strings are considered in the **order in which they appear** in the array.

 

**Example 1:**

```

Input: arr = [&quot;d&quot;,&quot;b&quot;,&quot;c&quot;,&quot;b&quot;,&quot;c&quot;,&quot;a&quot;], k = 2
Output: &quot;a&quot;
Explanation:
The only distinct strings in arr are &quot;d&quot; and &quot;a&quot;.
&quot;d&quot; appears 1st, so it is the 1st distinct string.
&quot;a&quot; appears 2nd, so it is the 2nd distinct string.
Since k == 2, &quot;a&quot; is returned. 

```

**Example 2:**

```

Input: arr = [&quot;aaa&quot;,&quot;aa&quot;,&quot;a&quot;], k = 1
Output: &quot;aaa&quot;
Explanation:
All strings in arr are distinct, so the 1st string &quot;aaa&quot; is returned.

```

**Example 3:**

```

Input: arr = [&quot;a&quot;,&quot;b&quot;,&quot;a&quot;], k = 3
Output: &quot;&quot;
Explanation:
The only distinct string is &quot;b&quot;. Since there are fewer than 3 distinct strings, we return an empty string &quot;&quot;.

```

 

**Constraints:**

	- `1 <= k <= arr.length <= 1000`

	- `1 <= arr[i].length <= 5`

	- `arr[i]` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/kth-distinct-string-in-an-array/) | [Solutions](https://leetcode.com/problems/kth-distinct-string-in-an-array/)
