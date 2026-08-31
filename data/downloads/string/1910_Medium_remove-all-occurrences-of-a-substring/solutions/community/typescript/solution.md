# Typescript solution

**Author:** sreerajsr03
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/5319673/](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/5319673/)

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
function removeOccurrences(s: string, part: string): string {
    
    let len =part.length;
    let str =s.split('')
    for(let i=0; i<str.length; i++){
        let sliced = str.slice(i,i+len)
        if(sliced.join('')==part){
            str.splice(i,len)
            i-=len;
        }
    }
    return str.join('')
};
```