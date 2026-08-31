# [1268. Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 5084 | 261 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`binary-search`](https://leetcode.com/tag/binary-search), [`trie`](https://leetcode.com/tag/trie), [`sorting`](https://leetcode.com/tag/sorting), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue)

**Companies:** `doordash`, `anduril`, `amazon`, `microsoft`, `google`, `ubs`, `docusign`, `paypal`, `tiktok`, `salesforce`, `squarepoint-capital`, `citadel`, `oracle`, `deliveroo`, `facebook`, `bloomberg`, `snapchat`, `apple`, `two-sigma`, `meesho`, `wix`

## Description

You are given an array of strings `products` and a string `searchWord`.

Design a system that suggests at most three product names from `products` after each character of `searchWord` is typed. Suggested products should have common prefix with `searchWord`. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return *a list of lists of the suggested products after each character of *`searchWord`* is typed*.

 

**Example 1:**

```

Input: products = [&quot;mobile&quot;,&quot;mouse&quot;,&quot;moneypot&quot;,&quot;monitor&quot;,&quot;mousepad&quot;], searchWord = &quot;mouse&quot;
Output: [[&quot;mobile&quot;,&quot;moneypot&quot;,&quot;monitor&quot;],[&quot;mobile&quot;,&quot;moneypot&quot;,&quot;monitor&quot;],[&quot;mouse&quot;,&quot;mousepad&quot;],[&quot;mouse&quot;,&quot;mousepad&quot;],[&quot;mouse&quot;,&quot;mousepad&quot;]]
Explanation: products sorted lexicographically = [&quot;mobile&quot;,&quot;moneypot&quot;,&quot;monitor&quot;,&quot;mouse&quot;,&quot;mousepad&quot;].
After typing m and mo all products match and we show user [&quot;mobile&quot;,&quot;moneypot&quot;,&quot;monitor&quot;].
After typing mou, mous and mouse the system suggests [&quot;mouse&quot;,&quot;mousepad&quot;].

```

**Example 2:**

```

Input: products = [&quot;havana&quot;], searchWord = &quot;havana&quot;
Output: [[&quot;havana&quot;],[&quot;havana&quot;],[&quot;havana&quot;],[&quot;havana&quot;],[&quot;havana&quot;],[&quot;havana&quot;]]
Explanation: The only word &quot;havana&quot; will be always suggested while typing the search word.

```

 

**Constraints:**

	- `1 <= products.length <= 1000`

	- `1 <= products[i].length <= 3000`

	- `1 <= sum(products[i].length) <= 2 * 10^4`

	- All the strings of `products` are **unique**.

	- `products[i]` consists of lowercase English letters.

	- `1 <= searchWord.length <= 1000`

	- `searchWord` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/search-suggestions-system/) | [Solutions](https://leetcode.com/problems/search-suggestions-system/)
