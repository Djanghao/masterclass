# [Scala] Simple Solution

**Author:** akshay_terode
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/solutions/1705071/](https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/solutions/1705071/)

---

```
def numSubarrayBoundedMax(arr: Array[Int], left: Int, right: Int): Int = {
        var prev_count=0
        var overall_count=0
        var i=0
        var j=0
        
        while(j < arr.size){
            if(left <= arr(j) && arr(j) <= right){
                prev_count = j-i+1
                overall_count += prev_count
            }else if(arr(j) < left){
                overall_count += prev_count
            }else{
                prev_count=0
                i=j+1
            }
            j+=1
        }
        overall_count
    }
```