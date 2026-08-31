# Dart: fast and simple - O(n)

**Author:** alexqwesa
**Votes:** 2
**Link:** [https://leetcode.com/problems/triangle/solutions/3234771/](https://leetcode.com/problems/triangle/solutions/3234771/)

---

# Intuition + Approach
- You can work in place
- Where only `triangle.last.length` paths you need to check
- On each step you can drop one path
- You can go from down to up and replace `weight` of each element in `level` to a minimal `path to the element` (from down to this level)
- Last update will be the answer

# Complexity
- Time complexity: O(n) - we only access each element 3 times or less

- Space complexity: O(1) - we working in place
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int minimumTotal(List<List<int>> triangle) {
      for(int lvl = triangle.length-1; lvl > 0; lvl--){
          for (int i = 0; i<triangle[lvl].length-1; i++){
              triangle[lvl-1][i] += min(triangle[lvl][i],triangle[lvl][i+1]); 
          }
      }
      return triangle[0].first;   
  }
}
```