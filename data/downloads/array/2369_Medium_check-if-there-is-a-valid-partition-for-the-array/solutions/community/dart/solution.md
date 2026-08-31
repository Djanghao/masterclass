# Pythonic way: iterate triple_wise(nums) + Dart

**Author:** alexqwesa
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solutions/3905066/](https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solutions/3905066/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
If possible, avoid using indexes; it's better to create a helper function like `triple_wise(iterable)` instead of relying on index arithmetic.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python [a]
class Solution:
    def validPartition(self, nums: List[int]) -> bool:
        n = len(nums)
        dp = [True] + [False] * n

        for i, (a,b,c) in enumerate(triple_wise(nums)):
            if a == b:                dp[i+2] |= dp[i]
            if a == b == c:           dp[i+3] |= dp[i]
            if a == b - 1 == c - 2:   dp[i+3] |= dp[i]
 
        return dp[-1]



def triple_wise(iterable):
    a, b, c = tee(iterable, 3)
    next(b)
    next(c)
    next(c)
    return zip_longest(a, b, c, fillvalue=-3)

```

```dart [a]
class Solution {
  bool validPartition(List<int> nums) {
    final dp = List<bool>.filled(nums.length+1, false);
    dp[0]=true;
    tripleWise(nums).indexed.forEach((iTriple){
        final (i, (a,b,c)) = iTriple;
        if (a==b)             dp[i+2]|=dp[i];
        if (a==b && b==c)     dp[i+3]|=dp[i];
        if (a==b-1 && b==c-1) dp[i+3]|=dp[i];
    });
    return dp.last;
  }
}

Iterable<(int,int,int)> tripleWise(Iterable nums) sync* {
    final a = nums.iterator;
    final b = nums.iterator;
    final c = nums.iterator;
    c.moveNext();
    c.moveNext();
    b.moveNext();

    while (c.moveNext() && b.moveNext() && a.moveNext() ){
        yield (a.current, b.current, c.current);
    }

    b.moveNext(); 
    a.moveNext();
    yield (a.current, b.current, -3);
}
```