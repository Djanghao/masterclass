# ✅ Optimize Water Distribution in a Village | O(n log n) time, O(n) space

**Author:** shtoka
**Votes:** 2
**Link:** [https://leetcode.com/problems/optimize-water-distribution-in-a-village/solutions/1377180/](https://leetcode.com/problems/optimize-water-distribution-in-a-village/solutions/1377180/)

---

```
function minCostToSupplyWater(n: number, wells: number[], pipes: number[][]): number {
    const dSet = new DisjointSet<number>();
    const vertices = [...wells.map((price, index) => [0, index + 1, price]), ...pipes].sort((a: number[], b: number[]) => a[2] - b[2]);

    return vertices.reduce((price: number, vert: number[]) => {
        vert.slice(0, -1).filter(ind => !dSet.has(ind)).forEach(dSet.add.bind(dSet));
        if (!dSet.areConnected(vert[0], vert[1])) {
            dSet.union(vert[0], vert[1]);
            return price + vert[2];
        }
        return price;
    }, 0);
};
```