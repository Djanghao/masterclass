# TypeScript, Runtime 42 ms Beats 100.00%, Memory 50.24 MB Beats 85.25%

**Author:** r9n
**Votes:** 9
**Link:** [https://leetcode.com/problems/number-complement/solutions/5671414/](https://leetcode.com/problems/number-complement/solutions/5671414/)

---

# Intuition
The intuition behind this solution is to directly flip all the bits of the binary representation of num using a mask. The mask is created by setting all bits to 1 up to the highest bit of num. XORing num with this mask effectively inverts all the bits, giving the complement. This approach minimizes operations, ensuring both time and space efficiency.

# Approach
Overall, this approach provides a quick and memory-efficient way to find the binary complement, making it ideal for performance-critical applications.

# Complexity
- Time complexity:
The time complexity remains O(1), but with fewer operations for mask generation, this method should offer better runtime performance.

- Space complexity:
The space complexity O(1) is constant because the amount of memory required by the algorithm does not depend on the size of the input (num). The memory usage is fixed and does not grow with the input.

# Code
```typescript []
function findComplement(num: number): number {
    // Create the mask by finding the smallest power of 2 greater than num and subtracting 1
    const mask = (1 << (num.toString(2).length)) - 1;

    // XOR num with mask to get the complement
    return num ^ mask;
}

```