# ✅☑[C++/Java/Python/JavaScript] || Beats 100% || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-xor-product/solutions/4304472/](https://leetcode.com/problems/maximum-xor-product/solutions/4304472/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

1. **Initialization:**

    - ans, big, and found are initialized to hold the XOR product, a flag variable, and the final result.
1. **Bitwise Manipulation:**

    - It iterates through the bits of 'a' and 'b' from the most significant bit (MSB) to the least significant bit (LSB) using a loop from 50 to 0.
    - curr is used to create a mask of the current bit position from MSB to LSB.
1. **Conditions for Setting Bits:**

    - Checks three conditions for each bit:
        - If both bits at the current position 'i' in 'a' and 'b' are 0, and 'i' is less than 'n', the bit is added to the ans.
        - If the bit in 'a' is set and the bit in 'b' is not, and specific conditions are met (big variable tracks these conditions), the bit is XORed to ans.
        - If the bit in 'b' is set and the bit in 'a' is not, and specific conditions are met, the bit is XORed to ans.
1. **Modulo Operation:**

    - After modifying 'a' and 'b' based on 'ans', they are taken modulo 10^9 + 7 to prevent integer overflow.
1. **Result:**

    - Returns the final calculated ans, which represents the maximum XOR product modulo 10^9 + 7.


# Complexity
- *Time complexity:*
   $$O(50)$$
    

- *Space complexity:*
   $$O(1)$$
    


# Code
```C++ []
class Solution {
public:
    int maximumXorProduct(long long a, long long b, int n) {
        long long ans = 0;
        int big = 0;
        bool found = false;

        // Iterate through the bits from MSB to LSB (from 50 to 0)
        for (int i = 50; i >= 0; i--) {
            long long curr = 1LL << i;

            // Check if both bits at 'i' in 'a' and 'b' are 0
            if (((a & curr) == 0) and ((b & curr) == 0)) {
                if (i < n) ans += curr; // If bit index 'i' is less than 'n', add 'curr' to 'ans'
            }
            // Check if bit at 'i' is set in 'a' and not in 'b'
            else if (((a & curr)) and ((b & curr) == 0)) {
                if (big == 0) big = -1;
                else if (big == -1 and i < n) ans += curr; // XOR 'curr' if conditions met and 'i' < 'n'
            }
            // Check if bit at 'i' is set in 'b' and not in 'a'
            else if (((a & curr) == 0) and ((b & curr))) {
                if (big == 0) big = 1;
                else if (big == 1 and i < n) ans += curr; // XOR 'curr' if conditions met and 'i' < 'n'
            }
        }

        long long mod = 1000000007;
        // Perform XOR between 'a' and 'b' with 'ans' and take modulo
        a ^= ans;
        b ^= ans;
        a %= mod;
        b %= mod;
        ans = (a * b) % mod; // Calculate product modulo 10^9 + 7

        return ans; // Return the resultant maximum XOR product
    }
};


```

```C []


int maximumXorProduct(long long a, long long b, int n) {
    long long ans = 0;
    int big = 0;
    int found = 0;

    for (int i = 50; i >= 0; i--) {
        long long curr = 1LL << i;

        if (((a & curr) == 0) && ((b & curr) == 0)) {
            if (i < n) ans += curr;
        } else if (((a & curr)) && ((b & curr) == 0)) {
            if (big == 0) big = -1;
            else if (big == -1 && i < n) ans += curr;
        } else if (((a & curr) == 0) && ((b & curr))) {
            if (big == 0) big = 1;
            else if (big == 1 && i < n) ans += curr;
        }
    }

    long long mod = 1000000007;
    a ^= ans;
    b ^= ans;
    a %= mod;
    b %= mod;
    ans = (a * b) % mod;

    return (int)ans;
}




```
```Java []
public class Solution {
    public int maximumXorProduct(long a, long b, int n) {
        long ans = 0;
        int big = 0;
        boolean found = false;

        // Iterate through the bits from MSB to LSB (from 50 to 0)
        for (int i = 50; i >= 0; i--) {
            long curr = 1L << i;

            // Check if both bits at 'i' in 'a' and 'b' are 0
            if (((a & curr) == 0) && ((b & curr) == 0)) {
                if (i < n) ans += curr; // If bit index 'i' is less than 'n', add 'curr' to 'ans'
            }
            // Check if bit at 'i' is set in 'a' and not in 'b'
            else if (((a & curr)) != 0 && ((b & curr) == 0)) {
                if (big == 0) big = -1;
                else if (big == -1 && i < n) ans += curr; // XOR 'curr' if conditions met and 'i' < 'n'
            }
            // Check if bit at 'i' is set in 'b' and not in 'a'
            else if (((a & curr) == 0) && ((b & curr) != 0)) {
                if (big == 0) big = 1;
                else if (big == 1 && i < n) ans += curr; // XOR 'curr' if conditions met and 'i' < 'n'
            }
        }

        long mod = 1000000007;
        // Perform XOR between 'a' and 'b' with 'ans' and take modulo
        a ^= ans;
        b ^= ans;
        a %= mod;
        b %= mod;
        ans = (a * b) % mod; // Calculate product modulo 10^9 + 7

        return (int) ans; // Return the resultant maximum XOR product as integer
    }
}


```

```python3 []

class Solution:
    def maximumXorProduct(self, a: int, b: int, n: int) -> int:
        ans = 0
        big = 0
        found = False

        # Iterate through the bits from MSB to LSB (from 50 to 0)
        for i in range(50, -1, -1):
            curr = 1 << i

            # Check if both bits at 'i' in 'a' and 'b' are 0
            if (a & curr) == 0 and (b & curr) == 0:
                if i < n:
                    ans += curr  # If bit index 'i' is less than 'n', add 'curr' to 'ans'

            # Check if bit at 'i' is set in 'a' and not in 'b'
            elif (a & curr) != 0 and (b & curr) == 0:
                if big == 0:
                    big = -1
                elif big == -1 and i < n:
                    ans += curr  # XOR 'curr' if conditions met and 'i' < 'n'

            # Check if bit at 'i' is set in 'b' and not in 'a'
            elif (a & curr) == 0 and (b & curr) != 0:
                if big == 0:
                    big = 1
                elif big == 1 and i < n:
                    ans += curr  # XOR 'curr' if conditions met and 'i' < 'n'

        mod = 1000000007
        # Perform XOR between 'a' and 'b' with 'ans' and take modulo
        a ^= ans
        b ^= ans
        a %= mod
        b %= mod
        ans = (a * b) % mod  # Calculate product modulo 10^9 + 7

        return ans  # Return the resultant maximum XOR product


```
```javascript []
function maximumXorProduct(a, b, n) {
    let ans = 0;
    let big = 0;
    let found = false;

    for (let i = 50; i >= 0; i--) {
        let curr = BigInt(1) << BigInt(i);

        if (((a & curr) == 0n) && ((b & curr) == 0n)) {
            if (i < n) ans += curr;
        } else if (((a & curr)) && ((b & curr) == 0n)) {
            if (big == 0) big = -1;
            else if (big == -1 && i < n) ans += curr;
        } else if (((a & curr) == 0n) && ((b & curr))) {
            if (big == 0) big = 1;
            else if (big == 1 && i < n) ans += curr;
        }
    }

    let mod = BigInt(1000000007);
    a ^= ans;
    b ^= ans;
    a %= mod;
    b %= mod;
    ans = (a * b) % mod;

    return Number(ans);
}


```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---