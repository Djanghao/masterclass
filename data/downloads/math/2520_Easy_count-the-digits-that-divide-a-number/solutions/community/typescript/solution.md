# Modulo Approach

**Author:** astiksarathe
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/2978824/](https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/2978824/)

---


# Complexity
- Time complexity: N ( here N is the length of num)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1) constant
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function countDigits(num: number): number {
    let count = 0 ;
    const n = num;
    
    while(num > 1){
        if(n % (num % 10) === 0) count++
        num = Math.floor(num / 10)
    }
    
    if(num === 1) count++
    
    return count
};
```