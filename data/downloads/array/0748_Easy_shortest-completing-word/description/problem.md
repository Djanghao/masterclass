# [748. Shortest Completing Word](https://leetcode.com/problems/shortest-completing-word/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 620 | 1130 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string)

**Companies:** `google`

## Description

Given a string `licensePlate` and an array of strings `words`, find the **shortest completing** word in `words`.

A **completing** word is a word that **contains all the letters** in `licensePlate`. **Ignore numbers and spaces** in `licensePlate`, and treat letters as **case insensitive**. If a letter appears more than once in `licensePlate`, then it must appear in the word the same number of times or more.

For example, if `licensePlate`` = "aBc 12c"`, then it contains letters `'a'`, `'b'` (ignoring case), and `'c'` twice. Possible **completing** words are `"abccdef"`, `"caaacab"`, and `"cbca"`.

Return *the shortest **completing** word in *`words`*.* It is guaranteed an answer exists. If there are multiple shortest **completing** words, return the **first** one that occurs in `words`.

 

**Example 1:**

```

Input: licensePlate = &quot;1s3 PSt&quot;, words = [&quot;step&quot;,&quot;steps&quot;,&quot;stripe&quot;,&quot;stepple&quot;]
Output: &quot;steps&quot;
Explanation: licensePlate contains letters &#39;s&#39;, &#39;p&#39;, &#39;s&#39; (ignoring case), and &#39;t&#39;.
&quot;step&quot; contains &#39;t&#39; and &#39;p&#39;, but only contains 1 &#39;s&#39;.
&quot;steps&quot; contains &#39;t&#39;, &#39;p&#39;, and both &#39;s&#39; characters.
&quot;stripe&quot; is missing an &#39;s&#39;.
&quot;stepple&quot; is missing an &#39;s&#39;.
Since &quot;steps&quot; is the only word containing all the letters, that is the answer.

```

**Example 2:**

```

Input: licensePlate = &quot;1s3 456&quot;, words = [&quot;looks&quot;,&quot;pest&quot;,&quot;stew&quot;,&quot;show&quot;]
Output: &quot;pest&quot;
Explanation: licensePlate only contains the letter &#39;s&#39;. All the words contain &#39;s&#39;, but among these &quot;pest&quot;, &quot;stew&quot;, and &quot;show&quot; are shortest. The answer is &quot;pest&quot; because it is the word that appears earliest of the 3.

```

 

**Constraints:**

	- `1 <= licensePlate.length <= 7`

	- `licensePlate` contains digits, letters (uppercase or lowercase), or space `' '`.

	- `1 <= words.length <= 1000`

	- `1 <= words[i].length <= 15`

	- `words[i]` consists of lower case English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/shortest-completing-word/) | [Solutions](https://leetcode.com/problems/shortest-completing-word/)
