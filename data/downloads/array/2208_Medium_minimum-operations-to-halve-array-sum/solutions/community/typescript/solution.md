# Priority queue vs Sort + binary search

**Author:** georgiiperepechko
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/1864890/](https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/1864890/)

---

I had no idea leetcode allowed to use library implementation of MaxPriorityQueue! It is still buggy so this code won't be accepted as a Typescript solution :/

```
var halveArray = function(nums) {
    let steps = 0, initSum = 0;
    const q = new MaxPriorityQueue();

    for (const n of nums) {
        initSum += n;
        q.enqueue(n, n);
    }
    
    let curSum = initSum;
    while (curSum * 2 > initSum) {
        steps++;
        const halfMax = q.dequeue().element/2;
        curSum -= halfMax;
        q.enqueue(halfMax, halfMax);
    }
    return steps;
};
```

Initialy solved it by sorting the array and then using binary search to insert halfMax into it, but that was slower.

```
function halveArray(nums: number[]): number {
    let steps = 0;
    nums.sort((a,b) => a - b);
    const initSum = nums.reduce((sum, v) => sum + v, 0);
    let curSum = initSum;
    while (curSum * 2 > initSum) {
        steps++;
        // console.log({curSum, initSum, nums})
        const biggestNumber = nums.pop();
        const halved = biggestNumber / 2;
        curSum -= halved;
        
        if (nums.length === 0) {
            nums.push(halved);
        } else if (halved >= nums[nums.length - 1]) {
            nums.push(halved);
        } else if (halved <= nums[0]) {
            nums.unshift(halved);
        } else { // bin search + splice
            let left = 0;
            let right = nums.length;
            while(left <= right) {
                const subArrLen = right - left;
                const midI = left + Math.floor(subArrLen / 2);
                const found = nums[midI];
                if (found === halved) {
                    left = midI;
                    right = midI;
                    break;
                }
                if (halved > found) {
                    left = midI + 1;
                } else {
                    right = midI - 1;
                }
            }
            nums.splice(left, 0, halved);
        }
    }
    return steps;
};
```