# C# Pancake Sorting Algorithm

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/pancake-sorting/solutions/5462173/](https://leetcode.com/problems/pancake-sorting/solutions/5462173/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->Sort an array by reversing sub-arrays (or performing "pancake flips").
___

# Approach
<!-- Describe your approach to solving the problem. -->
//  PancakeSort Method:
//  *We create a list to store the flip operations.
//  *We loop from the end of the array to the beginning, each time reducing the size of the unsorted part
//  of the array.
//  *For each size, we find the index of the maximum element in the unsorted part.
//  *If the maximum element is not already at its correct position, we perform two flips:
//  **Flip the sub-array to bring the maximum element to the front.
//  **Flip the sub-array again to move the maximum element to its correct position.
//  FindMaxIndex Method:
//  *This method finds the index of the maximum element in the sub-array of size 'n'.
//  Flip Method:
//  *This method reverses the first k elements of the array.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n^2).
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n).
___

# Code
```
using System;
using System.Collections.Generic;

public class Solution {
    public IList<int> PancakeSort(int[] arr) {
        List<int> flips = new List<int>();

        for (int currentSize = arr.Length; currentSize > 1; currentSize--) {
            int maxIndex = FindMaxIndex(arr, currentSize);

            if (maxIndex != currentSize - 1) {
                if (maxIndex != 0) {
                    Flip(arr, maxIndex + 1);
                    flips.Add(maxIndex + 1);
                }

                Flip(arr, currentSize);
                flips.Add(currentSize);
            }
        }

        return flips;
    }

    private int FindMaxIndex(int[] arr, int n) {
        int maxIndex = 0;

        for (int i = 1; i < n; i++) {
            if (arr[i] > arr[maxIndex]) {
                maxIndex = i;
            }
        }

        return maxIndex;
    }

    private void Flip(int[] arr, int k) {
        int left = 0;
        int right = k - 1;

        while (left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
}
```