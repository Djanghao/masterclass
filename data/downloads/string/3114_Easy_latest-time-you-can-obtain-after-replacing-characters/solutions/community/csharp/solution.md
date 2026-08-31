# ✔C# - Simple Solution✔

**Author:** Davyd_Tovstyj
**Votes:** 1
**Link:** [https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5022107/](https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5022107/)

---

# Complexity
- **Time - O(1)**
- **Space - O(1)**

# Code
```
public class Solution {
    public string FindLatestTime(string s) {
        char[] arrS = s.ToCharArray();
        if(arrS[0] == '?'){
            if(arrS[1] == '?' || arrS[1] == '0' || arrS[1] == '1')
                arrS[0] = '1';
            else
                arrS[0] = '0';
        }
        if(arrS[1] == '?'){
            if(arrS[0] == '0')
                arrS[1] = '9';
            else
                arrS[1] = '1';
        }
        if(arrS[3] == '?')
            arrS[3] = '5';
        if(arrS[4] == '?')
            arrS[4] = '9';

        return new string(arrS);
    }
}
```