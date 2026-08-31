# Binary Search TS/JS Solution

**Author:** Wildside
**Votes:** 5
**Link:** [https://leetcode.com/problems/search-a-2d-matrix/solutions/2719704/](https://leetcode.com/problems/search-a-2d-matrix/solutions/2719704/)

---

# Approach
First BinarySearch looking for array where **can** be our target. Second is searching for our target in array

# Complexity
- Time complexity: $$O(logN + logM)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


# Code
```
function searchMatrix(matrix: number[][], target: number): boolean {
    let l = 0; let r = matrix.length - 1;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const first = matrix[mid][0];
        const last = matrix[mid][matrix[mid].length - 1];
        if (target === first || target === last) return true;
        if (target > first && target < last) return binarySearch(matrix[mid], target);
        if (target < first) r = mid - 1;
        else l = mid + 1;
    }
    return false;
};

function binarySearch(nums: number[], target: number): boolean {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return true;
    if (nums[mid] < target) l = mid + 1;
    else r = mid - 1;
  }

  return false;
}
```