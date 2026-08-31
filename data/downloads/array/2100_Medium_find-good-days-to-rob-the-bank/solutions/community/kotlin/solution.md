# Two passes

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/5183620/](https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/5183620/)

---

# Approach
Analog ***"2420. Find All Good Indices"***, the difference is that here the day itself is also taken into account.
# Complexity
- Time complexity:
O(n)
- Space complexity:
O(n)
# Code
![image.png](./images/0.png)
```
class Solution {
    fun goodDaysToRobBank(security: IntArray, time: Int): List<Int> {
        val len = security.size
        var arr_prev = IntArray(len,{1})
        var arr_aft = IntArray(len,{1})
        var rez : MutableList<Int> = mutableListOf()
        for (i in 1 until len) {
            if (security[i]<=security[i-1]) arr_prev[i] = arr_prev[i-1]+1
            if (security[len-i]>=security[len-i-1]) arr_aft[len-i-1] = arr_aft[len-i]+1
        }
        // println(arr_prev.toList())
        // println(arr_aft.toList())
        for (i in time until len-time) {
            if (arr_prev[i]>=time+1 && arr_aft[i]>=time+1) rez.add(i)
        }
        return rez
        
    }
}
```