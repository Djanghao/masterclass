# 100% | 94% | Bottom-up solution with full explanations

**Author:** sjaubain
**Votes:** 9
**Link:** [https://leetcode.com/problems/reaching-points/solutions/1559183/](https://leetcode.com/problems/reaching-points/solutions/1559183/)

---

Hello ! I wanted to share my solution and how i understood the problem because it took me a while to figure it out !




At first, I wanted to start from `(sx, sy)` and perform a binary search but I noticed that this is impossible to know if we have to go either left or right. So, we should start bottom-up from `(tx, ty)`. Indeed, if `tx > ty`, we know that we came from `(tx - ty, ty)` because the other possibility would be `(tx, ty - tx)`, which is impossible since all values are non negative numbers and `ty - tx < 0` in this case. After that, I wrote a main loop and i subtracted either `tx` or `ty` in each iteration. That gave me a poor result. So, I noticed that instead of subtracting, we can take the `mod`. Example : 

`(tx, ty) = (100, 6)`

* then `(100 - 6, 6) = (94, 6)`
* then `(94 - 6, 6) = (88, 6)`
* ...
* until `tx` is less than `ty`  : `(10 - 6, 6) = (4, 6)`

Is replaced by `(100, 6) -> (4, 6)` because `100 mod 6 = 4`. By repeating this procedure, after the loop, we have to test if `sx == tx` or `sy == ty`. There is still a condition to test. Let see we got `sy = ty = 5` and have the following result :

source : `(116, 5)`, last couple after the loop : `(121, 5)` (it means the 5 broke the loop). If we just take the `mod` for `tx`, we have `121 mod 5 = 1` and we miss our answer. So, just check if `(tx - sx) % ty == 0`. In our case, `(121 - 116) mod 5 = 0` so we can return true.
```
class Solution {
    
public:
    
    bool reachingPoints(int sx, int sy, int tx, int ty) {
        
        // in case of impossible cases
        if(tx < sx || ty < sy) return false;
        
        // to avoid the useless loop in those cases
        if(sx == tx) return (ty - sy) % sx == 0;
        
        if(sy == ty) return (tx - sx) % sy == 0;
        
        while(tx > sx && ty > sy) {
                  
            if(tx > ty)
                tx %= ty;
            else 
                ty %= tx;
        }
         
        if(tx == sx) {
            if((ty - sy) % tx == 0)
                return true;
        } else if(ty == sy) {
            if((tx - sx) % ty == 0)
                return true;
        }
        
        return false;
    }
};
```