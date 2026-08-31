# C# Think XOR beats 80% runtime

**Author:** yash_shukla
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5537307/](https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5537307/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Think XOR
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(log(n))$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MinChanges(int n, int k) {
        int count = 0;
        while( n > 0 || k > 0)
        {
            // Fetch last bit of the number
            int nBit = n & 1;
            int kBit = k & 1;

            // case1: if both the bits are same, xor will give the result as 0
            // case2: if both the bits are different, xor will give result as 1
                // case 2.1: if the nth is 1, we can safely turn it into 0
                // case 2.2: if the kth bit is 1, then we cannot change the bit from 1 to 0 hence return -1

            int xor = nBit ^ kBit;
            if(xor == 1 && kBit == 1) return -1;
            if(xor == 1) count ++;

            // right shift the bit by 1 (division operation)
            n >>= 1;
            k >>= 1;
        }

        return count;
    }
}
```