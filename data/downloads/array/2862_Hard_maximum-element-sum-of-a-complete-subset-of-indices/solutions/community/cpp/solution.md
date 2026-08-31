# Simple square root calculation

**Author:** Manmeet8287
**Votes:** 38
**Link:** [https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/solutions/4054028/](https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/solutions/4054028/)

---

# Intuition
If you try to make complete subset for every index starting from i, then 
 starting from ```
1
``` --> `{1,4,9,16...}`
 starting from `2` --> `{2,8,18,32,...}`
 starting from `3` --> `{3,12,27,....}`

From these, we can easily observe that subsequent gaps is of squares of form `{1,4,9,16...}`, if we start from any index.
For example, `8/2=4`, `18/2=9`, `32/2=16`
Also,        ` 12/3=4`,`27/3=9` and so on..

# Approach
We will calculate answer starting from every index i and since n can go upto `10^4`, we will reach the end of the array in atmost `100` operations `[(100*100)=10^4]` and answer will be maximum of the answers starting from index i.

We can easily achieve this by storing squares of numbers uptill `100` and then calculate the sum for every index i as:
 ```
currans += nums[(i+1)*sq[j]-1] 
```
 `(i+1)` because indexing is 0 based and `-1` at the end so that answer points to the correct index.

# Complexity
- Time complexity:` O(n*100)` , which is ~ **1e6** in worst case.

- Space complexity: `O(100)`, since we are storing squares of numbers uptill **100**

# Code
```
class Solution {
public:
    long long maximumSum(vector<int>& nums) {
        long long n=nums.size();
        vector<long long> sq;
        sq.push_back(1);
        long long curr=2;
        while(sq.back()<1e4)
        {
            sq.push_back(curr*curr);
            curr++;
        }
        long long ans=-1;
        for(long long i=0;i<n;i++)
        {
            long long currans=0;
            for(long long j=0;j<sq.size();j++)
            {
                if((i+1)*sq[j]-1>=n) break;
                currans+=nums[(i+1)*sq[j]-1];
            }
            ans=max(ans,currans);
        }
        return ans;
    }
};
```