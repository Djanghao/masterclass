# Got tired and used javascript functions

**Author:** vmss
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-repeating-substring/solutions/5346807/](https://leetcode.com/problems/maximum-repeating-substring/solutions/5346807/)

---


- you can use algos for matching like KMP and rabin karp instead of using `.includes` like I did here in the solution. I got tired, hence I used it. (refer to abdul bari youtube playlist)
# Code
```
function maxRepeating(sequence: string, word: string): number {
    let i = 0;
    let result = 0;

    for(let i = 0; i < Math.floor(sequence.length/word.length); i++) {
        let str = '';
        for(let j = 0; j <= i; j++) {
            str += word;
        }
        if(sequence.includes(str)) {
            console.log('result and i : ', result, i);
            result = Math.max(result, i+1);
            console.log('result and i after setting : ', result, i);
            continue;
        }

        break;
    }

    return result;
};
```