# Bit shift

**Author:** matiasveitch
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-xor/solutions/5024240/](https://leetcode.com/problems/minimize-xor/solutions/5024240/)

---

# Approach
<!-- Describe your first thoughts on how to solve this problem. -->
You need to know how many ones has the num2, with that you have to use them wisely (Spent them from left to right) for the XOR, you use a one when there is a one in num1 to get a 0 so you get the minimal.

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minimizeXor(num1: number, num2: number): number {
    const num2Ones = countOnesPositive(num2)
    
    return getMinimalXor(num1, num2Ones)
};

function getMinimalXor(num: number, ones: number) {
    //let index = Math.floor(Math.log2(num))
    let index = Math.max(Math.floor(Math.log2(num)),ones-1)
    let ans = 0
    let one = 0
    while (index >= ones && ones > 0) {
        one = (num & (1 << index))
        if (one) {
            ones--
            ans += 1 << index
        }
        index--
    }
    while(index>=0 && ones>0){
        ans+= 1<<index
        index--
        ones--
    }
    return ans
}

function countOnesPositive(n: number) {
    let count = 0
    while (n > 0) {
        count += n & 1
        n = n >> 1
    }
    return count
}

```