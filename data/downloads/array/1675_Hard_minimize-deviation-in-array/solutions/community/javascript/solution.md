# Minimize Deviation in Array | Detailed Explanation

**Author:** sgallivan
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimize-deviation-in-array/solutions/1042500/](https://leetcode.com/problems/minimize-deviation-in-array/solutions/1042500/)

---

***Idea:***

The hints in this case are a little backwards. Since it's only ever possible to perform the multiply operation once (as the number will then be an even number), but you can potentially perform the division operation many times, it's far better to start from the maximum value for each **nums[i]** and work downward.

If you started from the minimum value, as the hints suggest, then you'd have to separately keep track of the max value for each element so that you don't multiply past that amount while moving upward.

The idea is actually very simple from there. Find the max possible value for each **nums[i]**, then keep taking the largest one and dividing by **2** if it's even. At each step, check to see if you've found a new best **ans** (highest value - lowest value). If the largest number is odd, you can't divide it by **2**, which means it's impossible to reach a better number than you've already found, so return your best **ans**.

` `
***Implementation:***

Since we need sorted data, but we only ever need the modify the max value at any time, we should use a **max-heap** or **priority queue** structure. We will need the smallest value of **nums**, but we don't actually need to modify that element, so we can just keep track of it in **min** as we go.

First, we need to iterate through **nums**, multiply any odd numbers by **2**, then insert them into **heap** or **pq** while making sure to update **min** if necessary.

Then, while the largest value in **heap**/**pq** is even, we can take it out, divide it by **2**, update our **ans** and **min** if necessary, and reinsert it back into the **heap**/**pq**.

Once we reach an odd number at the top of **heap**/**pq**, return the best **ans**.

` `
***Javascript Code w/ MinPriorityQueue():***

This code is easier to read, but less efficient.

The best result for the code below is **360ms / 82.8MB** (beats 58% / 27%)
```
var minimumDeviation = function(nums) {
    let pq = new MaxPriorityQueue({priority: x => x})
    for (let n of nums) {
        if (n % 2) n *= 2
        pq.enqueue(n)
    }
    let ans = pq.front().element - pq.back().element
    while (pq.front().element % 2 === 0) {
        pq.enqueue(pq.dequeue().element / 2)
        ans = Math.min(ans, pq.front().element - pq.back().element)
    }
    return ans
};
```
` `
**Javascript Code w/ Max-Heap Implementation:**

The best result for the code below is **128ms / 52.7MB** (beats 97% / 85%)
```
var minimumDeviation = function(nums) {
    let len = nums.length, min = Infinity,
        heap = new Uint32Array(len+1), hix = 1
    heap[0] = 2e9
    const heapify = val => {
        let i = hix, par = i >> 1, temp
        heap[hix++] = val
        while (heap[par] < heap[i]) {
            temp = heap[par], heap[par] = heap[i], heap[i] = temp
            i = par, par = i >> 1
        }
    }
    const extract = () => {
        let max = heap[1], left, right, temp,
            i = 1, child = heap[3] > heap[2] ? 3 : 2
        heap[1] = heap[--hix], heap[hix] = 0
        while (heap[i] < heap[child]) {
            temp = heap[child], heap[child] = heap[i], heap[i] = temp
            i = child, left = i << 1, right = left + 1
            child = heap[right] > heap[left] ? right : left
        }
        return max
    }
    for (let i = 0, n = nums[0]; i < len; n = nums[++i]) {
        if (n % 2) n *= 2
        if (n < min) min = n
        heapify(n)
    }
    let curr = extract(), ans = curr - min
    while (curr % 2 === 0) {
        curr /= 2
        if (curr < min) min = curr
        heapify(curr)
        curr = extract()
        ans = Math.min(ans, curr - min)
    }
    return ans
};
```