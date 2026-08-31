# Scala | 1-liner, exists, pattern matching, toLong | Explanation

**Author:** idontknoooo
**Votes:** 2
**Link:** [https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/3052376/](https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/3052376/)

---

> Disclaimer: Don't do this in any interview or production code base. 1-liner solutions are hard to read. I am only doing this for fun.
# Intuition
- Decide if it's bulky or heavy, then return string based on these two values

# Approach
- `exists` will check if any value satisfies the condition
- Remember to do type conversion for large number
- The type of the first variable in an expression determines the type of the result (thus, we only need `toLong` on `length` not `width` or `height`)
- Pattern matching can be written in one line without a `;`

# Complexity
- Time complexity:
Constant time: `O(1)`

- Space complexity:
Constant space: `O(1)`

# Code
```scala
object Solution {
    def categorizeBox(length: Int, width: Int, height: Int, mass: Int): String = {
        (List(length, width, height).exists(_ >= 10_000) || length.toLong * width * height >= 1e9.toLong, mass >= 100) match {case (true, true) => "Both" case (true, false) => "Bulky" case (false, true) => "Heavy" case (false, false) => "Neither"
        }
    }
}
```