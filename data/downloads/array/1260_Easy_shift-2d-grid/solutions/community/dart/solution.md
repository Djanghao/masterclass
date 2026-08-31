# 100% speed, 100% memory beaten

**Author:** abrorjonbahodirov
**Votes:** 0
**Link:** [https://leetcode.com/problems/shift-2d-grid/solutions/4701300/](https://leetcode.com/problems/shift-2d-grid/solutions/4701300/)

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
  List<List<int>> shiftGrid(List<List<int>> grid, int k) {
    int b = grid[0].length;
    List<int> c = [];
    for(int i = 0; i < grid.length; i++){
        List<int> l = grid[i];
        for(int j = 0; j < l.length; j++){
            c.add(l[j]);
        }
    }
    for(int i = 0; i < k; i++){
        c.insert(0, c.last);
        c.removeLast();
    }
    List<List<int>> p =[];
        List<int> m = [];
    for(int i = 0; i < c.length; i++){
        int h = i+1;
        if(h % b == 0){
            m.add(c[i]);
            p.add(m);
            m = [];
        }
        else{
            m.add(c[i]);
        }
    }
    return p;
  }
}
```