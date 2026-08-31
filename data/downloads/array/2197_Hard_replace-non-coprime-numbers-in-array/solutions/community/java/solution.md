# [Java/C++/Python] Stack One Pass Solution

**Author:** lee215
**Votes:** 69
**Link:** [https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/1823798/](https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/1823798/)

---

# **Explanation**
For each number `a` in input array `A`,
check if it is coprime with the last number `b` in `res`.
If it's not coprime, then we can merge them by calculate `a * b / gcd(a, b)`.
and check we can continue to do this process.

Until it's coprime with the last element in `res`,
we append `a` at the end of `res`.

We do this for all elements `a` in `A`, and return the final result.
<br>

# **Complexity**
Time `O(nlogn)`
Space `O(n)`
<br>

**Java**
```java
    public List<Integer> replaceNonCoprimes(int[] A) {
        LinkedList<Integer> res = new LinkedList();
        for (int a : A) {
            while (true) {
                int last = res.isEmpty() ? 1 : res.getLast();
                int x = gcd(last, a);
                if (x == 1) break; // co-prime
                a *= res.removeLast() / x;
            }
            res.add(a);
        }
        return res;
    }

    private int gcd(int a, int b) {
        return b > 0 ? gcd(b, a % b) : a;
    }
```

**C++**
```cpp
    vector<int> replaceNonCoprimes(vector<int>& A) {
        vector<int> res;
        for (int a: A) {   
            while (true) {   
                int x = gcd(res.empty() ? 1 : res.back(), a);
                if (x == 1) break; // co-prime
                a *= res.back() / x;
                res.pop_back();
            }
            res.push_back(a);
        }
        return res;
    }
```

**Python3**
```py
    def replaceNonCoprimes(self, A):
        res = []
        for a in A:
            while True:
                x = math.gcd(res[-1] if res else 1, a)
                if x == 1: break # co-prime
                a *= res.pop() // x
            res.append(a)
        return res
```
