# [1847. Closest Room](https://leetcode.com/problems/closest-room/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 535 | 21 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search), [`sorting`](https://leetcode.com/tag/sorting), [`ordered-set`](https://leetcode.com/tag/ordered-set)

**Companies:** `amazon`

## Description

There is a hotel with `n` rooms. The rooms are represented by a 2D integer array `rooms` where `rooms[i] = [roomId_i, size_i]` denotes that there is a room with room number `roomId_i` and size equal to `size_i`. Each `roomId_i` is guaranteed to be **unique**.

You are also given `k` queries in a 2D array `queries` where `queries[j] = [preferred_j, minSize_j]`. The answer to the `j^th` query is the room number `id` of a room such that:

	- The room has a size of **at least** `minSize_j`, and

	- `abs(id - preferred_j)` is **minimized**, where `abs(x)` is the absolute value of `x`.

If there is a **tie** in the absolute difference, then use the room with the **smallest** such `id`. If there is **no such room**, the answer is `-1`.

Return *an array *`answer`* of length *`k`* where *`answer[j]`* contains the answer to the *`j^th`* query*.

 

**Example 1:**

```

Input: rooms = [[2,2],[1,2],[3,2]], queries = [[3,1],[3,3],[5,2]]
Output: [3,-1,3]
Explanation: The answers to the queries are as follows:
Query = [3,1]: Room number 3 is the closest as abs(3 - 3) = 0, and its size of 2 is at least 1. The answer is 3.
Query = [3,3]: There are no rooms with a size of at least 3, so the answer is -1.
Query = [5,2]: Room number 3 is the closest as abs(3 - 5) = 2, and its size of 2 is at least 2. The answer is 3.
```

**Example 2:**

```

Input: rooms = [[1,4],[2,3],[3,5],[4,1],[5,2]], queries = [[2,3],[2,4],[2,5]]
Output: [2,1,3]
Explanation: The answers to the queries are as follows:
Query = [2,3]: Room number 2 is the closest as abs(2 - 2) = 0, and its size of 3 is at least 3. The answer is 2.
Query = [2,4]: Room numbers 1 and 3 both have sizes of at least 4. The answer is 1 since it is smaller.
Query = [2,5]: Room number 3 is the only room with a size of at least 5. The answer is 3.
```

 

**Constraints:**

	- `n == rooms.length`

	- `1 <= n <= 10^5`

	- `k == queries.length`

	- `1 <= k <= 10^4`

	- `1 <= roomId_i, preferred_j <= 10^7`

	- `1 <= size_i, minSize_j <= 10^7`

---

**Links:** [Submissions](https://leetcode.com/problems/closest-room/) | [Solutions](https://leetcode.com/problems/closest-room/)
