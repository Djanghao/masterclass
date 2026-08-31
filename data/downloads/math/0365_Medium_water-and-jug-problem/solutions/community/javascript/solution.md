# JavaScript O(x + y) without special knowledge (B\xe9zout)

**Author:** loctn
**Votes:** 7
**Link:** [https://leetcode.com/problems/water-and-jug-problem/solutions/83719/](https://leetcode.com/problems/water-and-jug-problem/solutions/83719/)

---

```
var canMeasureWater = function(x, y, z) {
    if (z > x + y) return false;
    const terms = { '0': 1, [x]: 1, [y]: 1 };
    let xsum = x;
    let ysum = y;
    let stop = x * y;
    while (xsum < stop || ysum < stop) {
        if (xsum < ysum) {
            terms[ysum - xsum] = 1;
            xsum += x;
        } else {
            terms[xsum - ysum] = 1;
            ysum += y;
        }
    }
    for (let key in terms) {
        if (terms[z - key]) return true;
    }
    return false;
};
```
We can build this without knowing the [math](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_identity) behind the optimal [O(log min(x, y))](https://en.wikipedia.org/wiki/Euclidean_algorithm#Algorithmic_efficiency) solution.

To develop our intuition, we take the example `x = 5` and `y = 7` and draw a number line while marking every multiple of 5 and 7. Via a series of pours we can achieve any volume spanning marked intervals at most `x + y` wide, i.e. a jug can only overflow by a gap amount should we pour into it the entire contents of the other jug. To avoid enumerating all sums, we simply take the gaps (`terms`) between adjacent markings and check if there are two that sum to our target volume `z`.

The example input gives a line that looks like `[0,5,7,10,14,15,20,21,25,28,30,35]` which have gaps `[5,2,3,4,1,5,1,4,3,2,5]`, so the target volume must be a sum of any two from `[0, x, y, ...gaps]` or simply `[0,1,2,3,4,5,7]`. For `z = 4` then we have many ways to pour the final volume, let's say `[0,0] -> [0,7] -> [5,2] -> [0,2] -> [2,0] -> [2,7] -> [5,4] -> [0,4]`.

What jug and target configurations cannot be poured? Taking `x = 6` and `y = 8` gives `terms` with keys `[0,2,4,6,8]`, so an odd `z` cannot be poured from these jugs.

The minimum stopping condition `stop` is actually `LCM(x, y)` (gaps begin to repeat after that), but this is more expensive to calculate (at least for the test cases) than walking through `x * y`, which is equivalent to `LCM(x, y)` when `x` and `y` are prime. In the end `LCM(a, b)` is just `a * b / GCD(a, b)`, so we see signs of B\xe9zout despite our best efforts to avoid math :) .