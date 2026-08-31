# [648. Replace Words](https://leetcode.com/problems/replace-words/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 3089 | 219 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`trie`](https://leetcode.com/tag/trie)

**Companies:** `google`, `microsoft`, `uber`, `tiktok`

## Description

In English, we have a concept called **root**, which can be followed by some other word to form another longer word - let's call this word **derivative**. For example, when the **root** `"help"` is followed by the word `"ful"`, we can form a derivative `"helpful"`.

Given a `dictionary` consisting of many **roots** and a `sentence` consisting of words separated by spaces, replace all the derivatives in the sentence with the **root** forming it. If a derivative can be replaced by more than one **root**, replace it with the **root** that has **the shortest length**.

Return *the `sentence`* after the replacement.

 

**Example 1:**

```

Input: dictionary = [&quot;cat&quot;,&quot;bat&quot;,&quot;rat&quot;], sentence = &quot;the cattle was rattled by the battery&quot;
Output: &quot;the cat was rat by the bat&quot;

```

**Example 2:**

```

Input: dictionary = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;], sentence = &quot;aadsfasf absbs bbab cadsfafs&quot;
Output: &quot;a a b c&quot;

```

 

**Constraints:**

	- `1 <= dictionary.length <= 1000`

	- `1 <= dictionary[i].length <= 100`

	- `dictionary[i]` consists of only lower-case letters.

	- `1 <= sentence.length <= 10^6`

	- `sentence` consists of only lower-case letters and spaces.

	- The number of words in `sentence` is in the range `[1, 1000]`

	- The length of each word in `sentence` is in the range `[1, 1000]`

	- Every two consecutive words in `sentence` will be separated by exactly one space.

	- `sentence` does not have leading or trailing spaces.

---

**Links:** [Submissions](https://leetcode.com/problems/replace-words/) | [Solutions](https://leetcode.com/problems/replace-words/)
