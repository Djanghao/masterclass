# c++ solution one pass

**Author:** dilipsuthar60
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/solutions/6174103/](https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/solutions/6174103/)

---

```
class Solution
{
    public: int minimumOperations(vector<int> &nums)
    {
        int n = nums.size();
        unordered_map<int, int> mp;
        for (auto &num: nums) mp[num]++;
        if (mp.size() == n)
        {
            return 0;
        }
        int count = 0;
        int removeFirstElement = 0;
        for (int i = 0; i < n; i += 3)
        {
            mp[nums[i]]--;
            count++;
            if (mp[nums[i]] == 0)
            {
                mp.erase(nums[i]);
            }
            removeFirstElement++;
            if (i + 1 < n)
            {
                mp[nums[i + 1]]--;
                if (mp[nums[i + 1]] == 0)
                {
                    mp.erase(nums[i + 1]);
                }
                removeFirstElement++;
            }
            if (i + 2 < n)
            {
                mp[nums[i + 2]]--;
                if (mp[nums[i + 2]] == 0)
                {
                    mp.erase(nums[i + 2]);
                }
                removeFirstElement++;
            }
            if (mp.size() == (n - removeFirstElement))
            {
                return count;
            }
        }
        return count;
    }
};
```