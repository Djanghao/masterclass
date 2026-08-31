# Simplest solution, using XOR properties. (Explained)

**Author:** matiasveitch
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/5085779/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/5085779/)

---

# Approach
<!-- Describe your first thoughts on how to solve this problem. -->
XOR has many interesting properties, it doesn't care about the order of it applyment, n xor n = 0 and 0 xor n = n.

Knowing this, the chained xors of numbers equals to k is the same as chaining all the numbers (included k) equals to 0 (because ```k^k==0```)

So we have to arrive to ```n1^n2^...nn^k===0``` for fulfilling the condition.

We do the chained xor and the bits that are not 0 are the ones that we have to to flip for arriving to wanted result. For that we just use the function ```countOnes```. This is because changing any value of a XOR will change its result to the opossite. 



# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minOperations(nums: number[], k: number): number {
    nums.forEach((num) => {
        k ^= num
    })
    return countOnes(k)

};
function countOnes(n: number) {
    let result = 0
    while (n > 0) {
        result += n & 1
        n = n >> 1
    }
    return result
}



```