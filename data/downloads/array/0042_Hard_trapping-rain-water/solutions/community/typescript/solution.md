# Javascript Solution | 3 Approach | BF | Two Pointer | Stack

**Author:** pmistry_
**Votes:** 5
**Link:** [https://leetcode.com/problems/trapping-rain-water/solutions/2556771/](https://leetcode.com/problems/trapping-rain-water/solutions/2556771/)

---

**Brute Force Approach**

```
/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {

    let largest = height[0];
    let largestIndex = 0;
    let water = 0;

    for(let i=1; i height[i-1]) {
            
            // what is the max water level
            let fill = Math.min(largest, height[i]);
            
            // fill in the water between largest and i
            for(let j=largestIndex+1; j largest) {
                largest = height[i];
                largestIndex = i;
            }
            
        }
        
    }
    return water;
};
```

**Time Complexity**

We are traversing through the complete array which needs O(N). Additionally, we calculate max values while traversing through the array which takes O(N). Hence the time complexity is **O(N\xB2)**.

**Space Complexity**

Since we are not using any extra space, space complexity is O(1).


**Two Pointer Approach**

```
/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function(height) {
    let left = 0,right = height.length-1;
    let trappedWater = 0;
    let leftMaxHegith = 0;
    let rightMaxHegith = 0;
    
    while(left <= right){
        if(height[left] < height[right]){
            if(height[left] > leftMaxHegith){
                leftMaxHegith = height[left];
            }else{
                trappedWater+= leftMaxHegith - height[left];
            }
            left++;
        }else{
            if(height[right] > rightMaxHegith){
                rightMaxHegith = height[right];
            }else{
                trappedWater+=rightMaxHegith-height[right];
            }
            right--;
        }
    }
    return trappedWater;
};
```

**Time Complexity**

We are traversing through the complete array which needs **O(N).**

**Space Complexity**

We are using 2 extra arrays of size N to store max values, hence space complexity is **O(N).**

**Approach 3:**

Using stack, a smart approach

Time: O(n) all elements are pushes and pop once

```
var trap = function(height) {
    let stack = new Stack()
    let i = 0
    let ret = 0
    while(i < height.length) {
        if (stack.isEmpty() || height[i] <= height[stack.peek()]) {
            stack.push(i++)
        } else {
            let middle = stack.pop()
            if (!stack.isEmpty()) {
                let minHeight = Math.min(height[i], height[stack.peek()])
                ret += (minHeight - height[middle]) * (i - stack.peek() - 1)
            }
        }
    }
    return ret
};

class Stack {
    constructor() {
        this.stack = []
    }
    push(a) {
        this.stack.push(a)
    }
    pop() {
        return this.stack.pop()
    }
    peek() {
        return this.stack[this.stack.length - 1]
    }
    size() {
        return this.stack.length
    }
    isEmpty() {
        return this.stack.length == 0
    }
}
```

For more details you can check 
https://leet-codes.blogspot.com/2022/09/42-trapping-rain-water-stack.html