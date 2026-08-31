# Easy Method

**Author:** jincykp
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/5945495/](https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/5945495/)

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
```dart []
class Solution {
  int findTheDistanceValue(List<int> arr1, List<int> arr2, int d) {
int c=0;
    for(int i=0;i<arr1.length;i++){
        c++;
        for(int j=0;j<arr2.length;j++){
            if((arr1[i]-arr2[j]).abs()<=d)
        {   
            c--;
            // arr1.removeAt(i);
           // i--;
            break;}
        }
    }return c;
  }
}
```