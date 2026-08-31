# Simple method—check it out! 👍 😊

**Author:** meathirarosejohn
**Votes:** 2
**Link:** [https://leetcode.com/problems/kth-missing-positive-number/solutions/5969303/](https://leetcode.com/problems/kth-missing-positive-number/solutions/5969303/)

---

# Intuition
To find the k-th missing positive integer, we can use a set to track which numbers are in the array and loop through integers until we find the k-th missing one.

# Approach
1. Initialize a set with the array elements for fast lookup.
2. Track the largest number in the array.
3. Loop from 1 to the largest number. For each missing number, increment a counter.
4. When the counter reaches k, return the current number.
5. If not found within the loop, calculate and return the k-th missing number beyond the largest element.

# Complexity
- Time complexity:
O(n) \u2013 Looping through the array and finding missing numbers.

- Space complexity:
O(n) \u2013 Using a set to store array elements.

# Code
```typescript []
function findKthPositive(arr: number[], k: number): number {
    let largest: number = -Infinity;
    let set: Set<number> = new Set<number>(arr);
    let count: number = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    for(let i = 1; i<=largest; i++){
        if(!set.has(i)){
            count++;
            if(count === k){
                return i;
            }
        }
    }
    return largest + k - count;
};
```
```javascript []
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let largest = -Infinity;
    let set = new Set(arr);
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    for(let i = 1; i<=largest; i++){
        if(!set.has(i)){
            count++;
            if(count === k){
                return i;
            }
        }
    }
    return largest + k - count;
};
```

