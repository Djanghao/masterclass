# [TypeScript] One Pass Solution with Intuition

**Author:** user2812XJ
**Votes:** 1
**Link:** [https://leetcode.com/problems/best-sightseeing-pair/solutions/1909908/](https://leetcode.com/problems/best-sightseeing-pair/solutions/1909908/)

---


We want to find the maximum values such that ```values[i] + values[j] + i - j``` with constraint ```i < j```.
We can reorganize the equation into ```(values[i] + i) + (values[j] - j)```
To maximize this value, find the maximum (values[i] + i)  from the previous (=> maxPrev) and
whenever we move to next element (j), update the total max (=> max) with add (values[j] - j)

```
function maxScoreSightseeingPair(values: number[]): number {
    let max = Number.NEGATIVE_INFINITY;
    let maxPrev = values[0] + 0; // + 0 is the + i
    for (let i = 1; i < values.length; i++) {
        max = Math.max(max, maxPrev + values[i] - i);
        maxPrev = Math.max(maxPrev, values[i] + i);
    }
    
    return max;
};
```