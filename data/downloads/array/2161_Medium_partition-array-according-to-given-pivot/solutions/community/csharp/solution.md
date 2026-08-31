# Java || Beginner Solution || Easy to understand || 100% beats || With Explanation

**Author:** akobirswe
**Votes:** 4
**Link:** [https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/3845943/](https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/3845943/)

---

# Approach

1. Initialize an array called `ans` of the same size as the input `nums` array. This array will store the rearranged elements.
2. Create an integer variable `j` and set it to 0. This variable will keep track of the current position in the `ans` array.
3. Begin the first loop to iterate through the `nums` array. For each element `num` in the `nums` array, do the following:
   a. Check if the element `num` is less than `pivot`.
   b. If the condition is true (i.e., `num < pivot`), then assign the value of `num` to the `ans` array at the index `j`.
   c. Increment `j` to move the pointer ahead in the `ans` array.
   d. Repeat the above steps for each element in the `nums` array that is less than `pivot`. This will place all elements less than `pivot` in their correct positions on the left side of the `ans` array.
4. Begin the second loop to iterate through the `nums` array again. For each element `num` in the `nums` array, do the following:
   a. Check if the element `num` is equal to `pivot`.
   b. If the condition is true (i.e., `num == pivot`), then assign the value of `num` to the `ans` array at the index `j`.
   c. Increment `j` to move the pointer ahead in the `ans` array.
   d. Repeat the above steps for each element in the `nums` array that is equal to `pivot`. This will place all elements equal to `pivot` in their correct positions in the middle of the `ans` array.
5. Begin the third loop to iterate through the `nums` array once again. For each element `num` in the `nums` array, do the following:
   a. Check if the element `num` is greater than `pivot`.
   b. If the condition is true (i.e., `num > pivot`), then assign the value of `num` to the `ans` array at the index `j`.
   c. Increment `j` to move the pointer ahead in the `ans` array.
   d. Repeat the above steps for each element in the `nums` array that is greater than `pivot`. This will place all elements greater than `pivot` in their correct positions on the right side of the `ans` array.
6. After completing all the loops, the `ans` array will contain the rearranged elements as per the problem requirements.
7. Finally, return the `ans` array as the output of the function.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
class Solution {
    public int[] pivotArray(int[] nums, int pivot) {
        int[] ans = new int[nums.length];
        int j = 0;

        for(int num : nums)
            if(num < pivot)
                ans[j++] = num;

        for(int num : nums)
            if(num == pivot)
                ans[j++] = num;

        for(int num : nums)
            if(num > pivot)
                ans[j++] = num;

        return ans;
    }
}
```