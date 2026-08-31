# Microoptimizing for top execution time

**Author:** sergei99
**Votes:** 1
**Link:** [https://leetcode.com/problems/happy-number/solutions/3994453/](https://leetcode.com/problems/happy-number/solutions/3994453/)

---

# Intuition
In terms of math, the sequence of summing digit squares quickly comes down to one of a few tracks which it never exits. It can be formally proved that the sequence *n0*, *n1*, *n2*..., where *n(i)* = sum of digit squares of *n(i-1)*, eventually contains either *1* or *4*, of which *1* is happy, and *4* is not (enters endless loop *4 -> 16 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4*). Of all the digits below *10* only *1* and *7* can be reduced to *1*, and all the remaining ones reduce to *4*.

In terms of low-level implementation, obviously the most costly operations are divisions and jumps, so we would want to avoid them as much as possible. Particularly, no classic loops with division by *10*.

# Approach
First of all, we precalculate sums of squares of all numbers below *100*. The largest sum of such numbers is *9 * 9 * 2 = 162* for *99*, it perfectly fits 8 bits, so the entire array would occupy 100 bytes, which fit 2 L1 cache lines. However, such luxury is only available in languages with unsigned types. Java, Scala, etc implementations, would have to stick to 16-bit shorts and 200 bytes in total. The array can be calculated only once prior to testing and with little or no multiplications (using the fact that *(a + 1)\xB2 - a\xB2 = 2a + 1*).

So once our sequence falls below 100, its further progression becomes very fast. Note that the largest sum possible is produced by the number *999999999*, which gives *9 * 9 * 9 = 729*, the next iteration transforms it to *49 + 4 + 81 = 134*, and the subsequent number is already below *100*.

As for large numbers, we split them into 5 2-digit parts with 8 unsigned div and mod operations, which compilers normally translate into 4 unsigned divs producing quotient and remainder simultaneously. Then we just sum 5 values from our table.

We stop iterating once we reach any number below *10*, then we quickly test it against a 10-bit mask with only 1-st and 7-th bits set (zero-based).

There is some more room for improvement, e.g. we could avoid more divisions by precomputing sums of squares up to *162* (32-bit numbers fall below that value in 2 steps and never go above it afterwards). We could also trace numbers below *163* reducing to *1* and numbers reducing to *4* and populate a bit map appropriately, so the iteration could be stopped early, making the algorithm time effectively constant. Such map would occupy 3 qwords of memory. However, the existing implementation already shows 0 ms execution time. May be if Leetcode adds more test data, these optimizations could be considered.

# Complexity
- Time complexity: difficult to judge because we need to analyze the length of the transformation chain.

- Space complexity: $$O(1)$$

# Code

```C++ []
unsigned char sumsquares[100];

void init_squares() {
    for (unsigned char i = 1; i <= 9; i++)
        sumsquares[i] = sumsquares[i * 10] = sumsquares[i - 1] + i + i - 1;
    for (unsigned char j = 11; j <= 91; j += 10)
        for (unsigned char i = 0; i <= 8; i++)
            sumsquares[i + j] = sumsquares[i + j - 1] + i + i + 1;
}

auto init = []()
{ ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  init_squares();
  return 'c';
}();

class Solution {
public:
    __attribute__((always_inline)) unsigned happynize(unsigned n) {
        if (n < 100) return sumsquares[n];
        unsigned h6 = n / 10000, l4 = n % 10000,
                 h2 = h6 / 10000, m4 = h6 % 10000,
                 mh2 = m4 / 100, ml2 = m4 % 100,
                 lh2 = l4 / 100, ll2 = l4 % 100;
        return sumsquares[h2] + sumsquares[mh2] + sumsquares[ml2] + sumsquares[lh2] + sumsquares[ll2];
    }

    bool isHappy(unsigned n) {
        while (n >= 10) {
            n = happynize(n);
        }
        return ((1u << n) & ~0x82u) == 0;
    }
};
```

```Java []
class Solution {
    private static final short[] sumsquares = new short[100];

    static {
        for (byte i = 1; i <= 9; i++)
            sumsquares[i] = sumsquares[i * 10] = (short)(sumsquares[i - 1] + i + i - 1);
        for (byte j = 11; j <= 91; j += 10)
            for (byte i = 0; i <= 8; i++)
                sumsquares[i + j] = (short)(sumsquares[i + j - 1] + i + i + 1);
    }

    public boolean isHappy(int n) {
        while (n >= 10) {
            if (n < 100) {
                n = sumsquares[n];
            } else {
                int h6 = n / 10000, l4 = n % 10000,
                    h2 = h6 / 10000, m4 = h6 % 10000,
                    mh2 = m4 / 100, ml2 = m4 % 100,
                    lh2 = l4 / 100, ll2 = l4 % 100;
                n = sumsquares[h2] + sumsquares[mh2] + sumsquares[ml2] + sumsquares[lh2] + sumsquares[ll2];
            }
        }
        return ((1 << n) & 0x82) != 0;
    }
}
```

```Scala []
object Solution {
    private val sumsquares = (0 to 9).flatMap(
        j => (0 to 9).map(i => i * i  + j * j)
    ).toArray

    def isHappy(k: Int): Boolean = {
        var n = k
        while (n >= 10) {
            if (n < 100) n = sumsquares(n)
            else {
                val h6 = n / 10000;  val l4 = n % 10000
                val h2 = h6 / 10000; val m4 = h6 % 10000
                val mh2 = m4 / 100;  val ml2 = m4 % 100
                val lh2 = l4 / 100;  val ll2 = l4 % 100
                n = sumsquares(h2) + sumsquares(mh2) + sumsquares(ml2) + sumsquares(lh2) + sumsquares(ll2)
            }
        }
        ((1 << n) & 0x82) != 0
    }
}
```
Note that we have to pay extra 100 bytes for Java signed-only types: *162* won't fit in a signed byte. And all the divisions are signed. And we don't rely on the compiler inlining our calculation. Otherwise the implementation is the same as C++ one, and it also gives 0 ms execution time.

The best run of the Scala code took 366 ms (perhaps it's not using JIT?), which is also the absolute top at the moment. Both imperative (similar to Java and C++ code above) and range-based declarative precomputation have been tried, but I haven't noticed any significant difference. So I decided to keep the nice declarative one.

And of course, the cost of extra multiplications is nothing compared to the overhead from Scala runtime, designed to handle petabytes of data via efficient collections and algorithms, but not for microoptimizations.