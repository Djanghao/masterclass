# Kotlin solution with ArrayList

**Author:** ramdas80
**Votes:** 1
**Link:** [https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/1827227/](https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/1827227/)

---

```
class Solution {
    fun replaceNonCoprimes(nums: IntArray): List<Int> {
        
        var resultList = mutableListOf<Int>()
        
        for(num in nums) {
            var newNum = num
            while(true) {
                val last = if(resultList.isEmpty()) 1 else resultList.get(resultList.size-1)
                val gcd = getGCD(last, newNum)
                if(gcd == 1) break
                newNum = newNum * (last / gcd)
                resultList.removeAt(resultList.size-1)
            }
            resultList.add(newNum)
        }
        
        return resultList
    }
    
    private fun getGCD(x: Int, y: Int): Int {    // Copied from lee215
        
        return if (y>0) getGCD(y, x%y) else x
    }
}