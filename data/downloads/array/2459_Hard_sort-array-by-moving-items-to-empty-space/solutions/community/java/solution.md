# Easy Java beats 100%, count elements + cycles, O(n)

**Author:** juliandeluca
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-array-by-moving-items-to-empty-space/solutions/4760343/](https://leetcode.com/problems/sort-array-by-moving-items-to-empty-space/solutions/4760343/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Treat the case of starting and ending with 0 separately.
Any number in a wrong position will need 1 operation: wherever the 0 (empty space) is, we swap it with the correct element.

There's 1 catch. If the empty element is in its correct final position, and the array isn't sorted, we must have at least one cycle, for example:
`[0,2,1]` so we'd need to do an extra operation to break the cycle to `[1,2,0]` and now we can continue sorting. Keep in mind cycles can have more than 2 elements in them, for example: `[0,3,2,1]`.

In other words, we must count the elements in incorrect positions, and do an extra operation to break each cycle.

# Approach
<!-- Describe your approach to solving the problem. -->
Let's use an offset of 0 or 1 to shift the start of the array. Focus on the case of offset being 0 for simplicity.

To detect cycles we could use a `boolean[] visited` array, but since all elements are at least `0`, we can mark them as negative and revert the changes at the end.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$


![Screen Shot 2024-02-21 at 4.25.10 AM.png](./images/0.png)


# Code
```
class Solution {
    int n;
    public int sortArray(int[] nums) {
        n = nums.length;
        return Math.min(sortArray(nums, 0), sortArray(nums, 1));
    }

    private int sortArray(int[] nums, int offset) {
        int cnt = 0;
        for (int i = 0; i < n; i++) {
            // Skip 0 and elems in the correct position
            if (nums[i] == 0 || i == nums[i]-offset) continue;
            cnt++;
            int j = i;
            // Detect cycles: 0 is the exit element
            while (nums[j] > 0) {
                // Mark the element as visited
                nums[j] = -nums[j];
                j = -nums[j] - offset;
                if (j == i) {
                    // Found a cycle
                    cnt++;
                    break;
                }
            }
        }
        // Unmark all elements, back to original array
        for (int i = 0; i < n; i++) nums[i] = Math.abs(nums[i]);
        return cnt;
    }
}
