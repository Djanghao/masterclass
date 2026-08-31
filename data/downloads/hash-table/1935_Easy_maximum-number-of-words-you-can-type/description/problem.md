# [1935. Maximum Number of Words You Can Type](https://leetcode.com/problems/maximum-number-of-words-you-can-type/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 975 | 40 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string)

**Companies:** `google`, `microsoft`, `quora`

## Description

There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

Given a string `text` of words separated by a single space (no leading or trailing spaces) and a string `brokenLetters` of all **distinct** letter keys that are broken, return *the **number of words** in* `text` *you can fully type using this keyboard*.

 

**Example 1:**

```

Input: text = &quot;hello world&quot;, brokenLetters = &quot;ad&quot;
Output: 1
Explanation: We cannot type &quot;world&quot; because the &#39;d&#39; key is broken.

```

**Example 2:**

```

Input: text = &quot;leet code&quot;, brokenLetters = &quot;lt&quot;
Output: 1
Explanation: We cannot type &quot;leet&quot; because the &#39;l&#39; and &#39;t&#39; keys are broken.

```

**Example 3:**

```

Input: text = &quot;leet code&quot;, brokenLetters = &quot;e&quot;
Output: 0
Explanation: We cannot type either word because the &#39;e&#39; key is broken.

```

 

**Constraints:**

	- `1 <= text.length <= 10^4`

	- `0 <= brokenLetters.length <= 26`

	- `text` consists of words separated by a single space without any leading or trailing spaces.

	- Each word only consists of lowercase English letters.

	- `brokenLetters` consists of **distinct** lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-number-of-words-you-can-type/) | [Solutions](https://leetcode.com/problems/maximum-number-of-words-you-can-type/)
