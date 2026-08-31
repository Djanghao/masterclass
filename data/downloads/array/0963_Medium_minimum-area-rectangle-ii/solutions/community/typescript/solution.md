# Intuitive and simple typescript implementation - group segments by length and center point $O(n^2)$

**Author:** user3762tT
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-area-rectangle-ii/solutions/5153625/](https://leetcode.com/problems/minimum-area-rectangle-ii/solutions/5153625/)

---

# Intuition
Solution based on an observation that if any 2 segments that have the same middle point and the same length they are in fact form rectangle as it's 2 diagonals. 

# Approach
Group all possible points pairs by their middle point and distance to each other where middle point is $[\\frac{x1+x2}{2}, \\frac{y1+y2}{2}]$ and distance is $\\sqrt{(x1-x2)^2 + (y1-y2)^2}$. Then we can check all goups where we have 2 or more pairs of diagonals, 2 diagonals compose 1 rectangle if there are 3 diagonals - it means 3 rectangle, 4 - 6, 5 - 10 and so forth, each nth diagonal adds $n-1$ rectangles, the formula is $\\frac{n(n-1)}{2}$. And then we can iterate with nested loop through all distinct diagonals pairs and calculate area for each as multiplication of it's sides. Important note that 2 diagonals points must be alterated to form rectangle side like for example $[diagonal1 point1, diagonal2 point1, diagonal1 point2, diagonal2 point2]$ without alteration function `rectangleArea` would calculate diagonals product which is not rectangle area.

# Complexity
- Time complexity:
Nested loop to group points gives $O(n^2)$ complexity, each iteration has fixed calculation - middle point, distance and work with `Map` as a HashTable. Then we have one more nested loop for diagonals, in worst case if we imagine that all points are kinda in a circle around 1 point it can give us $\\frac{n}{2}$ diagonals in 1 group and nested loop gives us one more $O(n^2)$ but it doesn't change overall complexity which is $O(n^2)$ already

- Space complexity:
`Map` stores result of nested loop iterations and it gives
$O(n^2)$

# Code
```
function middlePoint(p1: number[], p2: number[]) {
    return [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2]
}

function dist(p1: number[], p2: number[]) {
    return ((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2) ** 0.5
}

function rectangleArea(p1: [number, number], p2: [number, number], p3: [number, number], p4: [number, number]): number | null {
    const length1 = dist(p1, p2);
    const length2 = dist(p2, p3);
    return length1 * length2;
}

function minAreaFreeRect(points: number[][]): number {
    let byDistAndMiddlePoint = new Map()
    for (let i = 0; i < points.length - 1; i++) {
        for (let j = i + 1; j < points.length; j++) {
            let p1 = points[i], p2 = points[j]
            let [middleX, middleY] = middlePoint(p1, p2)
            let distance = dist(p1, p2)
            let key = [middleX, middleY, distance].join(" ")
            let tuplesPoints = byDistAndMiddlePoint.get(key) ?? []
            tuplesPoints.push([p1, p2])
            byDistAndMiddlePoint.set(key, tuplesPoints)
        }
    }
    let ans = Infinity

    for (let diagonals of byDistAndMiddlePoint.values()) {
        if (diagonals.length >= 2) {
            for (let i = 0; i < diagonals.length - 1; i++) {
                for (let j = i + 1; j < diagonals.length; j++) {
                    let diagonal1 = diagonals[i]
                    let diagonal2 = diagonals[j]
                    let area = rectangleArea(
                        diagonal1[0],
                        diagonal2[0],
                        diagonal1[1],
                        diagonal2[1]
                    )
                    ans = Math.min(ans, area)
                }
            }
        }
    }

    return ans === Infinity ? 0 : ans
};
```