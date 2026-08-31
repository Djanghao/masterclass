# Count the number of visit patterns using map

**Author:** doanhaiyu
**Votes:** 0
**Link:** [https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/5005487/](https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/5005487/)

---

# Intuition
Simple count the number of visit patterns

# Approach
Using map

# Complexity
- Time complexity: $$O(nlogn)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
type Visit = [string, number];
function mostVisitedPattern(username: string[], timestamp: number[], website: string[]): string[] {
    const aMap: Map<string, Visit[]> = new Map();
    const mapCount: Map<string, number> = new Map();
    for (let i = 0; i < username.length; i++) {
        let visitData = aMap.get(username[i]);
        if (!visitData) {
            visitData = [];
        }
        visitData.push([website[i], timestamp[i]]);
        aMap.set(username[i], visitData);
    }
    for (let [key, value] of aMap) {
        value = value.sort((a, b) => a[1] - b[1]);
    }
    let maxCount = Number.MIN_SAFE_INTEGER;
    let maxPattern: string[][] = [];
    for (const [key, value] of aMap) {
        // there will be duplicate patterns here
        const patterns: string[][] = findPatterns(value);
        const aSet: Set<string> = new Set();
        for (const aPatern of patterns) {
            aSet.add(aPatern.join('-'));
        }

        for (const aPatern of aSet) {
            let count = mapCount.get(aPatern) || 0;
            mapCount.set(aPatern, ++count);
            if (count >= maxCount) {
                maxCount = count;
            }
        }
    }
    for (const [key, value] of mapCount) {
        if (value == maxCount) {
            maxPattern.push(key.split('-'));
        }
    }

    maxPattern = maxPattern.sort((a, b) => {
        for (let i = 0; i < a.length && i < b.length; i++) {
          if (a[i] < b[i]) return -1; // a comes first
          if (a[i] > b[i]) return 1;  // b comes first
        }
        return 0; // If all elements are equal
      });
    return maxPattern[0];
};

function findPatterns(visits: Visit[]): string[][] {
    const ret: string[][] = [];
    const websites = visits.map(visit => visit[0]);
    if (websites.length == 3) {
        ret.push(websites);
    }
    if (websites.length > 3) {
        for (let i = 0; i <= websites.length - 3; i++) {
            for (let j = i + 1; j <= websites.length - 2; j++) {
                for (let m = j + 1; m <= websites.length - 1; m++) {
                    ret.push([websites[i], websites[j], websites[m]]);
                }
            }
        }
    }
    return ret;
}
```