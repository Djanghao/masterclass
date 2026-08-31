# Very Simple and Short C++ Solution Beats 100% Huehue LOL

**Author:** rites_raz
**Votes:** 8
**Link:** [https://leetcode.com/problems/alternating-digit-sum/solutions/3165368/](https://leetcode.com/problems/alternating-digit-sum/solutions/3165368/)

---


# Code
```
class Solution {
public:
    int alternateDigitSum(int n) {
        vector<int> v;
        int k=n;
        while(k){
            v.push_back(k%10);
            k=k/10;
        }
    int sze=v.size();  
    int l=1;
    int sum=0;  
 for(int i=sze-1; i>=0; i--){
sum+=v[i]*l;
l=l*(-1);
 }
 return sum;
    }
};
```