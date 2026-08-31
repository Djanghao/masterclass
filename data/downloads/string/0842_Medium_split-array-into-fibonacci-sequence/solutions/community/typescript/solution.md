# Straight forward Typescript

**Author:** ishiimatthew
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-into-fibonacci-sequence/solutions/4087271/](https://leetcode.com/problems/split-array-into-fibonacci-sequence/solutions/4087271/)

---



# Code
```
function splitIntoFibonacci(num: string): number[] {
    let res = [];
    
    const helper = (arr, idx) => {
        if(idx == num.length) {
            if(arr.length >= 3) {
                res = arr;
            } 
            return;
        }
        
        if(num[idx] == "0") {
            if(arr.length < 2) {
                helper([...arr, 0], idx + 1);    
            } else {
                 if(0 == arr[arr.length - 1] + arr[arr.length - 2]) {
                        helper([...arr, 0], idx + 1);    
                    }
            }
        } else {
            for(let i = idx; i < num.length; i++) {
                let cur= parseInt(num.slice(idx, i + 1))
                if(cur > 2**31) {
                    return;
                }

                if(arr.length < 2) {
                    helper([...arr, cur], i + 1);    
                } else {
                    if(cur == arr[arr.length - 1] + arr[arr.length - 2]) {
                        helper([...arr, cur], i + 1);    
                    }
                } 
            }
        }
    }
    helper([], 0);
    return res;
};
```