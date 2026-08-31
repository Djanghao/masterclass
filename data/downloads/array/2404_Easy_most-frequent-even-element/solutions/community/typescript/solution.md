# faster than 100.00% of TypeScript online submissions using hashmap

**Author:** ladav
**Votes:** 3
**Link:** [https://leetcode.com/problems/most-frequent-even-element/solutions/2639769/](https://leetcode.com/problems/most-frequent-even-element/solutions/2639769/)

---

```
function mostFrequentEven(nums: number[]): number {
    if (nums.length === 0) return -1
    
    // in state we store the frequency of each number
    const state = new Map()
    let maxfrequency = 0
    let mostFrequentNum = -1
    
    for (const num of nums) {
        // skip odd number
        if (num % 2 !== 0) continue
        
        // extract current num's frequency (0 by default)
        const frequency = (state.get(num) ?? 0) + 1
        // set incremented frequency in state
        state.set(num, frequency)
        // If there is a tie, return the smallest one
        if (frequency === maxfrequency) {
            if (num < mostFrequentNum) {
                mostFrequentNum = num
            }
        }
        // if current num's frequncy is greater then replace the mostFrequentNum by num
        if (frequency > maxfrequency) {
            maxfrequency = frequency
            mostFrequentNum = num
        }
    }
    
    return mostFrequentNum
};

*Runtime: 84 ms*
