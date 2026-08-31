# GCD || 100% FASTER || C++ || EASY TO UNDERSTAND

**Author:** yash___sharma_
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/solutions/3446079/](https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/solutions/3446079/)

---

![image](./images/0.png)
````
class Solution {
public:
    int minOperations(vector<int>& nums) {
        int i,g= 0;
        for(i = 0; i < nums.size(); i++){
            g = __gcd(g,nums[i]);
        }
        if(g>1)return -1;
        int y = 0;
        for(auto &i: nums){
            y += (i==1);
        }
        if(y)return nums.size()-y;
        int x = INT_MAX,j;
        for(i = 0; i < nums.size(); i++){
            int g = 0;
            for(j = i; j < nums.size(); j++){
                g = __gcd(g,nums[j]);
                if(g==1)break;
            }
            if(g==1&&j-i+1<x){x = j-i+1;}
        }
        return nums.size()+x-2;
    }
};
````