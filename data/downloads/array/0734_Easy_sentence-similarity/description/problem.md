# [734. Sentence Similarity](https://leetcode.com/problems/sentence-similarity/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 67 | 72 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string)

**Companies:** `google`

## Description

We can represent a sentence as an array of words, for example, the sentence `"I am happy with leetcode"` can be represented as `arr = ["I","am",happy","with","leetcode"]`.

Given two sentences `sentence1` and `sentence2` each represented as a string array and given an array of string pairs `similarPairs` where `similarPairs[i] = [x_i, y_i]` indicates that the two words `x_i` and `y_i` are similar.

Return *`true` if `sentence1` and `sentence2` are similar, or `false` if they are not similar*.

Two sentences are similar if:

	- They have **the same length** (i.e., the same number of words)

	- `sentence1[i]` and `sentence2[i]` are similar.

Notice that a word is always similar to itself, also notice that the similarity relation is not transitive. For example, if the words `a` and `b` are similar, and the words `b` and `c` are similar, `a` and `c` are **not necessarily similar**.

 

**Example 1:**

```

Input: sentence1 = [&quot;great&quot;,&quot;acting&quot;,&quot;skills&quot;], sentence2 = [&quot;fine&quot;,&quot;drama&quot;,&quot;talent&quot;], similarPairs = [[&quot;great&quot;,&quot;fine&quot;],[&quot;drama&quot;,&quot;acting&quot;],[&quot;skills&quot;,&quot;talent&quot;]]
Output: true
Explanation: The two sentences have the same length and each word i of sentence1 is also similar to the corresponding word in sentence2.

```

**Example 2:**

```

Input: sentence1 = [&quot;great&quot;], sentence2 = [&quot;great&quot;], similarPairs = []
Output: true
Explanation: A word is similar to itself.

```

**Example 3:**

```

Input: sentence1 = [&quot;great&quot;], sentence2 = [&quot;doubleplus&quot;,&quot;good&quot;], similarPairs = [[&quot;great&quot;,&quot;doubleplus&quot;]]
Output: false
Explanation: As they don&#39;t have the same length, we return false.

```

 

**Constraints:**

	- `1 <= sentence1.length, sentence2.length <= 1000`

	- `1 <= sentence1[i].length, sentence2[i].length <= 20`

	- `sentence1[i]` and `sentence2[i]` consist of English letters.

	- `0 <= similarPairs.length <= 1000`

	- `similarPairs[i].length == 2`

	- `1 <= x_i.length, y_i.length <= 20`

	- `x_i` and `y_i` consist of lower-case and upper-case English letters.

	- All the pairs `(x_i,_ y_i)` are **distinct**.

---

**Links:** [Submissions](https://leetcode.com/problems/sentence-similarity/) | [Solutions](https://leetcode.com/problems/sentence-similarity/)
