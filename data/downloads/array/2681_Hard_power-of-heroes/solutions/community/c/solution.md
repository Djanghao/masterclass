# C++ || Sorting || Easy Intuition

**Author:** aryaaman742
**Votes:** 24
**Link:** [https://leetcode.com/problems/power-of-heroes/solutions/3520506/](https://leetcode.com/problems/power-of-heroes/solutions/3520506/)

---


How i approached the problem:

Sort the array, now we have an array = [a,b,c,d,e] (a < b < c < d < e)

How many groups will we have such that `e` will be the maximum element `pow(2,index of e)` which is 16, power sum of these groups will be
`(e*e) * (min of g1 + min of g2 + .... + min of g16) .... equation (#1)`
   
if we write down all 16 groups having e as maximum we see a pattern for minimum of groups
edcba, edcb, edca, edba, ecba, edc, edb, eda, ecb, eca, eba, ed, ec, eb, ea, e

notice for 16 groups

e is minimum in 1 group
d is minimum in 1 group
c is minimum in 2 group
b is minimum in 4 group
a is minimum in 8 group
   
so equation #1 becomes `(e*e) * (e+d+2c+4b+8a);`
similarly for d it will be `(d*d) * (d+c+2b+4a);`
   
now we have an O(n*n) approach to find the solution how to optimize it to O(n)
   
if we see the equation for all element,
   
```
   a => (a*a) * (a)
   b => (b*b) * (b+a)
   c => (c*c) * (c+b+2a)
   d => (d*d) * (d+c+2b+4a)
   e => (e*e) * (e+d+2c+4b+8a)
```

   see that the minimum part of each element at index i is (minimum of previous i)*2 - nums[i-1] + nums[i]
   
 \xA0 mimimum while calculating power of groups having a as maximum = `a => a`
 \xA0 mimimum while calculating power of groups having b as maximum = `(2*a)-a+b => a+b`
 \xA0 mimimum while calculatin power of groups having c as maximum = `(2*((2*a)-a+b))-b+c => 2a+b+c`
   and so on...
   
   so we maintain a minimum m = nums[0];
   
   for each iteration we cange m as (2*m)-nums[i-1]+nums[i] and calculate power as 
   p = (nums[i]*nums[i])*m and add it to our result

```
class Solution {
public:
    int sumOfPower(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        int mod = 1e9+7;
        long long res = (((1LL*nums[0]*nums[0])%mod)*nums[0])%mod, m = nums[0];
        for(int i=1; i<nums.size(); ++i){
            m = ((m*2)%mod)-nums[i-1]+nums[i];
            res = (res + (((1LL*nums[i]*nums[i])%mod)*m)%mod)%mod;
        }
        return res;
    }
};
```