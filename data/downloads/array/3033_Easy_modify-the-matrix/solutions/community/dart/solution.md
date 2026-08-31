# Memoization

**Author:** strathdeek
**Votes:** 0
**Link:** [https://leetcode.com/problems/modify-the-matrix/solutions/5459899/](https://leetcode.com/problems/modify-the-matrix/solutions/5459899/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We want to iterate through the matrix once, simultaneously calculating the maximum for each column as well as remembering the indices that need to be replaced.

# Approach
<!-- Describe your approach to solving the problem. -->
To avoid calculating the column max's more than once for each column, we utilize a memoization technique with a map. We iterate the matrix once to calculate the column max's, and then we replace the -1's with the max's stored in the map.

In order to avoid traversing the array again to replace the -1's(would be O(nm)), we instead store the location of all the -1's in a list on the first traversal, and replace them all at the end.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(nm)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(nm)

# Code
```
class Solution {
  List<List<int>> modifiedMatrix(List<List<int>> matrix) {
    Map<int,int> map = Map<int,int>();
    List<(int,int)> toReplace = <(int,int)>[];
    List<List<int>> result = List.from(matrix);

    for(int row =0; row < matrix.length; row++){
        for(int col =0; col < matrix[row].length; col++ ){
            final val = matrix[row][col];
            final colmax = map[col] ?? -1;
            if(val > colmax){
                map[col] = val;
            }

            if( val == -1){
                toReplace.add((row,col));
            }
        }
    }

    for(final node in toReplace){
        result[node.$1][node.$2] = map[node.$2] ?? -1;
    }
    return result;
  }
}
```