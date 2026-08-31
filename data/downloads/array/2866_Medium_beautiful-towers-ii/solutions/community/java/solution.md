# [Java/C++/Python] Stack, O(n)

**Author:** lee215
**Votes:** 117
**Link:** [https://leetcode.com/problems/beautiful-towers-ii/solutions/4082819/](https://leetcode.com/problems/beautiful-towers-ii/solutions/4082819/)

---

# **Solution 0, Brute Force O(n^2)**

Enumerate `A[i]` to be the highest:
From `A[i]` to `A[0]`, the height `v` is decreasing.
From `A[i]` to `A[n - 1]`, the height `v` is decreasing.

Sum up the heights for `A[i]` to be the highest,
and return the biggest heights sum.

Time `O(n^2)`, Space `O(1)`.

**Python**
```py
    def maximumSumOfHeights(self, A: List[int]) -> int:
        res = 0
        n = len(A)
        for i in range(n):
            cur = v = A[i]
            for j in range(i - 1, -1, -1):
                v = min(v, A[j])
                cur += v
            v = A[i]
            for j in range(i + 1, n):
                v = min(v, A[j])
                cur += v
            res = max(res, cur)
        return res
```
<br>

# **Solution 1, Stack, O(n)**

`stack` will saves the indices for an increasing sequence.
For example,
`[1,2,2,3,3,3,6,6,6,6]`
`stack` will be `[-1, 0, 2, 5, 9]`.

Firstly, we iterate `A[i]` from `A[0]` to `A[n - 1]`,
and assume `A[i]` is the highest.
We need to pop all higher element from `stack`,
and update the sum of all heights `cur`,
and push `i` into the `stack`.

We do the above process again from `A[n - 1]` to `A[0]`,
then sum up the left part and right part,
we can have the result with `A[i]` as the highest.

Finally return the biggest heights sum.

**Java**
```java
    public long maximumSumOfHeights(List<Integer> A) {
        int n = A.size();

        long[] left = new long[n];
        Stack<Integer> stack = new Stack<>();
        stack.push(-1);
        long res = 0, cur = 0;
        for (int i = 0; i < n; i++) {
            while (stack.size() > 1 && A.get(stack.peek()) > A.get(i)) {
                int j = stack.pop();
                cur -= 1L * (j - stack.peek()) * A.get(j);
            }
            cur += 1L * (i - stack.peek()) * A.get(i);
            stack.push(i);
            left[i] = cur;
        }

        stack.clear();
        stack.push(n);
        cur = 0;
        for (int i = n - 1; i >= 0; i--) {
            while (stack.size() > 1 && A.get(stack.peek()) > A.get(i)) {
                int j = stack.pop();
                cur -= 1L * -(j - stack.peek()) * A.get(j);
            }
            cur += 1L * -(i - stack.peek()) * A.get(i);
            stack.push(i);
            res = Math.max(res, left[i] + cur - A.get(i));
        }

        return res;
    }
```

**C++**
```cpp
    long long maximumSumOfHeights(vector<int>& A) {
        int n = A.size();
        vector<long long> left(n), stack = {-1};
        long long res = 0, cur = 0;
        for (int i = 0; i < n; i++) {
            while (stack.size() > 1 && A[stack.back()] > A[i]) {
                int j = stack.back();
                stack.pop_back();
                cur -= 1L * (j - stack.back()) * A[j];
            }
            cur += 1L * (i - stack.back()) * A[i];
            stack.push_back(i);
            left[i] = cur;
        }

        stack = {n};
        cur = 0;
        for (int i = n - 1; i >= 0; i--) {
            while (stack.size() > 1 && A[stack.back()] > A[i]) {
                int j = stack.back();
                stack.pop_back();
                cur -= 1L * -(j - stack.back()) * A[j];
            }
            cur += 1L * -(i - stack.back()) * A[i];
            stack.push_back(i);
            res = max(res, left[i] + cur - A[i]);
        }

        return res;
    }
```

**Python**
```py
    def maximumSumOfHeights(self, A: List[int]) -> int:
        n = len(A)

        left = [0] * n
        stack = [-1]
        cur = 0
        for i in range(n):
            while len(stack) > 1 and A[stack[-1]] > A[i]:
                j = stack.pop()
                cur -= (j - stack[-1]) * A[j]
            cur += (i - stack[-1]) * A[i]
            stack.append(i)
            left[i] = cur

        stack = [n]
        res = cur = 0
        for i in range(n - 1, -1, -1):
            while len(stack) > 1 and A[stack[-1]] > A[i]:
                j = stack.pop()
                cur -= -(j - stack[-1]) * A[j]
            cur += -(i - stack[-1]) * A[i]
            stack.append(i)
            res = max(res, left[i] + cur - A[i])

        return res
```

**Python Shorter**
```py
    def maximumSumOfHeights(self, A: List[int]) -> int:
        n = len(A)
        def f(A):
            res = [0] * n
            stack = [-1]
            for i in range(n):
                while len(stack) > 1 and A[stack[-1]] > A[i]:
                    j = stack.pop()
                res[i] = res[stack[-1]] + (i - stack[-1]) * A[i]
                stack.append(i)
            return res
        return max(pre + suf - a for pre,suf,a in zip(f(A), f(A[::-1])[::-1], A))
```
<br>

# More Good Stack Problems
Here are some problems that impressed me.
Good luck and have fun.

- 2866. [Beautiful Towers II](https://leetcode.com/problems/beautiful-towers-ii/discuss/4082819/JavaC%2B%2BPython-Stack-O(n))
- 2735.[Collecting Chocolates](https://leetcode.com/problems/collecting-chocolates/discuss/3651340/JavaC%2B%2BPython-Stack-and-Calculous-O(n))
- 2594. [Minimum Time to Repair Cars](https://leetcode.com/problems/minimum-time-to-repair-cars/discuss/3312003/JavaC%2B%2BPython-Binary-Search)
- 2454. [Next Greater Element IV](https://leetcode.com/problems/next-greater-element-iv/discuss/2756668/JavaC%2B%2BPython-One-Pass-Stack-Solution)
- 2398. [Maximum Number of Robots Within Budget](https://leetcode.com/problems/maximum-number-of-robots-within-budget/discuss/2524838/Python-Sliding-Window-O(n))
- 2289. [Steps to Make Array Non-decreasing](https://leetcode.com/problems/steps-to-make-array-non-decreasing/discuss/2085864/)
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

# Mono Stack Problem
- 2866. [Beautiful Towers II](https://leetcode.com/problems/beautiful-towers-ii/discuss/4082819/JavaC%2B%2BPython-Stack-O(n))
- 2454. [Next Greater Element IV](https://leetcode.com/problems/next-greater-element-iv/discuss/2756668/JavaC%2B%2BPython-One-Pass-Stack-Solution)
- 2398. [Maximum Number of Robots Within Budget](https://leetcode.com/problems/maximum-number-of-robots-within-budget/discuss/2524838/Python-Sliding-Window-O(n))
