# [Java/C++/Python] Check from big to small

**Author:** lee215
**Votes:** 170
**Link:** [https://leetcode.com/problems/minimum-operations-to-form-subsequence-with-target-sum/solutions/3965489/](https://leetcode.com/problems/minimum-operations-to-form-subsequence-with-target-sum/solutions/3965489/)

---

# **Preword**
I noticed most solution will check from small to big,
which is also good.

Here I add another solution,
where we can check from big to small.
<br>

# **Intuition**
If total `sum < taregt`, return `-1`.
If the some `sum >= target`,
we can always make up `target`.
<br>

# **Explanation**
Check if `sum >= taregt`,
we can return `-1` directly if not.

Then sort the `A` from small to big.
This step can use counting sort with `O(n)`.


Then check the biggest element `a`:

If `tot - a >= target`,
we can skip `a` and make up `target` with smaller integers.
For example, `A = [1,2,16]` and `taregt = 3`, we don't need `16`.

If `a <= target`,
we will pick `a`,
we update `tot -= a ` and `target -= a`.

Otherwise,
we need `a` and `a > target`,
we need to split `a` into two `a / 2`.
the operation `res++`.


We keep doing the above checks,
until `target = 0`,
which means we find all integers we need,
finally we return `res`.
<br>

# **Complexity**
Time `O(sort)`, can improve to `O(n + 30)` by counting sort.
Space `O(sort)` extra space for quick sort.
<br>


**Java**
```java
    public int minOperations(List<Integer> A, int target) {
        long tot = 0;
        for (int a : A) {
            tot += a;
        }
        if (tot < target) {
            return -1;
        }
        Collections.sort(A);
        int res = 0;
        while (target > 0) {
            int a = A.remove(A.size() - 1);
            if (tot - a >= target) {
                tot -= a;
            } else if (a <= target) {
                tot -= a;
                target -= a;
            } else {
                A.add(a / 2);
                A.add(a / 2);
                res++;
            }
        }
        return res;
    }
```
**C++**
```cpp
    int minOperations(vector<int>& A, int target) {
        long long tot = accumulate(A.begin(), A.end(), 0L), res = 0;
        if (tot < target)
            return -1;
        sort(A.begin(), A.end());
        while (target > 0) {
            int a = A.back();
            A.pop_back();
            if (tot - a >= target) {
                tot -= a;
            } else if (a <= target) {
                tot -= a;
                target -= a;
            } else {
                A.push_back(a / 2);
                A.push_back(a / 2);
                res += 1;
            }
        }
        return res;
    }
```

**Python**
```py
    def minOperations(self, A: List[int], target: int) -> int:
        tot = sum(A)
        if tot < target:
            return -1
        A.sort()
        res = 0
        while target:
            a = A.pop()
            if tot - a >= target:
                tot -= a
            elif a <= target:
                tot -= a
                target -= a
            else:
                A.append(a // 2)
                A.append(a // 2)
                res += 1
        return res
```
