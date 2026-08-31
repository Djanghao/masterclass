# ✅✅✅  C++ || Very simple & Easy to Understand Solution

**Author:** kreakEmp
**Votes:** 46
**Link:** [https://leetcode.com/problems/range-product-queries-of-powers/solutions/2706327/](https://leetcode.com/problems/range-product-queries-of-powers/solutions/2706327/)

---

<b>Up Vote if you like the solution</b>

# Approach
Problem statement suggwst that the power array is the array of power of 2's whose sum is value n. This is same as when u represent a number in binary, and consider only power of 2 which values are 1 in binary . 
For example n = 5, binary = 101, 
so n can be written as 1x2^2 + 0 x 2^1 + 1x 2^0.
=  2^2 + 2^0 = 4 + 1
So the array here will be [1, 4]

Now to check the ith bit if it is one or not we can simple check           (n & ( 1 << i))  != 0 

```
class Solution {
public:
    vector<int> productQueries(int n, vector<vector<int>>& queries) {
        int m = 1e9+7;
        vector<int> bint, ans;
        //create power array 
        for(int i = 0; i < 32; ++i){
            if((n & (1<<i)) != 0) bint.push_back(1<<i);
        }
        for(auto q: queries){
            int i = q[0];
            long p = bint[i++];
            while(i <= q[1]){
                p = (p * bint[i++])%m;
            }
            ans.push_back(p);
        }
        return ans;
    }
};
```

<b>Here is an article of my interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted