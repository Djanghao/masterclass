# Scala 100% time | Using Sequence Comprehension (yield)

**Author:** inasaaone
**Votes:** 2
**Link:** [https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/1147396/](https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/1147396/)

---

```
object Solution {
    def decompressRLElist(nums: Array[Int]): Array[Int] = {
        (for (i <- 0 until nums.length by 2; j <- 1 to nums(i)) yield nums(i+1)).toArray      
    }
}
```