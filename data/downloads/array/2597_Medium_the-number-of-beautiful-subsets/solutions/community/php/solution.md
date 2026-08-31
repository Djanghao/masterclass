# Counting Beautiful Subsets in an Array

**Author:** rakiburrimon
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/5198591/](https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/5198591/)

---

# Intuition
The problem requires finding the number of non-empty subsets where no two elements have an absolute difference equal to k. Given the constraints, a backtracking approach is feasible to explore all possible subsets while ensuring the condition is met.

# Approach
1. Backtracking: Use a backtracking approach to explore all possible subsets.
2. Valid Subset Check: While forming a subset, ensure no two elements in the subset have an absolute difference equal to k.
3. Recursive Exploration: Recursively include or exclude each element to form subsets and count the valid subsets.

# Complexity
- Time complexity: O(2^n), where n is the length of the nums array.

- Space complexity: O(n), due to the recursion stack and the current subset storage.

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function beautifulSubsets($nums, $k) {
        $this->count = 0;
        $this->backtrack($nums, $k, [], 0);
        return $this->count;
    }

    private function backtrack($nums, $k, $currentSubset, $start) {
        if (!empty($currentSubset)) {
            $this->count++;
        }

        for ($i = $start; $i < count($nums); $i++) {
            if ($this->isBeautiful($currentSubset, $nums[$i], $k)) {
                array_push($currentSubset, $nums[$i]);
                $this->backtrack($nums, $k, $currentSubset, $i + 1);
                array_pop($currentSubset);
            }
        }
    }

    private function isBeautiful($subset, $num, $k) {
        foreach ($subset as $element) {
            if (abs($element - $num) == $k) {
                return false;
            }
        }
        return true;
    }
}
```