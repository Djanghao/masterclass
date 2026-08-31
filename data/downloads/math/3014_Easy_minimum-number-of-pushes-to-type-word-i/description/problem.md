# [3014. Minimum Number of Pushes to Type Word I](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 190 | 38 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `amazon`, `google`

## Description

You are given a string `word` containing **distinct** lowercase English letters.

Telephone keypads have keys mapped with **distinct** collections of lowercase English letters, which can be used to form words by pushing them. For example, the key `2` is mapped with `["a","b","c"]`, we need to push the key one time to type `"a"`, two times to type `"b"`, and three times to type `"c"` *.*

It is allowed to remap the keys numbered `2` to `9` to **distinct** collections of letters. The keys can be remapped to **any** amount of letters, but each letter **must** be mapped to **exactly** one key. You need to find the **minimum** number of times the keys will be pushed to type the string `word`.

Return *the **minimum** number of pushes needed to type *`word` *after remapping the keys*.

An example mapping of letters to keys on a telephone keypad is given below. Note that `1`, `*`, `#`, and `0` do **not** map to any letters.

![image](./images/0.png)

 

**Example 1:**

![image](./images/1.png)
```

Input: word = &quot;abcde&quot;
Output: 5
Explanation: The remapped keypad given in the image provides the minimum cost.
&quot;a&quot; -&gt; one push on key 2
&quot;b&quot; -&gt; one push on key 3
&quot;c&quot; -&gt; one push on key 4
&quot;d&quot; -&gt; one push on key 5
&quot;e&quot; -&gt; one push on key 6
Total cost is 1 + 1 + 1 + 1 + 1 = 5.
It can be shown that no other mapping can provide a lower cost.

```

**Example 2:**

![image](./images/2.png)
```

Input: word = &quot;xycdefghij&quot;
Output: 12
Explanation: The remapped keypad given in the image provides the minimum cost.
&quot;x&quot; -&gt; one push on key 2
&quot;y&quot; -&gt; two pushes on key 2
&quot;c&quot; -&gt; one push on key 3
&quot;d&quot; -&gt; two pushes on key 3
&quot;e&quot; -&gt; one push on key 4
&quot;f&quot; -&gt; one push on key 5
&quot;g&quot; -&gt; one push on key 6
&quot;h&quot; -&gt; one push on key 7
&quot;i&quot; -&gt; one push on key 8
&quot;j&quot; -&gt; one push on key 9
Total cost is 1 + 2 + 1 + 2 + 1 + 1 + 1 + 1 + 1 + 1 = 12.
It can be shown that no other mapping can provide a lower cost.

```

 

**Constraints:**

	- `1 <= word.length <= 26`

	- `word` consists of lowercase English letters.

	- All letters in `word` are distinct.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/) | [Solutions](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/)
