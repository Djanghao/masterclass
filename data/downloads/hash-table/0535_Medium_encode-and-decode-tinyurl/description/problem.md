# [535. Encode and Decode TinyURL](https://leetcode.com/problems/encode-and-decode-tinyurl/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2116 | 3817 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`design`](https://leetcode.com/tag/design), [`hash-function`](https://leetcode.com/tag/hash-function)

**Companies:** `google`, `salesforce`, `amazon`, `adobe`, `microsoft`, `shopify`, `facebook`, `uber`

## Description

Note: This is a companion problem to the System Design problem: Design TinyURL.

TinyURL is a URL shortening service where you enter a URL such as `https://leetcode.com/problems/design-tinyurl` and it returns a short URL such as `http://tinyurl.com/4e9iAk`. Design a class to encode a URL and decode a tiny URL.

There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

Implement the `Solution` class:

	- `Solution()` Initializes the object of the system.

	- `String encode(String longUrl)` Returns a tiny URL for the given `longUrl`.

	- `String decode(String shortUrl)` Returns the original long URL for the given `shortUrl`. It is guaranteed that the given `shortUrl` was encoded by the same object.

 

**Example 1:**

```

Input: url = &quot;https://leetcode.com/problems/design-tinyurl&quot;
Output: &quot;https://leetcode.com/problems/design-tinyurl&quot;

Explanation:
Solution obj = new Solution();
string tiny = obj.encode(url); // returns the encoded tiny url.
string ans = obj.decode(tiny); // returns the original url after decoding it.

```

 

**Constraints:**

	- `1 <= url.length <= 10^4`

	- `url` is guranteed to be a valid URL.

---

**Links:** [Submissions](https://leetcode.com/problems/encode-and-decode-tinyurl/) | [Solutions](https://leetcode.com/problems/encode-and-decode-tinyurl/)
