# [249. Group Shifted Strings](https://leetcode.com/problems/group-shifted-strings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1772 | 441 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string)

**Companies:** `facebook`, `google`, `uber`, `wix`

## Description

Perform the following shift operations on a string:

	- **Right shift**: Replace every letter with the **successive** letter of the English alphabet, where 'z' is replaced by 'a'. For example, `"abc"` can be right-shifted to `"bcd" `or `"xyz"` can be right-shifted to `"yza"`.

	- **Left shift**: Replace every letter with the **preceding** letter of the English alphabet, where 'a' is replaced by 'z'. For example, `"bcd"` can be left-shifted to `"abc" or ``"yza"` can be left-shifted to `"xyz"`.

We can keep shifting the string in both directions to form an **endless** **shifting sequence**.

	- For example, shift `"abc"` to form the sequence: `...  "abc"  "bcd"  ...  "xyz"  "yza"  ...`.`  "zab"  "abc"  ...`

You are given an array of strings `strings`, group together all `strings[i]` that belong to the same shifting sequence. You may return the answer in **any order**.

 

**Example 1:**

**Input:** strings = ["abc","bcd","acef","xyz","az","ba","a","z"]

**Output:** [["acef"],["a","z"],["abc","bcd","xyz"],["az","ba"]]

**Example 2:**

**Input:** strings = ["a"]

**Output:** [["a"]]

 

**Constraints:**

	- `1 <= strings.length <= 200`

	- `1 <= strings[i].length <= 50`

	- `strings[i]` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/group-shifted-strings/) | [Solutions](https://leetcode.com/problems/group-shifted-strings/)
