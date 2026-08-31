# [1166. Design File System](https://leetcode.com/problems/design-file-system/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 633 | 79 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`design`](https://leetcode.com/tag/design), [`trie`](https://leetcode.com/tag/trie)

**Companies:** `doordash`, `amazon`, `uber`, `facebook`, `coinbase`, `capital-one`, `snowflake`, `microsoft`, `atlassian`, `oracle`, `airbnb`

## Description

You are asked to design a file system that allows you to create new paths and associate them with different values.

The format of a path is one or more concatenated strings of the form: `/` followed by one or more lowercase English letters. For example, "`/leetcode"` and "`/leetcode/problems"` are valid paths while an empty string `""` and `"/"` are not.

Implement the `FileSystem` class:

	- `bool createPath(string path, int value)` Creates a new `path` and associates a `value` to it if possible and returns `true`. Returns `false` if the path **already exists** or its parent path **doesn't exist**.

	- `int get(string path)` Returns the value associated with `path` or returns `-1` if the path doesn't exist.

 

**Example 1:**

```

Input: 
[&quot;FileSystem&quot;,&quot;createPath&quot;,&quot;get&quot;]
[[],[&quot;/a&quot;,1],[&quot;/a&quot;]]
Output: 
[null,true,1]
Explanation: 
FileSystem fileSystem = new FileSystem();

fileSystem.createPath(&quot;/a&quot;, 1); // return true
fileSystem.get(&quot;/a&quot;); // return 1

```

**Example 2:**

```

Input: 
[&quot;FileSystem&quot;,&quot;createPath&quot;,&quot;createPath&quot;,&quot;get&quot;,&quot;createPath&quot;,&quot;get&quot;]
[[],[&quot;/leet&quot;,1],[&quot;/leet/code&quot;,2],[&quot;/leet/code&quot;],[&quot;/c/d&quot;,1],[&quot;/c&quot;]]
Output: 
[null,true,true,2,false,-1]
Explanation: 
FileSystem fileSystem = new FileSystem();

fileSystem.createPath(&quot;/leet&quot;, 1); // return true
fileSystem.createPath(&quot;/leet/code&quot;, 2); // return true
fileSystem.get(&quot;/leet/code&quot;); // return 2
fileSystem.createPath(&quot;/c/d&quot;, 1); // return false because the parent path &quot;/c&quot; doesn&#39;t exist.
fileSystem.get(&quot;/c&quot;); // return -1 because this path doesn&#39;t exist.

```

 

**Constraints:**

	- `2 <= path.length <= 100`

	- `1 <= value <= 10^9`

	- Each `path` is **valid** and consists of lowercase English letters and `'/'`.

	- At most `10^4` calls **in total** will be made to `createPath` and `get`.

---

**Links:** [Submissions](https://leetcode.com/problems/design-file-system/) | [Solutions](https://leetcode.com/problems/design-file-system/)
