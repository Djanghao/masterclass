# O(1) || Bit Manipulation

**Author:** fahad_Mubeen
**Votes:** 25
**Link:** [https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5508923/](https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5508923/)

---

# Approach
1. **Identify Bit Differences:** Use the XOR operation between n and k to identify differing bits. The XOR result will have 1 in each bit position where n and k differ.

2. **Count Bit Differences:** Count the number of 1 bits in this XOR result. This count represents the total number of bits that differ between n and k.
3. **Check Feasibility of Changes:** Perform a bitwise AND between the XOR result and n. Count the number of 1 bits in this result. If this count is equal to the count from the XOR result, it means that all differing bits are set to 1 in n and can be changed to match k. If not, it's impossible to make n equal to k using the allowed changes.

4. **Return Result:** Return the count of differing bits if they can all be changed; otherwise, return -1.




# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int minChanges(int n, int k) {
        k ^= n;
        int cnt = __builtin_popcount(k);
        k &= n;
        return cnt == __builtin_popcount(k) ? cnt : -1;
    }
};
```
```Java []
class Solution {
    public int minChanges(int n, int k) {
        k ^= n;
        int cnt = Integer.bitCount(k);
        k &= n;
        return cnt == Integer.bitCount(k) ? cnt : -1;
    }
}

```
```Python3 []
class Solution:
    def minChanges(self, n: int, k: int) -> int:
        k ^= n
        cnt = bin(k).count('1')
        k &= n
        return cnt if cnt == bin(k).count('1') else -1

```

# STL Function Implementaion:
```
int popcount(int n){
    int count = 0;
    while(n > 0){
        count++;
        n = n & (n - 1);
    }
    return count;
}
```
