# Explained two solutions - With & Without extra space || Very Simple & Easy To Understand

**Author:** kreakEmp
**Votes:** 52
**Link:** [https://leetcode.com/problems/minimum-impossible-or/solutions/3201924/](https://leetcode.com/problems/minimum-impossible-or/solutions/3201924/)

---

Up vote if you like the solution !!!

# Approach

Trick : We just need to check if the 2's power are present in the array or not. 

Why so ? 

let's observe few example :
5 (101) is only possible if we have  100 + 1, that is 4 & 1 present
6 (110) is only possible if we have  100 + 10, that is 4 & 2 present
We can see that, the number is possible if all 2's power lower to it present then its possible. 

1,2 present then 1- 3 any number possible
1,2,4 present then 1 - 7 any number can be possible
1,2,4,8 present then 1-15 any number can be possible

In other word only 2's power are not possible to form unless it is present in the array.
So we look for the smallest 2's power that is not present in the array, ans return it as answer.

This can be done in multiple ways. 
Here I have added two solutions one is space optimized and other one is time optimized.


# Solution 1: with sorting & without extra space
```
class Solution {
public:
    int minImpossibleOR(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int n = 1;
        for(int i = 0; i < nums.size(); ++i){
            if(nums[i] > n) return n;
            if(nums[i] == n) { n = n*2; }
        }
        return n;
    }
};
```

# Solution 2: with extra space and no sorting
```
class Solution {
public:
    int minImpossibleOR(vector<int>& nums) {
        unordered_set<int> s(nums.begin(), nums.end());
        int ans = 1;
        while(s.find(ans) != s.end()){
            ans = ans * 2;
        }
        return ans;
    }
};
```

# Solution 3: with out sorting & without any extra space

Here basically we keep track of each bit of a number to check if a particular power of 2 is present or not.
This needs a good understanding of bit manupulation concept, if you don't have then try looking for the following :
1. (n & (n - 1 )) to check if n is power of 2 or not 
2. bitwise NOT (one's complement) => ~n
3. n &(-n) will give you value of n with  setting only first bit '1' in binary form of n. For example: n = 144 (0b10010000) => n&(-n) = 0b10000

```
class Solution {
public:
    int minImpossibleOR(vector<int>& nums) {
        int cummRes = 0;
        for (auto &n : nums) {
            if ((n & (n-1)) == 0) cummRes |= n;  // check if number is power of 2
        }
        cummRes = ~cummRes; // identify the bit first lsb which is set to 0
        return (cummRes & (-cummRes));  //return 2 power the bit no.
    }
};
```

Here is an article of my recent interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted
