# kotlin

**Author:** odec
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-good-triplets/solutions/1986628/](https://leetcode.com/problems/count-good-triplets/solutions/1986628/)

---

```kotlin
import kotlin.math.abs

class Solution {
    
  fun countGoodTriplets(arr: IntArray, a: Int, b: Int, c: Int): Int {
    var triplets = 0
    
    var i = -1
    
    while (++i < arr.size - 2) {
      var j = i
      
      while (++j < arr.size - 1) {
        var k = j
        
        while (++k < arr.size) {
          if (
            (abs(arr[i] - arr[j]) <= a) &&
            (abs(arr[j] - arr[k]) <= b) &&
            (abs(arr[i] - arr[k]) <= c)
          ) {
            triplets++
          }
        }
        
      }
      
    }
    
    return triplets
  }
  
}
```