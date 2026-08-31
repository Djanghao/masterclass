# JavaScript | Using Set O(n)

**Author:** spenzerino
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/4673435/](https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/4673435/)

---

# Intuition
I thought of using Set to keep track of the size of the collection. As long as the collection size is !== k, we iterate through the popping of nums. There was an issue that arose which is possible duplicate values in nums. That's when Set data structure came to mind. It only keeps track of unique values. So when Set.size === k. It means the value from 1 to k is now met.

# Code
```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let collection = new Set()
    let numOfOps = 0

    while (collection.size !== k) {
        let pop = nums.pop()
        if (pop <= k) {
            collection.add(pop)
        }
        numOfOps += 1
    }

    return numOfOps
};
```