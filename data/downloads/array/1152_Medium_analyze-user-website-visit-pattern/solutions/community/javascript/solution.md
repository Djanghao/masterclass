# Javascript solution with comments

**Author:** greatpyrenees
**Votes:** 9
**Link:** [https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/533848/](https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/533848/)

---

```
/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function(username, timestamp, website) {
    // Create a map of entries and sort it based on timestamps
    // O(n log n)
    const entriesMap = timestamp.map((item, i) => [username[i], timestamp[i], website[i]])
        .sort((a, b) => a[1] - b[1]);
    
    // group websites by users
    // O(n)
    const entriesByUsers = {};
    entriesMap.forEach(entry => {
        if (!entriesByUsers[entry[0]]) entriesByUsers[entry[0]] = [];
        entriesByUsers[entry[0]].push(entry[2]);
    });
    
    const seq = {};
    let max = ['', 0];
    
    // get all possible 3-sequences for each user and increment the count of each sequence in seq
    // O(n ^ 3)
    Object.entries(entriesByUsers).forEach(([, websites]) => {
        const seqByUsers = {};
        
        for(let i = 0; i < websites.length - 2; i++) {
            for(let j = i + 1; j < websites.length - 1 ; j++) {
                for(let k = j + 1; k < websites.length ; k++) {
                    const key = `${websites[i]}|${ websites[j]}|${websites[k]}`;
                    if (!seqByUsers[key]) seqByUsers[key] = 1;
                }
            }
        }
        
        Object.keys(seqByUsers).forEach(seqByUser => {
            if (!seq[seqByUser]) seq[seqByUser] = 0;
            seq[seqByUser] += 1;
            
            if (
                (
                    seq[seqByUser] === max[1] && 
                    seqByUser.split('|').join(' ') < max[0].split('|').join(' ')
                ) 
                ||
                seq[seqByUser] > max[1]
            ) {
                max[0] =  seqByUser;
                max[1] = seq[seqByUser];
            }
        });
    });
        
    return max[0].split('|');
};
```