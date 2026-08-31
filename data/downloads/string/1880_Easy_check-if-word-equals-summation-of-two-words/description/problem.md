# [1880. Check if Word Equals Summation of Two Words](https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 604 | 42 |

**Tags:** [`string`](https://leetcode.com/tag/string)


## Description

The **letter value** of a letter is its position in the alphabet **starting from 0** (i.e. `'a' -> 0`, `'b' -> 1`, `'c' -> 2`, etc.).

The **numerical value** of some string of lowercase English letters `s` is the **concatenation** of the **letter values** of each letter in `s`, which is then **converted** into an integer.

	- For example, if `s = "acb"`, we concatenate each letter's letter value, resulting in `"021"`. After converting it, we get `21`.

You are given three strings `firstWord`, `secondWord`, and `targetWord`, each consisting of lowercase English letters `'a'` through `'j'` **inclusive**.

Return `true` *if the **summation** of the **numerical values** of *`firstWord`* and *`secondWord`* equals the **numerical value** of *`targetWord`*, or *`false`* otherwise.*

 

**Example 1:**

```

Input: firstWord = &quot;acb&quot;, secondWord = &quot;cba&quot;, targetWord = &quot;cdb&quot;
Output: true
Explanation:
The numerical value of firstWord is &quot;acb&quot; -&gt; &quot;021&quot; -&gt; 21.
The numerical value of secondWord is &quot;cba&quot; -&gt; &quot;210&quot; -&gt; 210.
The numerical value of targetWord is &quot;cdb&quot; -&gt; &quot;231&quot; -&gt; 231.
We return true because 21 + 210 == 231.

```

**Example 2:**

```

Input: firstWord = &quot;aaa&quot;, secondWord = &quot;a&quot;, targetWord = &quot;aab&quot;
Output: false
Explanation: 
The numerical value of firstWord is &quot;aaa&quot; -&gt; &quot;000&quot; -&gt; 0.
The numerical value of secondWord is &quot;a&quot; -&gt; &quot;0&quot; -&gt; 0.
The numerical value of targetWord is &quot;aab&quot; -&gt; &quot;001&quot; -&gt; 1.
We return false because 0 + 0 != 1.

```

**Example 3:**

```

Input: firstWord = &quot;aaa&quot;, secondWord = &quot;a&quot;, targetWord = &quot;aaaa&quot;
Output: true
Explanation: 
The numerical value of firstWord is &quot;aaa&quot; -&gt; &quot;000&quot; -&gt; 0.
The numerical value of secondWord is &quot;a&quot; -&gt; &quot;0&quot; -&gt; 0.
The numerical value of targetWord is &quot;aaaa&quot; -&gt; &quot;0000&quot; -&gt; 0.
We return true because 0 + 0 == 0.

```

 

**Constraints:**

	- `1 <= firstWord.length, ``secondWord.length, ``targetWord.length <= 8`

	- `firstWord`, `secondWord`, and `targetWord` consist of lowercase English letters from `'a'` to `'j'` **inclusive**.

---

**Links:** [Submissions](https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/) | [Solutions](https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/)
