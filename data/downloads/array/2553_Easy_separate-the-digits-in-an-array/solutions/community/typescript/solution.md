# Simple and easy solution in Typescript

**Author:** aswanthpr515
**Votes:** 0
**Link:** [https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/6137949/](https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/6137949/)

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
function separateDigits(nums: number[]): number[] {
    
   let arr:number[] = []
    let newArr:string = nums.join('')
    
    for(let i =0 ;i<newArr.length;i++){
    arr.push(Number(newArr[i]))
    }
    return arr as number []
};
```