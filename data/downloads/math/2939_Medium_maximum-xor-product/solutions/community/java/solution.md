# Proofs(Easy Video Explanation) 🔥 || Bit Manipulation 🔥 || C++,JAVA,PYTHON

**Author:** ayushnemmaniwar12
**Votes:** 46
**Link:** [https://leetcode.com/problems/maximum-xor-product/solutions/4305190/](https://leetcode.com/problems/maximum-xor-product/solutions/4305190/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Think in terms of How we can increase the multiplication of a*b. Either increase in 'a' or increase in 'b' or when they are not modified. 

# **Detailed and easy Video Solution**

https://youtu.be/VqKt-F_4Tok


# Approach
<!-- Describe your approach to solving the problem. -->


To increase the multiplication of a and b, we want to set as many bits as possible in common between a and b.

Common Set Bits: If both a and b have the same bit set to 1 at a particular position, keeping that bit set in both will increase the multiplication.

XOR Operation: If the bits are different at a particular position, performing an XOR operation will set that bit to 1. We want to maximize the number of such differing bits to increase the multiplication.

Larger Number: If one number has a larger bit at a specific position, setting that bit in the other number will increase the multiplication.

The code adjusts the bits of a and b using these principles to maximize the XOR product. The loop iterates through the bits from the most significant bit to the least significant bit, making adjustments based on the conditions mentioned in the code. This way, it aims to maximize the multiplication of a and b

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)

```C++ []
class Solution {
public:
    int maximumXorProduct(long long a, long long b, int n) {
        int mod = 1e9 + 7;
        for (int i = n - 1; i >= 0; --i) {
            long long mask = (long long)1 << i;
            if ((a & mask) && (b & mask)) {
                continue;
            } else if (a & mask) {
                if (a > b) {
                    a ^= mask;
                    b |= mask;
                }
                continue;
            } else if (b & mask) {
                if (a < b) {
                    a |= mask;
                    b ^= mask;
                }
            } else {
                a |= mask;
                b |= mask;
            }
        }
        a=a%mod;
        b=b%mod;
        return (1LL * a * b) % mod;
    }
};
```
```JAVA []
public int maximumXorProduct(long a, long b, int n) {
        int mod = 1000000007;
        for (int i = n - 1; i >= 0; --i) {
            long mask = (long) 1 << i;
            if ((a & mask) != 0 && (b & mask) != 0) {
                continue;
            } else if ((a & mask) != 0) {
                if (a > b) {
                    a ^= mask;
                    b |= mask;
                }
                continue;
            } else if ((b & mask) != 0) {
                if (a < b) {
                    a |= mask;
                    b ^= mask;
                }
            } else {
                a |= mask;
                b |= mask;
            }
        }
        a = a % mod;
        b = b % mod;
        return (int) ((1L * a * b) % mod);
    }


```
```PYTHON []
def maximumXorProduct(self, a, b, n):
        mod = 10**9 + 7
        for i in range(n - 1, -1, -1):
            mask = 1 << i
            if (a & mask) and (b & mask):
                continue
            elif a & mask:
                if a > b:
                    a ^= mask
                    b |= mask
                continue
            elif b & mask:
                if a < b:
                    a |= mask
                    b ^= mask
            else:
                a |= mask
                b |= mask
        a %= mod
        b %= mod
        return (1LL * a * b) % mod
```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00