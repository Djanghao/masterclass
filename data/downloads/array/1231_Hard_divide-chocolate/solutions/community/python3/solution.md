# Detailed explanation of using Binary Search (Python, JS, Go)

**Author:** usr25
**Votes:** 5
**Link:** [https://leetcode.com/problems/divide-chocolate/solutions/920639/](https://leetcode.com/problems/divide-chocolate/solutions/920639/)

---

- Realise that each chunk can have at least 1 sweetness (mentioned in the constraint) and at most `high = total sweetness / chunks needed` which is `sum(sweetness) / (K + 1)`. K friends + yourself -> K+1 chunks.
- Use binary search to quickly find the target sweetness which is the maximum sweetness possible when we make K cuts ("cutting the chocolate bar optimally"). Then find the minimum sweetness out of the chunks we have.
- As long as `low < high`: we check the mid level of sweetness: `mid = floor((low + high + 1) / 2)`. Here +1 because we have to include mid level if it is the target sweetness. If we don't include +1, we'll be stuck in an infinite loop because we'll always pick the same mid point which is the low.
- Once we pick the target (mid level of sweetness), we iterate through the sweetness array and calculate each chunk's sweetness. Once we reach or go over the target sweetness (mid), we increment the number of cuts and reset the chunk sweetness to 0 to start calculating the next chunk's sweetness.
- If with the current target, we end up having more cuts than needed, then we know we need to increase the level of sweetness, we look at the right half of the possible levels of sweetness for each chunk. *Note, here we move low to mid because we need to include mid as a possible answer and eventually we return low*. Otherwise, we need to decrease the level of sweetness, we move high to mid - 1 to look at the left half of the levels of sweetness for each chunk.

Time: `O(nlog(10^9)) or O(nlog(m))` where n = len(sweetness) and m = range from 1 to high range (inclusive) because:

- Binary search against the range low high levels of sweetness of each chunk: `O(log(m))`. Each time we pick a target sweetness, we iterate through input array: `O(n`) -> Total: `O(nlog(m))`

Space: `O(1)` because we don't use auxiliary space.

Python
```python
class Solution:
    def maximizeSweetness(self, sweetness, K: int) -> int:
        low = 1
        high = sum(sweetness) // (K + 1)
        while low < high:
            mid = (low + high + 1) // 2
            cuts = 0
            chunk_sweetness = 0
            for piece in sweetness:
                chunk_sweetness += piece
                if chunk_sweetness >= mid:
                    cuts += 1
                    chunk_sweetness = 0
            if cuts > K:
                low = mid
            else:
                high = mid - 1
        return low
```

JavaScript

```javascript
var maximizeSweetness = function(sweetness, K) {
    const totalSweetness = sweetness.reduce((a, b) => a + b, 0);
    let low = 1;
    let high = Math.floor(totalSweetness / (K + 1));
    while (low < high) {
        const mid = Math.floor((low + high + 1) / 2);
        let chunkSweetness = 0;
        let cuts = 0
        for (const piece of sweetness) {
            chunkSweetness += piece;
            if (chunkSweetness >= mid) {
                cuts++;
                chunkSweetness = 0;
            }
        }
        if (cuts > K) {
            low = mid;
        } else {
            high = mid - 1;
        }
    }
    return low;
};
```

GoLang

```go
func maximizeSweetness(sweetness []int, K int) int {
    totalSweetness := 0
    for _, piece := range(sweetness) {
        totalSweetness += piece
    }
    low := 1
    high := totalSweetness / (K + 1)
    for low < high {
        mid := (low + high + 1) / 2
        chunkSweetness := 0
        cuts := 0
        for _, piece := range(sweetness) {
            chunkSweetness += piece
            if chunkSweetness >= mid {
                cuts++
                chunkSweetness = 0
            }
        }
        if cuts > K {
            low = mid
        } else {
            high = mid - 1
        }
    }
    return low
}
```