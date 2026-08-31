# Effective approach using two arrays

**Author:** baggio1103
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-bitset/solutions/3587441/](https://leetcode.com/problems/design-bitset/solutions/3587441/)

---

An approach using one array for manipulation is enough, however operations of flip and toString are too slow. Since time complexity for flip() and toString() are O(N)

Hence, i used two Arrays, when fix() is called, i do fix in one array and do unfix in the other. The same applies to unfix(). When flip() is called, 
i just swap each other. Hence, I win in terms of Time Complexity reducing it from O(N) till O(1)
# Complexity
- Time complexity:
O(N)

- Space complexity:
O(2 * N) = O (N)

# Code
```
class Bitset(private val size: Int) {

    private var count = 0

    private var zeroArray = IntArray(size)

    private var oneArray = List(size) {
        1
    }.toIntArray()

    private var zeroArrayStringBuilder = StringBuilder(
        zeroArray.joinToString(separator = "") { "$it" }
    )

    private var oneArrayStringBuilder = StringBuilder(
        oneArray.joinToString(separator = "") { "$it" }
    )


    fun fix(index: Int) {
        if (zeroArray[index] == 1) {
            return
        }
        zeroArray[index] = 1
        zeroArrayStringBuilder.setCharAt(index, '1')

        oneArray[index] = 0
        oneArrayStringBuilder.setCharAt(index, '0')
        count++
    }

    fun unfix(index: Int) {
        if (zeroArray[index] == 0) {
            return
        }
        zeroArray[index] = 0
        zeroArrayStringBuilder.setCharAt(index, '0')

        oneArray[index] = 1
        oneArrayStringBuilder.setCharAt(index, '1')

        count--
    }

    fun flip() {
        val temp = zeroArray
        zeroArray = oneArray
        oneArray = temp
        count = size - count

        val tempString = zeroArrayStringBuilder
        zeroArrayStringBuilder = oneArrayStringBuilder
        oneArrayStringBuilder = tempString
    }

    fun all(): Boolean {
       return count == size
    }

    fun one(): Boolean {
        return count > 0
    }

    fun count(): Int {
        return count
    }

    override fun toString(): String {
        return zeroArrayStringBuilder.toString()
    }

}



/**
 * Your Bitset object will be instantiated and called as such:
 * var obj = Bitset(size)
 * obj.fix(idx)
 * obj.unfix(idx)
 * obj.flip()
 * var param_4 = obj.all()
 * var param_5 = obj.one()
 * var param_6 = obj.count()
 * var param_7 = obj.toString()
 */
```