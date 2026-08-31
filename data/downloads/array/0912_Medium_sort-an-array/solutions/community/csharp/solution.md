# C# Solution for Sort An Array Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-an-array/solutions/5531635/](https://leetcode.com/problems/sort-an-array/solutions/5531635/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
\u2022	Quick Sort leverages a divide-and-conquer strategy to sort elements. The basic idea is to pick a \u201Cpivot\u201D element and partition the array into two parts: elements less than the pivot and elements greater than the pivot. This process is repeated recursively on the sub-arrays.
\u2022	Randomization is introduced to avoid worst-case scenarios where the pivot selection could lead to unbalanced partitions, which degrade the algorithm\u2019s performance to O(n^2).

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Randomized Pivot Selection:
	\u2022	Choose a pivot element randomly from the array to avoid the worst-case performance that can occur with deterministic pivot selection.
2.	Hoare Partition Scheme:
	\u2022	This partitioning method is efficient for handling arrays with duplicate elements. It uses two pointers that move towards each other to rearrange elements around the pivot.
3.	Recursive Sorting:
	\u2022	Recursively sort the left and right sub-arrays divided by the pivot.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Average Case:  O(n log n) 
	\u2022	The random pivot selection ensures that the array is divided into roughly equal parts, leading to balanced partitions.
\u2022	Worst Case:  O(n^2) 
	\u2022	Occurs when the pivot is always the smallest or largest element, but this is mitigated by randomization.
\u2022	Best Case:  O(n log n) 
	\u2022	Occurs when the pivot divides the array into two equal halves, optimizing the number of recursive calls.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	Auxiliary Space:  O(log n) 
	\u2022	The recursion stack depth is proportional to the logarithm of the array size.
\u2022	Additional Space:  O(1) 
	\u2022	The partitioning process uses a constant amount of extra space for swapping elements.

# Code
```
public class Solution {
    private static Random rand = new Random();
    public int[] SortArray(int[] nums) {
        QuickSort(nums, 0, nums.Length - 1);
        return nums;
    }
    private void QuickSort(int[] nums, int low, int high) {
        if (low < high) {
            int pivotIndex = RandomizedPartition(nums, low, high);
            QuickSort(nums, low, pivotIndex);
            QuickSort(nums, pivotIndex + 1, high);
        }
    }

    private int RandomizedPartition(int[] nums, int low, int high) {
        int pivotIndex = rand.Next(low, high + 1);
        Swap(nums, pivotIndex, low);
        return Partition(nums, low, high);
    }

    private int Partition(int[] nums, int low, int high) {
        int pivot = nums[low];
        int i = low - 1;
        int j = high + 1;
        
        while (true) {
            do {
                i++;
            } while (nums[i] < pivot);
            
            do {
                j--;
            } while (nums[j] > pivot);
            
            if (i >= j) {
                return j;
            }
            
            Swap(nums, i, j);
        }
    }

    private void Swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}
```