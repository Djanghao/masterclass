# [Javascript] Count good pairs and subtract from total pairs

**Author:** djslim
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-number-of-bad-pairs/solutions/2417247/](https://leetcode.com/problems/count-number-of-bad-pairs/solutions/2417247/)

---

General idea:
1. Count total pairs by summing up indexes
2. Count good pairs by counting all pairs with the same difference
3. Return the difference
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
    let totalPairs = 0
    let goodPairs = 0
    let differencesFreqsMap = {}
    
    for(let i = 0; i < nums.length; i++) {
        const diff = nums[i] - i
        
        totalPairs+=i
        
        if(diff in differencesFreqsMap) {
            goodPairs+= differencesFreqsMap[diff]
            differencesFreqsMap[diff]++
            continue
        }
        
        differencesFreqsMap[diff] = 1
    }
    
    return totalPairs - goodPairs
};
```