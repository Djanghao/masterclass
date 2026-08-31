# [Java/C++/Python] One Pass Solution

**Author:** lee215
**Votes:** 258
**Link:** [https://leetcode.com/problems/sum-of-total-strength-of-wizards/solutions/2061985/](https://leetcode.com/problems/sum-of-total-strength-of-wizards/solutions/2061985/)

---

# **Key words**
Subarray + sum -> prefix sum
Subarray + minimum  -> mono stack
<br>

# **Intuition**
Assume `A[i]` is the leftmost smallest element in a subarray,
calculate each A[i] contibution
<br>

# **Explanation**
1. Find next small on the right
2. Find next small or equal on the left.
3. For each `A[i]` as the minimum, find the possible subarray sums.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Python**
```py
    def totalStrength(self, A):
        mod = 10 ** 9 + 7
        n = len(A)
        
        # next small on the right
        right = [n] * n
        stack = []
        for i in range(n):
            while stack and A[stack[-1]] > A[i]:
                right[stack.pop()] = i
            stack.append(i)

        # next small on the left
        left = [-1] * n
        stack = []
        for i in range(n-1, -1, -1):
            while stack and A[stack[-1]] >= A[i]:
                left[stack.pop()] = i
            stack.append(i)

        # for each A[i] as minimum, calculate sum
        res = 0
        acc = list(accumulate(accumulate(A), initial = 0))
        for i in range(n):
            l, r = left[i], right[i]
            lacc = acc[i] - acc[max(l, 0)]
            racc = acc[r] - acc[i]
            ln, rn = i - l, r - i
            res += A[i] * (racc * ln - lacc * rn)
        return res
```
<br>

# **One Pass Solution**

Sometimes post it without any changes (lazy or busy :).
I hope it's simple to read and understand.

Actually I did it in 5 passes: two for accumulates, two for two directctions, and last one for calculating the result.

Actually we can combine left and right, then only 4 pases.

Actually we can also combine left and right and the last pass, then only 3 passes.

Actually we can also combine all passes, then only one pass.

**Java**
```java
    public int totalStrength(int[] A) {
        int res = 0, ac = 0, mod = (int)1e9 + 7, n = A.length;
        Stack<Integer> stack = new Stack<>();
        int[] acc = new int[n + 2];
        for (int r = 0; r <= n; ++r) {
            int a = r < n ? A[r] : 0;
            ac = (ac + a) % mod;
            acc[r + 1] = (ac + acc[r]) % mod;
            while (!stack.isEmpty() && A[stack.peek()] > a) {
                int i = stack.pop();
                int l = stack.isEmpty() ? -1 : stack.peek();
                long lacc = l < 0 ? acc[i] : acc[i] - acc[l], racc = acc[r] - acc[i];
                int ln = i - l, rn = r - i;
                res = (int)(res + (racc * ln - lacc * rn) % mod * A[i] % mod) % mod;
            }
            stack.push(r);
        }
        return (res + mod) % mod;
    }
```
**C++**
```cpp
    int totalStrength(vector<int>& A) {
        int res = 0, ac = 0, mod = 1e9 + 7, n = A.size();
        vector<int> stack = {}, acc(n + 2);
        for (int r = 0; r <= n; ++r) {
            int a = r < n ? A[r] : 0;
            ac = (ac + a) % mod;
            acc[r + 1] = (ac + acc[r]) % mod;
            while (!stack.empty() && A[stack.back()] > a) {
                int i = stack.back(); stack.pop_back();
                int l = stack.empty() ? -1 : stack.back();
                long lacc = l < 0 ? acc[i] : acc[i] - acc[l], racc = acc[r] - acc[i];
                int ln = i - l, rn = r - i;
                res = (res + (racc * ln - lacc * rn) % mod * A[i] % mod) % mod;
            }
            stack.push_back(r);
        }
        return (res + mod) % mod;
    }
```
**Python**
```py
    def totalStrength(self, A):
        res, ac, mod, stack, acc = 0, 0, 10 ** 9 + 7, [-1], [0]
        A += [0]
        for r, a in enumerate(A):
            ac += a
            acc.append(ac + acc[-1])
            while stack and A[stack[-1]] > a:
                i = stack.pop()
                l = stack[-1]
                lacc = acc[i] - acc[max(l, 0)]
                racc = acc[r] - acc[i]
                ln, rn = i - l, r - i
                res += A[i] * (racc * ln - lacc * rn) % mod
            stack.append(r)
        return res % mod
```
<br>


# More Good Stack Problems
Here are some problems that impressed me.
Good luck and have fun.

- 2281. [Sum of Total Strength of Wizards](https://leetcode.com/problems/sum-of-total-strength-of-wizards/discuss/2061985/python-solution-on/1405190)
- 1776. [Car Fleet II](https://leetcode.com/problems/car-fleet-ii/discuss/1085987/javacpython-on-stack-solution/)
- 1673. [Find the Most Competitive Subsequence](https://leetcode.com/problems/find-the-most-competitive-subsequence/discuss/952786/javacpython-one-pass-stack-solution/776191 )
- 1671. [Minimum Number of Removals to Make Mountain Array](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/discuss/952136/Python-LIS-O(nlogn))
- 1475. [Final Prices With a Special Discount in a Shop](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/discuss/685390/javacpython-stack-one-pass/809992)
- 1425. [Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum/discuss/597751/JavaC++Python-O(N)-Decreasing-Deque)
- 1130. [Minimum Cost Tree From Leaf Values](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/discuss/339959/One-Pass-O(N)-Time-and-Space)
- 907. [Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/discuss/170750/C++JavaPython-Stack-Solution)
- 901. [Online Stock Span](https://leetcode.com/problems/online-stock-span/discuss/168311/C++JavaPython-O(1))
- 856. [Score of Parentheses](https://leetcode.com/problems/score-of-parentheses/discuss/141777/C++JavaPython-O(1)-Space)
- 503. [Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/discuss/98270/JavaC++Python-Loop-Twice)
- 496. Next Greater Element I
- 84. Largest Rectangle in Histogram
- 42. Trapping Rain Water
<br>


# More Similar Prefix Problems
Here are some similar prolem that I used prefix sum.
Upvoted, good luck and have fun.

- 2281. [Sum of Total Strength of Wizards](https://leetcode.com/problems/sum-of-total-strength-of-wizards/discuss/2061985/python-solution-on/1405190)
- 1074. [Number of Submatrices That Sum to Target](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/discuss/303750/JavaC++Python-Find-the-Subarray-with-Target-Sum)
- 974.  [Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/discuss/217985/JavaC++Python-Prefix-Sum)
<br>

