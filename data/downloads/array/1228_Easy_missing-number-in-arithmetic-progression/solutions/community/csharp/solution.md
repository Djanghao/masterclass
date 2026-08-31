# Using binary search O(logN)

**Author:** DominickDA
**Votes:** 0
**Link:** [https://leetcode.com/problems/missing-number-in-arithmetic-progression/solutions/5948334/](https://leetcode.com/problems/missing-number-in-arithmetic-progression/solutions/5948334/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use binary search to find the missing number in the progression.

# Approach
<!-- Describe your approach to solving the problem. -->
Let's use the example arr = [5, 7, 11, 13]

**Base Case:**

If the array has only two elements, the missing number is the average of those two. For example, if arr = [5, 11], the missing number would be (5 + 11) / 2 = 8.

**Calculate Common Difference:**

- diff = (arr[arr.Length - 1] - arr[0]) / arr.Length;
- In our example, diff = (13 - 5) / 4 = 2. This means the original arithmetic progression increased by 2 with each step.

**Binary Search:**

- We initialize low = 0 (start index) and high = arr.Length - 1 (end index).

- The while (low < high) loop performs binary search:

    - mid = low + (high - low) / 2; (calculate middle index)
    - if (arr[mid] - arr[0] != diff * mid): This condition checks if the difference between the element at the middle index (arr[mid]) and the first element (arr[0]) is equal to the expected difference based on the common difference and the index (diff * mid).
        - If this condition is true, it means the missing number is in the left half of the array. So, we update high = mid.
        - If this condition is false, it means the missing number is in the right half, and we update low = mid + 1.
        
**In our example:**

- Iteration 1: low = 0, high = 3, mid = 1, arr[mid] = 7. 7 - 5 != 2 * 1, so high = mid = 1.
- Iteration 2: low = 0, high = 1, mid = 0, arr[mid] = 5. 5 - 5 == 2 * 0, so low = mid + 1 = 1.
- Now, low = high = 1, so the loop terminates.

**Calculate Missing Number:**

- return arr[0] + diff * low;
- In our example, this becomes 5 + 2 * 1 = 7. However, since 7 is present in the array, we know the missing number is the next one in the progression: 7 + 2 = 9.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int MissingNumber(int[] arr) {
    // If the array has only two elements, the missing number is simply the average
    if (arr.Length == 2) {
        return (arr[0] + arr[1]) / 2;
    }

    // Calculate the common difference of the arithmetic progression
    int diff = (arr[arr.Length - 1] - arr[0]) / arr.Length;

    // Use binary search to find the missing number
    int low = 0, high = arr.Length - 1;
    while (low < high) {
        int mid = low + (high - low) / 2;

        // If the difference between the current element and the first element
        // is not equal to the expected difference based on the index, 
        // the missing number is in the left half
        if (arr[mid] - arr[0] != diff * mid) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    // Calculate the missing number based on the found index
    return arr[0] + diff * low;
}
}
```