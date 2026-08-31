# Kotlin solution

**Author:** clhost
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/4119689/](https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/4119689/)

---

I know the same solution can be found at https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/1364324/java-o-log-n/, but here I try to explain it

## Explanation

First of all, find the level where the label is (easiest part).

Then consider this tree in two ways - the original one (rows from left to right or from right to left) and zigzag one.

So, if this tree were written in the original way, its parent could be easily found out - just do ```label / 2```.

How to invert this logic, how to map the current label to the possible original one?

The idea doesn't depend on the row, we have to "invert" on that way that the parent row is written.

For example:

1. For the parent row (3 2) and with the label 4 it's (4 5 6 7) -> it would be (3 2) (7 6 5 4).

2. For the parent row (2 3) and with the label 4 it's (7 6 5 4) -> it would be (2 3) (4 5 6 7).

After inversion it's easy to get the parent - just do ```label / 2```.

So, in here we just need to understand an offset of our label.

According to the example 1 we have to map ```14``` to ```9```, how to do it?

1. Subtract the current label from the maximum of this line - this is our offset (15 - 14 == 1).

2. And add it to the minimum number - this is our mapped number (8 + 1 == 9).

# Code
```
class Solution {
    fun pathInZigZagTree(label: Int): List<Int> {
        var level = 0
        var i = 1

        while (label >= i) { 
            i *= 2
            level += 1
        }

        var current = label
        val result = IntArray(level)

        while (current > 0) {
            result[level - 1] = current

            val max = (Math.pow(2.0, level.toDouble()) - 1).toInt()
            val min = (Math.pow(2.0, (level - 1).toDouble())).toInt()
            current = (max - current + min) / 2

            level--
        }

        return result.toList()
    }
}

```