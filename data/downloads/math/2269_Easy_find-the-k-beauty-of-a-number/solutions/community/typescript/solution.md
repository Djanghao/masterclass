# Two Methods || JavaScript Solution

**Author:** astiksarathe
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/3059846/](https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/3059846/)

---


# Approach 1
```
/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let count = 0;
    // create a variable to store the substring
    let substring = num % (10 ** k);
    let current = num;
    // iterate through the number
    for (let i = 0; i <= num.toString().length - k; i++) {
        // check if the substring is a divisor
        if (num % substring === 0) {
            count++;
        }
        // remove the last k digits and add the next
        current = Math.floor(current / 10);
        substring = (current % (10 ** k))
    }
    return count;
};

```
# Approach 2
```
/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    const numStr = num.toString();
    const N = numStr.length
    let str = '', count = 0

    for(let i=0; i<N; i++){
        str = str + numStr[i]

        if(i >= k-1){
            if(num % parseInt(str) === 0) count++;
            str = str.slice(1)
        }
        
    }
    return count
};
```

