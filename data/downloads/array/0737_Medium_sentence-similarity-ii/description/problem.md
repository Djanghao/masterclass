# [737. Sentence Similarity II](https://leetcode.com/problems/sentence-similarity-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 854 | 43 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`union-find`](https://leetcode.com/tag/union-find)

**Companies:** `google`, `amazon`

## Description

We can represent a sentence as an array of words, for example, the sentence `"I am happy with leetcode"` can be represented as `arr = ["I","am",happy","with","leetcode"]`.

Given two sentences `sentence1` and `sentence2` each represented as a string array and given an array of string pairs `similarPairs` where `similarPairs[i] = [x_i, y_i]` indicates that the two words `x_i` and `y_i` are similar.

Return `true`* if `sentence1` and `sentence2` are similar, or *`false`* if they are not similar*.

Two sentences are similar if:

	- They have **the same length** (i.e., the same number of words)

	- `sentence1[i]` and `sentence2[i]` are similar.

Notice that a word is always similar to itself, also notice that the similarity relation is transitive. For example, if the words `a` and `b` are similar, and the words `b` and `c` are similar, then `a` and `c` are **similar**.

 

**Example 1:**

```

Input: sentence1 = [&quot;great&quot;,&quot;acting&quot;,&quot;skills&quot;], sentence2 = [&quot;fine&quot;,&quot;drama&quot;,&quot;talent&quot;], similarPairs = [[&quot;great&quot;,&quot;good&quot;],[&quot;fine&quot;,&quot;good&quot;],[&quot;drama&quot;,&quot;acting&quot;],[&quot;skills&quot;,&quot;talent&quot;]]
Output: true
Explanation: The two sentences have the same length and each word i of sentence1 is also similar to the corresponding word in sentence2.

```

**Example 2:**

```

Input: sentence1 = [&quot;I&quot;,&quot;love&quot;,&quot;leetcode&quot;], sentence2 = [&quot;I&quot;,&quot;love&quot;,&quot;onepiece&quot;], similarPairs = [[&quot;manga&quot;,&quot;onepiece&quot;],[&quot;platform&quot;,&quot;anime&quot;],[&quot;leetcode&quot;,&quot;platform&quot;],[&quot;anime&quot;,&quot;manga&quot;]]
Output: true
Explanation: &quot;leetcode&quot; --&gt; &quot;platform&quot; --&gt; &quot;anime&quot; --&gt; &quot;manga&quot; --&gt; &quot;onepiece&quot;.
Since &quot;leetcode is similar to &quot;onepiece&quot; and the first two words are the same, the two sentences are similar.
```

**Example 3:**

```

Input: sentence1 = [&quot;I&quot;,&quot;love&quot;,&quot;leetcode&quot;], sentence2 = [&quot;I&quot;,&quot;love&quot;,&quot;onepiece&quot;], similarPairs = [[&quot;manga&quot;,&quot;hunterXhunter&quot;],[&quot;platform&quot;,&quot;anime&quot;],[&quot;leetcode&quot;,&quot;platform&quot;],[&quot;anime&quot;,&quot;manga&quot;]]
Output: false
Explanation: &quot;leetcode&quot; is not similar to &quot;onepiece&quot;.

```

 

**Constraints:**

	- `1 <= sentence1.length, sentence2.length <= 1000`

	- `1 <= sentence1[i].length, sentence2[i].length <= 20`

	- `sentence1[i]` and `sentence2[i]` consist of lower-case and upper-case English letters.

	- `0 <= similarPairs.length <= 2000`

	- `similarPairs[i].length == 2`

	- `1 <= x_i.length, y_i.length <= 20`

	- `x_i` and `y_i` consist of English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/sentence-similarity-ii/) | [Solutions](https://leetcode.com/problems/sentence-similarity-ii/)
