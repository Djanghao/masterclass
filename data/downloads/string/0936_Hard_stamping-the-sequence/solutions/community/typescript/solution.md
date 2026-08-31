# TS solution

**Author:** GennadySX
**Votes:** 0
**Link:** [https://leetcode.com/problems/stamping-the-sequence/solutions/4639662/](https://leetcode.com/problems/stamping-the-sequence/solutions/4639662/)

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
function movesToStamp(stamp: string, target: string): number[] {
    let ans: number[] = [];
    let foundMatch = true;
    while (foundMatch) {
        foundMatch = false;
        for (let i = 0; i < target.length - stamp.length + 1; i++) {
            let str = target.substr(i, stamp.length);
            if (allWild(str)) continue;
            if (match(stamp, str)) {
                foundMatch = true;
                ans.push(i);
                target = target.substr(0, i) + '?'.repeat(stamp.length) + target.substr(i + stamp.length);
            }
        }
    }
    if (!allWild(target)) ans = [];
    if (ans.length > 10 * target.length) ans = [];
    ans.reverse();
    return ans;
}

function allWild(s: string): boolean {
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '?') return false;
    }
    return true;
}

function match(a: string, b: string): boolean {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i] && a[i] !== '?' && b[i] !== '?') return false;
    }
    return true;
}
```