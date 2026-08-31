# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-anagram-mappings/solutions/5531789/](https://leetcode.com/problems/find-anagram-mappings/solutions/5531789/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
public int[] anagramMappings(int[] nums1, int[] nums2) {
    // Create a map to store the value-to-index mappings for nums2
    Map<Integer, Integer> indexMap = new HashMap<>();
    for (int i = 0; i < nums2.length; i++) {
        indexMap.put(nums2[i], i);
    }

    // Create the result array to store the mappings
    int[] result = new int[nums1.length];
    for (int i = 0; i < nums1.length; i++) {
        result[i] = indexMap.get(nums1[i]);
    }

    return result;
}
```
```Javascript []
var anagramMappings = function(nums1, nums2) {
    // Create a map to store the value-to-index mappings for nums2
    let indexMap = new Map();
    for (let i = 0; i < nums2.length; i++) {
        indexMap.set(nums2[i], i);
    }

    // Create the result array to store the mappings
    let result = new Array(nums1.length);
    for (let i = 0; i < nums1.length; i++) {
        result[i] = indexMap.get(nums1[i]);
    }

    return result;
};
```
```Typescript []
function anagramMappings(nums1: number[], nums2: number[]): number[] {
    // Create a map to store the value-to-index mappings for nums2
    let indexMap = new Map<number, number>();
    for (let i = 0; i < nums2.length; i++) {
        indexMap.set(nums2[i], i);
    }

    // Create the result array to store the mappings
    let result: number[] = new Array(nums1.length);
    for (let i = 0; i < nums1.length; i++) {
        result[i] = indexMap.get(nums1[i])!;
    }

    return result;
};
```