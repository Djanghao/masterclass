# TS Solution

**Author:** GennadySX
**Votes:** 0
**Link:** [https://leetcode.com/problems/ambiguous-coordinates/solutions/4623557/](https://leetcode.com/problems/ambiguous-coordinates/solutions/4623557/)

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
function ambiguousCoordinates(s: string): string[] {
    const res: string[] = [];
    const s2: string = s.substr(1, s.length - 2);
    const n: number = s2.length;
    
    for (let i = 1; i < n; i++) {
        const first: string[] = getNumbers(s2.substr(0, i));
        const second: string[] = getNumbers(s2.substr(i));
        
        for (let j = 0; j < first.length; j++) {
            for (let k = 0; k < second.length; k++) {
                res.push("(" + first[j] + ", " + second[k] + ")");
            }
        }
    }
    return res;
}

function getNumbers(num: string): string[] {
    const res: string[] = [];
    const n: number = num.length;
    
    if (n == 1) 
        return [num];
    
    if (num[0] != '0') 
        res.push(num);
    
    if (num[0] == '0') {
        if (num[num.length - 1] == '0') return [];
        return ["0." + num.substr(1)];
    }
    
    for (let i = 1; i < n; i++) {
        if (num.substr(i).substr(-1) == '0') continue;
        res.push(num.substr(0, i) + "." + num.substr(i));
    }
    
    return res;
}
```