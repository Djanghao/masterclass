# 🎉 BEATS 100% 🚀 | O(n log n) Complexity 📈 | Approach Explained 🌟 Easy Sorting with Set Bits|  PHP

**Author:** webdevanjali
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-if-array-can-be-sorted/solutions/6015448/](https://leetcode.com/problems/find-if-array-can-be-sorted/solutions/6015448/)

---

### Intuition:

The problem asks if we can sort the given array using a specific operation: **swapping adjacent elements** if they have the same number of set bits in their binary representation. The key observation is that the operation allows us to freely reorder elements **within groups** that have the same number of set bits. This means we can sort elements that share the same number of set bits among themselves, but we cannot move elements across different groups unless their set bit counts match.

Given this, we can think of the problem as:
1. **Group the numbers by the number of set bits**. Numbers with the same number of set bits can be rearranged freely because they can be swapped with each other.
2. **Sort each group independently**. Within each group, since we can swap any two adjacent elements, sorting is possible.
3. **Check if we can merge the sorted groups**. After sorting each group, we need to check if the sequence of the groups as a whole is in sorted order. That is, the largest element in one group must be less than or equal to the smallest element in the next group.

### Approach:

1. **Count Set Bits**: For each element in the array, we calculate how many set bits it has. This can be done using PHP's `decbin()` function to convert the number to binary and `substr_count()` to count the occurrences of '1'.
   
2. **Group Elements by Set Bits**: As we process each number, we place it into a group corresponding to its number of set bits. We store these groups in an array of arrays.

3. **Sort Each Group**: Once we have grouped the numbers, we sort each group individually because within a group, any element can be swapped with any other element (since they have the same number of set bits).

4. **Check Sorted Groups**: After sorting the groups, we compare consecutive groups. For the array to be sortable, the largest element of the current group must be less than or equal to the smallest element of the next group.

5. **Return Result**: If all the checks pass, return `true`, indicating that it's possible to sort the array. Otherwise, return `false`.

### Code Walkthrough:

```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function canSortArray($nums) {
        $index = 0;
        $arrays = [];

        // Group numbers by their number of set bits
        for ($i = 0; $i < count($nums); $i++) {
            $countOne = substr_count(decbin($nums[$i]), '1');

            // If this number has the same number of set bits as the previous one, add it to the current group
            if ($i == 0 || $countOne == substr_count(decbin($nums[$i - 1]), '1')) {
                $arrays[$index][] = $nums[$i];
            } else {
                // Otherwise, sort the current group and move to the next one
                sort($arrays[$index]);
                $index++;
                $arrays[$index][] = $nums[$i];
            }
        }

        // Sort the last group
        sort($arrays[$index]);

        // Loop through all groups to compare the last element of one group with the first element of the next
        $len = count($arrays);  // Only calculate count once
        for ($i = 0; $i < $len - 1; $i++) {
            // Compare the last element of the current group with the first element of the next group
            if (end($arrays[$i]) > reset($arrays[$i + 1])) {
                return false;
            }
        }

        return true;
    }
}
```

### Steps Breakdown:

1. **Grouping the Numbers**:
   - For each number in the array, calculate the number of set bits.
   - Group numbers with the same set bit count together in an array. We use the `index` variable to manage which group we are adding numbers to.
   
2. **Sorting Each Group**:
   - After forming each group, we sort the numbers within each group. Sorting happens because within a group, we can swap elements as much as needed.

3. **Checking Sorted Groups**:
   - After sorting the groups, we check if the sequence of groups is sorted as a whole. Specifically, we check that the largest element in the current group is less than or equal to the smallest element in the next group.
   - The check is done using `end($arrays[$i])` (the last element of the current group) and `reset($arrays[$i + 1])` (the first element of the next group).

4. **Returning the Result**:
   - If the comparison between groups fails at any point, we return `false`. Otherwise, we return `true` at the end of the loop, indicating that the array can be sorted.

### Time Complexity:

1. **Grouping the Numbers**: For each element in `nums`, we are calculating the number of set bits using `decbin()` and `substr_count()`, both of which run in constant time for small integers (up to 28 bits). This part runs in `O(n)` time where `n` is the number of elements in the array.

2. **Sorting Each Group**:
   - Sorting each group depends on the size of the group. In the worst case, each element could belong to its own group (if all numbers have different set bit counts). Sorting each group takes `O(k log k)` time, where `k` is the size of the group.
   - The total sorting cost across all groups is `O(n log n)` in the worst case (where `n` is the total number of elements in `nums`).

3. **Checking Sorted Groups**: Comparing the last element of one group with the first element of the next group takes linear time, i.e., `O(m)` where `m` is the number of groups. In the worst case, `m` could be as large as `n`, but typically it's much smaller, so the comparison step is dominated by the sorting step.

### Time Complexity:
- The total time complexity is **$$O(n log n)$$** due to the sorting step, where `n` is the number of elements in `nums`.

### Space Complexity:
- The space complexity is **$$O(n)$$** because we are using extra space to store the groups of numbers (`$arrays`), which in the worst case contains all `n` elements.
