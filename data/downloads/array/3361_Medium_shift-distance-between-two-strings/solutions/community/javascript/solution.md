# Javascript | Detailed and easy explanation | modular code | Cache

**Author:** nishit-mangal
**Votes:** 0
**Link:** [https://leetcode.com/problems/shift-distance-between-two-strings/solutions/6077602/](https://leetcode.com/problems/shift-distance-between-two-strings/solutions/6077602/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- The length of the array is same.  Although it is mentioned that you can pick any index for transformation but we should pick the element at index 'i' only if s[i] doesn't match t[i]. And this can be done linearly for every element. There is no choice; i'th of 's' **MUST** match with i'th of 't'.
# Approach
<!-- Describe your approach to solving the problem. -->
- Want to make dedicated functions to calculate cost for incrementing the character and decrementing the character.
- If we start increasing, we need to keep on increaing. If we start decreasing we need to keep on decreasing.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N) -> there is O(52) for each element of s which doesn't scale with ohter inputs.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n) 
- O(52) for all the alphabets. Rest is runtime calculations.
- O(n) for the cache.

# Code
```javascript []
/**
 * @param {string} s
 * @param {string} t
 * @param {number[]} nextCost
 * @param {number[]} previousCost
 * @return {number}
 */
var shiftDistance = function(s, t, nextCost, previousCost) {
    let alphabets = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
        'u', 'v', 'w', 'x', 'y', 'z'
    ];
    let response = 0, cache = {};
    
    for(let i=0; i<s.length; i++){
        if(s[i]===t[i])
            continue;
        let key = `${s[i]},${t[i]}`;
        if(cache[key]!==undefined){
            response += cache[key];
            continue;
        }
        let tempAns = Math.min(calculateNextCost(s[i], t[i]), calculatePrevCost(s[i], t[i]));
        cache[key] = tempAns;
        response+=tempAns;
    }

    return response;
    
    function calculateNextCost(from, to){
        let fromIndex = alphabets.indexOf(from);
        let toIndex = alphabets.indexOf(to);
        let ans = 0;
        while(fromIndex!==toIndex){
            ans+= nextCost[fromIndex];
            fromIndex++;
            if(fromIndex===26)
                fromIndex = 0;
        }
        return ans;
    }
    function calculatePrevCost(from, to){
        let fromIndex = alphabets.indexOf(from);
        let toIndex = alphabets.indexOf(to);
        let ans = 0;
        while(fromIndex!==toIndex){
            ans+= previousCost[fromIndex];
            fromIndex--;
            if(fromIndex===-1)
                fromIndex = 25;
        }
        return ans;
    }
};
```