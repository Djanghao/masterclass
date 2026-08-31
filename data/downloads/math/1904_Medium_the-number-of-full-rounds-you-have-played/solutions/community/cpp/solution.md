# [C++] Simple C++ Code || O(1) time

**Author:** _pros_
**Votes:** 3
**Link:** [https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/2519765/](https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/2519765/)

---


# **If you like the implementation then Please help me by increasing my reputation. By clicking the up arrow on the left of my image.**
```
class Solution {
public:
    int numberOfRounds(string loginTime, string logoutTime) {
        int INtime = ((loginTime[0]-'0')*10+loginTime[1]-'0')*60 + (loginTime[3]-'0')*10+loginTime[4]-'0';
        int OUTtime = ((logoutTime[0]-'0')*10+logoutTime[1]-'0')*60 + (logoutTime[3]-'0')*10+logoutTime[4]-'0';
        if(OUTtime < INtime)
        {
            OUTtime += 1440;
        }
        if(INtime%15 != 0)
        {
            int val = INtime/15;
            INtime = (val+1)*15;  
        }
        return abs(OUTtime-INtime)/15;
    }
};
```