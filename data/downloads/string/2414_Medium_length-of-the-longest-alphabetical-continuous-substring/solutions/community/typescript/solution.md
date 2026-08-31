# length-of-the-longest-alphabetical-continuous-substring - TypeScript Solution

**Author:** himashusharma
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/5831074/](https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/5831074/)

---


# Code
```typescript []
function longestContinuousSubstring(s: string): number {
    let longest: number = 1;
    let count = 1;
    // O(n)
    // i is pointerOne, i-1 is pointerTwo
    for(let i = 1; i < s.length; i++){
        // check if incrementing character using ascii code
        if((s[i].charCodeAt(0) - s[i - 1].charCodeAt(0)) == 1){
            count++
        }else{
			// if not reset count
            count = 1;
        }
        longest = Math.max(longest, count);  
    } 
    return longest;
};
```