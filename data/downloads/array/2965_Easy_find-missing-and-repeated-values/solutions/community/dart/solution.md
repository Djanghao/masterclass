# Easy Approach!

**Author:** jasijasu959
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-missing-and-repeated-values/solutions/5277727/](https://leetcode.com/problems/find-missing-and-repeated-values/solutions/5277727/)

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
  List<int> findMissingAndRepeatedValues(List<List<int>> grid) {
    
    List<int>res = [];
    Set<int> store ={};

    for(int i = 0 ; i < grid.length ; i++){
        for(int j = 0 ; j< grid[i].length ; j++){
            if(store.contains(grid[i][j]) && !res.contains(grid[i][j])){
                res.add(grid[i][j]);
            }else{
                store.add(grid[i][j]);
            }
        }
    }
    print(res);
    List<int>flatList = grid.expand((row)=>row).toList();
    flatList.sort();
     print(flatList);
     for(int i = 1 ; i <= flatList.length ; i++){
        if(!store.contains(i)){
            res.add(i);
        }
     }
    return res;
  }
}
```