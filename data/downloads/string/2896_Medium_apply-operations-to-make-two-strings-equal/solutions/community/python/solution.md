# [Java/C++/Python] One Pass, O(1) Space

**Author:** lee215
**Votes:** 109
**Link:** [https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/solutions/4144041/](https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/solutions/4144041/)

---

# **Preword**
I notice many complain the first solution is hard to understand,
so I updated a second one,
hope this one is easier to understand.

You can skip the first criticized solution if you want.

Also you can read others solution first,
and well understand the solution with `O(n)` space,
this also will help.
<br>


# **Intuition**
We don't care the string content,
we only care if `s1[i]` is same to `s2[i]`.

Imagine that we can change input to `0,1` array,
where `1` means different,
`0` means same.

We are going to make the array all `0`.


# **Explanation**
`done` means we change the prefix to all `0`.
`one` means we have one `1` in the prefix.
`last` means the last element in the prefix is still `1`.
`two` means we have one `1` in prefix and last `1` at end of prefix.


For case `s1[i] == s2[i]`,
if we are `done`, we are still `done`.
if we have `one`, we still have `one`.
We move the `last` from `A[i - 1]` to `A[1]` with cost is `1`,
so `last++, two++`.

similar for case `s1[i] != s2[i]`,
`done = min(one + x, last + 1)`
`two = one;`
`one = min(done, two + 1)`
`last = min(done, two + x)`
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int minOperations(String s1, String s2, int x) {
        int n = s1.length(), done = 0, inf = 1000000, one = inf, last = inf, two = inf;
        for (int i = 0; i < n; i++) {
            if (s1.charAt(i) == s2.charAt(i)) {
                last++;
                two++;
            } else if (done < n) {
                one = Math.min(done, two + 1);
                last = Math.min(done, two + x);
                done = two = inf;
            } else {
                done = Math.min(one + x, last + 1);
                two = one;
                one = last = inf;
            }
        }
        return done < inf ? done : -1;
    }
```

**C++**
```cpp
    int minOperations(string s1, string s2, int x) {
        int n = s1.size(), done = 0, inf = 1e6, one = inf, last = inf, two = inf;
        for (int i = 0; i < s1.size(); i++) {
            if (s1[i] == s2[i]) {
                last++;
                two++;
            } else if (done < n) {
                one = min(done, two + 1);
                last = min(done, two + x);
                done = two = inf;
            } else {
                done = min(one + x, last + 1);
                two = one;
                one = last = inf;
            }
        }
        return done < inf ? done : -1;
    }
```

**Python**
```py
    def minOperations(self, s1: str, s2: str, x: int) -> int:
        done, one, last, two = 0, inf, inf, inf
        for a,b in zip(s1, s2):
            if a == b:
                last, two = last + 1, two + 1
            else:
                done, one, last, two = min(one + x, last + 1), min(done, two + 1), min(done, two + x), one
        return done if done < inf else -1
```
<br>



# **Solution 2**

The idea is that, we transform the two operation:
1. flip only `s[i]`, cost is `x / 2`.
2. flip `s[i]` and `s[j]`, cost is `j - i`, where `i < j`.

The first operation is equal to original one,
as long as it will be done in even times,
and we will do a joint order(\u62FC\u591A\u591A).

We use `odd` to count the number of `s1[i] != s2[i]`,
After one operation, the odd/even of difference won't change,
so if the number of diff is odd, we return `-1`.

`res` is the current result,
`pre` is the last time result plus the distance.
To keep using integer, we double the cost during calculation.

Then we iterate each pair of `s1[i]` and  `s2[i]`,
we increment `pre += 2`, the double cost of 2nd operation.
We update `res = min(res + x, pre)`,
since we can take the either operation,
and update `pre` to the previous `res`.

Finally, we check if we have `odd` diff,
if so we return `-1`,
otherwise we return `res / 2`, since the cost was doubled.

**Java**
```java
    public int minOperations(String s1, String s2, int x) {
        int n = s1.length(), res = 0, pre = 1000000, odd = 0;
        for (int i = 0; i < n; i++) {
            pre += 2;
            if (s1.charAt(i) != s2.charAt(i)) {
                int tmp = res;
                res = min(res + x, pre);
                pre = tmp;
                odd ^= 1;
            }
        }
        return odd > 0 ? -1 : res / 2;
    }
```

**C++**
```cpp
    int minOperations(string s1, string s2, int x) {
        int n = s1.size(), res = 0, pre = 1e6, odd = 0;
        for (int i = 0; i < s1.size(); i++) {
            pre += 2;
            if (s1[i] != s2[i]) {
                int tmp = res;
                res = min(res + x, pre);
                pre = tmp;
                odd ^= 1;
            }
        }
        return odd ? -1 : res / 2;
    }
```

**Python**
```py
    def minOperations(self, s1: str, s2: str, x: int) -> int:
        res, pre, c = 0, inf, 0
        for a,b in zip(s1, s2):
            pre += 2
            if a != b:
                res, pre, c = min(res + x, pre), res, c ^ 1
        return res // 2 if c == 0 else -1
```


# More DP problems
Here is small DP problem list.
Good luck and have fun.
- 2896. [Apply Operations to Make Two Strings Equal](https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/discuss/4144041/JavaC%2B%2BPython-DP-One-Pass-O(1)-Space)
- 2830. [Maximize the Profit as the Salesman](https://leetcode.com/problems/maximize-the-profit-as-the-salesman/discuss/3934188/JavaC%2B%2BPython-DP)
- 2008. [Maximum Earnings From Taxi](https://leetcode.com/problems/maximum-earnings-from-taxi/discuss/1470941/JavaC%2B%2BPython-DP-solution)
- 1751. [Maximum Number of Events That Can Be Attended II](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/discuss/1052581/Python-DP)
- 1235. [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/discuss/409009/Python-DP-Solution)
<br>
