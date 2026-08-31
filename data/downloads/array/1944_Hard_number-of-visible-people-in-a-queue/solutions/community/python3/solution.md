# [Java/Python 3] Monotonic stack w/ 18 similar problems, brief explanation and analysis.

**Author:** rock
**Votes:** 65
**Link:** [https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/1359868/](https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/1359868/)

---

**Method 1: reverse traversal - save heights into stack** 

**Intuition**
Since we see from left to right and can only see any one higher than the persons between them, it looks simpler to traverse reversely (than from left to right) and use monotonic stack to save heights.

By keep popping out of stack the higher persons, we can increasing the counter, `ans[i]`, of the current person and do NOT forget to add one more if the stack is NOT empty by the end of the aforementioned popping.

----

1. Reversely traverse the input array `heights`, use a stack to store the heights that are higher than current height. 
2. Therefore, whenever current height is higher than the top of the stack, keep popping out the top of the stack and increase the output array `ans` accordingly, till the stack is empty or current height is lower than the top;
3. Now if the stack is not empty, the top must be higher than current height and will be visible, so count it in;
4. Push current height into the stack to maintain the monotonic increading property.

```java
    public int[] canSeePersonsCount(int[] heights) {
        int n = heights.length;
        int[] ans = new int[n];
        Deque<Integer> stk = new ArrayDeque<>();
        for (int i = n - 1; i >= 0; --i) {
            while (!stk.isEmpty() && heights[i] > stk.peek()) {
                ++ans[i];
                stk.pop();
            }
            if (!stk.isEmpty()) {
                ++ans[i];
            }
            stk.push(heights[i]);
        }
        return ans;
    }
```
```python
    def canSeePersonsCount(self, heights: List[int]) -> List[int]:
        n, stk = len(heights), []
        ans = [0] * n
        for i, h in enumerate(reversed(heights)):
            while stk and h > stk[-1]:
                stk.pop()
                ans[i] += 1
            if stk:
                ans[i] += 1
            stk.append(h)
        return ans[:: -1]
```

----

**Method 2: normal traversal - save indices into stack**

```java
    public int[] canSeePersonsCount(int[] heights) {
        int n = heights.length;
        int[] ans = new int[n];
        Deque<Integer> stk = new ArrayDeque<>();
        for (int i = 0; i < n; ++i) {
            while (!stk.isEmpty() && heights[stk.peek()] < heights[i]) {
                ++ans[stk.pop()];
            }
            if (!stk.isEmpty()) {
                ++ans[stk.peek()];
            }
            stk.push(i);
        }
        return ans;
    }
```
```python
    def canSeePersonsCount(self, heights: List[int]) -> List[int]:
        n = len(heights)
        ans, stk = [0] * n, []
        for i, h in enumerate(heights):
            while stk and heights[stk[-1]] < h:
                ans[stk.pop()] += 1
            if stk:
                ans[stk[-1]] += 1
            stk.append(i)
        return ans
```

----
**Comparison of the 2 methods:**

I myself prefer method 1, because the stack stores the value of `heights` instead of indices of the `heights`, which is more intuitive than the way in method 2.


----

**Analysis:**

Time & space: `O(n)`, where `n = heights.length`.

----
Similar problems (monotonous stack/queue):

[84 Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram)
[214 Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome)
[239 Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum)
[316 Remove Duplicate Letters](https://leetcode.com/problems/remove-duplicate-letters)
[321 Create Maximum Number](https://leetcode.com/problems/create-maximum-number)
[402 Remove K Digits](https://leetcode.com/problems/remove-k-digits)
[456 132 Pattern](https://leetcode.com/problems/132-pattern)
[496 Next Greater Element I](https://leetcode.com/problems/next-greater-element-i)
[503. Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/description/)
[654 Maximum Binary Tree](https://leetcode.com/problems/maximum-binary-tree)
[739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/description/)
[768 Max Chunks To Make Sorted II](https://leetcode.com/problems/max-chunks-to-make-sorted-ii)
[862 Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k)
[889 Construct Binary Tree from Preorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal)
[901 Online Stock Span](https://leetcode.com/problems/online-stock-span)
[907 Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums)
[1019. Next Greater Node In Linked List](https://leetcode.com/problems/next-greater-node-in-linked-list/discuss/267163/Java-9-liner-O(n)-using-Stack-and-ArrayList)
[1475 Final Prices With a Special Discount in a Shop](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop)
