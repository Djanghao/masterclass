# Mono Stack w/explanation of the intuition

**Author:** dp_god
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subarray-min-product/solutions/3294129/](https://leetcode.com/problems/maximum-subarray-min-product/solutions/3294129/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
See code comment for details 
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function maxSumMinProduct(nums: number[]): number {
    const prefixSum = Array(nums.length + 1)
    prefixSum[0] = 0
    for (let i = 1; i < prefixSum.length; i++) {
        prefixSum[i] = nums[i - 1] + prefixSum[i - 1]
    }
    const peek = (stack: number[]) => {
        return stack[stack.length - 1]
    }

    nums.push(0)
    let res = 0n
    const stack = [] // non-decreasing stack 
    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[peek(stack)] > nums[i]) {
            const topIndex = stack.pop()
            // The stack stores the index instead of actual number,
            // because we can always use index to access the number

            // Since the stack stores number (that the index refers to) 
            // in a non-decreasing manner, when 'topIndex' is poped out, 
            // all the remaining number in the stack are smaller than
            // nums[topIndex], and the stack's peak is the FIRST
            // number that is smaller than nums[topIndex]
            // from right to left. 

            // Assuming stack's peak is 'j', nums[topIndex] would be 
            // the smallest number among nums[j+1...i-1].
            // To calculate the min-product, use prefixSum array to 
            // get the prefix sum of nums[j+1...i-1]

            // Note that if stack is empty, it means there're no 
            // numbers smaller than nums[topIndex], and so 
            // nums[j+1...i-1] becomes nums[...i-1]

            const subSum = prefixSum[i] - prefixSum[stack.length ? peek(stack) + 1 : 0]
            const bi = BigInt(subSum) * BigInt(nums[topIndex])
            if (bi > res) {
                res = bi
            }
        }
        stack.push(i)
    }
    return Number(res % (1000000007n))
};

```