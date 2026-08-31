# DP solution

**Author:** MishaKonki
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/5359241/](https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/5359241/)

---



# Code
```
    const getCoordinates = (char: string): [number, number] => {
        const index = char.charCodeAt(0) - 'A'.charCodeAt(0);
        return [Math.floor(index/6), index % 6];
    }

    const getDistance = (char1: string, char2:string) => {
        const [x1, y1] = getCoordinates(char1)
        const [x2, y2] = getCoordinates(char2)
        return Math.abs(x2-x1) + Math.abs(y2-y1);
    }
    function minimumDistance(word: string): number {
        let n = word.length;
        
        const dp: number[][][] =  Array.from({ length: n + 1 }, () => Array.from({ length: 27 }, () => Array(27).fill(Infinity)));
        dp[0][26][26] = 0;

        for (let i = 0; i < n; i++){
            const currentChar = word[i].charCodeAt(0) - 'A'.charCodeAt(0);

            for (let j = 0; j <= 26; j++) {
                for (let k = 0; k <= 26; k++) {
                    if (dp[i][j][k] < Infinity) {
                        dp[i+1][currentChar][k] = Math.min(
                            dp[i + 1][currentChar][k],
                            dp[i][j][k] + (j === 26 ? 0 : getDistance(String.fromCharCode(j + 'A'.charCodeAt(0)), word[i]))
                        )

                        dp[i+1][j][currentChar] = Math.min(
                            dp[i + 1][j][currentChar],
                            dp[i][j][k] + (k === 26 ? 0 : getDistance(String.fromCharCode(k + 'A'.charCodeAt(0)), word[i]))
                        )

                    }
                }
            }
        }

        let result = Infinity;

        for (let j =0; j <= 26; j++) {
            for (let k = 0; k <= 26; k++) {
                result = Math.min(result, dp[n][j][k])
            }
        }

        return result   
    };
```