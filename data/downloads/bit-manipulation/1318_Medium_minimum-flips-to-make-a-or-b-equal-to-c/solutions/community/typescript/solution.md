# 2 simple solutions with bit manipulation and strings

**Author:** YumiChen
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/3609691/](https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/3609691/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Check if number `a` OR `b` needs flipping to be `c` bit by bit
## 1. Bitwise solution

### Approach
<!-- Describe your approach to solving the problem. -->
Have a number with only one bit 1, and move the bit to see if flipping is required by checking its AND result with all the numbers
### Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

### Code
```
function minFlips(a: number, b: number, c: number): number {
    const limit = Math.max(a, b, c);
    let check = 1;
    let result = 0;
    while(check <= limit){
        if(check & c){
            if(!(check & a) && !(check & b)){
                result++;
            }
        }else{
            if(check & a){
                result++;
            }
            if(check & b){
                result++;
            }
        }
        check *= 2;
    }
    return result;
};
```
## 2. toString solution
### Approach
<!-- Describe your approach to solving the problem. -->
Transform numbers to strings and check if flipping is required through iteration

### Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

### Code
```
function minFlips(a: number, b: number, c: number): number {
    const aStr = a.toString(2).split('').reverse();
    const bStr = b.toString(2).split('').reverse();
    const target = c.toString(2).split('').reverse();

    let result = 0;
    const maxLen = Math.max(aStr.length, bStr.length, target.length);
    for(let i = 0;i < maxLen; i++){
        if(!target[i] || target[i] === '0'){
            if(aStr[i] === '1'){
                result++;
            }
            if(bStr[i] === '1'){
                result++;
            }
        }else{
            if((!aStr[i] || aStr[i] === '0') && (!bStr[i] || bStr[i] === '0')){
                result++;
            }
        }
    }
    return result;
};
```