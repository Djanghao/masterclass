# i am first

**Author:** NIGVI
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/solutions/4563500/](https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/solutions/4563500/)

---

# Code
```
type RoadKey = `${number}-${number}`;
type RoadsMap = Map<RoadKey, number>;

function numberOfSets(n: number, maxDistance: number, rawRoads: number[][]): number {
    const roads: RoadsMap = new Map();

    for (const road of rawRoads) {
        const key: RoadKey = road[0] < road[1] ? `${road[0]}-${road[1]}` : `${road[1]}-${road[0]}`;
        
        if (roads.has(key) && roads.get(key) < road[2]) {
            continue;
        }
        roads.set(key, road[2]);
    }

    const basicPoints: number[] = [];

    for (let i = 0; i < n; i++) {
        basicPoints.push(i);
    }

    let counter = 0;

    for (let i = 0; i <= basicPoints.length; i++) {
        const combinations = generateCombinations(basicPoints, i);

        for (const combination of combinations) {
            if (isCorrectCombination(roads, combination, maxDistance)) {
                counter++;
            }
        }
    }

    return counter;
}

function generateCombinations(basicPoints: number[], deleteNeed: number): number[][] {
    if (deleteNeed === 0) {
        return [basicPoints];
    }

    const combinations: number[][] = [];

    for (let c = 0; c < basicPoints.length - deleteNeed + 1; c++) {
        combinations.push(...(
            generateCombinations(basicPoints.slice(c + 1), deleteNeed - 1)
                .map(combination => [...basicPoints.slice(0, c < 1 ? 0 : c), ...combination])
        ));
    }

    return combinations;
}

function isCorrectCombination(roads: RoadsMap, points: number[], maxDistance: number): boolean {
    for (let i = 0; i < points.length - 1; i++) {
        for (let c = i + 1; c < points.length; c++) {
            if (!hasRoadlessDistance(points[i], points[c], roads, points, maxDistance)) {
                return false;
            }
        }
    }
    return true;
}

function hasRoadlessDistance(
        pointA: number,
        pointB: number,
        roads: RoadsMap,
        points: number[],
        maxDistance: number
    ): boolean {
    if (maxDistance < 1) {
        return false;
    }
    const key: RoadKey = pointB < pointA ? `${pointB}-${pointA}` : `${pointA}-${pointB}`;
    if (roads.get(key) !== undefined && roads.get(key) <= maxDistance) {
        return true;
    }

    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        
        if (point === pointB || point === pointA) {
            continue;
        }

        const withoutPassedPoints = points.filter(point => point !== pointB);
        const distance = roads.get(point < pointB ? `${point}-${pointB}` : `${pointB}-${point}`);

        if (distance !== undefined && hasRoadlessDistance(pointA, point, roads, withoutPassedPoints, maxDistance - distance)) {
            return true;
        }
    }

    return false;
}
```