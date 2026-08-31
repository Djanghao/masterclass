# ✅ java, javascript, racket simple solution

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/solutions/4894714/](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/solutions/4894714/)

---

1. sort the array by the end of point
2. init `prev` variable with the end of the first point `points[0][1]` or `-Infinity` if your language supports it
3. init `count` with `0` (for `prev = -Infinity`) or `1` (for `prev = points[0][1]`, actually we could start iterating from the second elment in the array). I used `count = 0` in order to make it simple
3. loop over the array
4. if `prev` and `points[i]` are not overlapped `prev < point[0]` then upate `count` and `prev`. 


# Code
``` java []
class Solution {
    public int findMinArrowShots(int[][] points) {
        Arrays.sort(points, (a, b) -> a[1] > b[1] ? 1 : -1);
        int count = 1;
        int prev = points[0][1];
        
        for (int[] point : points) {
            if (prev < point[0]) {
                count++;
                prev = point[1];
            }
        }

        return count;
    }
}
```
``` javascript []
var findMinArrowShots = function(points) {
    if (points.length == 0) return 0;

    points.sort((a, b) => a[1] - b[1]);
    var count = 0;
    var prev = -Infinity;

    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        if (prev < point[0]) {
            count++;
            prev = point[1];
        }
    }

    return count;
};
```
``` racket []
(define (find-min-arrow-shots points)
    (let while ([points (sort points (lambda (a b) (< (second a) (second b))))]
                [prev -inf.0])
      (cond [(null? points) 0]
            [(< prev (first (car points))) (add1 (while (cdr points) (second (car points))))]
            [else (while (cdr points) prev)])))
```

## Note
The whole point of sorting by the end of point is to make it simple. You can sort by the begining of the point but in this case you need a little more complex `if`. Like this

``` java
if (prev >= point[0]) {
    if (point[1] < prev) {
        prev = point[1];
    }
} else {
    count++;
    prev = point[1];
}
```