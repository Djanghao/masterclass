# Efficient & Easy to Understand C++ code || Beats 100%

**Author:** ShivamKhator
**Votes:** 346
**Link:** [https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/5224249/](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/5224249/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Find how many times, the array is breaking the ascending order.
If it is breaking just once or not even once then it is sorted so return true, otherwise false.

# Approach
<!-- Describe your approach to solving the problem. -->

1. The function takes a vector of integers `nums` as input.
2. It initializes a variable `count` to keep track of the number of occurrences where an element is greater than its next element.
3. The loop iterates through the vector from index 1 to `n-1`, comparing each element with its previous element. If an element is greater than its previous element, the `count` is incremented.
4. After the loop, it checks whether the last element (`nums[n-1]`) is greater than the first element (`nums[0]`). If so, it increments the `count`.
5. Finally, the function returns `true` if `count` is less than or equal to 1, indicating that the vector is either sorted in non-decreasing order or has only one inversion.

# Complexity
- Time complexity: 0(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->0(n)

- Space complexity: 0(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->0(1)

# Code
```class Solution {
public:
    bool check(vector<int>& nums) {
        int n = nums.size();
        int count = 0;
        
        // Check if the array is non-decreasing
        for (int i = 1; i < n; i++)
            if (nums[i - 1] > nums[i])
                count++;
        
        // Check if the last element is greater than the first element
        if (nums[n - 1] > nums[0])
            count++;
        
        // If the count of violations is less than or equal to 1, return true
        return count <= 1;
    }
};
```
![Cat asking for an Upvote.jpeg](./images/0.jpeg)
