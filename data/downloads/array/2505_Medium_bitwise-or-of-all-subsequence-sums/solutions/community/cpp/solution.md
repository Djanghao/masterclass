# C++ Bit Manipulation

**Author:** mfatihuslu
**Votes:** 4
**Link:** [https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/solutions/2912711/](https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/solutions/2912711/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We go through numbers bit by bit and decide that bit of answer. 

# Approach
<!-- Describe your approach to solving the problem. -->
First we check how many 1's we have in the least significant bits (LSB) of numbers (*bit*). If any, it means LSB of answer should be 1. If we have at least 2 numbers with last bit 1, it means second LSB of answer should be 1 (because we can sum them).

So, after we count numbers with LSB=1, we can right shift all the numbers by 1 bit and divide number of LSB=1 (*bit*) by 2. We don't have to do this through all 64 bits. We can write smarter code for ending the loop earlier. 

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    long long subsequenceSumOr(vector<int>& nums) {
        long long ans = 0, bit = 0;
        for(int i=0; i<64; ++i){
            for(int &n: nums) bit += n & 1, n >>= 1;
            if(bit) ans |= (long long)powl(2,i), bit >>= 1;
        }
        return ans;
    }
};
```