# Easy cpp || Bit Manipulation || beats 100% || 4ms

**Author:** H-SM
**Votes:** 20
**Link:** [https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4053974/](https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4053974/)

---

# Intuition

The problem requires finding the sum of elements in an array `nums` where the corresponding indices have exactly `k` set bits in their binary representation. To achieve this, the provided C++ code follows these steps:

1. Initialize a variable `res` to store the final result, which will be the sum of values at indices with exactly `k` set bits.

2. Iterate through each element of the input array `nums` using a `for` loop.

3. Inside the loop, perform the following operations for each index `i`:
   - Initialize a variable `c` to count the number of set bits (1s) in the binary representation of `i`.
   - Create a copy of `i` called `copy` to preserve the original value of `i`.
   - Use a while loop to count the set bits:
     - `c += copy & 1;` checks if the least significant bit (LSB) of `copy` is set (equal to 1) and increments `c` accordingly.
     - `copy >>= 1;` right-shifts `copy` by one bit to examine the next bit.
   - After counting the set bits in `i`, check if `c` is equal to the target `k`. If `c == k`, it means that the current index `i` has exactly `k` set bits in its binary representation, so the corresponding value `nums[i]` is added to the result `res`.

4. Continue this process for all elements in the `nums` array.

5. Finally, return the value of `res`, which represents the sum of elements in `nums` whose corresponding indices have exactly `k` set bits in their binary representation.

The code essentially scans through each index, calculates the number of set bits in its binary representation, and if it matches the target `k`, it accumulates the corresponding value from `nums` into the result. This way, it identifies the indices that meet the specified criteria and sums up the corresponding values.
# Complexity
- Time complexity: $$O(n*m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

$$where,$$ 
- `n` is the **number of elements** in the nums array.
- `m` is the **number of bits** required to represent the maximum value in the nums array.
# Code
```
class Solution {
public:
    int sumIndicesWithKSetBits(vector<int>& nums, int k) {
        int res = 0;
        for(int i = 0; i < nums.size(); i++) {
            int c = 0, copy = i;
            while(copy) {
                c += copy & 1;
                copy >>= 1;
            }    
            if(c == k) res += nums[i];
        }
        return res;
    }
};

//please upvote if the solution helped you. :) 
```

![Screenshot 2023-09-17 102646.png](./images/0.png)
