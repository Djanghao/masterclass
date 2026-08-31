# Easiest 5 ways in C++ / Python3 / Java / C / Python / C# -- Beats 100%

**Author:** Edwards310
**Votes:** 2
**Link:** [https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4916958/](https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4916958/)

---

# Intuition
![Screenshot 2024-03-24 093913.png](./images/0.png)
![Screenshot 2024-03-24 093747.png](./images/1.png)
![Screenshot 2024-03-24 094022.png](./images/2.png)
![Screenshot 2024-03-24 094108.png](./images/3.png)
```C++ []
class Solution {
public:
    int minOperations(int k) {
        int res = INT_MAX;
        for (int i = 0; i <= k; i++)
            res = min(res, (k + i) / (i + 1) - 1 + i);
        
        return res;
    }
};
```
```python3 []
class Solution:
    def minOperations(self, k: int) -> int:
        ans = k + 1
        for u in range(1, k + 1):
            ans = min(ans, u - 1 + (k + u - 1) // u - 1)
        return ans
```
```C []
int minOperations(int k) {
    int res = INT_MAX;
    for (int i = 0; i <= k; i++)
        res = fmin(res, (k + i) / (i + 1) - 1 + i);

    return res;
}
```
```java []
class Solution {
    public int minOperations(int k) {
        int max = k - 1;
        for (int i = (int) Math.sqrt(k); i >= 1; i--) {
            int sum = 1;
            int cnt = i - 1;
            sum += i - 1;
            while (sum < k) {
                sum += i;
                cnt++;
            }
            max = Math.min(max, cnt);

        }
        return max;
    }
}
```
```C++ []
class Solution {
public:
    int minOperations(int k) {
        int m = sqrt(k);
        return m - 1 + (k - 1) / m;
    }
};
```
```python []
class Solution(object):
    def minOperations(self, k):
        """
        :type k: int
        :rtype: int
        """
        ans = k + 1
        for u in range(1, k + 1):
            ans = min(ans, u - 1 + (k + u - 1) // u - 1)
        return ans
```
```C# []
public class Solution {
    public int MinOperations(int k) {
        int res = k;
        for (int i = 1; i * i <= k; i++) {
            int count = (k - 1) / i + 1;
            res = Math.Min(res, i - 1 + count - 1);
        }
        return res;
    }
}
```
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(Sqrt(n))
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)
# Code
```
int minOperations(int k) {
    int res = INT_MAX;
    for (int i = 0; i <= k; i++)
        res = fmin(res, (k + i) / (i + 1) - 1 + i);

    return res;
}
```
# Please upvote if it's useful for you..
![th.jpeg](./images/4.jpeg)
