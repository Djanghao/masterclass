# With a Little Help from My Friends

**Author:** StefanPochmann
**Votes:** 8
**Link:** [https://leetcode.com/problems/valid-perfect-square/solutions/83957/](https://leetcode.com/problems/valid-perfect-square/solutions/83957/)

---

My friends being the Ruby and Python libraries. Use binary search to find the smallest non-negative integer whose square is at least num. Then test whether its square **is** num.

```
def is_perfect_square(num)
  (0..num).bsearch { |x| x*x >=num } ** 2 == num
end
```

    def isPerfectSquare(self, num):
        class C: __getitem__ = lambda _, x: x*x >= num
        return bisect.bisect(C(), False, 0, num) ** 2 == num