# Javascript & Typescript sliding-window solution | Time: 81% faster | Memory: 6% less

**Author:** JinZihang
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/1739353/](https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/1739353/)

---

```
function findAnagrams(s: string, p: string): number[] {
    if (s.length < p.length) return [];
    
    // Initialise maps
    let pMap = new Map();
    let examineMap = new Map();
    for (let i = 0; i < p.length; i++) {
        pMap.set(p[i], pMap.has(p[i]) ? pMap.get(p[i]) + 1 : 1);
        examineMap.set(s[i], examineMap.has(s[i]) ? examineMap.get(s[i]) + 1 : 1);
    }
    
    const res: number[] = [];
    let windowEnd = p.length;
    // Check whether two maps are same
    const equal = () => {
        for (let [char, count] of examineMap) if (pMap.get(char) !== count) return false;
        return true;
    };
    while (windowEnd < s.length) {
        if (equal()) res.push(windowEnd - p.length);
        
        // Slide the window to the right
        const aquireChar = s.charAt(windowEnd);
        examineMap.set(aquireChar, examineMap.has(aquireChar) ? examineMap.get(aquireChar) + 1 : 1);
        
        const releaseChar = s.charAt(windowEnd - p.length);
        if (examineMap.get(releaseChar) === 1) examineMap.delete(releaseChar);
        else examineMap.set(releaseChar, examineMap.get(releaseChar) - 1);
        
        windowEnd++;
    }
    if (equal()) res.push(windowEnd - p.length);
    
    return res;
};
```