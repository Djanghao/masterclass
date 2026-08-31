# simple intuitive solution 100%(T(O(nlog+n),S:O(1)))

**Author:** AminZarei72
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/solutions/4459001/](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/solutions/4459001/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
the idea is simple:
merge intervals as much as possible as we move forward

```
more explanation:
[[1,6],[2,8],[7,12],[10,16]]

  m1=====     m2===            ( merged intervals)
   2--------8  10------16
 1------6  7------12
<------------------------->

```
so we compare [1,6]vs[2,8] and merge them as m1:[2,6]
now compare m1 vs [7,12] because they dont overlap we our prev will be [7,12]
so for the next round we compare [7,12]vs[10,16]

# Approach
<!-- Describe your approach to solving the problem. -->
1-first of all as most of interval questions , sort the input based on x
```points.sort((a,b)=>a[0]-b[0])```

2-compare prev VS next:
    - if they are overlapping (``` if(py>=x) ```)create a new interval 
        and wait to see how many more we can merge
        this way we would have use the least arrows to hit it
    - else we need to use one of our arrows to hit it

NOTE: remember for merging intervals we should get the max of x1 and x2 and min of y1 and y2 

# Code
```
function findMinArrowShots(points: number[][]): number {
    points.sort((a,b)=>a[0]-b[0])
    let res=1
    let [px,py]=points[0]
    for (let index = 1; index < points.length; index++) {
        const [x,y] = points[index];
        if(py>=x){
            px=Math.max(px,x)
            py=Math.min(py,y)
        }else{
            [px,py]=[x,y]
            res++
        }
    }
    return res
};
```


# Complexity
- Time complexity:  $$O(nlog+n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


