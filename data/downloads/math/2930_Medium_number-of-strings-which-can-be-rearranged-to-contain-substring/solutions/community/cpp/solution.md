# [C++, Java, Python] Inclusion Exclusion | Math | O(logn)

**Author:** shivamaggarwal513
**Votes:** 122
**Link:** [https://leetcode.com/problems/number-of-strings-which-can-be-rearranged-to-contain-substring/solutions/4276710/](https://leetcode.com/problems/number-of-strings-which-can-be-rearranged-to-contain-substring/solutions/4276710/)

---

# Intuition
Happy Diwali!!
I'll be sharing my though process during contest.

As we can see that we need atleast 1 L, 1 T and 2 E somewhere in our string. They need not be present in order as it can be rearranged afterwards. Hence, out of $n$ letters, $4$ are fixed and for the rest of $n-4$ letters we have to make permutations and combinations.

Out of those $n-4$ letters, suppose we take
```
a = x1 times
b = x2 times
.
.
z = x26 times

Constraint that x1 + x2 + ... + x26 = n - 4
0 <= x1, x2, ..., x26 <= n - 4
```

Therefore, in total we have
```
a = x1 times
b = x2 times
.
.
e = x5 + 2 times
.
.
l = x12 + 1 times
.
.
t = x20 + 1 times
.
.
z = x26 times
```

Number of ways to arrange these letters on $n$ indices is given by:

$$\\displaystyle\\frac{n!}{x_{1}!x_{2}!...(x_{5}+2)!...(x_{12}+1)!...(x_{20}+1)!...x_{26}!}$$

And, ofcourse we can precompute factorials, mod inverse factorials. But the problem is we have to try all possible combinations of variables $(x_1,x_2,...,x_{26})$.

It is not feasible to do it the forward way. Hence, start thinking backwards.
What are the total number of strings regardless good or bad? Since, every index has $26$ choices, it is $26^n$.
What if we somehow calculate number of bad strings and subtract the answer from it to get good strings?

What makes a string bad?
```
C1 = 0 L (no L present in whole string)
C2 = 0 T (no T present in whole string)
C3 = 0 E (no E present in whole string)
C4 = 1 E (only 1 E present in whole string)
```

These 4 cases $(C_1, C_2, C_3, C_4)$ make a string bad, or a combination of them.
This gives the intuition of Inclusion Exclusion Principle.

Count of bad strings can be written as

$$singletons - pairs + triplets - quadruples$$

$$= \\bigcup_{i} |C_i| - \\bigcup_{i,j} |C_i \\cap C_j| + \\bigcup_{i,j,k} |C_i \\cap C_j \\cap C_k| - \\bigcup_{i,j,k,l} |C_i \\cap C_j \\cap C_k \\cap C_l|
$$

Expanding, it can be written as
$$+(|C_1| + |C_2| + |C_3| + |C_4|)$$

$$-(|C_1 \\cap C_2| + |C_1 \\cap C_3| + |C_1 \\cap C_4| + |C_2 \\cap C_3| + |C_2 \\cap C_4| + |C_3 \\cap C_4|)$$

$$+(|C_1 \\cap C_2 \\cap C_3| + |C_1 \\cap C_2 \\cap C_4| + |C_1 \\cap C_3 \\cap C_4| + |C_2 \\cap C_3 \\cap C_4|)$$

$$-(|C_1 \\cap C_2 \\cap C_3 \\cap C_4|)$$


Now,
1. $C_3 \\cap C_4 = \\phi$ (a string can't have 0 E and 1 E simultaneously)
2. $|C_1|$ can be calculated as the number of ways to form string with 0 L. Means we have $25$ choices for all $n$ letters. $|C_1|=25^n$.
3. $|C_4|$ can be calculated as the number of ways to form string with 1 E. First select $1$ position out of $n$ indices on which E should be placed (${}^nC_1$ choices). Then for remaining $n-1$ letters we have $25^{n-1}$ choices. $|C_4| = {}^nC_1.25^{n-1}$.

Similarly, calculate other values.

Number of bad strings will be
$$+(25^n + 25^n + 25^n + {}^nC_1.25^{n-1})$$

$$-(24^n + 24^n + {}^nC_1.24^{n-1} + 24^n + {}^nC_1.24^{n-1} + 0)$$

$$+(23^n + {}^nC_1.23^{n-1} + 0 + 0)$$

$$-(0)$$

$$
=(n+75).25^{n-1} - (2n+72).24^{n-1} + (n+23).23^{n-1}
$$

Number of good strings will be
$$
26^n - (n+75).25^{n-1} + (2n+72).24^{n-1} - (n+23).23^{n-1}
$$

# Approach

**Modulo Arithmetic and Binary Exponentiation**
We need a function to calculate power with modulo. Library functions can't be used (in most of the langugages) because powers can be much larger than the numbers stored in $int$ data type. We need to handle overflow while calculating power using the fact:

$$(a * b) \\mod m = ((a \\mod m) * (b \\mod m)) \\mod m$$

And power can be calculated as
$$
x^n \\mod m = ((x \\mod m) * (x \\mod m) * ... n \\enspace times ... * (x \\mod m)) \\mod m
$$
$$
x^n \\mod m = ((x^{n-1} \\mod m) * (x \\mod m)) \\mod m
$$
```
pow(x, n, mod)
    result = 1
    for i = 1 to n:
        result = (result * x) % mod
    return result
```

Time complexity of this approach would be $O(n)$. But, there is another method to calculate powers using binary exponentiation with time $O(\\log n)$.

Taking an example, calculate $2^{11} \\mod 1000$:
- Convert exponent in binary form $(11)_{10}=(1011)_2$.
- Result can be written as
  $2^{1011}=2^{2^3 + 2^1 + 2^0}=2^{2^3}.2^{2^1}.2^{2^0}$
- In below program, we maintain variable $p$ having value of $2^{2^b} \\mod m$.
- $2^{2^{b+1}} \\mod m$ can be calculated by squaring $p$.
  $2^{2^{b+1}} \\mod m = (2^{2^b} \\mod m)^2 \\mod m$
- Traversing on the exponent bit by bit, whenever the Least Signifacnt Bit is $1$, we multiply this value of $p$ to the $result$.

# Code
```C++ []
class Solution {
private:
    long pow(long x, long n, long mod) {
        long result = 1, p = x % mod;
        while (n) {
            if (n & 1) {
                result = (result * p) % mod;
            }
            p = (p * p) % mod;
            n >>= 1;
        }
        return result;
    }
    
public:
    int stringCount(int n) {
        long mod = 1e9 + 7;
        return ((
            + pow(26, n, mod)
            - (n + 75) * pow(25, n - 1, mod)
            + (2 * n + 72) * pow(24, n - 1, mod)
            - (n + 23) * pow(23, n - 1, mod)
        ) % mod + mod) % mod;
    }
};
```
```Java []
class Solution {
    private long pow(long x, long n, long mod) {
        long result = 1, p = x % mod;
        while (n != 0) {
            if ((n & 1) != 0) {
                result = (result * p) % mod;
            }
            p = (p * p) % mod;
            n >>= 1;
        }
        return result;
    }

    public int stringCount(int n) {
        long mod = (int)1e9 + 7;
        return (int)(((
            + pow(26, n, mod)
            - (n + 75) * pow(25, n - 1, mod)
            + (2 * n + 72) * pow(24, n - 1, mod)
            - (n + 23) * pow(23, n - 1, mod)
        ) % mod + mod) % mod);
    }
}
```
```Python []
class Solution:
    def stringCount(self, n: int) -> int:
        mod = 10 ** 9 + 7
        return (
            + pow(26, n, mod)
            - (n + 75) * pow(25, n - 1, mod)
            + (2 * n + 72) * pow(24, n - 1, mod)
            - (n + 23) * pow(23, n - 1, mod)
        ) % mod
```

# Complexity
- Time complexity: $O(\\log n)$
- Space complexity: $O(1)$

---

> Another way to think from the factorial formula.

Number of ways to arrange these letters on $n$ indices is given by:

$$\\displaystyle\\frac{n!}{x_{1}!x_{2}!...(x_{5}+2)!...(x_{12}+1)!...(x_{20}+1)!...x_{26}!}$$

Iterating over all possible values of $(x_1,x_2,...x_{26})$ where each one of them will have a loop for $0$ to $n-4$. That's 26 nested loops (or 25 if you use $x_{26} =n-4-(x_1+x_2+...+x_{25})$) having times complexity $n^{26}$.

Mathematically it will work too and give correct answer.

This summation of all terms can be reduced to single formula using multinomial theorem.
The factorial term is just the coefficient of term $a^{x_1}...z^{x_{26}}$ in the expansion of $(a+b+...z)^n$. Sum of all these coefficients can be calculated by putting $a=b=...=z=1$ which comes out to be $26^n$.

But if we want sum of good coefficients only, then either we calculate them using loops or we calculate it by first calculating bad coefficients. Now this will be dependent on question, which one will be easier to calculate.