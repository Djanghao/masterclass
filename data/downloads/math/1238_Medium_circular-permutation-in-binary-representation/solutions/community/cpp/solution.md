# 🎯🔥What is Grey Code? Explanation & Easy Solution C++! 🎯🔥

**Author:** _kartikbanga_
**Votes:** 2
**Link:** [https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/5706459/](https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/5706459/)

---

<!-- # Intuition -->
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Gray code is a sequence of binary numbers where each number differs from the previous one by only a single bit.

Change Binary to Gray Code:

The rule for converting binary code to binary Gray code is to keep the highest bit of the binary code as the highest bit of the Gray code, and the second highest bit of the Gray code is the XOR of the highest bit and the second highest bit of the binary code. The rest of the Gray code is similar to the second highest bit.

- The MSB of the binary number 1011 is 1, so the first bit of the Gray code is 1.
- XOR the first and second bits: 1 ^ 0 = 1.
- XOR the second and third bits: 0 ^ 1 = 1.
- XOR the third and fourth bits: 1 ^ 1 = 0.

So, the Gray code for the binary number 1011 is 1110.

General Formula:
Gray[i] = Binary[i] ^ Binary[i-1] (where ^ denotes XOR operation).
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(2^n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    vector<int> circularPermutation(int n, int start) {
        int g[1<<n];
        int j=0;
        for(int i=0;i<1<<n;i++){
            g[i]=i^(i>>1);
            if(g[i]==start)
                j=i;
        }
        vector<int> res;
        for(int i=j;i<j+(1<<n);i++){
            res.push_back(g[i%(1<<n)]);
        }
        return res;
    }
};
```