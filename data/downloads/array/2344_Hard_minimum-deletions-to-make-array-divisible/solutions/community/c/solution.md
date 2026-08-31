# [Java/C++/Python] GCD, O(n + m + log)

**Author:** lee215
**Votes:** 116
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/2292651/](https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/2292651/)

---

# **Explanation**
"divides all the elements of numsDivide"
equals to
"divides gcd of all the elements of numsDivide"
where gcd is the greatest common divisor.

So the first step, find out the gcd of `numsDivide`,
then sort input nums `A`,
and find out the smallest element `A[i]` in `A` divides `gcd`.

We need to remove all elements smaller than `A[i]`.
If no such `A[i]`, return `-1`
<br>

# **Complexity**
Time `O(nlogn + m + gcd)`, where `gcd = log(max(numsDivide)`
Space `O(1)`
<br>

**Java**
```java
    public int minOperations(int[] A, int[] numsDivide) {
        int g = numsDivide[0], tmp;
        for (int a : numsDivide) {
            while (a > 0) { // g = gcd(g, a)
                tmp = g % a;
                g = a;
                a = tmp;
            }
        }
        Arrays.sort(A);
        for (int i = 0; i < A.length && A[i] <= g; ++i)
            if (g % A[i] == 0)
                return i;
        return -1;
    }
```

**C++**
```cpp
    int minOperations(vector<int>& A, vector<int>& numsDivide) {
        int g = numsDivide[0];
        for (int a: numsDivide)
            g = gcd(g, a);
        sort(A.begin(), A.end());
        for (int i = 0; i < A.size() && A[i] <= g; ++i)
            if (g % A[i] == 0)
                return i;
        return -1;
    }
```

**Python**
```py
    def minOperations(self, A: List[int], numsDivide: List[int]) -> int:
        g = gcd(*numsDivide)
        for i,a in enumerate(sorted(A)):
            if g % a == 0: return i
            if a > g: break
        return -1
```
Compressed version
```py
    def minOperations(self, A: List[int], numsDivide: List[int]) -> int:
        g = gcd(*numsDivide)
        return next((i for i,a in enumerate(sorted(A)) if g % a == 0), -1)
```
<br>

# Solution 2: Slight improvement
Improve from `O(nlogn)` to `O(n)`

Explanation from @k_r_h_ise:
the optimisation is done by not sorting the nums array.
Instead, we iterate it twice.

first iteration\uFF1A
find the smallest element that divides the `gcd_of_all(numsDivide)`.
let's call it `min_divisor`.

second iteration\uFF1A
count no. of elements that are smaller than the min_divisor.
let's call it `small_cnt`.

Now if `small_cnt == size_of_num` return `-1` else return `small_cnt`


Time `O(n + m + gcd)`, where `gcd = log(max(numsDivide)`
Space `O(1)`

```py
    def minOperations(self, A: List[int], numsDivide: List[int]) -> int:
        g = gcd(*numsDivide)
        small = min((a for a in A if g % a == 0), default = 0)
        return sum(a < small for a in A) if small else -1
```
