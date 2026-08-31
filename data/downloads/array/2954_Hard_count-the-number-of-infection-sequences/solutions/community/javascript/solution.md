# ✅☑[C++/Java/Python/JavaScript] || Easy Approach || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-the-number-of-infection-sequences/solutions/4355904/](https://leetcode.com/problems/count-the-number-of-infection-sequences/solutions/4355904/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**
1. **Initialization:**

    - Initialization of necessary vectors and constants for modular arithmetic.
1. **Finding Segments:**

    - Identifying segments without sick indices (`xs` vector stores their lengths).
1. **Modular Arithmetic Functions:**

    - Lambdas (`mult`, `modexp`, `inverse`) to perform arithmetic operations considering the MOD value.
1. **Pre-computation:**

    - Pre-computing powers of 2 and factorials up to 'n'.
1. **Handling Boundary Cases:**

    - Handling cases where segments do not start or end at the boundaries.
1. **Calculating Answer:**

    - Calculating the final answer using segment lengths and factorials while considering sick and healthy indices.



# Complexity
- *Time complexity:*
   $$O(n)$$
    

- *Space complexity:*
   $$O(n)$$
    


# Code
```C++ []
class Solution {
public:
    int numberOfSequence(int n, vector<int>& sick) {
        const int MOD = 1e9 + 7; // Modulus value for operations

        // Initializing vectors and variables
        vector<int> xs; // Vector to store segment lengths without sick indices
        vector<bool> a(n, 0); // Vector to mark indices as sick or healthy
        
        // Marking indices as sick
        for (auto i : sick) {
            a[i] = 1;
        }

        // Finding lengths of segments without sick indices
        for (int i = 0, cur = 0; i < n; i++) {
            if (!a[i]) {
                cur++;
            }
            if (!a[i] && (i == n - 1 || a[i + 1])) {
                xs.push_back(cur);
                cur = 0;
            }
        }

        // Lambda functions for modular arithmetic operations
        auto mult = [&](int a, int b) {
            return (1LL * a * b) % MOD;
        };
        auto modexp = [&](int a, int b) {
            int r = 1;
            while (b) {
                if (b & 1) {
                    r = mult(r, a);
                }
                a = mult(a, a);
                b >>= 1;
            }
            return r;
        };
        auto inverse = [&](int x) {
            return modexp(x, MOD - 2);
        };

        // Pre-computing powers of 2 and factorials up to 'n'
        vector<int> pow2(n + 1);
        pow2[0] = 1;
        for (int i = 1; i <= n; i++) {
            pow2[i] = mult(pow2[i - 1], 2);
        }
        vector<int> fac(n + 1);
        fac[0] = 1;
        for (int i = 1; i <= n; i++) {
            fac[i] = mult(fac[i - 1], i);
        }

        int Y = n - sick.size(); // Number of healthy indices
        int A = 0, B = 0;

        // Handling the cases for segments not starting or ending at the boundaries
        if (sick.front() != 0) {
            A = xs.front();
            xs.erase(xs.begin());
        }
        if (sick.back() != n - 1) {
            B = xs.back();
            xs.pop_back();
        }

        int ans = fac[Y]; // Initializing answer with factorial of healthy indices

        // Calculating answer by considering segment lengths and factorials
        for (int x : xs) {
            ans = mult(ans, inverse(fac[x]));
            ans = mult(ans, pow2[x - 1]);
        }
        ans = mult(ans, inverse(fac[A]));
        ans = mult(ans, inverse(fac[B]));

        return ans; // Returning the final answer
    }
};



```
```C []
#include <stdio.h>
#include <stdlib.h>

#define MOD 1000000007

int mult(int a, int b) {
    return ((long long)a * b) % MOD;
}

int modexp(int a, int b) {
    int r = 1;
    while (b) {
        if (b & 1) {
            r = mult(r, a);
        }
        a = mult(a, a);
        b >>= 1;
    }
    return r;
}

int inverse(int x) {
    return modexp(x, MOD - 2);
}

int numberOfSequence(int n, int* sick, int sickSize) {
    int xs[10000]; // Assuming an upper limit for array size
    int a[10000] = {0}; // Assuming an upper limit for array size

    for (int i = 0; i < sickSize; i++) {
        a[sick[i]] = 1;
    }

    int cur = 0, count = 0;
    for (int i = 0; i < n; i++) {
        if (!a[i]) {
            cur++;
        }
        if (!a[i] && (i == n - 1 || a[i + 1])) {
            xs[count++] = cur;
            cur = 0;
        }
    }

    int pow2[10001];
    pow2[0] = 1;
    for (int i = 1; i <= n; i++) {
        pow2[i] = mult(pow2[i - 1], 2);
    }

    int fac[10001];
    fac[0] = 1;
    for (int i = 1; i <= n; i++) {
        fac[i] = mult(fac[i - 1], i);
    }

    int Y = n - sickSize;
    int A = 0, B = 0;

    if (sick[0] != 0) {
        A = xs[0];
        count--;
    }
    if (sick[sickSize - 1] != n - 1) {
        B = xs[count - 1];
    }

    int ans = fac[Y];

    for (int i = 0; i < count - 1; i++) {
        ans = mult(ans, inverse(fac[xs[i]]));
        ans = mult(ans, pow2[xs[i] - 1]);
    }
    ans = mult(ans, inverse(fac[A]));
    ans = mult(ans, inverse(fac[B]));

    return ans;
}



```
```Java []
import java.util.ArrayList;
import java.util.List;

public class Solution {

    public int numberOfSequence(int n, List<Integer> sick) {
        final int MOD = 1_000_000_007;

        List<Integer> xs = new ArrayList<>();
        boolean[] a = new boolean[n];

        for (int i : sick) {
            a[i] = true;
        }

        int cur = 0;
        for (int i = 0; i < n; i++) {
            if (!a[i]) {
                cur++;
            }
            if (!a[i] && (i == n - 1 || a[i + 1])) {
                xs.add(cur);
                cur = 0;
            }
        }

        int[] pow2 = new int[n + 1];
        int[] fac = new int[n + 1];
        int Y = n - sick.size();
        int A = 0, B = 0;

        if (sick.get(0) != 0) {
            A = xs.get(0);
            xs.remove(0);
        }
        if (sick.get(sick.size() - 1) != n - 1) {
            B = xs.get(xs.size() - 1);
            xs.remove(xs.size() - 1);
        }

        int ans = factorial(Y, MOD);

        for (int x : xs) {
            ans = multiply(ans, inverseFactorial(x, MOD), MOD);
            ans = multiply(ans, pow(x - 1, 2, MOD), MOD);
        }
        ans = multiply(ans, inverseFactorial(A, MOD), MOD);
        ans = multiply(ans, inverseFactorial(B, MOD), MOD);

        return ans;
    }

    // Helper method to calculate factorial
    private int factorial(int n, int MOD) {
        int result = 1;
        for (int i = 1; i <= n; i++) {
            result = multiply(result, i, MOD);
        }
        return result;
    }

    // Helper method to calculate inverse factorial
    private int inverseFactorial(int n, int MOD) {
        return modExp(factorial(n, MOD), MOD - 2, MOD);
    }

    // Helper method to perform modular exponentiation
    private int modExp(int base, int exp, int MOD) {
        int result = 1;
        while (exp > 0) {
            if (exp % 2 == 1) {
                result = multiply(result, base, MOD);
            }
            base = multiply(base, base, MOD);
            exp /= 2;
        }
        return result;
    }

    // Helper method to perform modular multiplication
    private int multiply(int a, int b, int MOD) {
        return (int) ((1L * a * b) % MOD);
    }

    // Helper method to calculate power
    private int pow(int base, int exp, int MOD) {
        int result = 1;
        while (exp > 0) {
            if (exp % 2 == 1) {
                result = multiply(result, base, MOD);
            }
            base = multiply(base, base, MOD);
            exp /= 2;
        }
        return result;
    }




```
```python3 []
class Solution:
    def numberOfSequence(self, n, sick):
        MOD = 10**9 + 7

        xs = []
        a = [False] * n

        for i in sick:
            a[i] = True

        cur = 0
        for i in range(n):
            if not a[i]:
                cur += 1
            if not a[i] and (i == n - 1 or a[i + 1]):
                xs.append(cur)
                cur = 0

        def multiply(a, b):
            return (a * b) % MOD

        def mod_exp(a, b):
            result = 1
            while b:
                if b & 1:
                    result = multiply(result, a)
                a = multiply(a, a)
                b >>= 1
            return result

        def inverse(x):
            return mod_exp(x, MOD - 2)

        pow2 = [0] * (n + 1)
        fac = [0] * (n + 1)
        Y = n - len(sick)
        A = 0
        B = 0

        if sick[0] != 0:
            A = xs[0]
            xs.pop(0)
        if sick[-1] != n - 1:
            B = xs[-1]
            xs.pop(-1)

        ans = self.factorial(Y, MOD)

        for x in xs:
            ans = multiply(ans, inverse(self.factorial(x, MOD)))
            ans = multiply(ans, pow(2, x - 1, MOD))
        ans = multiply(ans, inverse(self.factorial(A, MOD)))
        ans = multiply(ans, inverse(self.factorial(B, MOD)))

        return ans

    def factorial(self, n, MOD):
        result = 1
        for i in range(1, n + 1):
            result = (result * i) % MOD
        return result

    def pow(self, base, exp, MOD):
        result = 1
        while exp > 0:
            if exp & 1:
                result = (result * base) % MOD
            base = (base * base) % MOD
            exp >>= 1
        return result


```
```javascript []
const MOD = 1000000007;

function mult(a, b) {
    return (BigInt(a) * BigInt(b)) % BigInt(MOD);
}

function modexp(a, b) {
    let r = 1n;
    while (b > 0) {
        if (b & 1) {
            r = mult(r, a);
        }
        a = mult(a, a);
        b >>= 1n;
    }
    return r;
}

function inverse(x) {
    return modexp(x, BigInt(MOD) - 2n);
}

function numberOfSequence(n, sick) {
    let xs = [];
    let a = Array(n).fill(0);

    sick.forEach(i => {
        a[i] = 1;
    });

    let cur = 0;
    for (let i = 0; i < n; i++) {
        if (!a[i]) {
            cur++;
        }
        if (!a[i] && (i === n - 1 || a[i + 1])) {
            xs.push(cur);
            cur = 0;
        }
    }

    let pow2 = new Array(n + 1).fill(0);
    pow2[0] = 1;
    for (let i = 1; i <= n; i++) {
        pow2[i] = mult(pow2[i - 1], 2);
    }

    let fac = new Array(n + 1).fill(0);
    fac[0] = 1;
    for (let i = 1; i <= n; i++) {
        fac[i] = mult(fac[i - 1], i);
    }

    let Y = n - sick.length;
    let A = 0,
        B = 0;

    if (sick[0] !== 0) {
        A = xs[0];
        xs.shift();
    }
    if (sick[sick.length - 1] !== n - 1) {
        B = xs.pop();
    }

    let ans = fac[Y];

    xs.forEach(x => {
        ans = mult(ans, inverse(fac[x]));
        ans = mult(ans, pow2[x - 1]);
    });
    ans = mult(ans, inverse(fac[A]));
    ans = mult(ans, inverse(fac[B]));

    return ans;
}




```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---