# 100% beats runtime, without DFS/recursion

**Author:** salisbury-espinosa
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/5707152/](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/5707152/)

---

![2024-08-29_13-51.png](./images/0.png)

# Code
```typescript []
function findMaxFish(grid: number[][]): number {
    let maxArea = 0;
    const islandArea = new Map();
    const islandRename = new Map();
    const islandRenameIndex = new Map();
    let currentMaxIslandColor = -1;
    const m = grid.length;
    const n = grid[0].length;
    for (let height = 0; height < m; height += 1) {
        let currentIsland = null;
        let currentArea = null;
        for (let width = 0; width < n; width += 1) {
            const val = grid[height][width];
            if (val > 0) {
                let islandFromTop = 0;
                if (height > 0) {
                    let valFromTop = grid[height - 1][width];
                    if (valFromTop !== 0) {
                        islandFromTop = islandRename.get(valFromTop) ?? valFromTop;
                    }
                }
                if (currentIsland == null) {
                    if (islandFromTop != 0) {
                        currentIsland = islandFromTop;
                        currentArea = islandArea.get(islandFromTop) + val;
                    }
                    else {
                        currentIsland = currentMaxIslandColor -= 1;
                        currentArea = val;
                    }
                }
                else {
                    if (islandFromTop != 0 && islandFromTop !== currentIsland) {
                        let islandRenameIndexFromTop = islandRenameIndex.get(islandFromTop);
                        let islandRenameIndexCurrent = islandRenameIndex.get(currentIsland);
                        let areaFromTop = islandArea.get(islandFromTop) ?? 0;
                        if ((islandRenameIndexFromTop ?? []).length > (islandRenameIndexCurrent ?? []).length)  {
                            [islandRenameIndexFromTop, islandRenameIndexCurrent] = [islandRenameIndexCurrent, islandRenameIndexFromTop];
                            [currentIsland, islandFromTop] = [islandFromTop, currentIsland];
                            [areaFromTop, currentArea] = [currentArea, areaFromTop];
                        }
                        islandRename.set(islandFromTop, currentIsland);
                        const isNewForCurrent = islandRenameIndexCurrent == null;
                        if (islandRenameIndexFromTop != null) {
                            for(let reindex = 0; reindex < islandRenameIndexFromTop.length; reindex += 1) {
                                const reindexColor = islandRenameIndexFromTop[reindex];
                                islandRename.set(reindexColor, currentIsland);
                                if (islandRenameIndexCurrent != null) {
                                    islandRenameIndexCurrent.push(reindexColor);
                                }
                            }
                            islandRenameIndex.delete(islandFromTop);
                        }
                        if (islandRenameIndexCurrent != null) {
                            islandRenameIndexCurrent.push(islandFromTop);
                        }
                        else if (islandRenameIndexFromTop != null) {
                            islandRenameIndexFromTop.push(islandFromTop);
                            islandRenameIndex.set(currentIsland, islandRenameIndexFromTop);
                        }
                        else {
                            islandRenameIndex.set(currentIsland, [islandFromTop]);
                        }
                        currentArea += areaFromTop + val;
                    }
                    else {
                        currentArea += val;
                    }
                }
                if (currentArea > maxArea) {
                    maxArea = currentArea;
                }
                islandArea.set(currentIsland, currentArea); 
                grid[height][width] = currentIsland;
            }
            else {
                currentIsland = null;
            }
        }
    }
    return maxArea;
};
```