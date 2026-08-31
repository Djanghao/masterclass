# Swift || Hash Table || O(n)

**Author:** Admiralk
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/3690673/](https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/3690673/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
At first, I wanted to solve through dictionaries, because I did not understand the task at all. Because a friend explained that whenever we iterate over an array we count everything to count all the same numbers. From 0 to i. This turned out to be very important!
# Approach
<!-- Describe your approach to solving the problem. -->
I realized that a dictionary is not needed. We can use a set. Each time we insert numbers into a set, we know the difference in the number. Thus, we can understand how many identical numbers are already in the set.
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func findThePrefixCommonArray(_ A: [Int], _ B: [Int]) -> [Int] {
        var set: Set<Int> = []
        var result: [Int] = []
        for i in 1...A.count {
            set.insert(A[i - 1])
            set.insert(B[i - 1])
            result.append(i * 2 - set.count)
        }
        return result
    }
}
```