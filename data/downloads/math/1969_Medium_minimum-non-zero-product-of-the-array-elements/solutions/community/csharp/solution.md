# Iterative Power Function || c#

**Author:** diptesh308
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/solutions/5323708/](https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/solutions/5323708/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To minimize array product we need to make those numbers as far as possible from each other.



# Approach
<!-- Describe your approach to solving the problem. -->
Example 
let's say 2 numbers x and y and their multiplication is z.
Suppose x=3 and y=4, so, z=x*y=12
to minimize z with the freedom of manipulating bits of x, y
we can get z=(x-1)*(y+1)=2*5=10
How we can get x=2? and y=5?

let's see original x=3 and y=4 in binary
Binary(x)=011
Binary(y)=100

We can go beyond and get x=1 and y=6

These 2 are compliment of each other(in the context of 3 bits), it means together these 2 number's binary form fill each postion with 1 (100+011=111)

This property allow us to generate (x=1, y=6), (x=2, y=5), (x=3, y=4), (x=4,y=3), (x=5, y=2), (x=6, y=1)

Let's take n=3
arr={1,2,3,4,5,6,7};
Here Compliment pairs are (1,6), (2,5), (3,4)
1 and 6 are already as far as it can be.
So for 2, 5 we can manipulate bits and convert it to 1, 6
same goes for 3,4 we can convert it to (1,6)

By this it's already clear we are going to have (2^p-2)/2=2^(p-1)-1 number of 2^p-2 and this result will be multiplied with by 2^p-1.

For above case we are going to have 2^(3-1)-1=3 number of 2^3-2=6s multiply by 2^3-1=7.
so, result will be = 7*(6^3)

Generalized formula is result = (2^p-1)*(2^p-2)^(2^(p-1)-1)
# Complexity
- Time complexity:
 O(log(p))

- Space complexity:
- O(1)

# Code
```
public class Solution {
    static long mod = 1000000007;
    public static long CalculateExpIterative(long n, long exp)
    {
        long result = 1;
        n = n % mod; // In case n is larger than mod

        while (exp > 0)
        {
            if ((exp & 1) == 1) // If exp is odd, multiply result by n
            {
                result = (result * n) % mod;
            }
            exp = exp >> 1; // Divide exp by 2
            n = (n * n) % mod; // Square n and take modulo
        }

        return result;
    }
    public int MinNonZeroProduct(int p) {
        long maxVal = (1L << p) - 1;  // 2^p - 1
        long secondMaxVal = maxVal - 1;  // 2^p - 2
        long halfCount = (1L << (p - 1)) - 1;  // 2^(p-1) - 1

        // Calculate (2^p - 2)^(2^(p-1) - 1) % mod
        long secondPart = CalculateExpIterative(secondMaxVal, halfCount);

        // The result is (secondPart * maxVal) % mod
        long minProduct = (secondPart * (maxVal%mod)) % mod;

        return (int)minProduct;
    }
}
```