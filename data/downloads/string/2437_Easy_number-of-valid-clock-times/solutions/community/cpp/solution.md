# ✅✅✅ C++ || Simple and Easy to Understand Solution

**Author:** kreakEmp
**Votes:** 72
**Link:** [https://leetcode.com/problems/number-of-valid-clock-times/solutions/2706336/](https://leetcode.com/problems/number-of-valid-clock-times/solutions/2706336/)

---

<b> Up Vote if you like the solution
```
/*
For mm there is no specific condition its as simple as 10 variation for last '?' and 6 variation for second last '?'
For hh, there are three cases:
1. when both hh are ?? => simply results in 24 variation
2. whne first is ? and second is not => Again two cases, when non '?' is less than 4 ( 3 variations ) & greater than equal to 4 ( only 2 variations).
3.When second is ? and first is not => Again two cases, if non '?' is 2 or not. if equl to 2 => 4 variations other wise 10 variations.
*/

class Solution {
public:
    int countTime(string time) {
        int ans = 1;
        if(time[4] == '?') ans = ans * 10;
        if(time[3] == '?') ans = ans * 6;
        
        if(time[0] == '?' && time[1] == '?') ans = ans * 24;
        else{
            if(time[1] == '?'){ 
                if(time[0] == '2' ) ans = ans * 4;
                else ans = ans * 10;
            }
            if(time[0] == '?'){
                if(time[1] < '4') ans = ans * 3;
                else ans = ans * 2;
            }
        }
        return ans;
    }
};
```

<b>Here is an article of my interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted