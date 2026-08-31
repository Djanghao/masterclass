# Easy 📶 solution with each step by step procedure with 🗿 O(n)

**Author:** shamnad_skr
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-balanced-string/solutions/6083981/](https://leetcode.com/problems/check-balanced-string/solutions/6083981/)

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
function isBalanced(num: string): boolean {

    //converting string to Array
    const numArray : number[] = num.split("").map( no => Number(no) )
    const size : number = numArray.length;
    let evenSum : number = 0;
    let oddSum : number = 0;
    
    for(let i=0; i<size; i++){
        
        if( i%2 === 1 ){
            oddSum += numArray[i];
        }else{
            evenSum += numArray[i];
        }
    }

    return oddSum === evenSum;
    
};
```