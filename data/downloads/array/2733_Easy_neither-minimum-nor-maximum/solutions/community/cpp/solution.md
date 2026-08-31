# ✅✅ O(1) Solution || 2 methods || Single Pass Solution || O(n) || No functions used ||

**Author:** 2uringTested
**Votes:** 40
**Link:** [https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/3624365/](https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/3624365/)

---

## I have attached the code first and then the intuition behind the approach. 
## => O(1) solution

#### This uses the property that is given in the question that all the numbers are distinct.


```
class Solution {
public:
    int findNonMinOrMax(vector<int>& nums) {
        if (nums.size() < 3)
            return -1;

        int a = min(nums[0],nums[1]);
        int b = max(nums[0],nums[1]);
        int c = nums[2];

        if(c<b && c>a) return c; // since c cannot be the maximum nor the minimum now
        if(c<a) return a; //since a cannot be the minimum as it is bigger than one number and smaller than b
        if(c>b) return b; //since b cannot be minimum as it is bigger than a and cannot be max as it is < b

        return -1;
    }
};

```
## => O(n) Single pass solution

#### If all the numbers were not distinct and you want the solution in single pass then this is the solution: 

# Code
```
class Solution {
public:
    int findNonMinOrMax(vector<int>& nums) {
        if(nums.size()<=2) return -1;
        int minValue = nums[0];
        int maxValue = nums[0];
        int selectedNumber = -1;

        for (int i = 1; i < nums.size(); ++i) {
            if (nums[i] < minValue) {
                selectedNumber = minValue;
                minValue = nums[i];
            } else if (nums[i] > maxValue) {
                selectedNumber = maxValue;
                maxValue = nums[i];
            } else {
                return nums[i];
            }
        }

        return selectedNumber;
    }
};

```

## Approach and Intuition

The approach I used in the code is as follows:

1. If the size of the input array `nums` is less than or equal to 2, it means there are not enough elements in the array to find a number that satisfies the condition. In such cases, the function directly returns `-1`.

2. Initialize `minValue` and `maxValue` variables with the first element of the `nums` array. These variables keep track of the minimum and maximum values encountered so far.

3. Initialize `selectedNumber` variable with `-1`, which will hold the selected number that is not the minimum nor the maximum.

4. Iterate through the `nums` array starting from the second element (`i = 1`) using a for loop.

5. Compare the current element `nums[i]` with the current `minValue` and `maxValue`.

6. If `nums[i]` is smaller than the current `minValue`, update `selectedNumber` with the previous `minValue`, and update `minValue` with `nums[i]`. This ensures that we have a new minimum value and also keep track of the previous minimum as the selected number.

7. If `nums[i]` is larger than the current `maxValue`, update `selectedNumber` with the previous `maxValue`, and update `maxValue` with `nums[i]`. This ensures that we have a new maximum value and also keep track of the previous maximum as the selected number.

8. If `nums[i]` is between `minValue` and `maxValue`, update `selectedNumber` with `nums[i]`. This means we have found a number that is neither the minimum nor the maximum.

9. Finally, return the `selectedNumber` as the result.

The intuition behind this approach is to traverse the array once and keep track of the minimum, maximum, and a selected number that satisfies the given condition. By comparing the elements with the current minimum and maximum values, we update these values accordingly. At the end of the traversal, the selected number will be the desired result.

The check for the size of the array at the beginning handles cases where the array has fewer than 3 elements. In such cases, there cannot be a number that satisfies the condition, so the function immediately returns -1.


## PLEASE UPVOTE IF THIS HELPED! \u2714