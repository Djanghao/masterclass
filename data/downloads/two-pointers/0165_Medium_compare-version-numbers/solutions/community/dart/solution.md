# BEATS 100% DART solution with explanation

**Author:** Mohamed_Sadeck
**Votes:** 2
**Link:** [https://leetcode.com/problems/compare-version-numbers/solutions/5105772/](https://leetcode.com/problems/compare-version-numbers/solutions/5105772/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is essentially asking to compare two version numbers. The first thought that comes to mind is to split the version numbers by the dot ('.') and then compare each corresponding part from the two versions. If a version does not specify a revision at an index, we treat the revision as 0.
# Approach
<!-- Describe your approach to solving the problem. -->
The approach to solving this problem is to first split the version numbers into lists of integers. Then, we compare each corresponding pair of integers in the two lists. If we find a pair where one integer is greater than the other, we return 1 or -1 depending on which version number the larger integer came from. If we reach the end of one list before the other, we continue comparing the remaining integers in the longer list to 0. If we find a non-zero integer, we return 1 or -1 depending on which version number the non-zero integer came from. If we reach the end of both lists without finding a difference, we return 0.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is O(n), where n is the maximum length of the two version numbers. This is because in the worst case, we need to compare each part of the version numbers.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is also O(n), where n is the maximum length of the two version numbers. This is because we are storing each part of the version numbers in a list.
# Code
```
class Solution {
  int compareVersion(String version1, String version2) {
    // Split the version strings into lists of integers
    final v1 = version1.split('.').map((e) => int.parse(e)).toList();
    final v2 = version2.split('.').map((e) => int.parse(e)).toList();

    final len;
    final ans;
    final list;

    // Determine which version number has fewer parts
    // and which bigger list to treat in case they were equals
    if(v1.length < v2.length){
        len = v1.length;
        ans = -1;
        list = v2;
    } else {
        len = v2.length;
        ans = 1;
        list = v1;
    }

    int i;

    // Compare each corresponding pair of parts
    for(i = 0; i < len; i++){
        if(v1[i] < v2[i]) return -1;  // If a part in v1 is less than the corresponding part in v2, return -1
        if(v1[i] > v2[i]) return 1;   // If a part in v1 is greater than the corresponding part in v2, return 1
    }

    // If one version number has more parts than the other, compare the extra parts to 0
    for(i; i < list.length; i++){
        if(list[i] != 0) return ans;  // If a part is non-zero, return 1 or -1 depending on which version number it came from
    }

    // If no difference was found, return 0
    return 0;
  }
}
```