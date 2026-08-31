# O(n) with 100% beats

**Author:** Irshadpp
**Votes:** 2
**Link:** [https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/5577282/](https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/5577282/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function canBeEqual(target: number[], arr: number[]): boolean {
    if(target.length !== arr.length) return false
    let map = new Array(1001).fill(0);
    for(let i=0; i<target.length; i++){
        map[target[i]]++;
        map[arr[i]]--;
    }
    return map.every(num => num === 0);
};
```