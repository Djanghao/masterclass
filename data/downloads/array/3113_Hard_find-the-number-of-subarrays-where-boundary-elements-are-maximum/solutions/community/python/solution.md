# [Java/C++/Python] Stack O(n)

**Author:** lee215
**Votes:** 82
**Link:** [https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/solutions/5017056/](https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/solutions/5017056/)

---

# **Intuition**
For each subarray ending at `A[i]`,
we need to find next bigger element on its left,
so use a stack to solve this problem.
<br>

# **Explanation**
Each element in the `stack` holds:
The value of the element itself.
The count of subarrays where this element is the minimum thus far.

For each `a` in `A`,
we try to find the subarray ending at `a`,
firstly pop all element smaller than `a`,
This ensures that the stack maintains monotonically decreasing.

If stack doesn't end,
we push `a` to the stack.
then we update the occurence of `a`,
finally increment the occurence to result `res`.
<br>

# **Example**
Let's illustrate with Example 1:

Input: [1, 4, 3, 3, 2]
Iteration 1: a = 1, stack: [{1, 1}]
Iteration 2: a = 4, stack: [{4, 1}]
Iteration 3: a = 3, stack: [{4, 1}, {3, 1}]
Iteration 4: a = 3, stack: [{4, 1}, {3, 2}]
Iteration 5: a = 2, stack: [{4, 1}, {3, 2}, {2, 1}]
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public long numberOfSubarrays(int[] A) {
        ArrayDeque<int[]> stack = new ArrayDeque<>();
        long res = 0;
        for (int a : A) {
            while (!stack.isEmpty() && stack.peek()[0] < a)
                stack.pop();
            if (stack.isEmpty() || stack.peek()[0] != a)
                stack.push(new int[]{a, 0});
            res += ++stack.peek()[1];
        }
        return res;
    }
```

**C++**
```cpp
    long long numberOfSubarrays(vector<int>& A) {
        vector<vector<int>> stack;
        long long res = 0;
        for (int& a : A) {
            while (!stack.empty() && stack.back()[0] < a)
                stack.pop_back();
            if (stack.empty() || stack.back()[0] != a)
                stack.push_back({a, 0});
            res += ++stack.back()[1];
        }
        return res;
    }
```

**Python**
```py
    def numberOfSubarrays(self, A: List[int]) -> int:
        stack = []
        res = 0
        for a in A:
            while stack and stack[-1][0] < a:
                stack.pop()
            if not stack or stack[-1][0] > a:
                stack.append([a, 0])
            stack[-1][1] += 1
            res += stack[-1][1]
        return res
```
