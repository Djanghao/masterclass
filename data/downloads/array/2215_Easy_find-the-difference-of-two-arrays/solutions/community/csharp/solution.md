# 🔍 [VIDEO] Find the 🔢 Difference of Two Arrays

**Author:** vanAmsen
**Votes:** 16
**Link:** [https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/3833477/](https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/3833477/)

---

# Intuition

Our first thoughts on solving this problem revolve around the concept of set differences. Given two integer arrays, we need to find the unique integers in the first array that are not in the second, and vice versa. The idea of set difference fits perfectly here. 

https://youtu.be/eo-NwnOjF1Q

# Approach

We approach this problem by leveraging the capabilities of Python sets. Here are the steps:

1. Convert the input lists to sets. This serves two purposes: it removes any duplicate elements, and it allows us to perform set operations. 

2. Use the `-` operator to find the difference between the sets. This gives us the elements that are in one set but not in the other.

3. Convert the resulting sets back to lists and return them.

# Complexity

- Time complexity: The time complexity of our solution is \\(O(n)\\), where \\(n\\) is the length of the longer input list. This is because we iterate through each list once to convert it to a set.

- Space complexity: The space complexity of our solution is also \\(O(n)\\), where \\(n\\) is the length of the longer input list. This is because we create a new set for each input list.

This Python code defines a function `findDifference` that finds and returns the difference between two input arrays. The function is part of a class `Solution`, as required by the LeetCode problem format.

# Code

```Python []
from typing import List

class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        set1 = set(nums1)
        set2 = set(nums2)
        diff1 = set1 - set2
        diff2 = set2 - set1
        return [list(diff1), list(diff2)]
```
``` C++ []
class Solution {
public:
    vector<vector<int>> findDifference(vector<int>& nums1, vector<int>& nums2) {
        set<int> set1(nums1.begin(), nums1.end());
        set<int> set2(nums2.begin(), nums2.end());
        
        vector<int> diff1, diff2;
        for(int num : set1)
            if(set2.find(num) == set2.end())
                diff1.push_back(num);
                
        for(int num : set2)
            if(set1.find(num) == set1.end())
                diff2.push_back(num);
                
        return {diff1, diff2};
    }
};
```
``` JavaScript []
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
        let set1 = new Set(nums1);
        let set2 = new Set(nums2);

        let diff1 = [...set1].filter(x => !set2.has(x));
        let diff2 = [...set2].filter(x => !set1.has(x));

        return [diff1, diff2];
};
```
``` C# []
public class Solution {
    public IList<IList<int>> FindDifference(int[] nums1, int[] nums2) {
        HashSet<int> set1 = new HashSet<int>(nums1);
        HashSet<int> set2 = new HashSet<int>(nums2);
        
        set1.ExceptWith(nums2);
        set2.ExceptWith(nums1);
        
        return new List<IList<int>> { set1.ToList(), set2.ToList() };
    }
}
```
``` Java []
class Solution {
    public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
        Set<Integer> set1 = Arrays.stream(nums1).boxed().collect(Collectors.toSet());
        Set<Integer> set2 = Arrays.stream(nums2).boxed().collect(Collectors.toSet());
        
        // Remove all elements from set1 that are present in set2
        set1.removeAll(Arrays.stream(nums2).boxed().collect(Collectors.toSet()));
        
        // Remove all elements from set2 that are present in set1
        set2.removeAll(Arrays.stream(nums1).boxed().collect(Collectors.toSet()));
        
        return Arrays.asList(new ArrayList<>(set1), new ArrayList<>(set2));
    }
}
```