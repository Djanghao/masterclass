# [271. Encode and Decode Strings](https://leetcode.com/problems/encode-and-decode-strings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1562 | 451 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`design`](https://leetcode.com/tag/design)

**Companies:** `openai`, `google`, `amazon`, `crowdstrike`, `tiktok`, `facebook`, `microsoft`, `snowflake`

## Description

Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:

```

string encode(vector&lt;string&gt; strs) {
  // ... your code
  return encoded_string;
}
```
Machine 2 (receiver) has the function:

```

vector&lt;string&gt; decode(string s) {
  //... your code
  return strs;
}

```

So Machine 1 does:

```

string encoded_string = encode(strs);

```

and Machine 2 does:

```

vector&lt;string&gt; strs2 = decode(encoded_string);

```

`strs2` in Machine 2 should be the same as `strs` in Machine 1.

Implement the `encode` and `decode` methods.

You are not allowed to solve the problem using any serialize methods (such as `eval`).

 

**Example 1:**

```

Input: dummy_input = [&quot;Hello&quot;,&quot;World&quot;]
Output: [&quot;Hello&quot;,&quot;World&quot;]
Explanation:
Machine 1:
Codec encoder = new Codec();
String msg = encoder.encode(strs);
Machine 1 ---msg---&gt; Machine 2

Machine 2:
Codec decoder = new Codec();
String[] strs = decoder.decode(msg);

```

**Example 2:**

```

Input: dummy_input = [&quot;&quot;]
Output: [&quot;&quot;]

```

 

**Constraints:**

	- `1 <= strs.length <= 200`

	- `0 <= strs[i].length <= 200`

	- `strs[i]` contains any possible characters out of `256` valid ASCII characters.

 

**Follow up: **Could you write a generalized algorithm to work on any possible set of characters?

---

**Links:** [Submissions](https://leetcode.com/problems/encode-and-decode-strings/) | [Solutions](https://leetcode.com/problems/encode-and-decode-strings/)
