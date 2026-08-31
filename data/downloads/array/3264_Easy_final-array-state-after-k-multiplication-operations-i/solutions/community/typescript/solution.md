# Easiest Solution With Explanation Javascript, JAVA

**Author:** hashcoderz
**Votes:** 2
**Link:** [https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/solutions/5686849/](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/solutions/5686849/)

---

## Intuition
The goal is to repeatedly apply an operation on an array nums to achieve the final state. The operation involves finding the smallest number in the array and multiplying it by a given multiplier. We need to perform this operation k times.

## Approach
1. Initialization: Start by iterating while there are operations left (k > 0).
2. Find Minimum: In each iteration, find the smallest number in the array and its index.
3. Apply Operation: Multiply the smallest number by the given multiplier.
4. Update Operations: Decrement the count of remaining operations (k).
5. Return Result: After all operations are completed, return the modified array.
## Complexity
- Time complexity: 
$$O(n\u22C5k)$$ 
Finding the minimum element in the array takes $$O(n)$$.
This process is repeated for each of the k operations.
- Space complexity: 
$$O(1)$$
The space complexity is constant as no additional space is used that grows with input size.

# Code
```typescript []
function getFinalState(nums, k, multiplier) {
    while (k > 0) {
        let min = Number.MAX_VALUE;
        let minIndex = -1;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < min) {
                min = nums[i];
                minIndex = i;
            }
        }

        nums[minIndex] *= multiplier;
        k--;
    }

    return nums;
}

```
```java []
class Solution {
    public int[] getFinalState(int[] nums, int k, int multiplier) {
         while (k > 0) {
            int min = Integer.MAX_VALUE;
            int minIndex = -1;

            for (int i = 0; i < nums.length; i++) {
                if (nums[i] < min) {
                    min = nums[i];
                    minIndex = i;
                }
            }

            nums[minIndex] *= multiplier;
            k--;
        }
        return nums;
    }
}
```

## If you like the solution then please upvote me. It helps me to motivate.......