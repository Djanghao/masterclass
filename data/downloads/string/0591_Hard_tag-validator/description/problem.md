# [591. Tag Validator](https://leetcode.com/problems/tag-validator/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 181 | 653 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack)

**Companies:** `faire`, `microsoft`

## Description

Given a string representing a code snippet, implement a tag validator to parse the code and return whether it is valid.

A code snippet is valid if all the following rules hold:

	- The code must be wrapped in a valid closed tag. Otherwise, the code is invalid.

	- A closed tag (not necessarily valid) has exactly the following format : `TAG_CONTENT`. Among them, `` is the start tag, and `` is the end tag. The TAG_NAME in start and end tags should be the same. A closed tag is valid if and only if the TAG_NAME and TAG_CONTENT are valid.

	- A valid `TAG_NAME` only contain upper-case letters, and has length in range [1,9]. Otherwise, the `TAG_NAME` is invalid.

	- A valid `TAG_CONTENT` may contain other valid closed tags, cdata and any characters (see note1) EXCEPT unmatched `invalid.

	- A start tag is unmatched if no end tag exists with the same TAG_NAME, and vice versa. However, you also need to consider the issue of unbalanced when tags are nested.

	- A ``. And when you find a `` should be parsed as TAG_NAME (not necessarily valid).

	- The cdata has the following format : ``. The range of `CDATA_CONTENT` is defined as the characters between `first subsequent `]]>`.

	- `CDATA_CONTENT` may contain any characters. The function of cdata is to forbid the validator to parse `CDATA_CONTENT`, so even it has some characters that can be parsed as tag (no matter valid or invalid), you should treat it as regular characters.

 

**Example 1:**

```

Input: code = &quot;&lt;DIV&gt;This is the first line &lt;![CDATA[&lt;div&gt;]]&gt;&lt;/DIV&gt;&quot;
Output: true
Explanation: 
The code is wrapped in a closed tag : &lt;DIV&gt; and &lt;/DIV&gt;. 
The TAG_NAME is valid, the TAG_CONTENT consists of some characters and cdata. 
Although CDATA_CONTENT has an unmatched start tag with invalid TAG_NAME, it should be considered as plain text, not parsed as a tag.
So TAG_CONTENT is valid, and then the code is valid. Thus return true.

```

**Example 2:**

```

Input: code = &quot;&lt;DIV&gt;&gt;&gt;  ![cdata[]] &lt;![CDATA[&lt;div&gt;]&gt;]]&gt;]]&gt;&gt;]&lt;/DIV&gt;&quot;
Output: true
Explanation:
We first separate the code into : start_tag|tag_content|end_tag.
start_tag -&gt; &quot;&lt;DIV&gt;&quot;
end_tag -&gt; &quot;&lt;/DIV&gt;&quot;
tag_content could also be separated into : text1|cdata|text2.
text1 -&gt; &quot;&gt;&gt;  ![cdata[]] &quot;
cdata -&gt; &quot;&lt;![CDATA[&lt;div&gt;]&gt;]]&gt;&quot;, where the CDATA_CONTENT is &quot;&lt;div&gt;]&gt;&quot;
text2 -&gt; &quot;]]&gt;&gt;]&quot;
The reason why start_tag is NOT &quot;&lt;DIV&gt;&gt;&gt;&quot; is because of the rule 6.
The reason why cdata is NOT &quot;&lt;![CDATA[&lt;div&gt;]&gt;]]&gt;]]&gt;&quot; is because of the rule 7.

```

**Example 3:**

```

Input: code = &quot;&lt;A&gt;  &lt;B&gt; &lt;/A&gt;   &lt;/B&gt;&quot;
Output: false
Explanation: Unbalanced. If &quot;&lt;A&gt;&quot; is closed, then &quot;&lt;B&gt;&quot; must be unmatched, and vice versa.

```

 

**Constraints:**

	- `1 '`, `'/'`, `'!'`, `'['`, `']'`, `'.'`, and `' '`.

---

**Links:** [Submissions](https://leetcode.com/problems/tag-validator/) | [Solutions](https://leetcode.com/problems/tag-validator/)
