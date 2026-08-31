# 100% faster kotlin easy solution

**Author:** Sahil14_11
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-integer-divisible-by-k/solutions/1656905/](https://leetcode.com/problems/smallest-integer-divisible-by-k/solutions/1656905/)

---

```
class Solution {
    fun smallestRepunitDivByK(k: Int): Int {
        if(k%2==0||k%5==0) return -1
        var a=0
        for(i in 1..k){
            a=(a*10+1)
            if(a%k==0){
                return i
            }    
            a%=k
        }
        return -1
    }
}