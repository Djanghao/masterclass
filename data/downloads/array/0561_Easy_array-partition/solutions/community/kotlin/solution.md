# Kotlin | codegolf one-liner

**Author:** SamoylenkoDmitry
**Votes:** 1
**Link:** [https://leetcode.com/problems/array-partition/solutions/1880187/](https://leetcode.com/problems/array-partition/solutions/1880187/)

---

```
    fun arrayPairSum(nums: IntArray): Int =
        nums.sorted().asSequence().chunked(2).map{it[0]}.sum()
```