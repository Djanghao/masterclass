# TS

**Author:** dhevine100
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/solutions/5679636/](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/solutions/5679636/)

---


# Approach
Run Two pointer on all possible rows and columns
Increase count if grid or cols is not palindromic 
Return the lowest value 
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(m * n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function minFlips(grid: number[][]): number {
    
    const colCheck = (value:number[][]):number => {
    let count = 0;
        for(let  i  = 0; i < value[0].length;i++){
         let left = 0, right = value.length - 1
            while(left < right) {
                if(value[left][i] !== value[right][i]) {
                    count++
                }
                left++;
                right--    
            
            }
        }      

        return count
    }

    const rowCheck = (value:number[][]):number => {
        let count = 0
        for(let  i = 0; i < value.length;i++){
            let left = 0, right = value[0].length - 1;
            while(left < right) {
                if(value[i][left] !== value[i][right]){
                    count++;
                } 
                left++
                right--
            }
        }

        return count
    }

    return Math.min(rowCheck(grid), colCheck(grid))
};

```