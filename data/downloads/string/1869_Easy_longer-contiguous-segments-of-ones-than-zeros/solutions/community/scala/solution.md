# Scala, Beats 100% runtime + space

**Author:** dsb4k8
**Votes:** 0
**Link:** [https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/5265839/](https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/5265839/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Finding a run of strings was harder than originally thought...
took a grid-like approach: 

# Approach
<!-- Describe your approach to solving the problem. -->
Make a collection of length `s.length()`

For each element in the range, use string interpolation to "multiply" the string `"1"` or `"0"` by the index... This creates something like 
[1
1,1
1,1,1
1,1,1,1]
[0
0,0
0,0,0
0,0,0,0]

^ This represents all possible quantities we can have of 1 and 0
Since we do not know which combination it is, or where it is located, we can instead can look it up with filter: `filter(s.contains(_))`

Lastly, we compare the length of the filtered collections.
If `ones` has more entries than `zeros`, then`s` contains more 1s than 0s

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$2(O(n)) + O(1) + O(1) + O(1) + O(1) $$ ~= **$$O(n)$$**:
`.filter`: Linear - (O(n))    x 2
`.length`: Constant(O(1))     x 4
`.contains`: Linear(O(n))     x 2
`.compare >`: Constant(O(1))  x 1

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$2 * O(n)$$ ~= **$$O(n)$$**:
`ones`: O(n)
`zeros`: O(n)


# Code
```
object Solution {
    def checkZeroOnes(s: String): Boolean = {
        val ones = (1 to s.length()).map("1" * _)
        val zeros = (1 to s.length()).map("0" * _)
        ones.filter(s.contains(_)).length > zeros.filter(s.contains(_)).length
    }
}
```