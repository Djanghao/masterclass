# use freqMap and sorting the freqMap

**Author:** ksio2124
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/5972724/](https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/5972724/)

---



# Code
```typescript []
function maximumLength(nums: number[]): number {
    // nums.sort();
    // create freqMap
    let freqMap = new Map();
    // for each number check to see if we can build the biggest number
    nums.forEach(num => {
        let newFreq =  freqMap.has(num) ? freqMap.get(num) + 1: 1;
        freqMap.set(num, newFreq);
    });
    let oneFreq = freqMap.get(1) ?? 1;
    let res = oneFreq % 2 === 0 ? oneFreq - 1 : oneFreq;
    freqMap.set(1, 0);
    const freqArr = Array.from(freqMap).sort(([a],[b]) => a - b);
    for (let i = 0; i < freqArr.length; i++) {
        let x = freqArr[i][0];
        let count = 0;
        while (true) {
            let xFreq = freqMap.has(x) ? freqMap.get(x) : 0;
            if (xFreq === 0) {
                break;
            } 
            count++;
            if (xFreq === 1) {
                break;
            } 
            x = Math.pow(x, 2);
        }
        res = Math.max(res, (count * 2) - 1);
    }
    return res;
}
```