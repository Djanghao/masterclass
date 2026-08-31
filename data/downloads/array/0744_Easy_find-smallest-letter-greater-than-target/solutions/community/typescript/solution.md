# Simple & Easy Approach

**Author:** SomnathKar000
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/5084154/](https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/5084154/)

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
function nextGreatestLetter(letters: string[], target: string): string {
    let l=0,r=letters.length-1;
    while(l<=r){
        let mid=Math.trunc((l+r)/2);
        if(letters[mid].charCodeAt(0)<=target.charCodeAt(0)) l=mid+1
        else r=mid-1
    }
    return letters[l]?? letters[0]
};
```