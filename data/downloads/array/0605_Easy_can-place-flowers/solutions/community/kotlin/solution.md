# Simple | 100% fast | O(N) | kotlin

**Author:** hconnect93
**Votes:** 3
**Link:** [https://leetcode.com/problems/can-place-flowers/solutions/3318945/](https://leetcode.com/problems/can-place-flowers/solutions/3318945/)

---

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```
class Solution {
    fun canPlaceFlowers(flowerbed: IntArray, n: Int): Boolean {
        var plots = n
        var i = 0
        while(i<flowerbed.size && plots>0){
            if(flowerbed[i]==0 && (i-1<0 || flowerbed[i-1]==0) && (i+1>=flowerbed.size || flowerbed[i+1]==0)){
                plots--
                i++
            }
            i++
        }
        return plots==0
    }
}
```