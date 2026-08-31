# [Time & Memory 100%] Count the number of palindromes from 0 to i

**Author:** jhw123
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iv/solutions/1668373/](https://leetcode.com/problems/palindrome-partitioning-iv/solutions/1668373/)

---

#### Finding palindromes ####

The idea is to iterate through each position in the string and to expand in both directions from the position.
For example, for a string `"acabb"`, we iterate from index 0 to 4 and expand from each index.
At index 0, we find `"a"` (radius = 0).
At index 1, we find `"aca"` (radius = 1).
At index 2,3 and 4, we find none.
Palindromes above are **odd-length**. We should also check for **even-length** palindromes.
At index 0.5, 1.5 and 2.5, we find none.
At index 3.5, we find `"bb"` (radius = 1).

#### Dynamic programming ####

We keep two `dp`s of size `n`. `dp1[i]` represents if the substring from `0` to `i` is a single palindrome, and `dp2[i]` represents if the substring from `0` to `i` is a combination of two palindromes. We can use these two `dp`s to get the result for next indexes.
For example, let that we found a palindrome that spans from `i-r` to `i+r` (consider it is odd length, is centered at `i` and has radius `r`).
1) `dp1[i+j]` is `true` if  `i-r` is 0 (e.g. consider `i` = 1, `r` = 1 for `"aca"`).
2) `dp2[i+j]` is `true` if `dp1[i-r-1]` is `true` (e.g. consider `i` = 3, `r`=0 for `"acab"`).
3) A string can be partitioned into three palindromes if `dp2[i-r-1]` is `true` and `i+r` is `s.length-1` (e.g. consider `i`=4, `r`=0 for `"acabb"`).

We explore the whole string and check if the third case ever occurs. If it never occurs and we finish checking, there is no way to partition a given string into three palindromes.

#### Complexity ####

Time: `O(n^2)`
Space: `O(n)`

```typescript
function checkPartitioning(s: string): boolean {
    const dp1 = Array(s.length).fill(false)
    const dp2 = Array(s.length).fill(false)
    
	// i is the center of a palindrome and r is the radius (half length) of the palindrome.
    for (let i=0; i<s.length; i+=1) {
        // for odd length
        let r=0
        dp1[i+r] ||= i-r === 0
        dp2[i+r] ||= dp1[i-r-1] ?? false
        while (r < i && i+r+1 < s.length && s[i-r-1] === s[i+r+1]) {
            r += 1
            dp1[i+r] ||= i-r === 0
            dp2[i+r] ||= dp1[i-r-1] ?? false
        }
        if(i+r=== s.length-1 && dp2[i-r-1]) {
            return true
        }
        
        // for even length
        r= 0
        while (r <= i && i+r+1 < s.length && s[i-r] === s[i+r+1]) {
            r += 1
            dp1[i+r] ||= i-r === -1
            dp2[i+r] ||= dp1[i-r] ?? false
        }
        if(0 < r && i+r === s.length-1 && dp2[i-r]) {
            return true
        }
    }

    return false
};
```