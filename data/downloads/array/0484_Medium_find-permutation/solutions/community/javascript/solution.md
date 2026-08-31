# JavaScript Two Solutions w/ comments

**Author:** Aliceeeee0825
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-permutation/solutions/2035298/](https://leetcode.com/problems/find-permutation/solutions/2035298/)

---

Stack: 

```
var findPermutation = function(s) {
    let result = []
    let stack = []
    
    for (let i = 1; i < s.length+1; i++){
        // push the curr num to stack
        stack.push(i)
        // if curr char is I, pop the number from stack and add it to result
        if (s[i-1] === 'I'){
            while (stack.length){
                result.push(stack.pop())
            }
        }
    }
    // push the last num to stack since the loop will only goes to s.length
    stack.push(s.length+1)
    // add the remaining nums to result
    while (stack.length) result.push(stack.pop())
    return result
  
}
```

Reverse: 
```
var findPermutation = function(s) {
    let res = []
    // generate the list of number with increasing order
    for (let i = 0; i < s.length + 1; i++){
        res[i] = i+1
    }
    
    let i = 1
    while (i < s.length + 1){
        // find the interval that needed to be reverse aka while it is D
        let j = i
        while (i < s.length + 1 && s[i-1] === "D"){
            i ++
        }
        // reverse the d interval
        reverse(res, j- 1, i)
        i++
    }
    return res
};

function reverse(target, start, end){
    for (let i = 0; i < (end - start) / 2; i++){
        const temp = target[i + start]
        target[i + start] = target[end - i - 1]
        target[end - i - 1] = temp
    }
}
```

