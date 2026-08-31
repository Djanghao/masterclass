# C++ Easy Solution Without Builtin For Permutations! 0ms, faster than 100%

**Author:** YehudisK
**Votes:** 44
**Link:** [https://leetcode.com/problems/next-greater-element-iii/solutions/983063/](https://leetcode.com/problems/next-greater-element-iii/solutions/983063/)

---

```
class Solution {
public:
    bool nextPermutation(string& nums) {
        int i = nums.size()-1;
        while (i > 0 && nums[i-1] >= nums[i]) i--;
        if (i == 0) return false;
        
        int j = nums.size()-1;
        while (j > 0 && nums[j] <= nums[i-1]) j--;
        swap(nums[j], nums[i-1]);
        reverse(nums.begin()+i, nums.end());
        return true;
    }
    
    int nextGreaterElement(int n) {
        string num = to_string(n);
        bool res = nextPermutation(num);
        size_t ans = stoll(num);
        return (!res || ans > INT_MAX) ? -1 : ans;
    }
};
```
**Like it? please upvote...**