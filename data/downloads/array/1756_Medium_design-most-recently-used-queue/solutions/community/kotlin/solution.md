# [Kotlin] Sqrt Decomposition

**Author:** malditorockero
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-most-recently-used-queue/solutions/1911889/](https://leetcode.com/problems/design-most-recently-used-queue/solutions/1911889/)

---



```
class MRUQueue(n: Int) {
    
    val sqrt = Math.ceil(Math.sqrt(n.toDouble())).toInt()

    val blocks = ArrayList<LinkedList<Int>>().apply{
        repeat(sqrt) { blockNumber ->
            val block = LinkedList<Int>()
            for(offset in 0 until sqrt){
                val number = blockNumber*sqrt+offset+1
                if(number > n) break
                block.add(number)
            }
            add(block)
        }
    }
    
    
    fun fetch(k: Int): Int {
        val index = k-1
        val blockNumber = index / sqrt
        val offset = index % sqrt
        val toFetch = blocks[blockNumber].removeAt(offset)
        blocks[blocks.lastIndex].add(toFetch)
        updateBlocks(blockNumber)
        return toFetch
    }
    
    private fun updateBlocks(startBlock: Int) {
        for(i in startBlock until blocks.size-1) {
            val curr = blocks[i]
            val next = blocks[i+1]
            curr.add(next.removeAt(0))
        }
    }

}
```