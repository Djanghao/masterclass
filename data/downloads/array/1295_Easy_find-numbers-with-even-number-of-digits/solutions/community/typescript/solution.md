# Easy solution using js inbuild methods

**Author:** shamnad_skr
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/5887876/](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/5887876/)

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
function findNumbers(nums: number[]): number {

    let even :number = 0;

    for(const no of nums){
        const str = no.toString().split('')
        if(str.length %2 == 0){
            even++;
        }
    }

    return even;
    
};
```