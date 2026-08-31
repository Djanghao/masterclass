# 15 minute arithmetic

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/4751337/](https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/4751337/)

---

# Intuition
I convert the start and end times to minutes from the beginning of the day. If the start time is greater than the end time, it means the end is after midnight, add 24*60 minutes. Next, divide the start time by 15 and round up, and round the end time down.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(1)
- Space complexity:
O(1)
# Code
```
class Solution {
    fun numberOfRounds(loginTime: String, logoutTime: String): Int {
        val delim = ":"
        
        val list_S = loginTime.split(delim)
        val list_E = logoutTime.split(delim)

        var logout = list_E[0].toInt()*60 + list_E[1].toInt()
        var login = list_S[0].toInt()*60 + list_S[1].toInt()
        if (login>logout) logout +=1440
        // println("list_S=$list_S,login=$login,R=${(login+14)/15}")
        // println("list_E=$list_E,logout=$logout,R=${(logout)/15}")
        var rez = logout/15 - (login+14)/15
        return if (rez<=0) 0 else rez
            
    }
}
```