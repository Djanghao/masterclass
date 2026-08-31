# Don't think too much!! Easy Dart Solution 🔥✅.

**Author:** adams7018
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/solutions/5909338/](https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/solutions/5909338/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition is just as obvious when you look at the problem title as it is when you read the problem description.
# Approach
<!-- Describe your approach to solving the problem. -->
You just have to find the `XOR` of both arr1 and arr2 and return the `AND` of both values.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
`O(N + M)` for looping through both arrays and finding their XORS.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
`O(1)` for storing the XORs of both arr1 and arr2.

# Code
```dart []
class Solution {
  int getXORSum(List<int> arr1, List<int> arr2) {
    int xor1 = 0, xor2 = 0;

    for (int n in arr1) {
        xor1 ^= n;
    }
    for (int n in arr2) {
        xor2 ^= n;
    }

    return xor1 & xor2;
  }
}
```