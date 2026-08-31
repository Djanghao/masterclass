# Typescript solution - O(n) time, O(1) space + Explanation

**Author:** gilish
**Votes:** 90
**Link:** [https://leetcode.com/problems/majority-element/solutions/2686685/](https://leetcode.com/problems/majority-element/solutions/2686685/)

---


There are actually a lot of possible solutions. Such as:
1. sorting the array and picking the `n/2`th element. O(nlogn) time
2. going over the array once and store in a hashmap the occurence count of each element. Then return the element from the hashmap that had the most occurences. That would take O(n) space and O(n) time.
3. brute force which is O(n^2)


However, using the [Boyer-Moore majority vote algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm) is the most optimal solution.

```
function majorityElement(nums: number[]): number {
    let candidate;
    let count = 0;
    
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        
        count += (num === candidate) ? 1 : -1
    }
    
    return candidate;
};
```