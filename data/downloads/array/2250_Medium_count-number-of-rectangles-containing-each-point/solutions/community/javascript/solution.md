# [Javascript] Detailed Explanation - Binary search on the width

**Author:** annietran
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/solutions/1979622/](https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/solutions/1979622/)

---

I **wasn't able** to solve the problem during the contest because I **missed a very important constrain**: 

`1 <= hi, yj <= 100`

This constraint would change how you think about this problem. 


Because we can have **buckets of width** by **height** ( not sure if it is the correct way to call it ) 
Please be noted that **all rectangles start at (0, 0)**, so we only need to care about length and height of the rectangle

```
retangle with ( l, h ) will be store at bucket[h] = [ ..., l ]
```

Example 1: 
	[[1,2],[2,3],[2,5]]

Rectangle [1, 2]  would be store on bucket[2] = [1]
Rectangle [2, 3]  would be store on bucket[3] = [2]
Rectangle [2, 5]  would be store on bucket[5] = [2]

```
We don't need to check all the rectangle by width as if the smaller rectangle contain the point then the bigger  will surely contain the point
```

From this point, we can think of how to count number of rectangle contain each point by width. We need to find the index of width which is **greater than or equal** with x on the point => **Binary search** on width can help



```
const binarySearch = (arr, target) => {
    let l = 0, r = arr.length - 1
    
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)
        
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    
    return l
}

/**
 * @param {number[][]} rectangles
 * @param {number[][]} points
 * @return {number[]}
 */
const countRectangles = (rectangles, points) => {
    let bucket = new Array(101).fill().map(_ => new Array())
    
    for (let [l, h] of rectangles) {
        bucket[h].push(l)
    }
    
    for (let i = 1; i < 101; i++) {
        bucket[i] = bucket[i].sort((l1, l2) => l1 - l2)
    }
    
    let numberOfRectangles = []
    
    for (let [x, y] of points) {
        let cur = 0
        for (let i = y; i <= 100; i++) {
            if (!bucket[i].length) continue
            const foundIndex = binarySearch(bucket[i], x)
            cur += bucket[i].length - foundIndex
        }
        numberOfRectangles.push(cur)
    }

    
    return numberOfRectangles
};
```