# Typescript solution O(n) with detailed explanation

**Author:** georgiiperepechko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/1864489/](https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/1864489/)

---

Based on this beautiful Python solution:
https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/discuss/1864254/Python-Solution-for-beginners-oror-O(n) (and a bit more generalized)

Basic thing to understand is:
Whenever we see a second part of pattern (`second`), it means that it can complete all the `first`s we've seen before (`seenFirsts`).

Example:
let's check "ab" pattern against a string "bacaba":
b) we first encounter a "b" (`second`), but have seen no "a" (`first`) before that, so no patterns can be completed, so we increment `seenSeconds` (it is now 1)
a) we see an "a" (`first`) and increment `seenFirsts` (it is now 1)
c) we see a "c", since the character not in a pattern, we can just skip it
a) we see an "a" (`first`) and increment `seenFirsts` (it is now 2)
b) we see a "b" (`second`) and can complete patterns with all "a"s we saw before (`seenFirsts`), so `totalPatterns` becomes 2; we also increment `seenSeconds` (it is now 2)
a) we see an "a" (`first`) and increment `seenFirsts` (it is now 3)

After that we've got an option to add another "a" (`first`) to the start or "b" (`second`) to the end of our pattern (other placements would be less optimal). either way by adding this letter we will be able to complete all the patterns with another letter (adding `first` would complete `seenSeconds` patterns, adding `second` would complete all `seenFirsts` patterns). Since `seenFirsts` is bigger than `seenSeconds`, we should add `second` to the end of the string.

In this case result would be `totalPatterns` (2) + `seenFirsts` (3) = 5.

```
function maximumSubsequenceCount(text: string, pattern: string): number {
    const first = pattern[0];
    const second = pattern[1];

    let seenFirsts = 0;
    let seenSeconds = 0;
    let totalPatterns = 0;
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char !== first && char !== second) continue;

		// why do we do checks in that order: first first increasing totalPatterns by seenFirsts?
		// well, if first === second, we should complete existing (seenFirst) patterns before incrementing their count
		// in simplier turns: we do not want to say that single "a" matches "aa" pattern

        if (char === second) {
            seenSeconds++;
            totalPatterns += seenFirsts;
        }
        
        if (char === first) {
            seenFirsts++;
        }
    }
    
    return totalPatterns + Math.max(seenFirsts, seenSeconds);
};
```