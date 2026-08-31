# Easy Solution || C++

**Author:** nischaygoyal1
**Votes:** 17
**Link:** [https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4052116/](https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4052116/)

---

# Intuition
Same as [Rotate Array
](https://link-url-here.org)


# Complexity
- Time complexity:
    O(NLog(N))


# Code
```
class Solution {
public:
   void helper(std::vector<int>& nums, int l, int h) {
        while (l < h) {
            std::swap(nums[l], nums[h]);
            l++;
            h--;
        }
    }

    int minimumRightShifts(std::vector<int>& nums) {
        int ind = -1;
        std::vector<int> temp = nums;
        std::sort(temp.begin(), temp.end()); // Sorting a copy of nums
        helper(nums, 0, nums.size() - 1);    // Reversing the entire nums vector

        // Finding the index where sorted portion ends
        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] > nums[i - 1]) {
                ind = i - 1;
                break;
            }
        }

        // Reversing two portions of nums
        helper(nums, 0, ind);             // Reversing the portion from 0 to ind
        helper(nums, ind + 1, nums.size() - 1); // Reversing the portion from ind+1 to end

        if (temp != nums) {
            return -1; // It's not possible to sort nums by right-shifting
        }
        return ind + 1; // Number of right shifts required for sorting nums
    }
};
```