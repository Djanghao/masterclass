# [3037. Find Pattern in Infinite Stream II](https://leetcode.com/problems/find-pattern-in-infinite-stream-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 7 | 3 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`sliding-window`](https://leetcode.com/tag/sliding-window), [`rolling-hash`](https://leetcode.com/tag/rolling-hash), [`string-matching`](https://leetcode.com/tag/string-matching), [`hash-function`](https://leetcode.com/tag/hash-function)

**Companies:** `uber`

## Description

You are given a binary array `pattern` and an object `stream` of class `InfiniteStream` representing a **0-indexed** infinite stream of bits.

The class `InfiniteStream` contains the following function:

	- `int next()`: Reads a **single** bit (which is either `0` or `1`) from the stream and returns it.

Return *the **first starting** index where the pattern matches the bits read from the stream*. For example, if the pattern is `[1, 0]`, the first match is the highlighted part in the stream `[0, 1, 0, 1, ...]`.

 

**Example 1:**

```

Input: stream = [1,1,1,0,1,1,1,...], pattern = [0,1]
Output: 3
Explanation: The first occurrence of the pattern [0,1] is highlighted in the stream [1,1,1,0,1,...], which starts at index 3.

```

**Example 2:**

```

Input: stream = [0,0,0,0,...], pattern = [0]
Output: 0
Explanation: The first occurrence of the pattern [0] is highlighted in the stream [0,...], which starts at index 0.

```

**Example 3:**

```

Input: stream = [1,0,1,1,0,1,1,0,1,...], pattern = [1,1,0,1]
Output: 2
Explanation: The first occurrence of the pattern [1,1,0,1] is highlighted in the stream [1,0,1,1,0,1,...], which starts at index 2.

```

 

**Constraints:**

	- `1 <= pattern.length <= 10^4`

	- `pattern` consists only of `0` and `1`.

	- `stream` consists only of `0` and `1`.

	- The input is generated such that the pattern's start index exists in the first `10^5` bits of the stream.

---

**Links:** [Submissions](https://leetcode.com/problems/find-pattern-in-infinite-stream-ii/) | [Solutions](https://leetcode.com/problems/find-pattern-in-infinite-stream-ii/)
