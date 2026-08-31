# Java ⭐️ || Beginner Friendly Solution ✅ || 100% beats ✈️ || Fully Explained 💯

**Author:** akobirswe
**Votes:** 2
**Link:** [https://leetcode.com/problems/semi-ordered-permutation/solutions/3872501/](https://leetcode.com/problems/semi-ordered-permutation/solutions/3872501/)

---

# Approach

To convert the given permutation `nums` into a semi-ordered permutation, we need to perform swaps to move the number `1` to the first position and the number `n` to the last position. We can achieve this by finding the indices of `1` and `n` in the array and then calculating the number of operations required to move `1` to the first position and `n` to the last position.

**Logic:**
1. Initialize two variables `count` and `idx` to keep track of the number of operations and the index of `1` in the array, respectively.
2. Loop through the array to find the index of the number `1`. Set `idx` to this index.
3. Calculate the number of operations required to move `1` to the first position. Set `count` to `idx`.
4. While the number at the first position is not `1`, swap the elements at indices `idx` and `idx-1` to move `1` towards the first position. Decrement `idx` by 1 after each swap.
5. Loop through the array again to find the index of the number `n`. Set `idx` to this index.
6. Calculate the number of operations required to move `n` to the last position. Return `count + n - idx - 1`, which represents the total number of operations needed to make `nums` a semi-ordered permutation.

**Pseudocode:**
```plaintext
Function semiOrderedPermutation(nums):
    n = length of nums
    count = 0
    idx = 0
    
    # Find the index of 1 in nums
    for i = 0 to n-1:
        if nums[i] == 1:
            idx = i
            break
    
    # Calculate the number of operations to move 1 to the first position
    count = idx
    
    # Move 1 to the first position using swaps
    while nums[0] != 1:
        swap nums[idx] and nums[idx-1]
        idx = idx - 1
    
    # Find the index of n in nums
    for i = 0 to n-1:
        if nums[i] == n:
            idx = i
            break
    
    # Calculate the number of operations to move n to the last position
    return count + n - idx - 1
```

**Final Remarks:**
The provided solution follows the above approach and logic to solve the problem. It efficiently moves the number `1` to the first position and the number `n` to the last position, minimizing the number of swaps needed. The solution is clear and concise, making it easy for beginners to understand and implement.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public int semiOrderedPermutation(int[] nums) {
        int n = nums.length;
        int count = 0;
        int idx = 0;
        
        for (int i = 0; i < n; i++) {
            if (nums[i] == 1) {
                idx = i;
                break;
            }
        }
        
        count = idx;

        while (nums[0] != 1) {
            nums[idx] = nums[idx - 1];
            nums[idx - 1] = 1;
            idx--;
        }
        
        for (int i = 0; i < n; i++) {
            if (nums[i] == n) {
                idx = i;
                break;
            }
        }

        return count + n - idx - 1;
    }
}
```