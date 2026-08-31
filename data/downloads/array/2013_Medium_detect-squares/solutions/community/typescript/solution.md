# [TS] Book Solution using Math

**Author:** 2022JSPrepAccount
**Votes:** 1
**Link:** [https://leetcode.com/problems/detect-squares/solutions/3419665/](https://leetcode.com/problems/detect-squares/solutions/3419665/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
// Self Solution, after book consultation, Time Complexity: O(n), Space Complexity: O(n)(for storing the data)
class DetectSquares {
    public map: Map<string, number>;
    public points: number[][];
    constructor() {
        this.map = new Map();
        this.points = [];
    }

    add(point: number[]): void {
        const key: string = this.getKey(point[0], point[1]);
        const count: number = 1 + (this.map.get(key) || 0);
        this.map.set(key, count);
        this.points.push(point);
    }

    count(point: number[]): number {
        let count: number = 0;


        // Second solution without using extra space of points array
        // for ( const key of this.map.keys() ) {
        //     let [x, y] = [Number(key.split(',')[0]), Number(key.split(',')[1])];
        //     if ( !(Math.abs(x - point[0]) === Math.abs(y - point[1])) || x === point[0] || y === point[1] ) continue;
        //     const key1 = this.getKey(x, point[1]);
        //     const key2 = this.getKey(point[0], y);
        //     count += this.map.get(key) * ((this.map.get(key1) || 0) * (this.map.get(key2) || 0));
        // }


        for ( const [x, y] of this.points ) {
            if ( !(Math.abs(x - point[0]) === Math.abs(y - point[1])) || x === point[0] || y === point[1] ) continue;
            const key1 = this.getKey(x, point[1]);
            const key2 = this.getKey(point[0], y);
            count += ((this.map.get(key1) || 0) * (this.map.get(key2) || 0));
        }
        return count;
    }

    getKey(x: number, y: number): string {
        return x + ',' + y;
    }
}

// Book Solution, Same as self solution, since self was after book consultation
/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */
```