# Kotlin | Fenwick Tree Variant | Can store all Integers instead of only to 1e+5

**Author:** jeffreyntue
**Votes:** 0
**Link:** [https://leetcode.com/problems/create-sorted-array-through-instructions/solutions/5491080/](https://leetcode.com/problems/create-sorted-array-through-instructions/solutions/5491080/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If you know how many elements are smaller than x and how many elements are larger, then the amount of operations is just the minimum of the above. To effeciently query how many are before an element a treelike structure is needed.

There are other methods to do this task:

1. MergeSort (It can't be used in streams)
2. Segement Trees / Fenwick Trees (The space complexity is the highest element. In a stream you don't know the highest element.)

This Implementation is going accept all integers and not only to 1e+5, while having a logarithmic runtime.

# Approach
<!-- Describe your approach to solving the problem. -->
The goal is to create a structure that can effeciently store and query. Like for fenwick trees we seperate the nodes into their powers of 2. Where it is different is that we use a binary tree instead of an array to store the values.

To add a number to the datstructure we go from left to right in the binary notation of a number. We create a node to the left if the bit is 0 and a node to the right if the bit is 1. On each node on the path we add 1 marking that a number leads through this path.

Querying a number goes in logarithmic time too. Like adding a number the binary notation is used. When there is a 1, we know that all numbers to the left are smaller than the to queried number, so we add the number of paths of the left to the countNumber. If the path ends prematurely, that means no number is in this region so we return the countNumber. When reaching the end, this means the path exists and the number in this node is going to be added to the count.

For the solution we query how many are on the left of the to inserted number and how many are to the right. Then the minimum gets added, while using modulo at every operation. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n*log(n))$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
class FenwickNode {
    var value:Int = 0
    var left:FenwickNode? = null
    var right:FenwickNode? = null
}

class FenwickTree {
    val root:FenwickNode = FenwickNode()

    fun query(num: Int): Int {
        var sol:Int = 0
        var curNode:FenwickNode = root

        for(i:Int in 31 downTo 0){
            if(num and (1 shl i) == 0){
                if(curNode.left == null)
                    return sol

                curNode = curNode.left as FenwickNode
            }else{
                if(curNode.left != null)
                    sol += curNode.left?.value as Int

                if(curNode.right == null)
                    return sol

                curNode = curNode.right as FenwickNode
            }
        }

        return sol + curNode.value
    }

    fun addOne(num: Int) {
        var curNode:FenwickNode = root

        for(i:Int in 31 downTo 0){
            if(num and (1 shl i) == 0){
                if(curNode.left == null)
                    curNode.left = FenwickNode()

                curNode = curNode.left as FenwickNode
            }else{
                if(curNode.right == null)
                    curNode.right = FenwickNode()

                curNode = curNode.right as FenwickNode
            }

            curNode.value += 1
        }
    }
}

class Solution {
    fun createSortedArray(instructions: IntArray): Int {
        val mod:Int = 1000000007
        val fenwickTree:FenwickTree = FenwickTree()

        var sol:Int = 0

        for(i:Int in 0 until instructions.size){
            sol = (sol + min(
                fenwickTree.query(instructions[i]-1), 
                i - fenwickTree.query(instructions[i])
            )) % mod

            fenwickTree.addOne(instructions[i])
        }

        return sol
    }
}
```