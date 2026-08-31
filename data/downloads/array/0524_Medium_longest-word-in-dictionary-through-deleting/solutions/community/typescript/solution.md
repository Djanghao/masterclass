# Beats 100% || 2 pointer & sorting || my solution in TS

**Author:** abhinavleadsquared
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/5933153/](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/5933153/)

---

# Intuition
![image.png](./images/0.png)
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
const isSubsequence = (s:string,str:string) =>{
    let s1=0;
    let s2=0;
    if(s.length<str.length) return false;
    while(s1<s.length && s2<str.length){
        if(s[s1] === str[s2])
            s2++;
            s1++;
    }
    return s2 == str.length;
}
function findLongestWord(s: string, dictionary: string[]): string {
    let result = "";
    dictionary.sort((a, b) => a.length === b.length ? a.localeCompare(b) : b.length - a.length
);
    for(let str of dictionary){
        if(isSubsequence(s,str)){
            return str;
        }
    }
    return result;
};
```
![image.png](./images/1.png)
