# [341. Flatten Nested List Iterator](https://leetcode.com/problems/flatten-nested-list-iterator/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 5044 | 1791 |

**Tags:** [`stack`](https://leetcode.com/tag/stack), [`tree`](https://leetcode.com/tag/tree), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`design`](https://leetcode.com/tag/design), [`queue`](https://leetcode.com/tag/queue), [`iterator`](https://leetcode.com/tag/iterator)

**Companies:** `facebook`, `amazon`, `google`, `linkedin`, `apple`, `openai`, `yahoo`, `airbnb`, `walmart-labs`, `netflix`, `tesla`, `de-shaw`, `twitter`

## Description

You are given a nested list of integers `nestedList`. Each element is either an integer or a list whose elements may also be integers or other lists. Implement an iterator to flatten it.

Implement the `NestedIterator` class:

	- `NestedIterator(List nestedList)` Initializes the iterator with the nested list `nestedList`.

	- `int next()` Returns the next integer in the nested list.

	- `boolean hasNext()` Returns `true` if there are still some integers in the nested list and `false` otherwise.

Your code will be tested with the following pseudocode:

```

initialize iterator with nestedList
res = []
while iterator.hasNext()
    append iterator.next() to the end of res
return res

```

If `res` matches the expected flattened list, then your code will be judged as correct.

 

**Example 1:**

```

Input: nestedList = [[1,1],2,[1,1]]
Output: [1,1,2,1,1]
Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].

```

**Example 2:**

```

Input: nestedList = [1,[4,[6]]]
Output: [1,4,6]
Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].

```

 

**Constraints:**

	- `1 <= nestedList.length <= 500`

	- The values of the integers in the nested list is in the range `[-10^6, 10^6]`.

---

**Links:** [Submissions](https://leetcode.com/problems/flatten-nested-list-iterator/) | [Solutions](https://leetcode.com/problems/flatten-nested-list-iterator/)
