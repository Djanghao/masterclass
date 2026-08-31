# simple solution

**Author:** ITPavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/4955460/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/4955460/)

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
function countPrefixSuffixPairs(words: string[]): number {
let ans:string[]=[];
for (let i=0;i<words.length-1;i++){
    for (let j=i+1;j<words.length;j++){
        if (words[j].startsWith(words[i]) && words[j].endsWith(words[i]) ) ans.push(words[j]);
    }
}
return ans.length;     
};
```