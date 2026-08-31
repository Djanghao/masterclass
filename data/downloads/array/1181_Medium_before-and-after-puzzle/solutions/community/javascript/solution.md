# JavaScript Solution

**Author:** Deadication
**Votes:** 0
**Link:** [https://leetcode.com/problems/before-and-after-puzzle/solutions/1370558/](https://leetcode.com/problems/before-and-after-puzzle/solutions/1370558/)

---

```
var beforeAndAfterPuzzles = function(phrases) {
    const n = phrases.length;
    const map = new Map();
    
    for (let i = 0; i < n; i++) {
        const phrase = phrases[i];
        const split = phrase.split(" ");
        const firstWord = split[0];
        
        if (!map.has(firstWord)) map.set(firstWord, []);
        map.get(firstWord).push(i);
    }
    
    const set = new Set();
    let merged = "";
    
    for (let i = 0; i < n; i++) {
        let firstPhrase = phrases[i];
        const split1 = firstPhrase.split(" ");
        const lastWord = split1.pop();
        
        const matches = map.get(lastWord);
        
        if (matches == null) continue;
       
        firstPhrase = split1.join(" "); 
        
        for (const index of matches) {
            if (index === i) continue;

            const secondPhrase = phrases[index];
            const split2 = secondPhrase.split(" ");
            
            if (firstPhrase === "") merged = secondPhrase;
            else merged = firstPhrase + " " + secondPhrase;

            set.add(merged);
        }
    }
    
    const res = [...set];
    
    return res.sort((a, b) => a.localeCompare(b));
};
```