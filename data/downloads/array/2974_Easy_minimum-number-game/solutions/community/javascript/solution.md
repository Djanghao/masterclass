# ✅☑Beats 100% || [C++/Java/Python/JavaScript] || Easiest Approach || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-number-game/solutions/4449553/](https://leetcode.com/problems/minimum-number-game/solutions/4449553/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
(Also explained in the code)




# Complexity
- Time complexity:
   $$O(nlogn)$$
    

- Space complexity:
   $$O(1)$$
    


# Code
```C++ []

class Solution {
public:
    // Function to rearrange the array elements by grouping them into pairs in a specific manner
    vector<int> numberGame(vector<int>& nums) {
        int n = nums.size(); // Get the size of the input vector
        sort(nums.begin(), nums.end()); // Sort the numbers in non-decreasing order

        // Iterate through the sorted array and group elements into pairs by swapping adjacent elements
        for (int i = 0; i < n; i += 2) {
            // Swap the current element with the next element to form pairs
            swap(nums[i], nums[i + 1]);
        }

        return nums; // Return the modified array with elements rearranged into pairs
    }
};




```
```Java []
import java.util.Arrays;

class Solution {
    public int[] numberGame(int[] nums) {
        int n = nums.length;
        Arrays.sort(nums);

        for (int i = 0; i < n; i += 2) {
            if (i + 1 < n) {
                int temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
            }
        }

        return nums;
    }
}



```
```python3 []
class Solution:
    def numberGame(self, nums):
        nums.sort()

        for i in range(0, len(nums), 2):
            if i + 1 < len(nums):
                nums[i], nums[i + 1] = nums[i + 1], nums[i]

        return nums



```
```javascript []
var numberGame = function(nums) {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i += 2) {
        if (i + 1 < nums.length) {
            [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        }
    }

    return nums;
};



```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---