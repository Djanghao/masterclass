# It is NOT an easy problem to solve. Using Sliding window, Priority queue

**Author:** bossnu1204
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/5910641/](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/5910641/)

---

# Code
```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function (nums, k, x) {
    // Initialize values
    // Answer, array is sliding window,
    // memo is where the frequency of occurrence of numbers is stored
    // compare is a function that compares the frequency of
    // occurrence of numbers in the sliding window. If the frequency
    // is the same, it will compare which number is larger.
    let answer = new Array(nums.length - k + 1).fill(0)
    let array
    let memo = {}
    let compare = ((a, b) => {
        if (memo[a] != memo[b]) {
            return memo[b] - memo[a]
        }
        return b - a
    })


    // Fill each element into the answer array
    for (let i = 0; i < answer.length; i++) {

        // [START] sliding window
        if (i == 0) {
            array = nums.slice(0, k)
            for (let ar of array) {
                memo[ar] = (memo[ar] || 0) + 1
            }
        } else {
            let elDel = array.shift()
            let elInsert = nums[i + k - 1]
            array.push(elInsert)
            memo[elDel] -= 1
            memo[elInsert] = (memo[elInsert] || 0) + 1
        }
        // [END] sliding window

        // use PriorityQueue to sort
        let priority = new PriorityQueue({ compare })
        for (let key in memo) {
            priority.enqueue(key)
        }

        // Use PriorityQueue to get the most frequent numbers from
        // largest to smallest for calculation
        let ans = 0
        for (let j = 0; j < x; j++) {
            let el = priority.dequeue()
            if (el) {
                ans += memo[el] * el
            }
        }
        answer[i] = ans
    }
    return answer
};
```