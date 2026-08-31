# Concise solution || Beginner || Easy to understand

**Author:** Somyaranjan99
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/solutions/4540758/](https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/solutions/4540758/)

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
/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let count=0
let prefix=0
for(let st of s){
  if(st==='b'){
    prefix++
  }else if(st==='a' && prefix > 0){
    prefix--
    count++
  }
  
}
return count
};
```