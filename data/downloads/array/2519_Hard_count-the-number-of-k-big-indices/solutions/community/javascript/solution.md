# JavaScript, Priority Queue, Beats 100%

**Author:** ruslic19
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-k-big-indices/solutions/4717738/](https://leetcode.com/problems/count-the-number-of-k-big-indices/solutions/4717738/)

---

# Complexity
- Time complexity: $$O(nlog(k))$$
- Space complexity: $$O(n)$$

# Code
```
function kBigIndices(nums, k) {
    const validLeftSide = calcIndicesWithValidLeftSide(nums, k)
    return calcIndicesWithBothValidSides(nums, k, validLeftSide)
}

function calcIndicesWithValidLeftSide(nums, k) {
    const validLeftSide = new Set()

    const pq = new PriorityQueue({compare: (a, b) => b - a})
    for (let i = 0; i < k; i++) pq.enqueue(nums[i])

    for (let i = k; i < nums.length - k; i++) {
        const biggest = pq.front()
        if (biggest < nums[i]) {
            validLeftSide.add(i)
            continue
        }

        if (biggest > nums[i]) {
            pq.dequeue()
            pq.enqueue(nums[i])
        }
    }

    return validLeftSide
}

function calcIndicesWithBothValidSides(nums, k, validLeftSide) {
    const pq = new PriorityQueue({compare: (a, b) => b - a})
    for (let i = nums.length - 1; i > nums.length - k - 1; i--) pq.enqueue(nums[i])

    let kBigIndices = 0
    for (let i = nums.length - k - 1; i >= k; i--) {
        const biggest = pq.front()
        if (biggest < nums[i] && validLeftSide.has(i)) {
            kBigIndices++
            continue
        }

        if (biggest > nums[i]) {
            pq.dequeue()
            pq.enqueue(nums[i])
        }
    }
    
    return kBigIndices
}
```