# [93. Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 5571 | 817 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`backtracking`](https://leetcode.com/tag/backtracking)

**Companies:** `microsoft`, `google`, `facebook`, `adobe`, `tiktok`, `nvidia`, `oracle`, `visa`, `bloomberg`, `arista-networks`, `palo-alto-networks`, `amazon`, `zoho`, `goldman-sachs`

## Description

A **valid IP address** consists of exactly four integers separated by single dots. Each integer is between `0` and `255` (**inclusive**) and cannot have leading zeros.

	- For example, `"0.1.2.201"` and `"192.168.1.1"` are **valid** IP addresses, but `"0.011.255.245"`, `"192.168.1.312"` and `"192.168@1.1"` are **invalid** IP addresses.

Given a string `s` containing only digits, return *all possible valid IP addresses that can be formed by inserting dots into *`s`. You are **not** allowed to reorder or remove any digits in `s`. You may return the valid IP addresses in **any** order.

 

**Example 1:**

```

Input: s = &quot;25525511135&quot;
Output: [&quot;255.255.11.135&quot;,&quot;255.255.111.35&quot;]

```

**Example 2:**

```

Input: s = &quot;0000&quot;
Output: [&quot;0.0.0.0&quot;]

```

**Example 3:**

```

Input: s = &quot;101023&quot;
Output: [&quot;1.0.10.23&quot;,&quot;1.0.102.3&quot;,&quot;10.1.0.23&quot;,&quot;10.10.2.3&quot;,&quot;101.0.2.3&quot;]

```

 

**Constraints:**

	- `1 <= s.length <= 20`

	- `s` consists of digits only.

---

**Links:** [Submissions](https://leetcode.com/problems/restore-ip-addresses/) | [Solutions](https://leetcode.com/problems/restore-ip-addresses/)
