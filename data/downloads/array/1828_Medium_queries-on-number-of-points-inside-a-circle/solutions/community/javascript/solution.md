# Javascript ES6 Math formula with Explanation: Easy 100% faster

**Author:** mp3393
**Votes:** 9
**Link:** [https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/1163432/](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/1163432/)

---

`Approach:` Brute force naive geometry formula

`Intuition:` 
- For each query(one circle), check for points in `points-array` 
	- Check if the distance of the current point, from the centre of `this` circle, is less than the max reach of this circle when drawn on a 2D plane. 
	- If yes, we add 1 to our running count for this circle.

```
const countPoints = function(points, queries) {
    let result = [];
    
    for (let [x,y,radius] of queries) {
        let count = 0;
        for (let [a,b] of points) {
            count += (x- a) * (x- a) + (y-b) * (y-b) <= radius*radius ? 1 : 0;
        }
        result.push(count)
    }
    return result;
}
```