# Typescript/Javascript Two pointer (Time: O(MN)   Space: O(1))

**Author:** shaywiin1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/solutions/5254515/](https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/solutions/5254515/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Using two pointer approach.

# Approach
Interate through all numbers in groups, exit if:
- Out of number in groups **OR**
- Out of number in nums
If we run out of number in groups => true

# Complexity
M = number of elements in groups
N = number of elements in nums
- Time complexity: O(MN) 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function canChoose(groups: number[][], nums: number[]): boolean {
    const M = groups.length, N = nums.length;
    let row = 0, col =0, i = 0;

    while (i < N && row < M) {
        if (groups[row][col] === nums[i]) {
            col++; i++;

            if (col > groups[row].length - 1) {
                row++;
                col = 0;
            }
        } else {
            i = i - col + 1;
            col = 0;
        }
    }

    return row === M;
};
```