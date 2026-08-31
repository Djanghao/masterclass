# Beginner friendly [Java/JavaScript/Python] Solution

**Author:** HimanshuBhoir
**Votes:** 19
**Link:** [https://leetcode.com/problems/smallest-even-multiple/solutions/2590557/](https://leetcode.com/problems/smallest-even-multiple/solutions/2590557/)

---

**Time Complexity : O(1)**

```java []
class Solution {
    public int smallestEvenMultiple(int n) {
        return n % 2 == 0 ? n : n * 2;
    }
}
```

```javasript []
var smallestEvenMultiple = function(n) {
    return n % 2 == 0 ? n : n * 2
};
```

```python []
class Solution(object):
    def smallestEvenMultiple(self, n):
        return n if n % 2 == 0 else n * 2
```