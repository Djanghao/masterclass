# Beginner Friendly Solution ⭐️ || Fully Explained✅

**Author:** akobirswe
**Votes:** 4
**Link:** [https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/3882150/](https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/3882150/)

---

# Approach
Let's break down the approach and logic used in the provided solution:

1. **Array Splitting:**
   The solution begins by splitting the input array `nums` into two separate arrays: one for even indices and one for odd indices. This is done to simplify the sorting process for each set of values.

2. **Filling Even and Odd Arrays:**
   The loop iterates through the `nums` array. If the current index `i` is even, the corresponding value is added to the `even` array; if `i` is odd, the value is added to the `odd` array. This way, the even values are stored in one array and the odd values in another.

3. **Sorting Arrays:**
   After filling the `even` and `odd` arrays, both arrays are sorted. The `Arrays.sort()` function is used to sort the elements in ascending order.

4. **Reconstruction of `nums` Array:**
   After sorting the two arrays, the solution now reconstructs the `nums` array. It uses two index pointers `iE` and `iO` for the `even` and `odd` arrays, respectively.

   The loop iterates through the `nums` array again, and if the current index `i` is even, it assigns the value from the `even` array using the `iE` pointer. Similarly, if `i` is odd, it assigns the value from the `odd` array using the `iO` pointer.

   Notably, the values from the `odd` array are assigned in reverse order (`iO` decreases while traversing odd indices) because we sorted the odd values in non-increasing order.

5. **Returning the Result:**
   Finally, the `nums` array is fully reconstructed according to the rules specified in the problem, and this sorted array is returned as the result.

The key idea here is to separate even and odd indices, sort the respective values independently, and then reconstruct the original array while following the given rules for sorting even and odd indices.

# Complexity
- Time complexity: $$O(n * log(n))$$

- Space complexity: $$O(n)$$

# Code
```
class Solution {
    public int[] sortEvenOdd(int[] nums) {
        int n = nums.length;
        int[] even = new int[(n + 1) / 2];
        int[] odd = new int[n / 2];
        int iE = 0;
        int iO = 0;

        for(int i = 0; i < n; i++) {
            if(i % 2 == 0) {
                even[iE++] = nums[i];
            } else {
                odd[iO++] = nums[i];
            }
        }

        Arrays.sort(even);
        Arrays.sort(odd);
        iE = 0;
        iO = n / 2 - 1;

        for(int i = 0; i < n; i++) {
            if(i % 2 == 0) {
                nums[i] = even[iE++];
            } else {
                nums[i] = odd[iO--];
            }
        }

        return nums;
    }
}
```