# 💥💥Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-substring-with-given-hash-value/solutions/6017327/](https://leetcode.com/problems/find-substring-with-given-hash-value/solutions/6017327/)

---

# Intuition
Find the first substring of a given length k in the string s whose hash matches the given hashValue. The hash of a string is calculated using a formula where each character's position is weighted by powers of a number p modulo a number m. The challenge is to do this efficiently without calculating the hash for every possible substring from scratch.

# Approach
Calculate the hash of the first substring of length k and then use a sliding window to update the hash as we move from one substring to the next by removing the contribution of the leftmost character and adding the new character on the right, adjusting the hash with the power of p at each step.

# Complexity
- Time complexity:
O(n), where n is the length of the string, because we compute the hash for each substring in constant time using the sliding window approach.

- Space complexity:
O(n), because we need to store the string and the hash values during the calculation.

# Code
```csharp []
public class Solution {
    public string SubStrHash(string s, int power, int modulo, int k, int hashValue) {
        // Convert parameters to the proper types (to match the Rust logic)
        ulong mod = (ulong)modulo;
        ulong p = (ulong)power;
        int kLen = k;
        ulong hashVal = (ulong)hashValue;

        // Convert the string to a byte array
        byte[] sBytes = System.Text.Encoding.ASCII.GetBytes(s);

        // Initialize variables
        ulong tmp = 0;
        ulong r = 1;
        int res = s.Length;

        // Calculate the hash for the last k characters
        for (int i = s.Length - kLen; i < s.Length; i++) {
            tmp += (ulong)(sBytes[i] - 96) * r;
            tmp %= mod;
            r = (r * p) % mod;
        }

        // Check if the last k characters match the hashValue
        if (tmp == hashVal) {
            res = s.Length - kLen;
        }

        // Sliding window: Update the hash and check other substrings
        for (int i = s.Length - kLen - 1; i >= 0; i--) {
            tmp = tmp * p % mod + mod;
            tmp -= (ulong)(sBytes[i + kLen] - 96) * r % mod;
            tmp = (tmp + (ulong)(sBytes[i] - 96)) % mod;

            // If the hash matches the hashValue, update the result
            if (tmp == hashVal) {
                res = i;
            }
        }

        // Return the substring corresponding to the result
        if (res <= s.Length - kLen) {
            return s.Substring(res, kLen);
        } else {
            return "";
        }
    }
}

```