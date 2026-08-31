# Kotlin. Beats 100% (447 ms). PrefixTree + binary search + pow10 cache

**Author:** mobdev778
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solutions/5827399/](https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solutions/5827399/)

---

![image.png](./images/0.png)

# Code
```kotlin []
class Solution {
    fun longestCommonPrefix(arr1: IntArray, arr2: IntArray): Int {
        val prefixTree = buildPrefixTree(arr1)

        var max = 0
        for (a in arr2) {
            max = Math.max(max, getCommonPrefixLength(a, prefixTree))
        }
        return max
    }

    private fun buildPrefixTree(arr: IntArray): PrefixTreeNode {
        val root = PrefixTreeNode()
        for (n in arr) {
            var node = root

            var index = Arrays.binarySearch(sortedExp, n)
            if (index < 0) index = -index - 1
            if (n < sortedExp[index]) index--

            while (index >= 0) {
                node = node.addNode((n / sortedExp[index]) % 10)
                index--
            }
        }
        return root
    }

    private fun getCommonPrefixLength(a: Int, root: PrefixTreeNode): Int {
        var result = 0

        var n = a
        var index = Arrays.binarySearch(sortedExp, a)
        if (index < 0) index = -index - 1
        if (n < sortedExp[index]) index--

        var node: PrefixTreeNode? = root
        while (index >= 0) {
            node = node?.getNode((n / sortedExp[index]) % 10) ?: break
            result++
            index--
        }
        return result
    }

    class PrefixTreeNode {
        val children = Array<PrefixTreeNode?>(10) { null }

        inline fun getNode(digit: Int): PrefixTreeNode? = children[digit]

        inline fun addNode(digit: Int): PrefixTreeNode {
            val child = children[digit]
            if (child != null) return child
            return PrefixTreeNode().also {children[digit] = it }
        }
    }

    companion object {
        val sortedExp = intArrayOf(
            1, 10, 100,
            1_000, 10_000, 100_000,
            1_000_000, 10_000_000, 100_000_000,
            1_000_000_000
        )
    }
}
```

# Approach

The solution is generally trivial - we make a prefix search tree on one array, and then search this tree for the largest prefix using numbers from the second array.

A possible "slippage" of the algorithm may be associated with the need to quickly determine the maximum power of 10 to start dividing the next number "n".

We can use a "brute-force solution" - just start with a number 1_000_000_000 and then divide it by 10 until we get a number smaller than the next "n".

But this is too long. A more reasonable alternative is to find the maximum power of 10 through binary search on a previously compiled and sorted array.

By the way, this same array "sortedExp" can help us to avoid division by 10 in the future - for this, it is enough to simply pull the previous element from the array of powers of 10.

# Alternative approach

1. Prefix tree without cache

![image.png](./images/1.png)

```
class Solution {

    fun longestCommonPrefix(arr1: IntArray, arr2: IntArray): Int {
        val prefixTree = buildPrefixTree(arr1)

        var max = 0
        for (a in arr2) {
            max = Math.max(max, getCommonPrefixLength(a, prefixTree))
        }
        return max
    }

    private fun buildPrefixTree(arr: IntArray): PrefixTreeNode {
        val root = PrefixTreeNode()
        for (n in arr) {
            var node = root

            var exp = 1_000_000_000
            while (n < exp) exp /= 10

            while (exp > 0) {
                node = node.addNode((n / exp) % 10)
                exp /= 10
            }
        }
        return root
    }

    private fun getCommonPrefixLength(a: Int, root: PrefixTreeNode): Int {
        var result = 0

        var exp = 1_000_000_000
        while (a < exp) exp /= 10

        var node: PrefixTreeNode? = root
        while (exp > 0) {
            node = node?.getNode((a / exp) % 10) ?: break
            result++
            exp /= 10
        }
        return result
    }

    class PrefixTreeNode {
        val children = Array<PrefixTreeNode?>(10) { null }

        inline fun getNode(digit: Int): PrefixTreeNode? {
            return children[digit]
        }

        inline fun addNode(digit: Int): PrefixTreeNode {
            val child = children[digit]
            if (child != null) return child
            return PrefixTreeNode().also { children[digit] = it }
        }
    }
}
```

2. HashSet solution

![image.png](./images/2.png)

```
class Solution {
    fun longestCommonPrefix(arr1: IntArray, arr2: IntArray): Int {
        val set = buildHashSet(arr1)

        var max = 0
        for (a in arr2) {
            max = Math.max(max, getCommonPrefixLength(a, set))
        }
        return max
    }

    private fun buildHashSet(arr: IntArray): HashSet<Int> {
        val set = HashSet<Int>()
        for (n in arr) {
            var exp = 1_000_000_000
            while (n < exp) exp /= 10

            var hashed = 0
            while (exp > 0) {
                val digit = (n / exp) % 10
                hashed = hashed * 10 + digit
                set.add(hashed)
                exp /= 10
            }
        }
        return set
    }

    private fun getCommonPrefixLength(a: Int, set: HashSet<Int>): Int {
        var result = 0

        var exp = 1_000_000_000
        while (a < exp) exp /= 10

        var hash = 0
        while (exp > 0) {
            val digit = (a / exp) % 10
            hash = hash * 10 + digit
            if (!set.contains(hash)) break
            result++
            exp /= 10
        }
        return result
    }
}
```