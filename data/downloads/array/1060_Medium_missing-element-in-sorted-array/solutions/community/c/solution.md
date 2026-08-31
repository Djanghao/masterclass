# C++ simple solution

**Author:** Eplistical
**Votes:** 10
**Link:** [https://leetcode.com/problems/missing-element-in-sorted-array/solutions/426116/](https://leetcode.com/problems/missing-element-in-sorted-array/solutions/426116/)

---

- First we guess a result `rst = nums[0] + k`. 
- We then check if `nums[1]` is larger than `rst`. If so, we know all integers between `nums[0]+1` and `rst` are missing, thus we can return `rst`. Otherwise, `nums[1]` is not missing, we should update our guess to `rst = rst + 1`. 
- Similar logic is applied to `nums[2]`, `nums[3]`, ... 

```
class Solution {
public:
    int missingElement(vector<int>& nums, int k) {
        int rst = nums[0] + k;
        for (int i(1); i < nums.size(); ++i) {
            if (nums[i] > rst) {
                return rst;
            }
            else {
                rst += 1;
            }
        }
        return rst;
    }
};
```