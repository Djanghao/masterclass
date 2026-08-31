# Stack + two pointers simple solution (Beats 100% PHP submissions)

**Author:** DzmitryBahdanovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/validate-stack-sequences/solutions/4527748/](https://leetcode.com/problems/validate-stack-sequences/solutions/4527748/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can iterate the "pushed" array and each iteration push a element to the stack and each time check the top element on the stack if it is equal to the element from the "popped" array, so move the pointer until it is equal.
# Approach
<!-- Describe your approach to solving the problem. -->
Define a stack and a pointer for the popped array, then iterate through the pushed array. During each iteration, push the new element onto the stack and check if the top of the stack is equal to the corresponding element inside the popped array. If they are equal, increment the pointer and remove the element from the stack.
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $pushed
     * @param Integer[] $popped
     * @return Boolean
     */
    function validateStackSequences($pushed, $popped) {
        $stack = new SplStack();
        $poppedPointer = 0;
        $count = count($pushed);
        for($i = 0; $i < $count; $i++) {
            $stack[] = $pushed[$i];
            while(!$stack->isEmpty() && $stack->top() === $popped[$poppedPointer]) {
                $stack->pop();
                $poppedPointer++;
            }
        }

        return $poppedPointer === count($popped);
    }
}
```