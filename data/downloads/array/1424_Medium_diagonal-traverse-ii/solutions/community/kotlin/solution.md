# Kotlin List of Diagonals, O(n) Runtime and Space

**Author:** jschnall
**Votes:** 5
**Link:** [https://leetcode.com/problems/diagonal-traverse-ii/solutions/4315434/](https://leetcode.com/problems/diagonal-traverse-ii/solutions/4315434/)

---

# Intuition
Iterating through the existing list in diagonal fashion isn't that difficult, but since it is not uniform width, there are large gaps that will have to be traversed, which is inefficient. This could be mitigated somewhat by finding the row(s) with the maxWidth to break out of loops earlier, but it seemed tricky to optimize, if I even could make it efficient enough.

# Approach
I spent a moment looking at the matrix, and realized I could determine in advance, which diagonal each item would be in, and their order in the diagonal. This meant I could just make a new list of each diagonal without gaps, and then traverse that.

# Complexity
- Time complexity:
$$O(n)$$ where n is the total number of items in the matrix. We iterate through the matrix once to build the list of diagonals. I'm not sure the runtime of flatten, but assume the worst case would also be just $$O(n)$$.

- Space complexity:
$$O(n)$$ where n is the total number of ints in the matrix, since we're storing another copy if each int in diags, which has been reordered. If we had some sort of large objects instead of ints though we could just store a pair of indices to the original array as an improvement. 

# Code
```
class Solution {
    fun findDiagonalOrder(nums: List<List<Int>>): IntArray {
        val diags = mutableListOf<MutableList<Int>>()
        nums.forEachIndexed { j, row ->
            row.forEachIndexed { i, num ->
                val index = j + i
                if (index >= diags.size) {
                    diags.add(mutableListOf())
                }
                diags[index].add(0, num)
            }
        }
        return diags.flatten().toIntArray()
    }
}
```