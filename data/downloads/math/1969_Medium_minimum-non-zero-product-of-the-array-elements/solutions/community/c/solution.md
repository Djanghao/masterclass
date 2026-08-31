# C++ Simple and Easy Solution, Detailed Explanation, 0ms Faster then 100%

**Author:** YehudisK
**Votes:** 32
**Link:** [https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/solutions/1421223/](https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/solutions/1421223/)

---

**Idea:**
To get the minimum product but not zero, we want to convert as many numbers as we can to 1.
The `range` of our numbers is pow(2, p) minus 1.
We can convert `range/2` numbers to 1.
In this way, `range/2` numbers will be 1 and `range/2` numbers will be `range-1`.
The last number in the array - which binary representation will be all 1's - will remain the same.
**Example 1:**
Let's take example 3 from the problem itself.
p = 3 --> range = 7
array `nums`: [001, 010, 011, 100, 101, 110, 111]
Can be converted to: [001, 110, 001, 110, 001, 110, 111] --> [1, 6, 1, 6, 1, 6, 7]
product is: 1 * 6 * 1 * 6 * 1 * 6 * 7 = 6 * 6 * 6 * 7 = pow(6, 3) * 7 = pow(range - 1, range/2) * range
**Example 2:**
p = 4 --> range = 15
array `nums`:  [0001, 0010, 0011, 0100, 0101, 0110, 0111, 1000, 1001, 1010, 1011, 1100, 1101, 1110, 1111]
Can be converted to: [0001, 1110, 0001, 1110, 0001, 1110, 0001, 1110, 0001, 1110, 0001, 1110, 0001, 1110, 1111] --> [1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 15]
product is: 1 * 14 * 1 * 14 * 1 * 14 * 1 * 14 * 1 * 14 * 1 * 14 * 1 * 14 * 15 = 14 * 14 * 14 * 14 * 14 * 14 * 14 * 15 = pow(14, 7) * 15 =  pow(range - 1, range/2) * range
**Formula: pow(range - 1, range/2) * range**
We can do this formula and we're done. But, we are using very large numbers so we have to implement a special  pow function which `mod`s the results to make them smaller.
```
class Solution {
public:
    long long myPow(long long base, long long exponent, long long mod) {
        if (exponent == 0) return 1;
        if (exponent == 1) return base % mod;
        
        long long tmp = myPow(base, exponent/2, mod);
        
        if (exponent % 2 == 0) { // (base ^ exponent/2) * (base ^ exponent/2)
            return (tmp * tmp) % mod;
        }
        else { // (base ^ exponent/2) * (base ^ exponent/2) * base
            tmp = tmp * tmp % mod;
            base %= mod;
            return (tmp * base) % mod;
        }
    }
    
    int minNonZeroProduct(int p) {
        long long range = pow(2, p);
        range--;
        long long mod = pow(10, 9) + 7;
        long long tmp = myPow(range-1, range/2, mod);
        return (tmp * (range%mod)) % mod;
    }
};
```
**Like it? please upvote!**