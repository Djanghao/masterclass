# Scala O(1) space solution

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/2955126/](https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/2955126/)

---

# Intuition
Obviously we can read an entire file into temporary buf and then populate the buffer with required number of bytes. To make it more efficient, we need to keep data from previous reads in a pending queue. We also need to ensure that we read data from the file only if it is necessary. Otherwise, space complexity will be O(n). 

# Approach
Therefore, we always populate the buffer from the pending queue. If it is not enough, we read4 and populate pending queue again. Repeat it until we got enough bytes or EOF 

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
/**
  * The read4 API is defined in the parent class Reader4.
  *     def read4(buf4: Array[Char]): Int = {}
  */

import scala.collection.mutable

class Solution extends Reader4 {
    val pending = mutable.Queue.empty[Char]
    val buf4 = Array.fill(4)('_')

    /**
      * @param  buf Destination buffer
 	  * @param  n   Number of characters to read
      * @return     The number of actual characters read
      */
    def read(buf: Array[Char], n: Int): Int = {
        var pointer = 0
        var bytes = 0
        do {
            // release pending data
            while(pending.nonEmpty && pointer < n) {
                buf(pointer) = pending.dequeue()
                pointer += 1
            }
            // read extra data
            if(pointer < n) {
                bytes = read4(buf4)
                (0 until bytes).foreach {
                    i => 
                        pending.enqueue(buf4(i))
                }
            }
        } while(pointer < n && bytes != 0)
        pointer
    }
}
```