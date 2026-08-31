# Monotonic stack (Beats 100% PHP Submissions)

**Author:** DzmitryBahdanovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-subarrays/solutions/4539715/](https://leetcode.com/problems/number-of-valid-subarrays/solutions/4539715/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can add indices of elements to the stack at each iteration, and when the next element is smaller than the element at the top of the stack, we pop that element from the stack and calculate the number of subarrays using the indices (that's why we have to store indices on the stack).
F.e. if there is an array = [4, 3, 5, 6, 1, 2]
so here for number 3 (index 1) the next smallest number is 1 (index 4), 4 - 1 = 3 subarrays = [3], [3, 5], [3, 5, 6] so we can find a count of subarray for each number.
# Approach
<!-- Describe your approach to solving the problem. -->
Define a stack.
Loop through the array and push index of the number onto the stack each iteration.
Before pushing an element onto the stack, check if the current number is smaller than the top of the stack, if so, then pop the top index from the stack until the condition is valid, and calculate the number of subarrays for each index.
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function validSubarrays($nums) {
        $ans = 0;
        $stack = new SplStack();
        $numCount = count($nums);

        for ($i = 0; $i < $numCount; $i++) {
            while (!$stack->isEmpty() && $nums[$stack->top()] > $nums[$i]) {
                $ans += $i - $stack->pop();
            }

            $stack->push($i);
        }

        while (!$stack->isEmpty()) {
            $ans += $numCount - $stack->pop();
        }

        return $ans;
    }
}

```