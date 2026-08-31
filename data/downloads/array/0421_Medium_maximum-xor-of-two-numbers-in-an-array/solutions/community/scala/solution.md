# Functional Solution

**Author:** cachemiss
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/solutions/5977564/](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/solutions/5977564/)

---

```scala []

object Solution {
    private case class Node(var children: Array[Node] = Array(null, null))

    def findMaximumXOR(nums: Array[Int]): Int = {
        val max = nums.max
        val maxDigitLength = max.toBinaryString.length
        val root = Node()
        nums.foreach{num =>
            @scala.annotation.tailrec
            def insert(node: Node, significance: Int): Unit = {
                if significance < 0 then return
                val bit = (num >> significance) & 1
                node.children(bit) match {
                    case null => 
                        val next = Node()
                        node.children(bit) = next
                        insert(next, significance - 1)
                    case child => insert(child, significance - 1)
                }
            }
            insert(root, maxDigitLength - 1)
        }
        nums.foldLeft(0){case(cum, num) => 
            @scala.annotation.tailrec
            def maxXorForNum(node: Node, significance: Int, xor: Int): Int = {
                val bit = (num >> significance) & 1
                (node.children(bit ^ 1), significance) match {
                    case (null, 0) => xor
                    case (null, _) => maxXorForNum(node.children(bit), significance - 1, xor << 1)
                    case (_, 0) => (xor | 1)
                    case _ => maxXorForNum(node.children(bit ^ 1), significance - 1, (xor | 1) << 1)
                }
            }
            cum.max(maxXorForNum(root, maxDigitLength - 1, 0))
        }
    }
}
```