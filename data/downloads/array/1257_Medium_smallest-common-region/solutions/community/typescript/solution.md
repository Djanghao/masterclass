# lowest common ancestor (LCA) O(N)

**Author:** panevskii
**Votes:** 2
**Link:** [https://leetcode.com/problems/smallest-common-region/solutions/3365550/](https://leetcode.com/problems/smallest-common-region/solutions/3365550/)

---

# Code
```
function findSmallestRegion(regions: string[][], region1: string, region2: string): string {
    
    const graph = new Map<string, string[]>();

    for (const [mainRegion, ...subRegions] of regions) {
        graph.set(mainRegion, subRegions);
    }

    let result = "";

    const dfs = (region: string): number => {
        if (result) {
            return;
        }
 
        if (!graph.has(region)) {
            return region === region1 || region === region2 ? 1 : 0;
        }

        let foundCount = 0;
        for (const subRegions of graph.get(region)) {
            foundCount += dfs(subRegions);
        }

        if (region === region1 || region === region2) {
            foundCount++;
        }

        if (foundCount === 2) {
            result = region;
            return 0;
        }

        return foundCount;
    }

    dfs(regions[0][0]);

    return result;
};
```