# solution using push array method

**Author:** arti4
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-peaks/solutions/5608081/](https://leetcode.com/problems/find-the-peaks/solutions/5608081/)

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
function findPeaks(mountain: number[]): number[] {
    const arr:number[]=[];
    for(let i=1;i<mountain.length-1;i++){
        if(mountain[i]>mountain[i-1] && mountain[i]>mountain[i+1])
          arr.push(i);
    }
    return arr;
};
```