# Easy Typescript Solution with Full Explanation

**Author:** chetannada
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5536552/](https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5536552/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$ where n is the number of nodes in the linked list. This is because we iterate through all the nodes in the linked list once to store their values in an array.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ where n is the number of nodes in the linked list. This is because we store all the values of the nodes in an array which can potentially take up space proportional to the number of nodes in the linked list.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {

    // initialize arr as empty array to store the ListNode value 
    let arr: number[] = [];

    // initialize result as [-1, -1]
    let result: number[] = [-1, -1];

    // initialize current as head of the node
    let current: ListNode | null = head;

    // run while loop and store every ListNode value in arr
    while (current) {

        // store current node value in value
        let value: number = current.val;

        // push value in arr
        arr.push(value);

        // update current node with next of current
        current = current.next;
    }

    // if length of arr is less than or equal to 2 then return result
    if (arr.length <= 2) {
        return result;
    }

    // initialize critical as empty array
    let critical: number[] = [];

    // run for loop from index 1 to length of arr -1
    for (let i = 1; i < arr.length - 1; i++) {

        // if current value of arr is less than previous value of arr and next value of arr 
        // OR current value of arr is greater than previous value of arr and next value of arr
        // then push i+1 in array critical
        if ((arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) || (arr[i] > arr[i - 1] && arr[i] > arr[i + 1])) {

            critical.push(i + 1);
        }
    }

    // if length of critical array is less than or equal to 1 then return result
    if (critical.length <= 1) {
        return result;
    }

    // initialize min as Infinity
    let min: number = Infinity;

    // initialize max as difference between last and first value of array critical
    let max: number = critical.at(-1) - critical.at(0);

    // run for loop from index 0 to critical length - 1
    for (let i = 0; i < critical.length - 1; i++) {

        // calculate difference between next value of arr critical and current value of arr critical
        let diff: number = critical.at(i + 1) - critical.at(i);

        // find minimum between min and diff and assign back to min
        min = Math.min(min, diff);
    }

    // assign 0th index value of result as min and 1th index value as max
    result[0] = min;
    result[1] = max;

    // return answer result
    return result;
};
```