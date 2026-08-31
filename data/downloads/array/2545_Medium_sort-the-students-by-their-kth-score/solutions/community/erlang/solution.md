# Used  sort(Fun, List1) -> List2

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/3195050/](https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/3195050/)

---

# Intuition
Used `Fun` argument of `sort` function

# Approach
Implemented `Fun` based on comparison of `k`-th elements.

# Complexity
- Time complexity:
$$O(n\\, log(n))$$

- Space complexity:
$$O(n)$$

# Code
```
-spec sort_the_students(Score :: [[integer()]], K :: integer()) -> [[integer()]].
sort_the_students(Score, K) ->
  lists:sort(fun(A, B) -> lists:nth(K + 1, B) < lists:nth(K + 1, A) end, Score).
```