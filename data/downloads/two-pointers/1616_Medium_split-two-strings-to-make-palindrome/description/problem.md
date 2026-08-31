# [1616. Split Two Strings to Make Palindrome](https://leetcode.com/problems/split-two-strings-to-make-palindrome/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 769 | 259 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string)

**Companies:** `google`

## Description

You are given two strings `a` and `b` of the same length. Choose an index and split both strings **at the same index**, splitting `a` into two strings: `a_prefix` and `a_suffix` where `a = a_prefix + a_suffix`, and splitting `b` into two strings: `b_prefix` and `b_suffix` where `b = b_prefix + b_suffix`. Check if `a_prefix + b_suffix` or `b_prefix + a_suffix` forms a palindrome.

When you split a string `s` into `s_prefix` and `s_suffix`, either `s_suffix` or `s_prefix` is allowed to be empty. For example, if `s = "abc"`, then `"" + "abc"`, `"a" + "bc"`, `"ab" + "c"` , and `"abc" + ""` are valid splits.

Return `true`* if it is possible to form** a palindrome string, otherwise return *`false`.

**Notice** that `x + y` denotes the concatenation of strings `x` and `y`.

 

**Example 1:**

```

Input: a = &quot;x&quot;, b = &quot;y&quot;
Output: true
Explaination: If either a or b are palindromes the answer is true since you can split in the following way:
aprefix = &quot;&quot;, asuffix = &quot;x&quot;
bprefix = &quot;&quot;, bsuffix = &quot;y&quot;
Then, aprefix + bsuffix = &quot;&quot; + &quot;y&quot; = &quot;y&quot;, which is a palindrome.

```

**Example 2:**

```

Input: a = &quot;xbdef&quot;, b = &quot;xecab&quot;
Output: false

```

**Example 3:**

```

Input: a = &quot;ulacfd&quot;, b = &quot;jizalu&quot;
Output: true
Explaination: Split them at index 3:
aprefix = &quot;ula&quot;, asuffix = &quot;cfd&quot;
bprefix = &quot;jiz&quot;, bsuffix = &quot;alu&quot;
Then, aprefix + bsuffix = &quot;ula&quot; + &quot;alu&quot; = &quot;ulaalu&quot;, which is a palindrome.

```

 

**Constraints:**

	- `1 <= a.length, b.length <= 10^5`

	- `a.length == b.length`

	- `a` and `b` consist of lowercase English letters

---

**Links:** [Submissions](https://leetcode.com/problems/split-two-strings-to-make-palindrome/) | [Solutions](https://leetcode.com/problems/split-two-strings-to-make-palindrome/)
