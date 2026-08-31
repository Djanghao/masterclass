# Kotlin | beats 100% | iterator recursion

**Author:** mdekaste
**Votes:** 3
**Link:** [https://leetcode.com/problems/parsing-a-boolean-expression/solutions/5941607/](https://leetcode.com/problems/parsing-a-boolean-expression/solutions/5941607/)

---

# Approach
There are two types of expressions:
- Just values: `t` or `f`
  - They can be parsed as is
- `()` based expressions: `|`,`&`, and `!`
  - They can start a subroutine

by using an iterator, we can recursively give the iterator to children and let every stack-call be aware where the iterator is right now.

# Complexity
- Time complexity: O(n)
    - every character parsed once
- Space complexity: O(1)
    - by using a set we can achieve the same results for storing large `(,)` expressions without the overhead of data. a `setOf(true, false)` is equivalent to `listOf(true, true, true, true, true, false)` when asking either `all{ it }`, `any{ it }`, or `none{ it }`

# Code
```kotlin []
class Solution {
    fun parseBoolExpr(expression: String): Boolean = parse(expression.iterator())

    private fun parse(iterator: CharIterator): Boolean = when(iterator.next()){
        't' -> true
        'f' -> false
        '&' -> parseList(iterator).all { it }
        '|' -> parseList(iterator).any { it }
        else -> parseList(iterator).none{ it }
    }
    private fun parseList(iterator: CharIterator) = buildSet {
        while(iterator.next() != ')'){
            add(parse(iterator))
        }
    }
}
```