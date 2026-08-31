# Beats 100% - Array implementation

**Author:** iggy-leetcode
**Votes:** 1
**Link:** [https://leetcode.com/problems/counting-elements/solutions/4497549/](https://leetcode.com/problems/counting-elements/solutions/4497549/)

---

# Intuition
Since there are only 1000 number, it would make sense to use an array instead of an hashset. This would lead to higher performance and less space consumption.

# Approach
Create a boolean array (seen) which would host all the possible numbers (and sums.)
Iterate through the input array and set each number as seen in the seen array.
Iterate once again to count the occurrence of the items plus one.

Return the counter.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    public int countElements(int[] arr) {
        boolean[] seen = new boolean[1002];
        
        int counter = 0;
        
        for (int i = 0; i < arr.length; i++) {
            seen[arr[i]] = true;
        }
        
        for (int i = 0; i < arr.length; i++) {
            if (seen[arr[i] + 1]) {
                counter++;
            }
        }
        
        return counter;
    }
}
```