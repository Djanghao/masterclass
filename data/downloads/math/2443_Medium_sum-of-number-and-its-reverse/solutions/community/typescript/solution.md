# Sum reverse number for is paragram

**Author:** rhuanco
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/5883714/](https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/5883714/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function reverse(n) {
    let reversed = 0;
    while (n !== 0) {
        reversed = reversed * 10 + (n % 10);
        n = (n / 10) | 0;
    }
    return reversed;
}

function sumOfNumberAndReverse(num: number): boolean {
  for(let x = 0; x <= num; x++) {
    let reverseNum = reverse(x);
    if(x + reverseNum === num) {
        return true;
    }
  }  

  return false; 
};
```