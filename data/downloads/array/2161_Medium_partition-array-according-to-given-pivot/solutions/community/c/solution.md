# Solution for C++ - three pointers O(N)

**Author:** yehgoter
**Votes:** 159
**Link:** [https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/1747115/](https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/1747115/)

---

```cpp
class Solution
{
public:
    vector<int> pivotArray(vector<int> &nums, int pivot)
    {
        int low = 0;
        int same = 0;
        int high;
        for (auto n : nums)
        {
            if (n < pivot)
            {
                ++low;
            }
            else if (n == pivot)
            {
                ++same;
            }
        }
        vector<int> res(nums.size());
        high = same + low;
        same = low;
        low = 0;
        for (auto n : nums)
        {
            if (n < pivot)
            {
                res[low++] = n;
            }
            else if (n == pivot)
            {
                res[same++] = n;
            }
            else
            {
                res[high++] = n;
            }
        }
        return res;
    }
};
```