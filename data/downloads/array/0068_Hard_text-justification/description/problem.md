# [68. Text Justification](https://leetcode.com/problems/text-justification/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 4435 | 5295 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `capital-one`, `tiktok`, `visa`, `roblox`, `karat`, `microsoft`, `uber`, `google`, `amazon`, `airbnb`, `facebook`, `quora`, `atlassian`, `lime`, `mongodb`, `waymo`, `sig`, `weride`, `goldman-sachs`, `moveworks`, `coursera`, `databricks`, `apple`, `oracle`, `zoho`, `robinhood`, `paypal`, `twilio`, `bloomberg`, `walmart-labs`, `coinbase`, `adobe`, `samsara`, `yandex`, `linkedin`

## Description

Given an array of strings `words` and a width `maxWidth`, format the text such that each line has exactly `maxWidth` characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces `' '` when necessary so that each line has exactly `maxWidth` characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is inserted between words.

**Note:**

	- A word is defined as a character sequence consisting of non-space characters only.

	- Each word's length is guaranteed to be greater than `0` and not exceed `maxWidth`.

	- The input array `words` contains at least one word.

 

**Example 1:**

```

Input: words = [&quot;This&quot;, &quot;is&quot;, &quot;an&quot;, &quot;example&quot;, &quot;of&quot;, &quot;text&quot;, &quot;justification.&quot;], maxWidth = 16
Output:
[
&nbsp; &nbsp;&quot;This &nbsp; &nbsp;is &nbsp; &nbsp;an&quot;,
&nbsp; &nbsp;&quot;example &nbsp;of text&quot;,
&nbsp; &nbsp;&quot;justification. &nbsp;&quot;
]
```

**Example 2:**

```

Input: words = [&quot;What&quot;,&quot;must&quot;,&quot;be&quot;,&quot;acknowledgment&quot;,&quot;shall&quot;,&quot;be&quot;], maxWidth = 16
Output:
[
&nbsp; &quot;What &nbsp; must &nbsp; be&quot;,
&nbsp; &quot;acknowledgment &nbsp;&quot;,
&nbsp; &quot;shall be &nbsp; &nbsp; &nbsp; &nbsp;&quot;
]
Explanation: Note that the last line is &quot;shall be    &quot; instead of &quot;shall     be&quot;, because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.
```

**Example 3:**

```

Input: words = [&quot;Science&quot;,&quot;is&quot;,&quot;what&quot;,&quot;we&quot;,&quot;understand&quot;,&quot;well&quot;,&quot;enough&quot;,&quot;to&quot;,&quot;explain&quot;,&quot;to&quot;,&quot;a&quot;,&quot;computer.&quot;,&quot;Art&quot;,&quot;is&quot;,&quot;everything&quot;,&quot;else&quot;,&quot;we&quot;,&quot;do&quot;], maxWidth = 20
Output:
[
&nbsp; &quot;Science &nbsp;is &nbsp;what we&quot;,
  &quot;understand &nbsp; &nbsp; &nbsp;well&quot;,
&nbsp; &quot;enough to explain to&quot;,
&nbsp; &quot;a &nbsp;computer. &nbsp;Art is&quot;,
&nbsp; &quot;everything &nbsp;else &nbsp;we&quot;,
&nbsp; &quot;do &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&quot;
]
```

 

**Constraints:**

	- `1 <= words.length <= 300`

	- `1 <= words[i].length <= 20`

	- `words[i]` consists of only English letters and symbols.

	- `1 <= maxWidth <= 100`

	- `words[i].length <= maxWidth`

---

**Links:** [Submissions](https://leetcode.com/problems/text-justification/) | [Solutions](https://leetcode.com/problems/text-justification/)
