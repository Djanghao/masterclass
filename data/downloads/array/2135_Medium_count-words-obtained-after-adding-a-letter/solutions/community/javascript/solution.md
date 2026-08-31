# javascript string sort or bitmask

**Author:** henrychen222
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/solutions/1677204/](https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/solutions/1677204/)

---

Solution 1: sort string and check each substring with removed one char, if match, res++, stop
2050ms
```
const sortstr = (s) => s.split("").sort((x, y) => x.localeCompare(y)).join("");

const wordCount = (startWords, targetWords) => {
    let setS = new Set(startWords), res = 0;
    for (let s of startWords) {
        let sortS = sortstr(s);
        setS.add(sortS);
    }
    for (let t of targetWords) {
        let sortT = sortstr(t);
        for (let i = 0; i < t.length; i++) {
            let tmp = sortT.slice(0, i) + sortT.slice(i + 1); // each substring, removed one char
            if (setS.has(tmp)) {
                res++;
                break;
            }
        }
    }
    return res;
};
```
Solution 2: bitmask  339ms
```
const wordCount = (startWords, targetWords) => {
    let setS = new Set(), res = 0;
    for (let s of startWords) setS.add(process(s));
    for (let t of targetWords) {
        let mask = process(t);
        for (let i = 0; i < 26; i++) {
            if (mask & (1 << i)) { // bit of one 1's, two other ways 1 & (mask >> i), mask << ~i < 0
                if (setS.has(mask ^ (1 << i))) { //  mask ^ (1 << i): toggle bit
                    res++;
                    break;
                }
            }
        }
    }
    return res;
};

const process = (s) => {
    let mask = 0;
    for (const c of s) mask |= 1 << (c.charCodeAt() - 97); // (template: mask |= 1 << i) means set ith bit to 1's, and sum it
    return mask;
};
```