# Optimised Solution for Bitwise ORs of Subarrays

**Author:** mr-ashok
**Votes:** 2
**Link:** [https://leetcode.com/problems/bitwise-ors-of-subarrays/solutions/3277160/](https://leetcode.com/problems/bitwise-ors-of-subarrays/solutions/3277160/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

Considering numbers: 1, 2, 3, 4, 5
The combinations would be:
```
    1
    1 || 2
    1 || 2 || 3
    1 || 2 || 3 || 4
    1 || 2 || 3 || 4 || 5
    2
    2 || 3
    2 || 3 || 4
    2 || 3 || 4 || 5
    3
    3 || 4
    3 || 4 || 5
    4
    4 || 5
    5
```
Or when we change perspective/order it becomes:
    (Note anything ORed with 0 will remain same. i.e. x || 0 => x)
```
    1 || 0

    2 || 0
    2 || (1 || 0)

    3 || 0
    3 || (2 || 0)
    3 || (2 || 1 || 0)

    4 || 0
    4 || (3 || 0)
    4 || (3 || 2 || 0)
    4 || (3 || 2 || 1 || 0)

    5 || 0
    5 || (4 || 0)
    5 || (4 || 3 || 0)
    5 || (4 || 3 || 2 || 0)
    5 || (4 || 3 || 2 || 1 || 0)
```
Notice that in each loop we can actually reuse the computation done in previous loop.

Now more fun part:

`(1 || 2) == (3 || 0), so (1 || 2), (3 || 0), (1 || 2 || 3)` all of these would only produce one value rather than 3 different values. So, in our previous results part, we can keep only unique values, which reduces the data that we traverse in future loops.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(n * m), where m < n
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O (2 * m)
# Code
```
class Solution {

    fun subarrayBitwiseORs(arr: IntArray): Int {
        val unique = HashSet<Int>()
        var prev = HashSet<Int>()
        for (num in arr) {
            prev.add(0) // Adding 0 since (0 OR x) => x which is one of the base.
            var current = HashSet<Int>()
            for (prevComputed in prev) {
                current.add(prevComputed or num)
                unique.add(prevComputed or num)
            }
            prev = current
        }
        return unique.size
    }
}
```