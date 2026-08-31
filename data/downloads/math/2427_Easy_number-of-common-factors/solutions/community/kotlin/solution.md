# Short and simple  .

**Author:** AshuSinghCodes
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-common-factors/solutions/4534781/](https://leetcode.com/problems/number-of-common-factors/solutions/4534781/)

---

Runtime Beats- 94.44 , Memory- Beats 94.44 

```
class Solution {
   fun commonFactors(a: Int, b: Int): Int {
    var half =0
    var count = 0
    if (a==b) half=a else if(a>b) half=a/2+1 else half=b/2+1
    for (i in 1..half){
        if (a%i==0 && b%i==0){
            count++
        }
    }
 return count
}
}
```