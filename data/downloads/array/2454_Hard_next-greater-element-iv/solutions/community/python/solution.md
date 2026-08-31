# [Java/C++/Python] One Pass Stack Solution O(n)

**Author:** lee215
**Votes:** 223
**Link:** [https://leetcode.com/problems/next-greater-element-iv/solutions/2756668/](https://leetcode.com/problems/next-greater-element-iv/solutions/2756668/)

---

# **Intuition**
Next Greater Element canb resolved with one mono stack.
Could we resolve this problem with mono stack?
<br>

# **Explanation**
Use two stack `s1` and `s2`.
Similar to "Next Greater Element"
`s1` stores the index of elements
that have not found their first greater element.

`s2` stores the index of elements
that have found their first greater element,
have not found their second greater element.

For each `a = A[i]` in A
We first compare the `a` with the tail elements in `s2`,
pop all element smaller than `a`,
because `a` is their second greater element.

Then we compare the `a` with the tail elements in `s1`,
move all elements smaller than `a` to the tail of `s2`,
because `a` is their first greater element.

We repeatly do this for all `A[i]` and finally return the result.
<br>

# **Complexity**
All `A[i]` is pushed in `s1` and `s2` at most once.
All `A[i]` is pushed in `s1` and `s2` at most once.

Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public int[] secondGreaterElement(int[] A) {
        int n = A.length,  res[] = new int[n];
        Arrays.fill(res, -1);
        Stack<Integer> s1 = new Stack<>(), s2 = new Stack<>(), tmp = new Stack<>();
        for (int i=0; i < n; i++) {
            while (!s2.empty() && A[s2.peek()] < A[i])
                res[s2.pop()] = A[i];
            while (!s1.empty() && A[s1.peek()] < A[i])
                tmp.push(s1.pop());
            while (!tmp.empty())
                s2.push(tmp.pop());
            s1.push(i);
        }
        return res;
    }
```

**C++**
```cpp
    vector<int> secondGreaterElement(vector<int>& A) {
        int n = A.size();
        vector<int> res(n, -1), s1, s2, tmp;
        for (int i = 0 ;i < n; ++i) {
            while (!s2.empty() && A[s2.back()] < A[i])
                res[s2.back()] = A[i], s2.pop_back();
            while (!s1.empty() && A[s1.back()] < A[i])
                tmp.push_back(s1.back()), s1.pop_back();
            while (!tmp.empty())
                s2.push_back(tmp.back()), tmp.pop_back();
            s1.push_back(i);
        }
        return res;
    }
```

**Python**
```py
    def secondGreaterElement(self, A: List[int]) -> List[int]:
        res, s1, s2 = [-1] * len(A), [], []
        for i,a in enumerate(A):
            while s2 and A[s2[-1]] < a:
                res[s2.pop()] = a;
            tmp = []
            while s1 and A[s1[-1]] < a:
                tmp.append(s1.pop())
            s2 += tmp[::-1]
            s1.append(i)
        return res
```

# More Good Stack Problems
Here are some problems that impressed me.
Good luck and have fun.

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
