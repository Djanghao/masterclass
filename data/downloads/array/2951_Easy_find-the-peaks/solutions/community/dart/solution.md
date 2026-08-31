# iam the king check my answer

**Author:** jaseemca
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-peaks/solutions/5069864/](https://leetcode.com/problems/find-the-peaks/solutions/5069864/)

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
```
class Solution {
  List<int> findPeaks(List<int> mountain) {
    List<int>peak=[];
    for(int i=1;i<mountain.length-1;i++){
        if(mountain[i]>mountain[i-1]&&mountain[i]>mountain[i+1]){
            peak.add(i);
        }
    }
    return peak;
  }
}
```