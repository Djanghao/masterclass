# i found a way but it dosent work ,lack of memory , but recursive work

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/elimination-game/solutions/5772059/](https://leetcode.com/problems/elimination-game/solutions/5772059/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
    import scala.collection.mutable.ListBuffer
    def lastRemaining(n: Int): Int = {
        /*var arr =ListBuffer.range(1,n+1)
        var left =0 
        while( arr.length > 1)
        {   val newArr = ListBuffer[Int]()
            if (left == 0){
             while(left < arr.length){
             newArr+=arr(left)
             left +=2
            }    
            }
            else {
               while(left >=0){
                newArr+=arr(left)
                left -=2
               } 
            }
            arr=ListBuffer(arr.toSet.diff(newArr.toSet).toSeq: _*).sorted
            if (left > arr.length -1) {
                left = arr.length -1
            }else {
                left = 0
            }
                      
        }
        return arr.head*/
        if (n == 1) return 1
        else return 2 *(1+ n/2 -lastRemaining(n/2))
        
    }
}
```