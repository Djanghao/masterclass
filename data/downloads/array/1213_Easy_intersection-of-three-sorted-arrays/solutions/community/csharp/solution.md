# 1 Line, leveraging LINQ

**Author:** DominickDA
**Votes:** 0
**Link:** [https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/6063550/](https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/6063550/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Other methods may be faster, but sometimes clear short code is enough.

# Approach
<!-- Describe your approach to solving the problem. -->
Leverage C#s built in Language Integrated Query capability to treat this as a set problem. This is relatively efficient and good enough for most usecases.



# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N1 + N2 + N3)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public IList<int> ArraysIntersection(int[] arr1, int[] arr2, int[] arr3) {

        return arr1.Intersect(arr2).Intersect(arr3).ToList();
    }
}
```