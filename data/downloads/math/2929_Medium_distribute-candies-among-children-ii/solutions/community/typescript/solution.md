# a + b + c = n

**Author:** 0x4C0DE
**Votes:** 46
**Link:** [https://leetcode.com/problems/distribute-candies-among-children-ii/solutions/4276620/](https://leetcode.com/problems/distribute-candies-among-children-ii/solutions/4276620/)

---

### Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
There are three children with `a`, `b`, `c` candies at most `l`(limit).

We want to keep these conditions:
- $a + b + c = n$
- $0 \\leq a,b,c \\leq l$

### Approach
<!-- Describe your approach to solving the problem. -->
**We can give specific $a$ candies to the first child, then we can give $b$ candies with the range of $[max(0,n\u2212a\u2212l), min(n - a, l)]$ to second child, and the left candies can give to the third child.**

We can prove these new conditions:
- **$max(0,  n - 2 * l) \\leq a \\leq min(l, n)$**
- **$max(0,n\u2212a\u2212l) \\leq b \\leq min(n - a, l)$**

Detail Math proof:

$a + b +c = n$ and $b \\leq l$ and $c \\leq l$
==> $b + c \\leq 2 * l$
==> $0 \\leq b + c = n - a \\leq 2 * l$

==> $a \\geq n - 2 * l$ and $a \\geq 0$
==> $a \\geq max(0,  n - 2 * l)$

$a \\leq n$ and $a \\leq l$
==> $a \\leq min(l, n)$

$0 \\leq c = n - a - b \\leq l$
==> $b \\leq n - a$ and $b \\leq l$
==> $b \\leq min(n - a, l)$

==> $b \\geq n - a - l$ and $b\\geq0$
==> $b \\geq max(0, n - a -l)$

### Complexity
- Time complexity: $$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

### Code

```Java []
class Solution {
  public long distributeCandies(int n, int limit) {
    long count = 0;
    for (int a = Math.max(0, n - 2 * limit); a <= Math.min(limit, n); a++) {
      // range of b
      int b = Math.min(limit, n - a) - Math.max(0, n - a - limit) + 1;
      count += Math.max(0, b);
    }

    return count;
  }
}
```
```C++ []
class Solution {
public:
  long long distributeCandies(int n, int limit) {
    long long count = 0;
    for (int a = max(0, n - 2 * limit); a <= min(limit, n); a++) {
      // range of b
      int b = min(limit, n - a) - max(0, n - a - limit) + 1;
      count += max(0, b);
    }

    return count;
  }
};
```
```TypeScript []
function distributeCandies(n: number, limit: number): number {
    let count = 0;
    for (let a = Math.max(0, n - 2 * limit); a <= Math.min(limit, n); a++) {
        // range of b
        let b = Math.min(limit, n - a) - Math.max(0, n - a - limit) + 1;
        count += Math.max(0, b);
    }

    return count;
};
```
