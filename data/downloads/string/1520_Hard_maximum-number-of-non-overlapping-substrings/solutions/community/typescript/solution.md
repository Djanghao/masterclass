# Typescript overlapping intervals

**Author:** jxc454
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/solutions/1683960/](https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/solutions/1683960/)

---

1) save off min/max index for each character
2) iterate through `s`  for each character in  `a-z` to find smallest interval that contains that character :)
3) now the problem is to find max non-overlapping intervals, which can be done by sorting by interval finish time and using greedy algorithm
```
function maxNumOfSubstrings(s: string): string[] {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], [i, i])
        } else {
            map.get(s[i])[1] = i
        }
    }

    const intervals = []
    for (let i = 97; i < 97 + 26; i++) {
        const char = String.fromCharCode(i)
        
        if (!map.has(char)) {
            continue
        }
        
        let [min, max] = map.get(char)
        if (min === max) {
            intervals.push([min, max])
            continue
        }

        for (let j = min; j < max; j++) {
            if (map.get(s[j])[0] < min) {
                min = Infinity
                break
            }
            max = Math.max(max, map.get(s[j])[1])
        }
        
        if (max >= min) {
            intervals.push([min, max])        
        }
    }
    
    intervals.sort((a, b) => a[1] - b[1])
    
    const winners = []
    let [start, end] = intervals[0]
    for (const [currStart, currEnd] of intervals.slice(1)) {
        if (currStart > end) {
            winners.push([start, end])
            start = currStart
            end = currEnd
        } else if (currEnd === end && currStart > start) {
            start = currStart
            end = currEnd
        }
    }

    return winners.concat([[start, end]]).map(([start, end]) => s.slice(start, end + 1))    
};
```