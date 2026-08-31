# c++ solution using sorting (comparator)

**Author:** dilipsuthar60
**Votes:** 58
**Link:** [https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/1431881/](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/1431881/)

---

```
class Solution {
public:
    static bool cmp(string &a,string &b)
    {
        if(a.size()==b.size())
        {
            return a<b;
        }
        return a.size()<b.size();
    }
    string kthLargestNumber(vector<string>& nums, int k) 
    {
        sort(nums.begin(),nums.end(),cmp);
        int n=nums.size();
        return nums[n-k];
    }
};
```