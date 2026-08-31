# Java code | with explanation ✅

**Author:** deleted_user
**Votes:** 29
**Link:** [https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/solutions/5875689/](https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/solutions/5875689/)

---

# Approach
1. Convert the given integer array to an array of `Integer` objects to utilize a custom comparator for sorting.
2. Sort the integers based on their binary string representations in such a way that concatenating them results in the largest possible binary number. This is achieved by comparing combined binary strings in both possible orders.
3. After sorting, concatenate the binary representations of the integers in the sorted order.
4. Convert the final concatenated binary string back to an integer and return it.

# Complexity
- Time complexity: $$O(n \\log n)$$ (due to sorting)
- Space complexity: $$O(n)$$ (for storing the binary concatenation)

# Code
```java
class Solution {
    public int maxGoodNumber(int[] nums) {
        Integer[] integerNums = Arrays.stream(nums).boxed().toArray(Integer[]::new);

        Arrays.sort(integerNums, (a, b) -> {
            String binA = Integer.toBinaryString(a);
            String binB = Integer.toBinaryString(b);
            return (binB + binA).compareTo(binA + binB);
        });
        
        StringBuilder binaryConcatenation = new StringBuilder();

        for (int num : integerNums) {
            binaryConcatenation.append(Integer.toBinaryString(num));
        }
        
        return Integer.parseInt(binaryConcatenation.toString(), 2);
    }
}
``` 
# Upvote if you found this helpful! \uD83D\uDE0A