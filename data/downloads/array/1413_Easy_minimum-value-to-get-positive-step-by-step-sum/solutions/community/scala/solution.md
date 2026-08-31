# SCALA | 100% faster

**Author:** Andrea_Detommaso
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/2781400/](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/2781400/)

---

```
object Solution {
    def minStartValue(nums: Array[Int]): Int = 
       - nums.scanLeft(-1)(_+_).min  
}
```