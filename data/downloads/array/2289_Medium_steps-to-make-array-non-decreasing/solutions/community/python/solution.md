# [Java/C++/Python] Stack + DP + Explanation + Poem

**Author:** lee215
**Votes:** 346
**Link:** [https://leetcode.com/problems/steps-to-make-array-non-decreasing/solutions/2085864/](https://leetcode.com/problems/steps-to-make-array-non-decreasing/solutions/2085864/)

---

# **Intuition**
Iterating the input `A` backward,
then for each `A[i]`, find how many round it can eat on its right.
<br>

# **Explanation**
`dp[i]` means the number of element `A[i]` can eat on its right.
More precisely, the number of rounds for an element `A[i]`,
to completely eat whatever it can eat on the right of `A[i]`,
if it is possible.

Iterative input array `A` reversely,
If `A[i]` is bigger the last element `A[j]` of stack,
this means `A[i]` can eat that element,
Then update `dp[i]` to be max of `dp[i] + 1` and `dp[j]`.
<br>
# **Example**
Take example of `[10, 1, 2, 9, 1, 2, 3, 4]`
10 can eat 1,2 in 2 rounds
9 can eat 1,2,3,4 in 4 rounds

"max(++dp[i], dp[stack[j--]]);"
In this example
`dp[i] = 2`,
`++dp[i] = 3`
`dp[stack[j--] = 4`
finally we got the max rounds `4`.
<br>

# **Poem**
To understand this process better with a famous Chinese poem:

\u957F\u6C5F\u540E\u6D6A\u63A8\u524D\u6D6A\uFF0C
\u524D\u6D6A\u6B7B\u5728\u6C99\u6EE9\u4E0A\u3002
\u540E\u6D6A\u7EE7\u7EED\u5F80\u524D\u63A8\uFF0C
\u8FD8\u662F\u6B7B\u5728\u6C99\u6EE9\u4E0A\u3002

The back waves push the front waves,
the front waves die on the beach.
The back waves continue to push forward,
still die on the beach.
<br>


# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
Use int array to simulate stack.
```java
    public int totalSteps(int[] A) {
        int n = A.length, res = 0, j = -1;
        int dp[] = new int[n], stack[] = new int[n];
        for (int i = n - 1; i >= 0; --i) {
            while (j >= 0 && A[i] > A[stack[j]]) {
                dp[i] = Math.max(++dp[i], dp[stack[j--]]);
                res = Math.max(res, dp[i]);
            }
            stack[++j] = i;
        }
        return res;
    }
```
**C++**
```cpp
    int totalSteps(vector<int>& A) {
        int n = A.size(), res = 0;
        vector<int> stack, dp(n);
        for (int i = n - 1; i >= 0; --i) {
            while (!stack.empty() && A[i] > A[stack.back()]) {
                dp[i] = max(++dp[i], dp[stack.back()]);
                stack.pop_back();
                res = max(res, dp[i]);
            }
            stack.push_back(i);
        }
        return res;
    }
```
**C++**
Use int array to simulate stack.
```cpp
    int totalSteps(vector<int>& A) {
        int n = A.size(), res = 0, j = -1;
        vector<int> stack(n), dp(n);
        for (int i = n - 1; i >= 0; --i) {
            while (j >= 0 && A[i] > A[stack[j]]) {
                dp[i] = max(++dp[i], dp[stack[j--]]);
                res = max(res, dp[i]);
            }
            stack[++j] = i;
        }
        return res;
    }
```
**Python**
```py
    def totalSteps(self, A: List[int]) -> int:
        n = len(A)
        dp = [0] * n
        stack = []
        for i in range(n-1, -1, -1):
            while stack and A[i] > A[stack[-1]]:
                dp[i] = max(dp[i] + 1, dp[stack.pop()])
            stack.append(i)
        return max(dp)
```
<br>


# **Solution 2: Iterating Forward**
We can solve it by iterating it forward.
For each `A[i]`, we need to find how many round it takes to eat `A[i]`.
This is how I resovled it firstly.

Time `O(n)`
Space `O(n)`


**Python**
```py
    def totalSteps(self, A: List[int]) -> int:
        dp = [0] * len(A)
        stack = []
        for i, a in enumerate(A):
            cur = 0
            while stack and a >= A[stack[-1]]:
                cur = max(cur, dp[stack.pop()])
            if stack:
                dp[i] = cur + 1
            stack.append(i)
        return max(dp)
```
<br>


# More Good Stack Problems
Here are some problems that impressed me.
Good luck and have fun.

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
