# Easy C++ Solution with explaination

**Author:** skritichauhan
**Votes:** 15
**Link:** [https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/620502/](https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/620502/)

---

**Explaination**:

1)Find the sum of all the elements of the vector.
2)Sort the vector in descending order.
3)Keep on subtracting the elements from the highest to lowest until the sum of highest elements is greater than the remaining. Also,add the elements to the answer vector.
4)The required elements till the condition meets is the final answer.
5)Return them in non decreasing order

```
class Solution {
public:
    vector<int> minSubsequence(vector<int>& nums) {
        int sum=0,newsum=0;
        vector<int>ans;
        for(int i=0;i<nums.size();i++)
        {
            sum+=nums[i];
        }
        sort(nums.begin(),nums.end(),std::greater<>());
        for(int i=0;i<nums.size();i++)
        {
            newsum+=nums[i];
            sum=sum-nums[i];
            ans.push_back(nums[i]);
            if(newsum>sum)
                break;
        }
        sort(ans.begin(),ans.end(),std::greater<>());
        return ans;
    }
};
```

I think leetcode should rename the question to **SEQUENCE** instead of subsequence. Its really misleading.