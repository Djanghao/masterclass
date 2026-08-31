# C solution using a map. Fully explained. O(n) time, O(k) space.

**Author:** gugliamo
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-anagram-mappings/solutions/3401204/](https://leetcode.com/problems/find-anagram-mappings/solutions/3401204/)

---

# Approach
We first find the largest value in nums2 array. We then use that value to initiallize an array that we use for to map values to indexes in nums2. This map ranges from 0 to the found max value in nums2 array (nums2MaxVal + 1). Next, we map nums2 values (key) to the index the value appears in (value). FInally, we create our return array of the same size the incoming arrays. Now all we do is iterate over nums1 array and use our map of nums2 to find where values from nums1 appear in nums2 and add it to our return map array. 

# Complexity
- Time complexity: O(n), where n is the size of either incoming arrays. We iterate over nums2 to find its maximum value, then a second time to map its values. Finally, we iterate over nums1 to map its values in relation to nums2. O(3n) = O(n). 

- Space complexity: O(k). We create a map that can be made of k elements, where k is the range 0 to largest element in nums2.

# Code
```
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int max(int x, int y){
    return x > y ? x : y;
}

int* anagramMappings(int* nums1, int nums1Size, int* nums2, int nums2Size, int* returnSize){
    int nums2MaxVal = 0;
    for(int i = 0; i < nums2Size; i++)
        nums2MaxVal = max(nums2MaxVal, nums2[i]);
    int* nums2Map = malloc((nums2MaxVal + 1) * sizeof(int));
    for(int i = 0; i < nums2Size; i++)
        nums2Map[nums2[i]] = i;
    int* resMap = malloc(nums1Size * sizeof(int));
    *returnSize = nums1Size;

    for(int i = 0; i < nums1Size; i++){
        resMap[i] = nums2Map[nums1[i]];
    }

    free(nums2Map);
    return resMap;
}
```