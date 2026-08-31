# JS solution | O(nLogn) time complexity | faster than 100% | less memory than 100%

**Author:** vishal-sood
**Votes:** 4
**Link:** [https://leetcode.com/problems/odd-even-jump/solutions/573504/](https://leetcode.com/problems/odd-even-jump/solutions/573504/)

---

```
/**
 * @param {number[]} A
 * @return {number}
 */
var oddEvenJumps = function(A) {
    const sortedIndices = (new Array(A.length)).fill().map((val, index) => index)
        .sort((a, b) => (A[a] - A[b]) || (a - b));
    // oddJumps will store the jump destination for an odd jump from that index
    const oddJumps = (new Array(A.length)).fill(-1);
    let stack = [];
    for (let index of sortedIndices) {
        while (stack.length && index > stack[stack.length - 1]) {
            oddJumps[stack.pop()] = index;
        }
        stack.push(index);
    }
    
    const reverseSortedIndices = (new Array(A.length)).fill().map((val, index) => index)
        .sort((a, b) => (A[b] - A[a]) || (a - b));
    // evenJumps will store the jump destination for an even jump from that index
    const evenJumps = (new Array(A.length)).fill(-1);
    stack = [];
    for (let index of reverseSortedIndices) {
        while (stack.length && index > stack[stack.length - 1]) {
            evenJumps[stack.pop()] = index;
        }
        stack.push(index);
    }
    
    let oddJumpLeadsToEnd = (new Array(A.length)).fill(false);
    oddJumpLeadsToEnd[A.length - 1] = true;
    let evenJumpLeadsToEnd = (new Array(A.length)).fill(false);
    evenJumpLeadsToEnd[A.length - 1] = true;
    
    let goodIndices = 1; // last index will always be good;
    // check for all other indices in reverse order
    for(let i = A.length - 2; i >= 0; i--) { 
        if (evenJumps[i] > 0 && oddJumpLeadsToEnd[evenJumps[i]] === true) {
            evenJumpLeadsToEnd[i] = true;
        }
        if (oddJumps[i] > 0 && evenJumpLeadsToEnd[oddJumps[i]] === true) {
            oddJumpLeadsToEnd[i] = true;
            // we only consider an index a good index if oddJumps from that index lead
            // to the end, since first jump can never be an even jump
            goodIndices++;
        }
    }
        
    return goodIndices;
};
```