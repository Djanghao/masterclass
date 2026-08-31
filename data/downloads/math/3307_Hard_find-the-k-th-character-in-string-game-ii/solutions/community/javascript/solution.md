# Fatest Solution - Execution time 58ms

**Author:** Nabeel7801
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/solutions/5846460/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/solutions/5846460/)

---


# Approach
Simple Approach. First we convert the Big integer to base 2 string. And then we iterate over every bit and apply the operation based on their indexes. Thanks to javascript that we solve this without any bit manipulation

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

![image.png](./images/0.png)

# Code
```javascript []
/**
 * @param {number} k
 * @param {number[]} operations
 * @return {character}
 */
var kthCharacter = function(k, operations) {
    k--;
    const str = k.toString(2);
    const n = str.length;

    let count = 0;
    for (let i = 0; i < n; i++) {
        if (str[i] == '1') {
            if (operations[n-i-1] === 1) {
                count++;
            }
        }
    }
    
    return String.fromCharCode(97 + (count % 26));
};
```

![578e195e-9506-492e-9484-cec1c33d7110_1722996946.6640332.jpeg](./images/1.jpeg)
