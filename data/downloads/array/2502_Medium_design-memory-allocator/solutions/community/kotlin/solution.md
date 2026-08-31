# Log(n) solution using TreeMap

**Author:** naughtysid26
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-memory-allocator/solutions/4890007/](https://leetcode.com/problems/design-memory-allocator/solutions/4890007/)

---


# Code
```
import java.util.*

class Allocator(n: Int) {
    class Allocation(val index: Int, var size: Int)

    # Map of index to available size
    val freeBlock = TreeMap<Int, Int>()

    # used allocations grouped by mID
    val usedBlock = mutableMapOf<Int, MutableList<Allocation>>()

    init {
        # Initialize index 0 to size n
        freeBlock[0] = n
    }

    fun allocate(size: Int, mID: Int): Int {
        # Find first index with the required size
        var found: Int? = null
        for ((index, availableSize) in freeBlock) {
            if (availableSize >= size) {
                found = index
                break
            }
        }
        if (found == null) {
            return -1
        } else {
            val available = freeBlock[found]
            usedBlock.getOrPut(mID) { mutableListOf() }.add(Allocation(found, size))
            # Update the index and size of the free memory
            if (available != size) {
                freeBlock[found + size] = available!! - size
            }
            freeBlock.remove(found)
            return found
        }
    }

    fun free(mID: Int): Int {
        var used = 0
        usedBlock[mID]?.forEach { allocation ->
            used += allocation.size

            # Find the surrounding indexes with available memory
            val lower = freeBlock.lowerKey(allocation.index)
            val upper = freeBlock.higherKey(allocation.index)
            var cur = allocation.index
            var cursize = allocation.size

            # Merge with lower index if contiguous
            if (lower != null && lower + freeBlock[lower]!! == cur) {

                freeBlock[lower] = freeBlock[lower]!! + cursize
                cur = lower
                cursize = freeBlock[lower]!!
            } else {
                freeBlock[cur] = cursize
            }
            
            # Merge with higher index if contiguous
            if (upper != null && cur + cursize == upper) {
                freeBlock[cur] = cursize + freeBlock[upper]!!
                freeBlock.remove(upper)
            }

        }
        usedBlock.remove(mID)
        return used
    }

}
```