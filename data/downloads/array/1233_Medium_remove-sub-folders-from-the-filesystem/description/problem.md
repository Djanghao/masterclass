# [1233. Remove Sub-Folders from the Filesystem](https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1645 | 230 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`trie`](https://leetcode.com/tag/trie)

**Companies:** `google`, `verkada`, `snowflake`, `facebook`, `amazon`

## Description

Given a list of folders `folder`, return *the folders after removing all **sub-folders** in those folders*. You may return the answer in **any order**.

If a `folder[i]` is located within another `folder[j]`, it is called a **sub-folder** of it. A sub-folder of `folder[j]` must start with `folder[j]`, followed by a `"/"`. For example, `"/a/b"` is a sub-folder of `"/a"`, but `"/b"` is not a sub-folder of `"/a/b/c"`.

The format of a path is one or more concatenated strings of the form: `'/'` followed by one or more lowercase English letters.

	- For example, `"/leetcode"` and `"/leetcode/problems"` are valid paths while an empty string and `"/"` are not.

 

**Example 1:**

```

Input: folder = [&quot;/a&quot;,&quot;/a/b&quot;,&quot;/c/d&quot;,&quot;/c/d/e&quot;,&quot;/c/f&quot;]
Output: [&quot;/a&quot;,&quot;/c/d&quot;,&quot;/c/f&quot;]
Explanation: Folders &quot;/a/b&quot; is a subfolder of &quot;/a&quot; and &quot;/c/d/e&quot; is inside of folder &quot;/c/d&quot; in our filesystem.

```

**Example 2:**

```

Input: folder = [&quot;/a&quot;,&quot;/a/b/c&quot;,&quot;/a/b/d&quot;]
Output: [&quot;/a&quot;]
Explanation: Folders &quot;/a/b/c&quot; and &quot;/a/b/d&quot; will be removed because they are subfolders of &quot;/a&quot;.

```

**Example 3:**

```

Input: folder = [&quot;/a/b/c&quot;,&quot;/a/b/ca&quot;,&quot;/a/b/d&quot;]
Output: [&quot;/a/b/c&quot;,&quot;/a/b/ca&quot;,&quot;/a/b/d&quot;]

```

 

**Constraints:**

	- `1 <= folder.length <= 4 * 10^4`

	- `2 <= folder[i].length <= 100`

	- `folder[i]` contains only lowercase letters and `'/'`.

	- `folder[i]` always starts with the character `'/'`.

	- Each folder name is **unique**.

---

**Links:** [Submissions](https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/) | [Solutions](https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/)
