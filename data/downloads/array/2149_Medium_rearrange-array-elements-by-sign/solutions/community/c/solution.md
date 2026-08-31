# C++ || two pointer || O(n)

**Author:** kevinujunior
**Votes:** 241
**Link:** [https://leetcode.com/problems/rearrange-array-elements-by-sign/solutions/1711413/](https://leetcode.com/problems/rearrange-array-elements-by-sign/solutions/1711413/)

---

We know that all positive numbers will be on multiple of 2 indexes(0,2,4..) and negatives will be on odd(1,3,5...) indexes.

Time complexity : O(n)
Space Complexity : O(n)
Notice that extra array is part of algorithm.

```
vector<int> rearrangeArray(vector<int>& nums) {
        vector<int> ans(n,0);
        int indexpos = 0, indexneg=1;
        for(auto num: nums){
            if(num>0){
                ans[indexpos] = num;
                indexpos+=2;
            }
            if(num<0){
                ans[indexneg] = num;
                indexneg += 2;
            }
        }
        return ans;
        
    }
```