# Replacing permutations with selections

**Author:** SergeyTT
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-arrangement/solutions/3269995/](https://leetcode.com/problems/beautiful-arrangement/solutions/3269995/)

---

# Intuition
Instead of generating all permutations we can pre-generate a set of divisable numbers for each number, and recursively create permutation by selecting one element from each set.

# Approach
For example, for N = 10 we will create these sets:
1 -> {1,2,3,4,5,6,7,8,9,10}
2 -> {1,2,4,6,8,10}
3 -> {1,3,6,9}
4 -> {1,2,4,8}
5 -> {1,5,10}
6 -> {1,3,6}
7 -> {1,7}
8 -> {1,2,4,8}
9 -> {1,3,9}
10 -> {1,2,5,10}

It is desirable to stop the recursion as early as possible. To achieve this we can start with the sets with the smallest size (number 7), and move down to the largest size (number 1). By the time we reach number 1, we will have only one choice left. 
Please note that we don't go from largest index to the smallest, but from the smallest set to the largest set.
Another useful thing to notice is that once we start working with the sets, the index doesn't matter - we just need to select exactly 1 number from each set.

# Complexity
- Time complexity:
sorry, hard to tell

- Space complexity:
O(n^2)

# Code
```
class Solution {
    fun countArrangement(n: Int): Int {
        val numbers = Array<MutableSet<Int>>(n + 1) { HashSet<Int>() }
        for (i in 1..n) {
            for (j in 1..n) {
                if (i % j == 0 || j % i == 0) numbers[i].add(j)
            }
        }
        numbers.sortWith( compareBy { it.size })

        var result = 0
        fun createPerms(i: Int, visited: IntArray) {
            if (i>n) {
                result++
                return
            }
            for (num in numbers[i]) {
                if (visited[num] == 0) {
                    visited[num] = 1
                    createPerms(i + 1, visited)
                    visited[num] = 0
                }
            }
        }
        createPerms(1, IntArray(n+1){0})
        return result
    }
}

```