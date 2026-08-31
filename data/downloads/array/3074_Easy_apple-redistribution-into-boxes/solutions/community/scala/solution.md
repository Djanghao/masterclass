# Scala FP

**Author:** Deepak_Gonugunta
**Votes:** 0
**Link:** [https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/4855582/](https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/4855582/)

---

```
object Solution {
    def minimumBoxes(apple: Array[Int], capacity: Array[Int]): Int = {
        var cap=capacity.sorted.reverse
        def helper(cap:Array[Int],ans:Int,s:Int):Int={
            if(s<=0)ans
            else helper(cap.tail,ans+1,s-cap.head)
        }
        helper(cap,0,apple.sum)  
    }
}
```