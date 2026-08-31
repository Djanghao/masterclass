# easy Solution

**Author:** Akshay_velur
**Votes:** 2
**Link:** [https://leetcode.com/problems/duplicate-zeros/solutions/5406794/](https://leetcode.com/problems/duplicate-zeros/solutions/5406794/)

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
  void duplicateZeros(List<int> arr) {
    for(int i=0;i<arr.length;i++){
        if(arr[i]==0){
            arr.insert(i,0);
            arr.removeLast();
            i++;
        }
    }
  }
}
```