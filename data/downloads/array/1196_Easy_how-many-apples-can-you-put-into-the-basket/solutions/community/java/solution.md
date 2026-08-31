# Greedy | Java  | Easy to understand

**Author:** kant1pur
**Votes:** 1
**Link:** [https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/6028262/](https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/6028262/)

---

# Intuition

        total number of baskets I can add, before total becomes 5000

        sort in ascending order (start small, that way the basket can carry lots of apples with the lightest weight first)
        totalWeight = 0         // start at 0
        allowedWeight = 5000    // allowed weight given by the question
        ans = 0                 // hold answer

        for (apple : sorted weight array)
            if (totalWeight + apple < allowedWeight()):         // if total weight when apple is added is LESS than allowed weight
                totalWeight += apple      // if allowed, add each apple weight to total weight
                ans++                     // increment ans

        return ans
            
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach 
Greedy Approach. We make the locally optimal choice at each step.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int maxNumberOfApples(int[] weight) {

        Arrays.sort(weight);        // sort in ascending order to add the lightest apples first

        int allowedWeight = 5000;   // allowed weight is given as 5000
        int totalWeight = 0;        // total weight basket can handle
        int ans = 0;                 // store ans

        for (int apple : weight) {
            if (totalWeight + apple <= allowedWeight) {
                totalWeight += apple;
                ans++;
            }
        }
        return ans;
    }
}
```