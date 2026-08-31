# [Java/C++/Python] Binary Search

**Author:** lee215
**Votes:** 203
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/2734162/](https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/2734162/)

---

# **Explanation**
Assume the final equal values are `x`
the total cost function `y = f(x)` is a **convex function**
on the range of `[min(A), max(A)]`.

To find the minimum value of `f(x)`,
we can binary search `x` by comparing `f(mid)` and `f(mid + 1)`.

If `f(mid) <= f(mid + 1)`,
the minimum `f(x)` is on the left of `mid`,
where `x <= mid`

If `f(mid) >= f(mid + 1)`,
the minimum `f(x)` is on the right of `mid + 1`,
where `x >= mid`.

Repeatly doing this while `left < right`,
until we find the minimum value and return it.

This method is known as trinary search,
if we check `f(mid1)` and `f(mid2)`.
<br>

# **Complexity**
Time `O(nlog(a))`, where a is the range of `A[i]`
Space `O(1)`
<br>

**Java**
By @nitwmanish
```java
    private long findCost(int[] nums, int[] cost, long x) {
        long res = 0L;
        for (int i = 0; i < nums.length; i++){
            res += Math.abs(nums[i] - x) * cost[i];
        }
        return res;
    }
    public long minCost(int[] nums, int[] cost) {
        long left = 1L;
        long right = 1000000L;
        for (int num : nums) {
            left = Math.min(num, left);
            right = Math.max(num, right);
        }
        long ans = findCost(nums, cost, 1);
        while (left < right) {
            long mid = (left + right) / 2;
            long y1 = findCost(nums, cost, mid);
            long y2 = findCost(nums, cost, mid + 1);
            ans = Math.min(y1, y2);
            if (y1 < y2){
                right = mid;
            }
            else{
                left = mid + 1;
            }
        }
        return ans;
    }
}
```

**C++**
```cpp
    long long minCost(vector<int>& A, vector<int>& cost) {
        long long l = 1, r = 1000000, res = f(A, cost, 1), x;
        while (l < r) {
            x = (l + r) / 2;
            long long y1 = f(A, cost, x), y2 = f(A, cost, x + 1);
            res = min(y1, y2);
            if (y1 < y2)
                r = x;
            else
                l = x + 1;
        }
        return res;
    }

    long long f(vector<int>& A, vector<int>& cost, int x) {
        long long res = 0;
        for (int i = 0; i < A.size(); ++i)
            res += 1L * abs(A[i] - x) * cost[i];
        return res;
    }
```
**Python**
```py
    def minCost(self, A, cost):
        def f(x):
            return sum(abs(a - x) * c for a,c in zip(A, cost))

        l, r = min(A), max(A)
        res = f(l)
        while l < r:
            x = (l + r) // 2
            y1, y2 = f(x), f(x + 1)
            res = min(y1, y2)
            if y1 < y2:
                r = x
            else:
                l = x + 1
        return res

```
