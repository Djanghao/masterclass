# Find Least Unique Ints

**Author:** BA-CalderonMorales
**Votes:** 2
**Link:** [https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solutions/2989979/](https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solutions/2989979/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
1. Create a frequency map of elements in the array. This allows us to easily find the number of unique integers and the frequency of each integer.\r
2. Sort the frequency map in ascending order of frequency. This ensures that we remove elements with the lowest frequency first.\r
3. Starting from the element with the lowest frequency, remove elements from the frequency map until `k` is reached. For each element, decreement `k` by the element's frequency.\r
4. If `k` is a non-negative, return the total number of unique integers minus the number of elements we removed.\r
5. If we removed all elements from the frequency map and still didn't reach `k`, return 0.\r
\r
We want to remove elemnts with the lowest frequency first, since removing these elements will have the least impact on the number of unique integers in the array. By sorting the frequency map in ascending order of frequency, we can ensure that we remove elements with the lowest frequency first.\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
1. Create a `freqMap` variable to store the frequency of each number in the array.\r
2. Convert `freqMap` to an array (`freqArray`) of `[number, frequency]` pairs.\r
3. Sort `freqArray` in ascending order of frequency.\r
4. Initialize a variable `count` to 0.\r
5. Remove elements from `freqArray` until `k` is reached. For each element, decrement `k` by the element's frequency and increment `count`.\r
6. If `k` is non-negative, return `freqMap.size - count`, which is the total number of unique integers minus the number of elements removed.\r
7. If we removed all elements from `freqArray and still didn't reach `k`, return 0.\r
\r
# Complexity\r
- Time complexity: $$O(n * log(n))$$ - where n is the number of elmeents in the array. This is because we are sorting the frequency map, which takes `O(n * log(n))` time in the worst case.\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity: $$O(n)$$ = where n is the number of elmeents in the array. This is because we are using a map to store the frequency of each element, which has a size that is proportional to the number of elements in the array.\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```\r
function findLeastNumOfUniqueInts(arr: number[], k: number): number {\r
    // Create a map to store the frequency of each number.\r
    const freqMap = new Map<number, number>();\r
    for (const num of arr) {\r
        freqMap.set(num, (freqMap.get(num) || 0) + 1);\r
    }\r
\r
    // Convert the map to an array of [number, frequesncy] pairs\r
    const freqArray = [...freqMap.entries()];\r
\r
    // Sort the array in ascending order of frequency\r
    freqArray.sort((a, b) => a[1] - b[1]);\r
\r
    // Initialize a variable to count the number of unique integers with the current\r
    // lowest frequency.\r
    let count = 0;\r
\r
    // Remove elements from the array until k is reached.\r
    while (k > 0 && freqArray.length > 0) {\r
        const [, freq] = freqArray[0];\r
        if (k >= freq) {\r
            k -= freq;\r
            count++;    \r
        } else {\r
            break;\r
        }\r
        freqArray.shift();\r
    }\r
\r
    // If k is a non-negative, return the size of the freqMap minus the updated count variable.\r
    // frequency.\r
    if (k >= 0) {\r
        return freqMap.size - count\r
    }\r
\r
    // If we removed all elements from the array and still didn't reach k, return 0.\r
    return 0;\r
};\r
```