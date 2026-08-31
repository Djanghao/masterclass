# Exactly same as 875. Koko Eating Bananas

**Author:** byegates
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/3148288/](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/3148288/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java
class Solution {
    public int smallestDivisor(int[] a, int h) {
        int l = 1, r = a[0];
        for (int x : a) if (x > r) r = x;

        while (l < r) {
            int m = l + (r-l)/2;
            if (valid(a, m, h)) r = m;
            else l = m + 1;
        }

        return l;
    }

    private boolean valid(int[] a, int m, int h) {
        for (int x : a)
            if ((h -= (x + m-1)/m) < 0) return false;
        return true;
    }
}
```
# Same code passes 875
```java
class Solution {
    public int minEatingSpeed(int[] a, int h) {
        int l = 1, r = a[0];
        for (int x : a) if (x > r) r = x;

        while (l < r) {
            int m = l + (r-l)/2;
            if (valid(a, m, h)) r = m;
            else l = m + 1;
        }

        return l;
    }

    private boolean valid(int[] a, int m, int h) {
        for (int x : a)
            if ((h -= (x + m-1)/m) < 0) return false;
        return true;
    }
}
```