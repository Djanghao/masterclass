# Very Simple and Easy Solution

**Author:** kreakEmp
**Votes:** 18
**Link:** [https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/3201890/](https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/3201890/)

---


```
class Solution {
public:
    int minMaxDifference(int num) {
        string s =to_string(num), large = to_string(num), small = to_string(num);
        char dl = -1, ds = -1;
        for(int i = 0; i < s.size(); ++i){
            if(dl == -1 && s[i] != '9'){
                dl = s[i];
                large[i] = '9';
            }else {
                large[i] = (s[i] == dl)?'9': s[i];
            }
            
            if(ds == -1 && s[i] != '0'){
                ds = s[i];
                small[i] = '0';
            }else{
                small[i] = (s[i] == ds)?'0':s[i];
            }
        }
        return stoi(large) - stoi(small);
    }
};

```

Here is an article of my recent interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted