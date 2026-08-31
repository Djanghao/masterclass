# [Kotlin] Optimizing Word Pair Multiplication

**Author:** teogor
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/5058313/](https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/5058313/)

---

# Intuition
We need to find pairs of words where each pair does not share any common letters. To efficiently check for common letters, we can use bit manipulation. If we represent each word as a bitmask where each bit corresponds to the presence of a letter, we can then check if two words have common letters by performing a bitwise AND operation.

# Approach
1. Create a `bitmasks` array where each element represents the bitmask of each word.
2. For each word, iterate through its characters. Set the corresponding bit in the bitmask to 1 if the character is present.
3. Iterate through all pairs of words and check if their bitmasks have no common bits (i.e., their bitwise AND is 0).
4. If the two words have no common letters, update the `maxProduct` with the product of their lengths.
5. Return the `maxProduct`.

# Complexity
- Time complexity: O(n^2 * m), where n is the number of words and m is the average length of a word.

- Space complexity: O(n) for the `bitmasks` array.

# Code
```
class Solution {
    fun maxProduct(words: Array<String>): Int {
        val bitmasks = IntArray(words.size) { 0 }
        for (i in words.indices) {
            for (char in words[i]) {
                bitmasks[i] = bitmasks[i] or (1 shl (char - 'a'))
            }
        }

        var maxProduct = 0
        for (i in words.indices) {
            for (j in i + 1 until words.size) {
                if (bitmasks[i] and bitmasks[j] == 0) {
                    maxProduct = maxOf(maxProduct, words[i].length * words[j].length)
                }
            }
        }

        return maxProduct
    }
}

```