# EASY DP! 3D -> 2D and explaining WHY we use sliding window

**Author:** gtsmarmy
**Votes:** 16
**Link:** [https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/solutions/4169304/](https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/solutions/4169304/)

---

# Intuition
Clearly, there can only be $\\sqrt{r}$ distinct numbers. The way to see this is to notice the smallest possible sum of $n$ distinct numbers is
$$\\large 1+2+3+\\dotsc+m = \\frac{m(m+1)}{2}$$, therefore if $\\frac{m(m+1)}{2} \\leqslant r$ then $m \\leqslant O(\\sqrt{r})$

With this in mind, let's represent the array as distinct numbers coupled with their frequencies.

Example:
$[1,2,2,3] \	o [1_1,2_2,3_1]$

Anyway, a naive DP idea is 
$\\large \	ext{dp}[i][L][R]$ represents the number of multisums between $L$ and $R$ considering only $[i:]$ onwards. (from index $i$ to the end)

The transitions for this are:

$\\large \	ext{dp}[i][L][R] = \\sum\\limits_{h=0}^{\	ext{freq}[a_i]} \	ext{dp}[i+1][\	ext{max}(0,L-h \\cdot a_i)][R-h \\cdot a_i]$
where $h$ basically counts how MUCH of element $i$ we take.

and if $R-h \\cdot a_i < 0$ then return $0$ as it's not possible to make a sum fit within $L \\leqslant S \\leqslant R$ (we're only dealing with positive numbers here!)

Anyway, this is horribly slow. At least it's polynomial time. The TC of this is $O(n \\cdot r^2)$, despite the loop, because it runs once for every element in the original array (including dupes).


## Optimization #1

We don't need to track both $L$ and $R$. Just one. Let's track $R$ and say $\	ext{dp}[i][R]$ epresents the number of multisums $\\leqslant R$ considering only $[i:]$ onwards. (from index $i$ to the end)

Then, our answer is $\	ext{dp}[0][R] - \	ext{dp}[0][L-1]$

$\\Large \	ext{dp}[i][R] = \\sum\\limits_{h=0}^{\	ext{freq}[a_i]} \	ext{dp}[i+1][R-h \\cdot a_i]$

Now we are in business. However, evaluating this is $O(nr)$. It ain't gonna pass. We need $O(mr)$. That sum is the annoying part. There's guaranteed to be dupes, so we need to make use of that.

## Optimization #2

Okay this one is weird, I'll show then explain.

Suppose we are at index $3$ with current sum $9$, and $a[3] = 3$, $\	ext{freq}[a_3] = 2$
Then our sum looks like 

$\\Large \\color{white} \	ext{dp}[3][9] = \\sum\\limits_{h=0}^{2} \	ext{dp}[4][9-h \\cdot 3] = \\boxed{\	ext{dp}[4][9] + \	ext{dp}[4][6] + \	ext{dp}[4][3]}$

Okay, nothing special here. NOW! Let's look at the EXACT same scenario but this time $R = 12$. Just watch what happens.
$\\large \	ext{dp}[3][12] = \\sum\\limits_{h=0}^{2} \	ext{dp}[4][12-h \\cdot 3] = \	ext{dp}[4][12] + \	ext{dp}[4][9] + \	ext{dp}[4][6]$

This is exactly the same as 
$\\large \\color{white} \	ext{dp}[4][12] + \	ext{dp}[4][9] + \	ext{dp}[4][6] = \\color{red} \	ext{dp}[4][12] \\color{white} + \\boxed{\	ext{dp}[4][9] + \	ext{dp}[4][6] + \	ext{dp}[4][3]} \\color{red} - \	ext{dp}[4][3]$

In other words,
$\\Large \\color{white} \	ext{dp}[3][12] = \\color{red} \	ext{dp}[4][12] \\color{white} + \	ext{dp}[3][9] \\color{red} - \	ext{dp}[4][3]$

Our sum is gone. Just like that. Now, to encapsulate what we have learned, we can write it in this equation.

$\\large \\color{white} \	ext{dp}[i][R] = \\color{red} \	ext{dp}[i+1][R]  \\color{white} + \	ext{dp}[i][R-a_i] \\color{red} - \	ext{dp}[i+1][R-(\	ext{freq}[a_i] + 1)a_i)]$

Nice!

Our base case is quite simple, $\\large \	ext{dp}[n][x] = 1$ for $x \\leqslant r$
You can think of it as a reward for reaching the finish line while being less than $r$.

## Complication

If you have 0's. It breaks (LOL). It shouldn't be too hard to see why, the DP golden equation we derived just breaks. So the way to deal with it is to realise what the presence of a 0 really means. Let's say the answer to the question WITHOUT any 0's is $x$. Then, adding one zero will double that answer. Why? Because we can add a 0 to each of those subsets that works, and we can leave it alone. So we get the original PLUS the original with a 0 appended to it. 

If we have two 0's, you might think it's quadruple. But, we can't have the **same** multiset (i.e. you can only append nothing, one zero, or both zeroes.). So really it's just the same situation but we add $x$ again. 

Basically, it's $\\huge (1+\	ext{number of 0's}) \\cdot \	ext{ans}$ 


# Complexity
- Time complexity: $$\\large \\color{pink} O\\left(r \\cdot \	ext{min}(n,\\sqrt{r})\\right)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$\\large \\color{pink} O\\left(r \\cdot \	ext{min}(n,\\sqrt{r})\\right)$$

# Code

Ignore the Mint stuff, that's just to make the actual CODE cleaner (no need to fill the screen with nasty % MOD's).
```
typedef long long ll;
typedef unsigned long long ull;
typedef vector<int> vi;
const int MOD = (int) 1e9 + 7;

template<ll mod = MOD>
struct mint {
    ll x;

    mint() : x(0) {}

    mint(ll _x) {
        _x %= mod;
        if (_x < 0) _x += mod;
        x = _x;
    }

    mint &operator+=(const mint &a) {
        x += a.x;
        if (x >= mod) x -= mod;
        return *this;
    }

    mint &operator-=(const mint &a) {
        x += mod - a.x;
        if (x >= mod) x -= mod;
        return *this;
    }

    mint &operator*=(const mint &a) {
        x = (ull) x * a.x % mod;
        return *this;
    }

    mint pow(ll pw) const {
        mint res = 1;
        mint cur = *this;
        while (pw) {
            if (pw & 1) res *= cur;
            cur *= cur;
            pw >>= 1;
        }
        return res;
    }

    mint inv() const {
        assert(x != 0);
        ll t = x;
        ll res = 1;
        while (t != 1) {
            ll z = mod / t;
            res = (ull) res * (mod - z) % mod;
            t = mod - t * z;
        }
        return res;
    }

    mint &operator/=(const mint &a) {
        return *this *= a.inv();
    }

    mint operator+(const mint &a) const {
        return mint(*this) += a;
    }

    mint operator-(const mint &a) const {
        return mint(*this) -= a;
    }

    mint operator*(const mint &a) const {
        return mint(*this) *= a;
    }

    mint operator/(const mint &a) const {
        return mint(*this) /= a;
    }

    bool operator==(const mint &a) const {
        return x == a.x;
    }

    bool operator!=(const mint &a) const {
        return x != a.x;
    }

    bool operator<(const mint &a) const {
        return x < a.x;
    }

    friend ostream &operator<<(ostream &out, const mint &m) {
        out << m.x;
        return out;
    }
};

using Mint = mint<MOD>;


class Solution {
public:

    Mint dp[201][(int) 2e4 + 3];
    int freq[(int) 2e4 + 3];
    int countSubMultisets(vector<int>& a, int l, int r) {
    vi b;
    for (auto x: a) {
        if (freq[x] == 0 && x != 0)
            b.emplace_back(x);
        freq[x]++;

    }

    int n = b.size();
    for (int j = 0; j <= r; ++j) 
        dp[n][j] = 1;
    

    for (int i = n-1; i >= 0; --i){
        for (int j = 0; j <= r; ++j){
            dp[i][j] = dp[i+1][j];
            if (j-b[i] >= 0) {
                dp[i][j] += dp[i][j - b[i]];
                if (j-(freq[b[i]]+1)*b[i] >= 0)
                    dp[i][j] -= dp[i+1][j-(freq[b[i]]+1)*b[i]];
            }
        }
    }


    return ((dp[0][r] - (l-1 >= 0 ? dp[0][l-1] : 0))*(1+freq[0])).x;
    }
};
```