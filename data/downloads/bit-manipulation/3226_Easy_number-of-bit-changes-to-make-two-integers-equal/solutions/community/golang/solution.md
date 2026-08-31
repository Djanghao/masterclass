# Detailed Explanation 100% beats

**Author:** muhammadfarhankt
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5508964/](https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5508964/)

---

# Summary
- 

# Approach
1. Check for immediate equality: If n is already equal to k, return 0.
2. Bitwise comparison: 
    - Iterate through each bit of n and k.
    - For each bit, check if k has a 1 bit where n has a 0 bit. If so, return -1.
    - Count the number of 1 bits in n that need to be turned to 0 (i.e., positions where n has a 1 bit and k has a 0 bit).
3. Return the count.

# Complexity
- Time complexity: O(logmax(n,k)), since we are iterating through the bits of the integers n and k. The number of bits is proportional to the logarithm of the value.

- Space complexity:  O(1), as we are using a fixed amount of extra space regardless of the input size.

# Code

```Java []
class Solution {
    public int minChanges(int n, int k) {
        if (n == k) {
            return 0;
        }

        int count = 0;
        while (n > 0 || k > 0) {
            int bitN = n & 1;
            int bitK = k & 1;

            if (bitK == 1 && bitN == 0) {
                return -1;
            }

            if (bitN == 1 && bitK == 0) {
                count++;
            }

            n >>= 1;
            k >>= 1;
        }

        return count;
    }
}
```
```C++ []
class Solution {
public:
    int minChanges(int n, int k) {
        if (n == k) {
            return 0;
        }

        int count = 0;
        while (n > 0 || k > 0) {
            int bitN = n & 1;
            int bitK = k & 1;

            if (bitK == 1 && bitN == 0) {
                return -1;
            }

            if (bitN == 1 && bitK == 0) {
                count++;
            }

            n >>= 1;
            k >>= 1;
        }

        return count;
    }
};
```
```Python []
class Solution:
    def minChanges(self, n: int, k: int) -> int:
        if n == k:
            return 0
        
        count = 0
        while n > 0 or k > 0:
            bitN = n & 1
            bitK = k & 1
            
            if bitK == 1 and bitN == 0:
                return -1
            
            if bitN == 1 and bitK == 0:
                count += 1
                
            n >>= 1
            k >>= 1
        
        return count
```
```Javascript []
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function(n, k) {
    if (n === k) {
        return 0;
    }

    let count = 0;
    while (n > 0 || k > 0) {
        let bitN = n & 1;
        let bitK = k & 1;

        if (bitK === 1 && bitN === 0) {
            return -1;
        }

        if (bitN === 1 && bitK === 0) {
            count++;
        }

        n >>= 1;
        k >>= 1;
    }

    return count;
};
```
```Dart []
class Solution {
  int minChanges(int n, int k) {
    if (n == k) {
      return 0;
    }

    int count = 0;
    while (n > 0 || k > 0) {
      int bitN = n & 1;
      int bitK = k & 1;

      if (bitK == 1 && bitN == 0) {
        return -1;
      }

      if (bitN == 1 && bitK == 0) {
        count++;
      }

      n >>= 1;
      k >>= 1;
    }

    return count;
  }
}
```
```Golang []
func minChanges(n int, k int) int {
    if n == k {
        return 0
    }

    count := 0
    for n > 0 || k > 0 {
        bitN := n & 1
        bitK := k & 1

        if bitK == 1 && bitN == 0 {
            return -1
        }

        if bitN == 1 && bitK == 0 {
            count++
        }

        n >>= 1
        k >>= 1
    }

    return count
}
```