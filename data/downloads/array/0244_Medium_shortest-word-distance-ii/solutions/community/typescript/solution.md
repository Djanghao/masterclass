# TypeScript | Beats 100% Time & 100% Memory | ✅

**Author:** anmol_kansal
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-word-distance-ii/solutions/2988285/](https://leetcode.com/problems/shortest-word-distance-ii/solutions/2988285/)

---

# Code
```
class WordDistance {
    private wordVsPositions: Record<string, number[]>;
    constructor(wordsDict: string[]) {
        this.wordVsPositions = {};

        wordsDict.forEach((word, idx) => this.wordVsPositions[word] = [...(this.wordVsPositions[word] ?? []), idx]);
    }
 
    shortest(word1: string, word2: string): number {
        const word1Positions: number[] = this.wordVsPositions[word1];
        const word2Positions: number[] = this.wordVsPositions[word2];

        let shortestDistance = +Infinity;
        for(let i=0, j=0; i<word1Positions.length && j<word2Positions.length; ){
            shortestDistance = Math.min(shortestDistance, Math.abs(word1Positions[i] - word2Positions[j]));

            if(word1Positions[i] < word2Positions[j]){
                i++;
            }else{
                j++;
            }
        }

        return shortestDistance;
    }
}

/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */
```