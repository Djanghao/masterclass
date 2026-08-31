# Greedy Solution (with step by step explanation)

**Author:** alekseyvy
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4291941/](https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4291941/)

---

# Intuition
we use greedy approach to solve this problem
# Approach
first we sort array, then we check if first array number is 1 if not we set it to 1, next we iterate over sorted array and calculate min by subtracting from current number previousm and if it's result in more than 1, we set current number value as prev value + one, at the end we just return max form array.
# Complexity
- Time complexity:
O(nlogn)
- Space complexity:
O(1)
# Code
```
function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
    // sort array in ascending order
    const sorted = arr.sort((a, b) => a - b);
    // check that first element of sorted array is 1 if not set it to 1
    arr[0] = arr[0] === 1 ? arr[0] : 1;
    // iterate over sorted array
    for(let i = 1; i < sorted.length; i++) {
        // get difference of curr num - prev num
        const min = Math.abs(arr[i] - arr[i - 1]);
        // check if difference is more than 1
        if(min > 1) {
            // if true set current value as previous value + 1
            arr[i] = arr[i - 1] + 1;
        }
    }
    // return max number from array
    return Math.max(...sorted);
};
```