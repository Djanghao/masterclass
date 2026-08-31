# Typescript not obvious solution (Runtime beats 90%)

**Author:** alexgavrilov
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/4037476/](https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/4037476/)

---

# Complexity
- Time complexity:
O(N ^ 2)

- Space complexity:
O(N)

# Code
```
function equalFrequency(word: string): boolean {
    for (let i = 0; i < word.length; i++) {
        // calc same freq letters count without i letter (remove candidate)
        // if count == 1 => we can return true right now
        // freq example: 
        // [1, 2] = 2 => continue
        // [1] = 1 => return true
        const map = new Map<string, number>();
        for (let j = 0; j < word.length; j++) {
            if (j == i) continue;
            map.set(word[j], (map.get(word[j]) || 0) + 1);
        }

        if ((new Set(map.values())).size == 1) {
            return true;
        }
    }
    
    return false;
};
```