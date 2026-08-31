# Kotlin, 100% on runtime.

**Author:** lev5
**Votes:** 1
**Link:** [https://leetcode.com/problems/mini-parser/solutions/4723036/](https://leetcode.com/problems/mini-parser/solutions/4723036/)

---

# Intuition
Use simple recursion to consume input since it maps organically to the `NestedInteger` data structure.  Also note that `[]` are guaranteed to be matching.

Additionally, we try to avoid string manipulation which may result in new objects created.  Also prefer raw parsing.

# Approach
Make recursive function which takes in position - `i: Int`   into string with 2 base cases
1. This is an integer, so we parse until we hit end of string or non digit and then return new `NestedInteger` which contains just the number and the position at which we stopped parsing.
2. This is a list, so we make
    1. Create a new NestedInteger representing list.
    2. Make recursive calls until we hit a `]`.  Each recursive call's index is called with previous recursive's call returned index + 1.
    3. Return new NestedInteger representing list and the index at which we stopped parsing.

# Complexity
- Time complexity:
O(N) where N is input string length.

- Space complexity:
O(M) where M is the level of deepest nested list.  

# Code
```
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     // Constructor initializes an empty nested list.
 *     constructor()
 *
 *     // Constructor initializes a single integer.
 *     constructor(value: Int)
 *
 *     // @return true if this NestedInteger holds a single integer, rather than a nested list.
 *     fun isInteger(): Boolean
 *
 *     // @return the single integer that this NestedInteger holds, if it holds a single integer
 *     // Return null if this NestedInteger holds a nested list
 *     fun getInteger(): Int?
 *
 *     // Set this NestedInteger to hold a single integer.
 *     fun setInteger(value: Int): Unit
 *
 *     // Set this NestedInteger to hold a nested list and adds a nested integer to it.
 *     fun add(ni: NestedInteger): Unit
 *
 *     // @return the nested list that this NestedInteger holds, if it holds a nested list
 *     // Return null if this NestedInteger holds a single integer
 *     fun getList(): List<NestedInteger>?
 * }
 */
class Solution {
    fun deserialize(s: String): NestedInteger {
        fun dfs(i: Int): Pair<NestedInteger, Int> {
           // println("$i, ${s[i]}")
            if (s.isEmpty()) return NestedInteger() to 0
            var k = i
             while (k < s.length && (s[k] == ',' || s[k] == ']')) k += 1
            if (s[k].isDigit() || s[k] == '-') {
                var j = k + 1
                while (j < s.length && s[j].isDigit()) j += 1
                return NestedInteger(s.substring(k, j).toInt()) to j
            } else {
                var j = k + 1
                val nl = NestedInteger()
                while (j < s.length && s[j] != ']') {
                    val c = dfs(j)
                    j = c.second
                    nl.add(c.first) 
                   //  println("j: $j, ${s[j]}")
                }
                return nl to j + 1
            }
        }

        return dfs(0).first
    }
}
```