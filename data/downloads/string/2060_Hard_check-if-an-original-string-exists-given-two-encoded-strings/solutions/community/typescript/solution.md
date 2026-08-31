# [Typescript][Javascript] Backtracking + Memoizing Solution (100% FAST)

**Author:** lolimdumbwataboutu
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/solutions/4521094/](https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/solutions/4521094/)

---

# Intuition
Based around the concept that you use a single `diff` variable to track the gap between both strings.

Memoizing is necessary to pass this question! Its hard!!

Since there's not enough stats on it, the code takes `600ms` to run (better than any other TS/JS solution so far)

# Approach
I can explain more in depth if requested.

# Complexity
- Time complexity: Should be O(2^N) since each iteration we split into two decisions, combine number or add number

- Space complexity: Should also be O(2^N) for the stack required

# Code
```
function possiblyEquals(s1: string, s2: string): boolean {
    const cache = new Set();
    return backtrack(0,0,0);

    function backtrack(i,j,diff):boolean {
        if (i >= s1.length && j >= s2.length) {
            return diff === 0;
        }
        // memoizing is possible since we can arrive at the same value twice. e.g. 111 = 11 + 1 or 1+11
        if (cache.has(i+','+j+','+diff)) return false;
        
        if (isNum(s1[i])) {
            let x = i, buffer = '';
            while (isNum(s1[x])) {
                buffer += s1[x++];
                if (backtrack(x,j,diff + parseInt(buffer))) return true;
            }
        } else if (isNum(s2[j])) {
            let y = j, buffer = '';
            while (isNum(s2[y])) {
                buffer += s2[y++];
                if (backtrack(i,y,diff - parseInt(buffer))) return true;
            }
        // at this point both i and j are strings or end of string
        } else if (diff > 0) {
            if (j < s2.length) return backtrack(i,j+1,diff-1);
        } else if (diff < 0) {
            if (i < s1.length) return backtrack(i+1,j,diff+1);
        } else if (diff === 0) {
            if (s1[i] === s2[j]) return backtrack(i+1,j+1,diff);
        }

        // it didn't recurse to any of the success cases, must be invalid
        cache.add(i+','+j+','+diff);
        return false;
    }

    function isNum(s) {
        return !isNaN(parseInt(s));
    }
};

```