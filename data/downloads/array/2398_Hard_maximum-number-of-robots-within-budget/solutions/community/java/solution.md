# [Java/C++/Python] Sliding Window, O(n) Solution  🔥

**Author:** lee215
**Votes:** 165
**Link:** [https://leetcode.com/problems/maximum-number-of-robots-within-budget/solutions/2524838/](https://leetcode.com/problems/maximum-number-of-robots-within-budget/solutions/2524838/)

---

# Solution 1: Sliding Window + TreeMap
Use a sorted data structure to find the maximum value in a sliding window.

Time `O(nlogn)`
Space `O(n)`
<br>

**C++**
```cpp
    int maximumRobots(vector<int>& times, vector<int>& costs, long long budget) {
        long long i = 0, j, sum = 0, n = times.size();
        multiset<int> s;
        for (int j = 0; j < n; ++j) {
            sum += costs[j];
            s.insert(times[j]);
            if (*rbegin(s) + sum * (j - i + 1) > budget) {
                sum -= costs[i];
                s.erase(s.find(times[i++]));
            }
        }
        return n - i;
    }
```
**Python**
```python
    def maximumRobots(self, times: List[int], costs: List[int], budget: int) -> int:
        cur = i = 0
        n = len(times)
        s = SortedList()
        for j in range(n):
            cur += costs[j]
            s.add(times[j])
            if s[-1] + (j - i + 1) * cur > budget:
                s.remove(times[i])
                cur -= costs[i]
                i += 1
        return n - i
```


# Solution 2: Sliding Window + Mono Deque
Use a mono deque to find the maximum value in a sliding window.

Time `O(n)`
Space `O(n)`

**Java**
```java
    public int maximumRobots(int[] times, int[] costs, long budget) {
        long sum = 0;
        int i = 0, n = times.length;
        Deque<Integer> d = new LinkedList<Integer>();
        for (int j = 0; j < n; ++j) {
            sum += costs[j];
            while (!d.isEmpty() && times[d.peekLast()] <= times[j])
                d.pollLast();
            d.addLast(j);
            if (times[d.getFirst()] + (j - i + 1) * sum > budget) {
                if (d.getFirst() == i)
                    d.pollFirst();
                sum -= costs[i++];
            }
        }
        return n - i;
    }
```
**Python**
```py
    def maximumRobots(self, times: List[int], costs: List[int], budget: int) -> int:
        cur = i = 0
        n = len(times)
        d = deque()
        for j in range(n):
            cur += costs[j]
            while d and times[d[-1]] <= times[j]:
                d.pop()
            d.append(j)
            if times[d[0]] + (j - i + 1) * cur > budget:
                if d[0] == i:
                    d.popleft()
                cur -= costs[i]
                i += 1
        return n - i
```


# More Similar Sliding Window Problems
Here are some similar sliding window problems.
Also find more explanations and discussion.
Good luck and have fun.

- 2398. [Maximum Number of Robots Within Budget](https://leetcode.com/problems/maximum-number-of-robots-within-budget/discuss/2524838/Python-Sliding-Window-O(n))
- 1838. [Frequency of the Most Frequent Element](https://leetcode.com/problems/frequency-of-the-most-frequent-element/discuss/1175090/JavaC%2B%2BPython-Sliding-Window)
- 1493. [Longest Subarray of 1's After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/discuss/708112/JavaC%2B%2BPython-Sliding-Window-at-most-one-0)
- 1425. [Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum/discuss/597751/JavaC++Python-O(N)-Decreasing-Deque)
- 1358. [Number of Substrings Containing All Three Characters](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/discuss/516977/JavaC++Python-Easy-and-Concise)
- 1248. [Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/discuss/419378/JavaC%2B%2BPython-Sliding-Window-atMost(K)-atMost(K-1))
- 1234. [Replace the Substring for Balanced String](https://leetcode.com/problems/replace-the-substring-for-balanced-string/discuss/408978/javacpython-sliding-window/)
- 1004. [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/discuss/247564/JavaC%2B%2BPython-Sliding-Window)
-  930. [Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/discuss/186683/)
-  992. [Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/discuss/523136/JavaC%2B%2BPython-Sliding-Window)
-  904. [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/discuss/170740/Sliding-Window-for-K-Elements)
-  862. [Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/discuss/143726/C%2B%2BJavaPython-O(N)-Using-Deque)
-  209. [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/discuss/433123/JavaC++Python-Sliding-Window)
<br>

# More Good Stack Problems
Here are some problems that impressed me.
Good luck and have fun.

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
