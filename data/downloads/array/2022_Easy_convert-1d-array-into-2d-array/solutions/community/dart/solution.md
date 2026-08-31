# Simple solution

**Author:** salman_kv
**Votes:** 3
**Link:** [https://leetcode.com/problems/convert-1d-array-into-2d-array/solutions/4297163/](https://leetcode.com/problems/convert-1d-array-into-2d-array/solutions/4297163/)

---


# Code
```
class Solution {
  List<List<int>> construct2DArray(List<int> original, int m, int n) {
    if(original.length != (m*n)){
        return [];
    }
    List<List<int>> darray=[];
    int k=0;
    for(int i=0;i<m;i++){
        darray.add([]);
        for(int j=0;j<n;j++){
            darray[i].add(original[k++]);
        }
    }
    return darray;

  }
}
```