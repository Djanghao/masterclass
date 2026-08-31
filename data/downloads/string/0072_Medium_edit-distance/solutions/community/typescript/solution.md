# [Typescript] Recursion with memo & DP

**Author:** kiba_hanzo
**Votes:** 2
**Link:** [https://leetcode.com/problems/edit-distance/solutions/3625379/](https://leetcode.com/problems/edit-distance/solutions/3625379/)

---


Recurrsion with memo
```
const memo = {};

function minDistance(word1: string, word2: string): number {
    if(word1 === word2)
        return 0;

    if(word1.length === 0 || word2.length === 0)
        return word1.length + word2.length;
    
    if(memo[word1+'+'+word2])
        return memo[word1+'+'+word2];
    
    if(word1[0] === word2[0])
        return minDistance(word1.slice(1), word2.slice(1));

    let minDist = word1.length + word2.length;
    minDist = Math.min(minDist, minDistance(word1.slice(1), word2) + 1);
    minDist = Math.min(minDist, minDistance(word1, word2.slice(1)) + 1);
    minDist = Math.min(minDist, minDistance(word1.slice(1), word2.slice(1)) + 1);

    memo[word1+'+'+word2] = minDist;
    return minDist;
};
```


DP

```
function minDistance(word1: string, word2: string): number {
    const memo: number[][] = Array.from({length: word1.length + 1}, () => {
        return Array.from({length: word2.length + 1}, () => {
            return word1.length + word2.length;
        });
    });

    memo.forEach((row, i) => {
        row.forEach((col, j) => {
            if(i === 0 || j === 0)
                memo[i][j] = i+j;
        });
    });

    for(let i = 1; i <= word1.length; i++){
        for(let j = 1; j <= word2.length; j++){
            if(word1[i-1] === word2[j-1]){
                memo[i][j] = memo[i-1][j-1];
            } else {
                memo[i][j] = Math.min(memo[i][j], memo[i-1][j] + 1);
                memo[i][j] = Math.min(memo[i][j], memo[i][j-1] + 1);
                memo[i][j] = Math.min(memo[i][j], memo[i-1][j-1] + 1);
            }
        }
    }

    return memo[word1.length][word2.length];
};
```