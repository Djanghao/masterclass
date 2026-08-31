# simple JS solution

**Author:** pichaya07
**Votes:** 0
**Link:** [https://leetcode.com/problems/confusing-number/solutions/6079168/](https://leetcode.com/problems/confusing-number/solutions/6079168/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
- rotate number 180 degree --> reverse number
- check is there any `invalid` number; if yes --> return false
- if number is valid, flip it (1 -> 1; 6 -> 9)
- if original number !== flip number; return true
# Complexity
- Time complexity: O(Log(N))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function confusingNumber(n: number): boolean {
  const validNumberSet = [0, 1, 6, 8, 9];
  const invalidNumberSet = [2, 3, 4, 5, 7];

  const match = {
    0: 0,
    1: 1,
    6: 9,
    8: 8,
    9: 6,
  }
  const numArray = n.toString().split('').reverse()
  
  let flip = ''
  for(let num of numArray) {
    if(invalidNumberSet.includes(parseInt(num))) return false
    
    flip += match[num]
  }

  // flip
  return n != parseInt(flip)
};
```