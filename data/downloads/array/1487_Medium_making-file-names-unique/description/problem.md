# [1487. Making File Names Unique](https://leetcode.com/problems/making-file-names-unique/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 461 | 741 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string)

**Companies:** `okta`

## Description

Given an array of strings `names` of size `n`. You will create `n` folders in your file system **such that**, at the `i^th` minute, you will create a folder with the name `names[i]`.

Since two files **cannot** have the same name, if you enter a folder name that was previously used, the system will have a suffix addition to its name in the form of `(k)`, where, `k` is the **smallest positive integer** such that the obtained name remains unique.

Return *an array of strings of length *`n` where `ans[i]` is the actual name the system will assign to the `i^th` folder when you create it.

 

**Example 1:**

```

Input: names = [&quot;pes&quot;,&quot;fifa&quot;,&quot;gta&quot;,&quot;pes(2019)&quot;]
Output: [&quot;pes&quot;,&quot;fifa&quot;,&quot;gta&quot;,&quot;pes(2019)&quot;]
Explanation: Let&#39;s see how the file system creates folder names:
&quot;pes&quot; --&gt; not assigned before, remains &quot;pes&quot;
&quot;fifa&quot; --&gt; not assigned before, remains &quot;fifa&quot;
&quot;gta&quot; --&gt; not assigned before, remains &quot;gta&quot;
&quot;pes(2019)&quot; --&gt; not assigned before, remains &quot;pes(2019)&quot;

```

**Example 2:**

```

Input: names = [&quot;gta&quot;,&quot;gta(1)&quot;,&quot;gta&quot;,&quot;avalon&quot;]
Output: [&quot;gta&quot;,&quot;gta(1)&quot;,&quot;gta(2)&quot;,&quot;avalon&quot;]
Explanation: Let&#39;s see how the file system creates folder names:
&quot;gta&quot; --&gt; not assigned before, remains &quot;gta&quot;
&quot;gta(1)&quot; --&gt; not assigned before, remains &quot;gta(1)&quot;
&quot;gta&quot; --&gt; the name is reserved, system adds (k), since &quot;gta(1)&quot; is also reserved, systems put k = 2. it becomes &quot;gta(2)&quot;
&quot;avalon&quot; --&gt; not assigned before, remains &quot;avalon&quot;

```

**Example 3:**

```

Input: names = [&quot;onepiece&quot;,&quot;onepiece(1)&quot;,&quot;onepiece(2)&quot;,&quot;onepiece(3)&quot;,&quot;onepiece&quot;]
Output: [&quot;onepiece&quot;,&quot;onepiece(1)&quot;,&quot;onepiece(2)&quot;,&quot;onepiece(3)&quot;,&quot;onepiece(4)&quot;]
Explanation: When the last folder is created, the smallest positive valid k is 4, and it becomes &quot;onepiece(4)&quot;.

```

 

**Constraints:**

	- `1 <= names.length <= 5 * 10^4`

	- `1 <= names[i].length <= 20`

	- `names[i]` consists of lowercase English letters, digits, and/or round brackets.

---

**Links:** [Submissions](https://leetcode.com/problems/making-file-names-unique/) | [Solutions](https://leetcode.com/problems/making-file-names-unique/)
