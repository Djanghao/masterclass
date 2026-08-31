# simple solution

**Author:** ITPavel
**Votes:** 1
**Link:** [https://leetcode.com/problems/replace-all-digits-with-characters/solutions/4731243/](https://leetcode.com/problems/replace-all-digits-with-characters/solutions/4731243/)

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
function replaceDigits(s: string): string {
let char:string, alpha:string='abcdefghijklmnopqrstuvwxyz', str=s.split('');
for (let i:number=1;i<str.length;i+=2) {
char=alpha[alpha.indexOf(str[i-1])+(+str[i])];
str.splice(i,1,char); 
}
return str.join('');  
};
```