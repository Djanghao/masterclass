# Python3 || 3 lines, no strings  || T / S: 87% / 99%

**Author:** Spaulding_
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/solutions/5875931/](https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/solutions/5875931/)

---

Here's the plan:

1. We compute the bit lengths of the three elements of nums
2. We evaluate the six permutations, using the bit lengths to order them, and return the maximum.
```python3 []
class Solution:
    def maxGoodNumber(self, nums: List[int]) -> int:

        n1, n2, n3 = nums
        b1, b2, b3 = n1.bit_length(),n2.bit_length(), n3.bit_length()     # <--1)
        
        return max(                                                       # <--2)
                (n1 <<(b2+b3)) + (n2 <<b3) + n3, (n1 <<(b3+b2)) + (n3 <<b2) + n2,
                (n2 <<(b1+b3)) + (n1 <<b3) + n3, (n2 <<(b3+b1)) + (n3 <<b1) + n1,
                (n3 <<(b1+b2)) + (n1 <<b2) + n2, (n3 <<(b2+b1)) + (n2 <<b1) + n1
                )
        
```
```cpp []
class Solution {
public:
    int maxGoodNumber(std::vector<int>& nums) {
        int n1 = nums[0], n2 = nums[1], n3 = nums[2];
        int b1 = n1 ? (int)std::log2(n1) + 1 : 0;   // <- 1)
        int b2 = n2 ? (int)std::log2(n2) + 1 : 0;
        int b3 = n3 ? (int)std::log2(n3) + 1 : 0;

        return std::max({                           // <- 2)
            (n1 << (b2 + b3)) + (n2 << b3) + n3,
            (n1 << (b3 + b2)) + (n3 << b2) + n2,
            (n2 << (b1 + b3)) + (n1 << b3) + n3,
            (n2 << (b3 + b1)) + (n3 << b1) + n1,
            (n3 << (b1 + b2)) + (n1 << b2) + n2,
            (n3 << (b2 + b1)) + (n2 << b1) + n1});
    }
};
```
```java []
class Solution {
    public int maxGoodNumber(int[] nums) {
        int n1 = nums[0], n2 = nums[1], n3 = nums[2];
        
        int b1 = Integer.toBinaryString(n1).length();    // <- 1)
        int b2 = Integer.toBinaryString(n2).length();
        int b3 = Integer.toBinaryString(n3).length();

        return Math.max(                                 // <- 2)
            Math.max((n1 << (b2 + b3)) + (n2 << b3) + n3, (n1 << (b3 + b2)) + (n3 << b2) + n2),
            Math.max(
                Math.max((n2 << (b1 + b3)) + (n1 << b3) + n3, (n2 << (b3 + b1)) + (n3 << b1) + n1),
                Math.max((n3 << (b1 + b2)) + (n1 << b2) + n2, (n3 << (b2 + b1)) + (n2 << b1) + n1)
            )
        );
    }
}

```
[https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/submissions/1417197450/](https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/submissions/1417197450/)

I could be wrong, but I think that time complexity is *O*(1) and space complexity is *O*(1).