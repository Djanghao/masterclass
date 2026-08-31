# Kotlin, bit masks, 227 ms

**Author:** user7581dN
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/solutions/5972539/](https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/solutions/5972539/)

---

# Intuition
Generally, the path between nodes `u` and `v` consists of the path from `u` to `x` and the path from `x` to `v`, where `x` is their closest common ancestor. However, for this problem we can take the root instead of `x`, since it doesn't affect the ability to build a palidrome from the path. This is always true because the shortest path `u-x-v` differs from the (potentially) longer one `u-0-v` by two equal `0-x` paths; this adds even numbers of some letters, and each pair of equal letters can be placed in front and at the back of the string.
Given that, we can pre-calculate path strings from every node to the root.

To determine the possibility of building a palindrome from every path string, we'll use bit masks instead of operating with path strings themselves.
26 letters are mapped to 26 bits that fit into a 32-bit integer. Every time we encounter a letter in some path string, we invert the corresponding bit. When the whole path string has been processed, the resulting value with zero or one set bit means that we can build a palindrome from the string (since there is at most one letter with an odd number of occurrences that must be placed in the middle).

# Approach
1. Calculate bit masks for paths from root to every other node.
2. To reduce time complexity, store the number of occurrences of each mask in a map.
3. Iterate over the map entries and sum up all options to buld palindromes from path strings:
    - If the mask is already palindromic (i.e. has less than two set bits), add twice its count to the total;
    - Add all combinations of this mask with equal masks (since every such combination means a string with even numbers of all letters);
    - Add all combinations of this mask with masks that differ in one bit (invert one bit at a time in a loop).
4. Divide the total by 2, since we calculated all node combinations twice.


# Complexity
- Time complexity:
$$O(n)$$
Building bit masks requires iterating through all nodes, and every mask is built from the parent node to avoid repeated calculations. Converting to a map takes another loop through `n` nodes. Finally, counting the combinations is done by iterating through the map (up to `n` entries), with 26 map lookups inside the loop.

- Space complexity:
$$O(n)$$
The algorithm uses two arrays of size `n` and a map with up to `n` entries.

# Code
```kotlin []
class Solution {
    fun countPalindromePaths(parent: List<Int>, s: String): Long {
        val n = parent.size
        val path = IntArray(n) { -1 }
        path[0] = 0
        val nodes = IntArray(n)
        for (i in 1 until n) {
            var node = i
            var j = 0
            while (path[node] < 0) {
                nodes[j++] = node
                node = parent[node]
            }
            var p = path[node]
            while (j > 0) {
                node = nodes[--j]
                p = p xor (1 shl s[node] - 'a')
                path[node] = p
            }
        }

        val countByPath = HashMap<Int, Long>(parent.size)
        for (i in 1 until n) countByPath.merge(path[i], 1L, Long::plus)

        var total = 0L
        for ((p, count) in countByPath) {
            if (p.countOneBits() < 2) total += count shl 1
            total += count * (count - 1)
            var bit = 1
            repeat(26) {
                total += count * countByPath.getOrDefault(p xor bit, 0)
                bit = bit shl 1
            }
        }
        return total ushr 1
    }
}
```