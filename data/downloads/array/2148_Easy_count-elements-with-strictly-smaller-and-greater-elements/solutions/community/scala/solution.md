# scala | three line solution

**Author:** aspen1382020
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/2025685/](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/2025685/)

---

```
object Solution {
    def countElements(nums: Array[Int]): Int = {
        var _max=nums.max;
        var _min=nums.min;
        nums.map(x=>if(x!=_max && x!=_min) 1 else 0).sum;
    }
}
```