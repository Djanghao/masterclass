# ✅ 90% Runtime | 97% Memory - Precise approach 👍🔥

**Author:** raviTejaY
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/4502779/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/4502779/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
*We need to count the frequency of each element in the array, and then calculate the minimum number of operations to remove all elements using the two types of operations described. *

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Count Frequencies**: We'll use a map or an object to count the frequency of each element in the array.
2. **Perform Operations**: For each unique element, we'll calculate the number of operations needed. 
    - If an element appears n times, we can perform n / 3 operations of type 2 (removing three elements at a time)
    - if there are 1 or 2 elements left, we'll perform an operation of type 1.

3. **Check for Impossibility**: If any element appears only once, it's impossible to perform any operation to remove it, so we return -1.
# Complexity
### - Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
**Counting Frequencies:** The first part of the function iterates over all elements in the array to count their frequencies. So the time complexity for this is $$O(n)$$
n - length of the given array

**Performing operations:** The second part iterates over the entries of frequency map. In the worst case scenario of all the entries are unique, time complexity is $$O(n)$$
n - number of entries in frequency map
i.e.,
$$ 2 * O(n) $$
### - Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity depends on the number of entries in the frequency map we achieved. In the worst case it would be the length of given array of size 'n'

# JavaScript
```
var minOperations = function(nums) {
    let map = new Map();
    
    // count frequencies of each element
    for(let i of nums){
        if(!map.has(i)) {
            map.set(i, 1);
        } else {
            map.set(i, map.get(i) + 1);
        }
    }
    let res = Array.from(map.values());
    let operations = 0;
    for(const freq of res){
        // If any number obtain only once return -1
        if(freq === 1) return -1;

        // Calculate the number of operations of type 2
        operations += Math.floor(freq / 3);

        // If 1 or 2 elements are left, perform an operation of type 1
        if(freq % 3 > 0){
            operations++;
        }
    }
    return operations;
};
```
# Python
```
class Solution(object):
    def minOperations(self, nums):
        freq_map = {}

        # Count frequencies of each element
        for num in nums:
            freq_map[num] = freq_map.get(num, 0) + 1

        operations = 0

        for freq in freq_map.values():
            if freq == 1:
                # If any number appears only once, return -1
                return -1

            # Calculate the number of operations of type 2
            operations += freq // 3

            # If 1 or 2 elements are left, perform an operation of type 1
            if freq % 3 > 0:
                operations += 1

        return operations
```
# TypeScript
```
function minOperations(nums: number[]): number {
    const freqMap: Record<number, number> = {};

    // Count frequencies of each element
    nums.forEach(num => {
        freqMap[num] = (freqMap[num] || 0) + 1;
    });

    let operations = 0;

    for (const freq of Object.values(freqMap)) {
        if (freq === 1) {
            // If any number appears only once, return -1
            return -1;
        }

        // Calculate the number of operations of type 2
        operations += Math.floor(freq / 3);

        // If 1 or 2 elements are left, perform an operation of type 1
        if (freq % 3 > 0) {
            operations++;
        }
    }

    return operations;
}
```

## You liked it! please vote !
![intro-import.jpg](./images/0.jpeg)
