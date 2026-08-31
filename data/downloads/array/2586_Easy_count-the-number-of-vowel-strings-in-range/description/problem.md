# [2586. Count the Number of Vowel Strings in Range](https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 373 | 31 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `paypal`

## Description

You are given a **0-indexed** array of string `words` and two integers `left` and `right`.

A string is called a **vowel string** if it starts with a vowel character and ends with a vowel character where vowel characters are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`.

Return *the number of vowel strings *`words[i]`* where *`i`* belongs to the inclusive range *`[left, right]`.

 

**Example 1:**

```

Input: words = [&quot;are&quot;,&quot;amy&quot;,&quot;u&quot;], left = 0, right = 2
Output: 2
Explanation: 
- &quot;are&quot; is a vowel string because it starts with &#39;a&#39; and ends with &#39;e&#39;.
- &quot;amy&quot; is not a vowel string because it does not end with a vowel.
- &quot;u&quot; is a vowel string because it starts with &#39;u&#39; and ends with &#39;u&#39;.
The number of vowel strings in the mentioned range is 2.

```

**Example 2:**

```

Input: words = [&quot;hey&quot;,&quot;aeo&quot;,&quot;mu&quot;,&quot;ooo&quot;,&quot;artro&quot;], left = 1, right = 4
Output: 3
Explanation: 
- &quot;aeo&quot; is a vowel string because it starts with &#39;a&#39; and ends with &#39;o&#39;.
- &quot;mu&quot; is not a vowel string because it does not start with a vowel.
- &quot;ooo&quot; is a vowel string because it starts with &#39;o&#39; and ends with &#39;o&#39;.
- &quot;artro&quot; is a vowel string because it starts with &#39;a&#39; and ends with &#39;o&#39;.
The number of vowel strings in the mentioned range is 3.

```

 

**Constraints:**

	- `1 <= words.length <= 1000`

	- `1 <= words[i].length <= 10`

	- `words[i]` consists of only lowercase English letters.

	- `0 <= left <= right < words.length`

---

**Links:** [Submissions](https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/) | [Solutions](https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/)
