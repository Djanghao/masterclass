# Kotlin. Beats 100% (449 ms). "XORing bits" solution.

**Author:** mobdev778
**Votes:** 2
**Link:** [https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/4618067/](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/4618067/)

---

![image.png](./images/0.png)

# Code
```
class Solution {
    fun pseudoPalindromicPaths (root: TreeNode?): Int {
        result = 0
        bits = 0
        rec(root)
        return result
    }

    private fun rec(node: TreeNode?) {
        if (node == null) return

        val bit = 1 shl node.`val`
        bits = bits xor bit

        if (node.left == node.right) {
            if (bits.countOneBits() <= 1) result++
        } else {
            node.left?.let { rec(it) }
            node.right?.let { rec(it) }
        }

        bits = bits xor bit
    }

    companion object {
        var bits = 0
        var result = 0
    }
}
```

# Approach

To check for a possible palindrome, we need to find out how many times a particular digit occurred on our path.

A palindrome can be constructed if:
- all numbers occur an even number of times [1]->[2]->[2]->[1]
- all numbers except one occurred an even number of times [1]->[2]->[1]

In my previous solution, I used an even occurrence counter in the form of a Boolean array.

But since we only have 10 numbers and this is less than 32, we can replace the Boolean array with one Int number.

We can represent each number as a power of two:
1 -> 2 (1 shl 1)
2 -> 4 (1 shl 2)
3 -> 8 (1 shl 3)
4 -> 16 (1 shl 4)
5 -> 32 (1 shl 5)
6 -> 64 (1 shl 6)
7 -> 128 (1 shl 7)
8 -> 256 (1 shl 8)
9 -> 512 (1 shl 9)

Then, while moving through the tree, we can set the desired \u201Codd parity\u201D bit in the list of bits, if it was not previously set. Or, conversely, reset the bit if it was previously set.
The inversion of the desired bit is done by the \u201CXOR\u201D operation.

Then we can check that a number is a palindrome by simply checking the number of bits - it should not be greater than 1.

When we exit the recursion, we shorten the path, so we need to invert the previously changed bit back. To do this, we perform the same XOR operation.
