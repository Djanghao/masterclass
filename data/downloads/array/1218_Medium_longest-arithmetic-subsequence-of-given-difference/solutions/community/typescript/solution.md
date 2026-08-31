# TypeScript Solution

**Author:** jswang00037
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3761567/](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3761567/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Check current number `arr[i]` in `arr` has difference `difference` between numbers of `arr[:i]` with a map. If so, means we have a subsequence which length should be increased by `1`. 

# Approach
<!-- Describe your approach to solving the problem. -->
1. Construct a map `map` to log the `length` of subsequence which end at the number `num`. 
2. Loop the `arr` with element `num`, the previous number `prevNum = num - difference` already in the `map`, set the map by `map.set(num, length)` where `length = map.get(prevNum) + 1`. 
3. Update the result `res` if there is larger `length`. 
4. Return `res`. 

# Complexity
Let $$n$$ be the length of `arr`. 
- Time complexity: $$O(n)$$
    - Loop `arr`: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
    - `map`: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function longestSubsequence(arr: number[], difference: number): number {
    let res = 1;
    const map = new Map<number, number>(); // {number: length}

    for(const num of arr){
        const prevNum = num - difference;
        if(map.has(prevNum)){
            const length = map.get(prevNum) + 1;
            map.set(num, length);
            res = Math.max(length, res);
        }else{
            map.set(num, 1);
        }
    }

    return res;
};
```