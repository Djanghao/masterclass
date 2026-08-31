# [Scala] One-liners

**Author:** Pony1999
**Votes:** 3
**Link:** [https://leetcode.com/problems/total-hamming-distance/solutions/1051620/](https://leetcode.com/problems/total-hamming-distance/solutions/1051620/)

---

```
object Solution {
    def totalHammingDistance(nums: Array[Int]): Int = {
        nums.map{n => f"${n.toBinaryString}%30s".toArray}.transpose.map(_.count(_ == '1')).map{c => c * (nums.size - c)}.sum
    }
}
```

```
object Solution {
    def totalHammingDistance(nums: Array[Int]): Int = {
        nums.map("%30s" format _.toBinaryString).map(_.toArray).transpose.map(_.count(_ == '1')).map{c => c * (nums.size - c)}.sum
    }
}
```