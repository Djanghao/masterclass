# scala one line solution.

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/2655078/](https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/2655078/)

---

```
def earliestFullBloom(plantTime: Array[Int], growTime: Array[Int]): Int = 
    (growTime zip plantTime).sortBy(n => (n._1, n._2)).foldLeft(0)((ans, cur)=>{
      (ans max cur._1) + cur._2
    })
```