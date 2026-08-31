# [443. String Compression](https://leetcode.com/problems/string-compression/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 6008 | 8776 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string)

**Companies:** `facebook`, `yandex`, `amazon`, `salesforce`, `microsoft`, `bloomberg`, `google`, `goldman-sachs`, `apple`, `oracle`, `palo-alto-networks`, `rakuten`, `mongodb`, `crowdstrike`, `affirm`, `ripple`, `servicenow`, `ibm`, `pinterest`, `tiktok`, `yahoo`, `adobe`, `qualtrics`, `anduril`, `the-trade-desk`, `expedia`, `godaddy`, `snapchat`, `yelp`, `lyft`

## Description

Given an array of characters `chars`, compress it using the following algorithm:

Begin with an empty string `s`. For each group of **consecutive repeating characters** in `chars`:

	- If the group's length is `1`, append the character to `s`.

	- Otherwise, append the character followed by the group's length.

The compressed string `s` **should not be returned separately**, but instead, be stored **in the input character array `chars`**. Note that group lengths that are `10` or longer will be split into multiple characters in `chars`.

After you are done **modifying the input array,** return *the new length of the array*.

You must write an algorithm that uses only constant extra space.

**Note: **The characters in the array beyond the returned length do not matter and should be ignored.

 

**Example 1:**

```

Input: chars = [&quot;a&quot;,&quot;a&quot;,&quot;b&quot;,&quot;b&quot;,&quot;c&quot;,&quot;c&quot;,&quot;c&quot;]
Output: Return 6, and the first 6 characters of the input array should be: [&quot;a&quot;,&quot;2&quot;,&quot;b&quot;,&quot;2&quot;,&quot;c&quot;,&quot;3&quot;]
Explanation: The groups are &quot;aa&quot;, &quot;bb&quot;, and &quot;ccc&quot;. This compresses to &quot;a2b2c3&quot;.

```

**Example 2:**

```

Input: chars = [&quot;a&quot;]
Output: Return 1, and the first character of the input array should be: [&quot;a&quot;]
Explanation: The only group is &quot;a&quot;, which remains uncompressed since it&#39;s a single character.

```

**Example 3:**

```

Input: chars = [&quot;a&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;]
Output: Return 4, and the first 4 characters of the input array should be: [&quot;a&quot;,&quot;b&quot;,&quot;1&quot;,&quot;2&quot;].
Explanation: The groups are &quot;a&quot; and &quot;bbbbbbbbbbbb&quot;. This compresses to &quot;ab12&quot;.
```

 

**Constraints:**

	- `1 <= chars.length <= 2000`

	- `chars[i]` is a lowercase English letter, uppercase English letter, digit, or symbol.

---

**Links:** [Submissions](https://leetcode.com/problems/string-compression/) | [Solutions](https://leetcode.com/problems/string-compression/)
