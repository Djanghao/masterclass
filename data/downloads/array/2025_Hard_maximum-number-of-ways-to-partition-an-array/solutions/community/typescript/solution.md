# [Time & Memory 100%] Find the number to change for a partition to work

**Author:** jhw123
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array/solutions/1689581/](https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array/solutions/1689581/)

---

### Intuition

If no element is allowed to change, it is stratight forward to find the number of possible partitions; we iterate through each element and see if the sum of its preceding elements is half the total sum.

Now, if an element has to changed, find which **number** should be changed. 
For example, let's say index 0 is taken as a pivot for [2, -1, 2] and k=3.

2 | -1   2

For simplicity first assume that we can change an element on the right side of the pivot only.
The sum of elements on left is 2 and the total sum is 3.
In order for this partition to work, number 2 (regardless of its position) should be changed to k, so that the total sum after the change becomes `totalSum - numToChange + k = 3 - 2 + 3 = 4 = 2 * 2 = 2 * (sum of elements on left)`.
If any 2 on the right side of the pivot is changed to k, we get +1 partition available.
We keep this information in a store (this is `hash` in code below) and apply it if we meet 2 as we go through the list further.
Likewise, we can find the number to change for each iteration. 
`numToChange = totalSum + k - 2 * (sum of elements on left) `

Since we first assumed that only an element on the right side of pivot can change, we iterate the array in the opposite direction to count all cases.

### Complexity

Time: `O(n)`
Space: `O(n)`

```
function waysToPartition(nums: number[], k: number): number {
	// partitionIfChange[i] is the number of possible partitions if nums[i] is changed to k. Last index is reserved for the case if no elment is changed.
    const partitionIfChange = Array(nums.length+1).fill(0)
    const totalSum = nums.reduce((s, n) => s+n, 0)
	// hash.get(i) is the number of available partitions if number i is change to k.
    const hash = new Map<number, number>()
    // find the number of possible partitions if no element is changed.
	let sum = 0
    for (let i=0; i<nums.length-1; i+=1) {
        sum += nums[i]
        if (2 * sum === totalSum) {
            partitionIfChange[nums.length] += 1
        }
    }
	// forward pass to find the number of partitions if an elment is changed.
    sum = 0
    for (let i=0; i<nums.length; i+=1) {
        const num = nums[i]
        sum += num
        const numToChange = totalSum + k - 2 * sum
        partitionIfChange[i] += hash.get(num) ?? 0
        hash.set(numToChange, (hash.get(numToChange) ?? 0) + 1)
    }
	// backward pass to find the number of partitions if an elment is changed.
    sum = 0
    hash.clear()
    for (let i=nums.length-1; 0<=i; i-=1) {
        const num = nums[i]
        sum += num
        const numToChange = totalSum + k - 2 * sum
        partitionIfChange[i] += hash.get(num) ?? 0
        hash.set(numToChange, (hash.get(numToChange) ?? 0) + 1)
    }
    return _.max(partitionIfChange)
};
```