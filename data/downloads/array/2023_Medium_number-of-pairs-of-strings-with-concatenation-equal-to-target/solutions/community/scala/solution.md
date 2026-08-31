# scala solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/2032071/](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/2032071/)

---

```
def numOfPairs(nums: Array[String], target: String): Int = {
    val freqMap = nums.groupBy(identity).mapValues(_.length)
    freqMap.keys.foldLeft(0)((acc, cur)=>{
      target.startsWith(cur) match {
        case true if(cur == target.substring(cur.length))=> acc + (freqMap.getOrElse(cur, 0) - 1) * freqMap.getOrElse(target.substring(cur.length),0)
        case true => acc + freqMap.getOrElse(cur, 0) * freqMap.getOrElse(target.substring(cur.length),0)
        case _ => acc
      }
    })
  }
```