# [2810. Faulty Keyboard](https://leetcode.com/problems/faulty-keyboard/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 497 | 16 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `samsung`

## Description

Your laptop keyboard is faulty, and whenever you type a character `'i'` on it, it reverses the string that you have written. Typing other characters works as expected.

You are given a **0-indexed** string `s`, and you type each character of `s` using your faulty keyboard.

Return *the final string that will be present on your laptop screen.*

 

**Example 1:**

```

Input: s = &quot;string&quot;
Output: &quot;rtsng&quot;
Explanation: 
After typing first character, the text on the screen is &quot;s&quot;.
After the second character, the text is &quot;st&quot;. 
After the third character, the text is &quot;str&quot;.
Since the fourth character is an &#39;i&#39;, the text gets reversed and becomes &quot;rts&quot;.
After the fifth character, the text is &quot;rtsn&quot;. 
After the sixth character, the text is &quot;rtsng&quot;. 
Therefore, we return &quot;rtsng&quot;.

```

**Example 2:**

```

Input: s = &quot;poiinter&quot;
Output: &quot;ponter&quot;
Explanation: 
After the first character, the text on the screen is &quot;p&quot;.
After the second character, the text is &quot;po&quot;. 
Since the third character you type is an &#39;i&#39;, the text gets reversed and becomes &quot;op&quot;. 
Since the fourth character you type is an &#39;i&#39;, the text gets reversed and becomes &quot;po&quot;.
After the fifth character, the text is &quot;pon&quot;.
After the sixth character, the text is &quot;pont&quot;. 
After the seventh character, the text is &quot;ponte&quot;. 
After the eighth character, the text is &quot;ponter&quot;. 
Therefore, we return &quot;ponter&quot;.
```

 

**Constraints:**

	- `1 <= s.length <= 100`

	- `s` consists of lowercase English letters.

	- `s[0] != 'i'`

---

**Links:** [Submissions](https://leetcode.com/problems/faulty-keyboard/) | [Solutions](https://leetcode.com/problems/faulty-keyboard/)
