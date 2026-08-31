# TypeScript solution, O(k^3) time complexity

**Author:** TienAnh013
**Votes:** 0
**Link:** [https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/5520313/](https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/5520313/)

---

My solution after 2 days of trying, maybe not the most optimal, but it works and it's MY solution \uD83E\uDD18


- Time complexity: $$O(k^3)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(k^2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` typescript []
function buildMatrix(k: number, rowConditions: number[][], colConditions: number[][]): number[][] {
    const buildMap = (k: number, conditions: number[][]) => {
        const map: number[][] = [];
        const sets: Set<number>[] = [];

        for (let i = 0; i <= k; i++) {
            sets.push(new Set<number>());
        }
        for (let x of conditions) {
            sets[x[0]].add(x[1]);
        }
        for (let i = 0; i <= k; i++) {
            map.push(Array.from(sets[i]));
        }

        return map;
    };
    const checkCircle = (k: number, map: number[][]) => {
        const stack: number[] = [];
        for (let i = 1; i <= k; i++) stack.push(i);
        const visited: boolean[] = new Array(k + 1).fill(false);
        const checked: boolean[] = new Array(k + 1).fill(false);
        let flag = false;
        const recursion = (x: number) => {
            if (checked[x]) return;
            if (visited[x]) {
                flag = true;
                return;
            }
            visited[x] = true;
            for (let i of map[x]!) {
                recursion(i);
                if (flag) return;
            }
            visited[x] = false;
            checked[x] = true;
        };
        for (let x of stack) {
            recursion(x);
            if (flag) return flag;
        }
        return flag;
    };
    const buildCompareMap = (a: number, map: number[][], compareMap: boolean[][]) => {
        const visited = new Map<number, boolean>();
        let arr = [a];
        visited.set(a, true);
        while (arr.length > 0) {
            let newArr = [];
            for (let x of arr) {
                for (let i of map[x]) {
                    if (!visited.get(i)) {
                        visited.set(i, true);
                        newArr.push(i);
                        compareMap[a][i] = true;
                    }
                }
            }
            arr = newArr;
        }
    };
    const buildOrder = (map: number[][]) => {
        const ans: number[] = [];
        for (let i = 1; i <= k; i++) ans.push(i);
        const compareMap: boolean[][] = [];
        for (let i = 0; i <= k; i++) {
            compareMap.push(new Array(k + 1).fill(false));
        }

        for (let i = 1; i <= k; i++) {
            buildCompareMap(i, map, compareMap);
        }

        for (let i = 0; i < k; i++) {
            for (let j = i + 1; j < k; j++) {
                if (compareMap[ans[j]][ans[i]]) {
                    const temp = ans[i];
                    ans[i] = ans[j];
                    ans[j] = temp;
                }
            }
        }

        return ans;
    };

    const rowMap = buildMap(k, rowConditions);
    const colMap = buildMap(k, colConditions);

    if (checkCircle(k, rowMap) || checkCircle(k, colMap)) {
        return [];
    }

    const colOrder = buildOrder(colMap);
    const rowOrder = buildOrder(rowMap);

    const ans: number[][] = [];
    const rowPos = new Map<number, number>();
    const colPos = new Map<number, number>();

    for (let i = 0; i < k; i++) {
        rowPos.set(rowOrder[i], i);
        colPos.set(colOrder[i], i);
        ans.push(new Array(k).fill(0));
    }

    for (let i = 1; i <= k; i++) {
        ans[rowPos.get(i)!][colPos.get(i)!] = i;
    }

    return ans;
}

```