# Kotlin Lovers | XOR Trie - No Sorting

**Author:** treat
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-xor-with-an-element-from-array/solutions/4284984/](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/solutions/4284984/)

---

# Intuition
So if you are aware of the solution where we sort the queries on q[1], then only look into this. Otherwise I will suggest to study XOR Trie from youtube

# Approach
We store all the bits representation in Trie. Along with that we also store the smallest value till that path. We go to a particular path only when the q[1] >= the smallest number on the next node. 

# Complexity
- Time complexity:
Insert - O (31*n) Xor check O(30 + n*30)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun maximizeXor(nums: IntArray, queries: Array<IntArray>): IntArray {
        val trie = Trie()
        for(n in nums){
            trie.insert(n, generateBitArray(n))
        }
        val op = IntArray(queries.size){-1}
        for((i,q) in queries.withIndex()){
            op[i] = trie.maxXor(generateBitArray(q[0]), q[1])
        }
        return op
    }

    fun generateBitArray(n: Int): IntArray{
        val op = IntArray(31){0}
        var mask = 1.shl(30)
        for(i in 0..30){
            op[i] = if(n.and(mask) > 0) 1 else 0
            mask = mask.shr(1)
        }
        return op
    }

    class Trie(){
        val head = Node()

        fun maxXor(word: IntArray, limitNum: Int): Int{
            var i = 0
            var max = 0
            var node = head
            while(i < 31){
                val first = word[i] == 1 && node.nodes[0] != null
                val second = word[i] == 0 && node.nodes[1] != null
                val third = word[i] == 0 && node.nodes[0] != null
                val fourth = word[i] == 1 && node.nodes[1] != null
                if(first && node.nodes[0]!!.smallest <= limitNum){
                    max = max * 2 + 1
                    node = node.nodes[0]!!
                }else if(second && node.nodes[1]!!.smallest <= limitNum){
                    max = max * 2 + 1
                    node = node.nodes[1]!!
                }else if(third && node.nodes[0]!!.smallest <= limitNum){
                    max = max * 2 + 0
                    node = node.nodes[0]!!
                }else if(fourth && node.nodes[1]!!.smallest <= limitNum){
                    max = max * 2 + 0
                    node = node.nodes[1]!!
                }else {
                    return -1
                }
                i++
            }
            return max
        }

        fun insert(number: Int, word: IntArray, i: Int = 0, node: Node = head){
            if(node.smallest >= number){
                node.smallest = number
            }
            if(i == word.size) return

            if(node.nodes[word[i]] == null){
                node.nodes[word[i]] = Node()
            }
            insert(number, word, i + 1, node.nodes[word[i]]!!)
        }
    }
    class Node(){
        var smallest: Int = Int.MAX_VALUE
        val nodes: Array<Node?> = Array<Node?>(2){null}
    }
}
```