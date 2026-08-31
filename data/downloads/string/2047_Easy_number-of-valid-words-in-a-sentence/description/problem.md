# [2047. Number of Valid Words in a Sentence](https://leetcode.com/problems/number-of-valid-words-in-a-sentence/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 344 | 824 |

**Tags:** [`string`](https://leetcode.com/tag/string)

**Companies:** `oracle`, `cisco`

## Description

A sentence consists of lowercase letters (`'a'` to `'z'`), digits (`'0'` to `'9'`), hyphens (`'-'`), punctuation marks (`'!'`, `'.'`, and `','`), and spaces (`' '`) only. Each sentence can be broken down into **one or more tokens** separated by one or more spaces `' '`.

A token is a valid word if **all three** of the following are true:

	- It only contains lowercase letters, hyphens, and/or punctuation (**no** digits).

	- There is **at most one** hyphen `'-'`. If present, it **must** be surrounded by lowercase characters (`"a-b"` is valid, but `"-ab"` and `"ab-"` are not valid).

	- There is **at most one** punctuation mark. If present, it **must** be at the **end** of the token (`"ab,"`, `"cd!"`, and `"."` are valid, but `"a!b"` and `"c.,"` are not valid).

Examples of valid words include `"a-b."`, `"afad"`, `"ba-c"`, `"a!"`, and `"!"`.

Given a string `sentence`, return *the **number** of valid words in *`sentence`.

 

**Example 1:**

```

Input: sentence = &quot;cat and  dog&quot;
Output: 3
Explanation: The valid words in the sentence are &quot;cat&quot;, &quot;and&quot;, and &quot;dog&quot;.

```

**Example 2:**

```

Input: sentence = &quot;!this  1-s b8d!&quot;
Output: 0
Explanation: There are no valid words in the sentence.
&quot;!this&quot; is invalid because it starts with a punctuation mark.
&quot;1-s&quot; and &quot;b8d&quot; are invalid because they contain digits.

```

**Example 3:**

```

Input: sentence = &quot;alice and  bob are playing stone-game10&quot;
Output: 5
Explanation: The valid words in the sentence are &quot;alice&quot;, &quot;and&quot;, &quot;bob&quot;, &quot;are&quot;, and &quot;playing&quot;.
&quot;stone-game10&quot; is invalid because it contains digits.

```

 

**Constraints:**

	- `1 <= sentence.length <= 1000`

	- `sentence` only contains lowercase English letters, digits, `' '`, `'-'`, `'!'`, `'.'`, and `','`.

	- There will be at least `1` token.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-valid-words-in-a-sentence/) | [Solutions](https://leetcode.com/problems/number-of-valid-words-in-a-sentence/)
