# scala solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/2013884/](https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/2013884/)

---

```
def maximumDifference(nums: Array[Int]): Int = {
    nums.drop(1).foldLeft(nums(0),-1){
      case((min, ans), cur) => {
        if(cur > min)  (min, Math.max(ans,(cur - min)))
        else (cur, ans)
      }
    }._2
    }
```