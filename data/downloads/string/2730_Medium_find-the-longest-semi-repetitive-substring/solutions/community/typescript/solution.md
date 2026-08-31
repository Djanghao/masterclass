# Typescript Solution || Beginner Friendly Approach || Simple O(n^3)

**Author:** user1861PP
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/solutions/3622377/](https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/solutions/3622377/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Approach by generating all sub-strings.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N^3)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
function longestSemiRepetitiveSubstring(s: string): number {
    let max: number = 0;
    for(let i = 0;i<s.length; i++){
        for(let j = i; j < s.length;j++ ){
            let m = s.slice(i, j+1)
            let ct =  0;
            for(let k = 0; k< (m.length)-1 ; k++){
               ( Number(m[k]) ^ Number(m[k+1])) === 0 ? ct = ct + 1: ct = ct;
            }
            if(ct<=1 && m.length > max) {
                max= m.length
            }
        }
    }
    return max;
};
```