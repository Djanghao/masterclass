# Beats 96% Simple C# Solution

**Author:** sanjatulsiam
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-array-by-parity-ii/solutions/6101507/](https://leetcode.com/problems/sort-array-by-parity-ii/solutions/6101507/)

---

# Intuition
The problem is to rearrange an array such that:
- Even-indexed positions contain even numbers.
- Odd-indexed positions contain odd numbers.

Given that half of the numbers are even and half are odd, a two-pointer approach works well:
- One pointer for even indices.
- One pointer for odd indices.

We iterate through the array, checking and swapping misplaced values.

# Approach
1. **Two Pointers:**
   - Use one pointer `i` for even indices (`0, 2, 4, ...`).
   - Use another pointer `j` for odd indices (`1, 3, 5, ...`).
2. **Traversal:**
   - Traverse the array with both pointers.
   - If the number at `i` is even, move `i` to the next even index (`i += 2`).
   - If the number at `j` is odd, move `j` to the next odd index (`j += 2`).
   - If `nums[i]` is odd and `nums[j]` is even, swap them to place the numbers at their correct indices.
3. **In-Place Sorting:**
   - Perform all operations in-place without using extra space.

4. **Termination:**
   - The loop terminates when both pointers exceed the array bounds.

# Complexity
- **Time Complexity:**  
  $$O(n)$$, where \\(n\\) is the size of the array. We traverse the array once, and each operation (including swapping) takes constant time.

- **Space Complexity:**  
  $$O(1)$$, as we do not use any additional data structures for storage, sorting in-place.

# Code
```csharp
public class Solution {
    public int[] SortArrayByParityII(int[] nums) {
        int i = 0; // pointer for even indices
        int j = 1; // pointer for odd indices

        while (i < nums.Length && j < nums.Length) {
            // If the number at the even index is even, move to the next even index
            if (nums[i] % 2 == 0) {
                i += 2;
            } 
            // If the number at the odd index is odd, move to the next odd index
            else if (nums[j] % 2 == 1) {
                j += 2;
            } 
            // If nums[i] is odd and nums[j] is even, swap them
            else {
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                i += 2;
                j += 2;
            }
        }
        return nums;
    }
}
