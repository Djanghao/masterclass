# Easy solutions, beginner friendly (97 % beats rate)

**Author:** Abu_Suraj
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/4666779/](https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/4666779/)

---

# Intuition
- We aim to find the maximum difference between two elements in the array, satisfying the given conditions.
- To find the maximum difference, we need to identify the smallest element nums[i] where i < j and nums[i] < nums[j].
- If such pairs exist, we calculate the difference nums[j] - nums[i] and update the maximum difference encountered so far.
If no such pair exists, we return -1 indicating that there is no valid difference.

---


# Approach
- Initialize max_difference to -1, which will store the maximum difference between elements satisfying the conditions.
- Initialize left as the first element of the array nums[0].
- Initialize right as 1, indicating that we start considering elements from the second position.
- Use a while loop to iterate through the array from the second position onwards (right < nums.length).
- Inside the loop, check if left < nums[right]. If true, calculate the difference nums[right] - left and update max_difference to the maximum of the current max_difference and the calculated difference.
- If left is not less than nums[right], update left to nums[right]. This ensures that left always points to the smallest element encountered so far.
- Increment right to move to the next element in the array.
- Once the loop ends, return max_difference, which holds the maximum difference between elements satisfying the conditions. If no such pair exists, the function returns -1.

# Complexity
- Time complexity:o(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: o(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function maximumDifference(nums: number[]): number {
    let  max_difference = -1, left= nums[0], right = 1;

    while(right < nums.length){
        if(left <nums[right]){
            max_difference = Math.max(max_difference, nums[right]-left);
        } else {
            left = nums[right];
    }
    right++;
    }
    return max_difference;
};
```