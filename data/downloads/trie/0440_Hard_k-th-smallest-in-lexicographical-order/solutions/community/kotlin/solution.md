# My kotlin solution with time O((Log n)^2) and space O(1)

**Author:** hj-core
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/5819515/](https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/5819515/)

---

To solve the problem, we will work with a 'digit tree' where the root has child nodes 1 to 9, and all child nodes recursively have child nodes 0 to 9. The value of any node is the number formed by reading the digits from the root to that node and preorder traversal of the tree generates the numbers in lexicographical order. 

The key is that we can compute the size of any subtree in O(Log n) time: for each level of a subtree, there are breadth = 10^depth nodes, with values ranging from start = root_value * (10^depth) to end = start + breadth - 1. Here, depth is counted from the subtree's root, and root_value is the value of the subtree's root. Additionally, we need to take the n into account, which limit the number of levels and may affect the breadth and end of the last level.

Once we know how to compute the size of a given subtree, we can find the kth smallest number by searching the 'digit tree'. Let rank be the position of current subtree's root_value in the sorted order. Then:

- If rank equals k, we return the root_value.
- If k is greater than rank plus the size of the subtree minus one, the target is located after the current subtree, we move to the next sibling of the subtree's root.
- Otherwise, the target is within the subtree and is not the root_value, we move to the first child of the subtree's root.

Below is my solution in kotlin,
```
class Solution {
    /* Complexity:
     * Time O((Log n)^2) and Space O(1).
     */
    fun findKthNumber(
        n: Int,
        k: Int,
    ): Int {
        /* Search the 'digit tree' where the root has child nodes 1 to 9,
         * and all child nodes recursively have child nodes 0 to 9.
         */
        return search(1, 1, n, k)
    }

    private tailrec fun search(
        root: Int,
        rank: Int,
        n: Int,
        k: Int,
    ): Int {
        if (rank == k) {
            return root
        }

        val size = size(root, n)
        return if (rank + size - 1 < k) {
            search(root + 1, rank + size, n, k) // Move to the next sibling
        } else {
            search(root * 10, rank + 1, n, k) // Move to the first child
        }
    }

    private fun size(
        root: Int,
        n: Int,
    ): Int {
        var result = 0
        var startValue = root // The first value in current level
        var breadth = 1
        while (startValue <= n) {
            val endValue = min(n, startValue + breadth - 1)
            val trueBreadth = endValue - startValue + 1
            result += trueBreadth

            if (n / 10 < startValue) {
                break
            }
            startValue *= 10
            breadth *= 10
        }
        return result
    }
}

```

Update on 2024-09-22:
Refactor rank to refer to the rank of current root in the sorted order, which is more intuitive. Previously rank refered to the rank of number just before current root in the sorted order.