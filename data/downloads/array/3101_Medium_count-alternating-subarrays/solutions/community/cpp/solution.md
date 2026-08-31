# Simple C++ Solution || Counting

**Author:** AdityaRaj_cpp
**Votes:** 14
**Link:** [https://leetcode.com/problems/count-alternating-subarrays/solutions/4949791/](https://leetcode.com/problems/count-alternating-subarrays/solutions/4949791/)

---

# Approach
1. The method iterates through the array nums starting from index 1.
At each iteration, it checks if the current element is equal to the previous element.
2. If they are equal, it means the alternating pattern is broken, so it calculates the length of the subarray and adds the count of alternating subarrays up to that point to the answer.
3. It updates the`bg`(beginning) index to the current index to start counting the next subarray.
4. After the loop, it calculates the length of the last subarray (from the last`bg`index to the end of the array) and adds its count to the answer.
5. Finally, it returns the total count of alternating subarrays.

# Complexity
- Time complexity: `O(n)`
- Space complexity: `O(1)`

# Code
```
class Solution
{
public:
    long long countAlternatingSubarrays(vector<int> &nums)
    {
        int bg = 0;
        long long ans = 0;
        for (int i = 1; i < nums.size(); i++)
        {
            if (nums[i] == nums[i - 1])
            {
                long long len = i - bg;
                ans += (long long)(len * (len + 1) * 1ll) / 2;
                bg = i;
            }
        }
        long long len = nums.size() - bg;
        ans += (long long)(len * (len + 1) * 1ll) / 2;
        return ans;
    }
};
```

#### Why is it even medium? \uD83D\uDE44
