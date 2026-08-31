# Check each Bit | C++, Python, Java

**Author:** not_yl3
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5509028/](https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5509028/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Iterate through all the bits in `n`. Dividing an integer by two is the same as shifting all the bits to the right once, therefore we can use its parity (`n % 2`) for the value of the rightmost bit.

Since we can only change ones in `n` to zeros, if a bit is zero in `n` but one in `k`, then we can return -1 from here. Otherwise, we increment `res` if the bit is a one in `n` and a zero in `k`.
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int minChanges(int n, int k) {
        int res = 0;
        while (n || k){
            if (n % 2 == 0 && k % 2)
                return -1;
            else if (n % 2 != k % 2)
                res++;
            n /= 2;
            k /= 2;
        }
        return res;
    }
};
```
```python []
class Solution:
    def minChanges(self, n: int, k: int) -> int:
        res = 0
        while n or k:
            if n % 2 == 0 and k % 2:
                return -1
            elif n % 2 != k % 2:
                res += 1
            n //= 2
            k //= 2
        return res
```
```Java []
class Solution {
    public int minChanges(int n, int k) {
        int res = 0;
        while (n != 0 || k != 0){
            if (n % 2 == 0 && k % 2 == 1)
                return -1;
            else if (n % 2 != k % 2)
                res++;
            n /= 2;
            k /= 2;
        }
        return res;
    }
}
```
