# [811. Subdomain Visit Count](https://leetcode.com/problems/subdomain-visit-count/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1593 | 1307 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `google`, `roblox`, `wix`

## Description

A website domain `"discuss.leetcode.com"` consists of various subdomains. At the top level, we have `"com"`, at the next level, we have `"leetcode.com"` and at the lowest level, `"discuss.leetcode.com"`. When we visit a domain like `"discuss.leetcode.com"`, we will also visit the parent domains `"leetcode.com"` and `"com"` implicitly.

A **count-paired domain** is a domain that has one of the two formats `"rep d1.d2.d3"` or `"rep d1.d2"` where `rep` is the number of visits to the domain and `d1.d2.d3` is the domain itself.

	- For example, `"9001 discuss.leetcode.com"` is a **count-paired domain** that indicates that `discuss.leetcode.com` was visited `9001` times.

Given an array of **count-paired domains** `cpdomains`, return *an array of the **count-paired domains** of each subdomain in the input*. You may return the answer in **any order**.

 

**Example 1:**

```

Input: cpdomains = [&quot;9001 discuss.leetcode.com&quot;]
Output: [&quot;9001 leetcode.com&quot;,&quot;9001 discuss.leetcode.com&quot;,&quot;9001 com&quot;]
Explanation: We only have one website domain: &quot;discuss.leetcode.com&quot;.
As discussed above, the subdomain &quot;leetcode.com&quot; and &quot;com&quot; will also be visited. So they will all be visited 9001 times.

```

**Example 2:**

```

Input: cpdomains = [&quot;900 google.mail.com&quot;, &quot;50 yahoo.com&quot;, &quot;1 intel.mail.com&quot;, &quot;5 wiki.org&quot;]
Output: [&quot;901 mail.com&quot;,&quot;50 yahoo.com&quot;,&quot;900 google.mail.com&quot;,&quot;5 wiki.org&quot;,&quot;5 org&quot;,&quot;1 intel.mail.com&quot;,&quot;951 com&quot;]
Explanation: We will visit &quot;google.mail.com&quot; 900 times, &quot;yahoo.com&quot; 50 times, &quot;intel.mail.com&quot; once and &quot;wiki.org&quot; 5 times.
For the subdomains, we will visit &quot;mail.com&quot; 900 + 1 = 901 times, &quot;com&quot; 900 + 50 + 1 = 951 times, and &quot;org&quot; 5 times.

```

 

**Constraints:**

	- `1 <= cpdomain.length <= 100`

	- `1 <= cpdomain[i].length <= 100`

	- `cpdomain[i]` follows either the `"rep_i d1_i.d2_i.d3_i"` format or the `"rep_i d1_i.d2_i"` format.

	- `rep_i` is an integer in the range `[1, 10^4]`.

	- `d1_i`, `d2_i`, and `d3_i` consist of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/subdomain-visit-count/) | [Solutions](https://leetcode.com/problems/subdomain-visit-count/)
