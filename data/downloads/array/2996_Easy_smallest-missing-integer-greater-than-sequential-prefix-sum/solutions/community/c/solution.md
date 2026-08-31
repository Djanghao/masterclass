# Sort

**Author:** votrubac
**Votes:** 10
**Link:** [https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/4518516/](https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/4518516/)

---

We `sum` sequential elements, and sort the rest of the array.

When we go through sorted elements, we increment `sum` if we find the same value in the array.

**C++**
```cpp
int missingInteger(vector<int>& nums) {
    int sum = nums[0], i = 1;
    while (i < nums.size() && nums[i - 1] + 1 == nums[i])
        sum += nums[i++];
    sort(begin(nums) + i, end(nums));
    for (i = i - 1; i < nums.size(); ++i)
        if (nums[i] == sum)
            ++sum;
    return sum;
}
```