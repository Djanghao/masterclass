# runtime 100% memory 100%

**Author:** AnnanaP
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/solutions/4238083/](https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/solutions/4238083/)

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
function countLetters(s: string): number {
    let res = 0;
    let c = 1;

    for(let i=0; i<s.length-1; i++){
        if(s[i]===s[i+1]){
            c++;
        }else{
            res += (1+c)*c/2;
            c=1;
        }
    }
    res += (1+c) * c/2;
    return res;
};
```