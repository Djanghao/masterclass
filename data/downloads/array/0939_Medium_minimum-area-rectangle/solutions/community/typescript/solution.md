# Typescript beats 97%

**Author:** pvmesquita
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-area-rectangle/solutions/5208520/](https://leetcode.com/problems/minimum-area-rectangle/solutions/5208520/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Create a object of object to storage points and be able to get any point in constant time. Then loop through all points and check if points are diagonal, if the area if smaller than current smaller and checking if there's other 2 points to make a rectangle.

# Complexity
- Time complexity: $$O(n\xB2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minAreaRect(points: Array<[number, number]>): number {
    const pointsX: {[x:string]: {[y: string]: boolean}} = {};
    for(let i = 0; i<points.length; i++){
        const [x,y] = points[i];
        if(!pointsX[x]) pointsX[x] = {};
        pointsX[x][y] = true;
    }
    let smallerArea: number = Infinity;
    for(let i = 0; i<points.length; i++){
        const [x1, y1] = points[i];
        for(let j = i+1; j<points.length; j++){
            const [x2, y2] = points[j];
            if(x1===x2 || y1===y2) continue;
            const area = Math.abs(y2-y1)*Math.abs(x2-x1)
            if(area >= smallerArea) continue;
            if(!pointsX[x2][y1] || !pointsX[x1][y2]) continue;
            smallerArea = area;
        }
    }
    if(smallerArea === Infinity) return 0;
    return smallerArea;
};

```