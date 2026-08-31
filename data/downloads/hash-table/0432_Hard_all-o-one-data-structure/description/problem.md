# [432. All O`one Data Structure](https://leetcode.com/problems/all-oone-data-structure/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 2200 | 223 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`linked-list`](https://leetcode.com/tag/linked-list), [`design`](https://leetcode.com/tag/design), [`doubly-linked-list`](https://leetcode.com/tag/doubly-linked-list)

**Companies:** `linkedin`, `atlassian`, `amazon`, `bloomberg`, `microsoft`, `facebook`, `google`, `uber`

## Description

Design a data structure to store the strings' count with the ability to return the strings with minimum and maximum counts.

Implement the `AllOne` class:

	- `AllOne()` Initializes the object of the data structure.

	- `inc(String key)` Increments the count of the string `key` by `1`. If `key` does not exist in the data structure, insert it with count `1`.

	- `dec(String key)` Decrements the count of the string `key` by `1`. If the count of `key` is `0` after the decrement, remove it from the data structure. It is guaranteed that `key` exists in the data structure before the decrement.

	- `getMaxKey()` Returns one of the keys with the maximal count. If no element exists, return an empty string `""`.

	- `getMinKey()` Returns one of the keys with the minimum count. If no element exists, return an empty string `""`.

**Note** that each function must run in `O(1)` average time complexity.

 

**Example 1:**

```

Input
[&quot;AllOne&quot;, &quot;inc&quot;, &quot;inc&quot;, &quot;getMaxKey&quot;, &quot;getMinKey&quot;, &quot;inc&quot;, &quot;getMaxKey&quot;, &quot;getMinKey&quot;]
[[], [&quot;hello&quot;], [&quot;hello&quot;], [], [], [&quot;leet&quot;], [], []]
Output
[null, null, null, &quot;hello&quot;, &quot;hello&quot;, null, &quot;hello&quot;, &quot;leet&quot;]

Explanation
AllOne allOne = new AllOne();
allOne.inc(&quot;hello&quot;);
allOne.inc(&quot;hello&quot;);
allOne.getMaxKey(); // return &quot;hello&quot;
allOne.getMinKey(); // return &quot;hello&quot;
allOne.inc(&quot;leet&quot;);
allOne.getMaxKey(); // return &quot;hello&quot;
allOne.getMinKey(); // return &quot;leet&quot;

```

 

**Constraints:**

	- `1 <= key.length <= 10`

	- `key` consists of lowercase English letters.

	- It is guaranteed that for each call to `dec`, `key` is existing in the data structure.

	- At most `5 * 10^4` calls will be made to `inc`, `dec`, `getMaxKey`, and `getMinKey`.

---

**Links:** [Submissions](https://leetcode.com/problems/all-oone-data-structure/) | [Solutions](https://leetcode.com/problems/all-oone-data-structure/)
