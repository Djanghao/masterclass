# C++ || O(n^2) || FASTER THAN 91% || MAP

**Author:** rajat_gupta_
**Votes:** 22
**Link:** [https://leetcode.com/problems/tuple-with-same-product/solutions/1020992/](https://leetcode.com/problems/tuple-with-same-product/solutions/1020992/)

---

**Runtime: 472 ms, faster than 90.91% of C++ online submissions 
Memory Usage: 81.6 MB, less than 100.00% of C++ online submissions**

```
class Solution {
public:
    int tupleSameProduct(vector<int>& nums) {
        int n = nums.size();
        unordered_map<int,int> map;
        int res = 0;
        for(int i = 0 ; i < n ; i++){
            for(int j = i+1 ; j < n ; j++){
                int prod = nums[i] * nums[j];
                map[prod]++;//store product of each possible pair
            }
        }
        for(pair<int,int> m:map){
            int n=m.second;
            res += (n*(n-1))/2; //no. of tuple
        }
        return res*8; //Every tuple has 8 permutations
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
