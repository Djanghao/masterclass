# Simple solution at O(n*log(n))

**Author:** lbyrthen
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-intersections-on-the-chart/solutions/5863181/](https://leetcode.com/problems/maximum-number-of-intersections-on-the-chart/solutions/5863181/)

---

# Intuition
This is a twist on 'max overlapping intervals'. It is easy to find the max overlapping lines. We can also find overlapping points easily. For over overlapping lines, the number of intersections is the number of lines. For overlapping points, the number of intersections = points + lines overlapping these points. The max number of intersections is either the max overlapping lines, or max overlapping points and lines.

# Approach
1. Create an array for each unique value y[i]. Use y[i] as the key in a hash table to keep an array of indices. Each array contains indices that correspond to the points that have the same y[i] value. Each array holds a set of overlapping points.
2. Sort the keys of these arrays from low to high. Go over each array, from low to high. Make 2 passes on each array.

3. For the first pass, we find out now many lines ended on these points. This can be done by looking at each point's left and right neighbor points - if a neighbor's is less, then a line ended at this point. Knowing how many lines started previously and how many ended on these points, will give us the number of lines that overlap the points. And the number of intersections = points + overlaps. We compare this number to the max.

4. For the second pass, we find out how many lines are starting from these points. This is done by checking if each point has neighbors that have greater y[i] values. Now we have the total number of overlapping lines for the next round. We also compare the overlaps to the max.

5. Repeat step 3 and 4 until the arrays are exhauted. And we have the max intersections.

# Complexity
- Time complexity:
O(n*log(n)) for sorting arrays. We pass through all the points in y 3 times in total, O(n). The higher of the two is the time expended.

- Space complexity:
O(n) for keeping all the indices of the points.

# Code
```javascript []
/**
 * @param {number[]} y
 * @return {number}
 */
var maxIntersectionCount = function (y) {

    let max = 0;

    const map = {};

    for (let i = 0; i < y.length; i++) {
        if (!map[y[i]]) map[y[i]] = [];
        map[y[i]].push(i);
    }

    const keys = Object.keys(map);

    keys.sort((a, b) => a - b);

    let overlaps = 0;

    for (let k of keys) {
        let v = map[k].length;

        for (let yIdx of map[k]) {
            if (y[yIdx - 1] < y[yIdx]) overlaps--;
            if (y[yIdx + 1] < y[yIdx]) overlaps--;
        }

        v += overlaps;

        for (let yIdx of map[k]) {
            if (y[yIdx - 1] > y[yIdx]) overlaps++;
            if (y[yIdx + 1] > y[yIdx]) overlaps++;
        }

        max = Math.max(max, v, overlaps);
    }

    return max;

};
```