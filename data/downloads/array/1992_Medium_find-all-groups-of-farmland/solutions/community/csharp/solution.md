# RECURSION - EASY SUM BUT IAM FFELING SICK TODAY✅✅69_BEATS_100%✅✅🔥Easy Solution🔥With Explanation🔥

**Author:** phoenix_sr
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-all-groups-of-farmland/solutions/5047763/](https://leetcode.com/problems/find-all-groups-of-farmland/solutions/5047763/)

---

![dice-1502706_640.jpg](./images/0.jpeg)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
WE NEED TO FIND THE LEFT MOST COORDINATE AND RIGHTMOST COORDINATE FOR ALL THE FIELDS
WE CAN USE RECURSION TO DO SO LETS SEE HOW
# Approach
<!-- Describe your approach to solving the problem. -->
1. WE FIRST CREATE A FARMER FUNCTION THAT WE WILL CALL RECURSIVELY
2. IT WILL CHECK IF THE LAND WE ARE TRYING TO ACCESS IS OUT OF BOUNDS  OR IS NOT A FIELD IN WHICH CASE IT WILL JUST RETURN BACK
4. ONCE WE HAVE A FIELD THAT IS IN BOUNDS AND NOT ZERO
5. WE MARK IT ZERO TO KNOW THAT WE HAVE ALREADY VISITED THIS POINT AND NEED NOT CONSIDER IT AGAIN
6. NOW IN OUR ARRAY CONTAINING THE LEFT MOST POINTS AND RIGHT MOST POINTS
7. INITIALLY THE POINT IN LAND THAT WE FIRST ENCOUNTER A FIELD LEFT MOST AND RIGHT MOST POINTS ARE ITSELF ONLY
8. NOW IN THE RECURSIVE FUNCTION WE COMPARE OUR FIELD COORDINATED TO THE MIN AND MAX OF THE ORIGINAL COORDINATES AND MODIFY THEM ACCORDINGLY
9. LEFT MOST POINT WILL BE THE LEAST POSSIBLE COORDINATE
10. RIGHT MOST POINT WILL BE THE MAX POSSIBLE COORDINTE
11. JUST RETURN THE OUTPUT ARRAY
12. HOPE YOU UNDERSTOOD IF NOT COMMENT BELOW I WILL HELP
# Complexity
- Time complexity:O(M*N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(M*N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []

var findFarmland = function(land) {
    let output=[]
    let farmer = function(i,j,arr){
        if(i<0 || j<0 || i>land.length-1 || j>land[0].length-1 || land[i][j]!=1)return
        land[i][j]=0
        if(i<arr[0]){
            arr[0]=i
        }
        if(j<arr[1]){
            arr[1]=j
        }
        if(i>arr[2]){
            arr[2]=i
        }
        if(j>arr[3]){
            arr[3]=j
        }
        farmer(i+1,j,arr)
        farmer(i-1,j,arr)
        farmer(i,j+1,arr)
        farmer(i,j-1,arr)

    }
    for(let i=0;i<land.length;i++){
        for(let j=0;j<land[0].length;j++){
            if(land[i][j]==1){
                let arr=[i,j,i,j]
                farmer(i,j,arr)
                output.push(arr)
            }
        }
    }
    return output
};
```
```python []
def findFarmland(land):
    output = []
    for i in range(len(land)):
        for j in range(len(land[0])):
            if land[i][j] == 1:
                arr = [i, j, i, j]
                farmer(i, j, arr, land)
                output.append(arr)
    return output

def farmer(i, j, arr, land):
    if i < 0 or j < 0 or i >= len(land) or j >= len(land[0]) or land[i][j] != 1:
        return
    land[i][j] = 0
    arr[0] = min(arr[0], i)
    arr[1] = min(arr[1], j)
    arr[2] = max(arr[2], i)
    arr[3] = max(arr[3], j)
    farmer(i + 1, j, arr, land)
    farmer(i - 1, j, arr, land)
    farmer(i, j + 1, arr, land)
    farmer(i, j - 1, arr, land)
```
```java []
import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[][] findFarmland(int[][] land) {
        List<int[]> output = new ArrayList<>();
        for (int i = 0; i < land.length; i++) {
            for (int j = 0; j < land[0].length; j++) {
                if (land[i][j] == 1) {
                    int[] arr = {i, j, i, j};
                    farmer(i, j, arr, land);
                    output.add(arr);
                }
            }
        }
        int[][] result = new int[output.size()][4];
        for (int i = 0; i < output.size(); i++) {
            result[i] = output.get(i);
        }
        return result;
    }

    private void farmer(int i, int j, int[] arr, int[][] land) {
        if (i < 0 || j < 0 || i > land.length - 1 || j > land[0].length - 1 || land[i][j] != 1) return;
        land[i][j] = 0;
        if (i < arr[0]) {
            arr[0] = i;
        }
        if (j < arr[1]) {
            arr[1] = j;
        }
        if (i > arr[2]) {
            arr[2] = i;
        }
        if (j > arr[3]) {
            arr[3] = j;
        }
        farmer(i + 1, j, arr, land);
        farmer(i - 1, j, arr, land);
        farmer(i, j + 1, arr, land);
        farmer(i, j - 1, arr, land);
    }
}
```
```c []
#include <stdio.h>
#include <stdlib.h>

void farmer(int i, int j, int arr[], int** land, int rows, int cols) {
    if (i < 0 || j < 0 || i >= rows || j >= cols || land[i][j] != 1) return;
    land[i][j] = 0;
    if (i < arr[0]) arr[0] = i;
    if (j < arr[1]) arr[1] = j;
    if (i > arr[2]) arr[2] = i;
    if (j > arr[3]) arr[3] = j;
    farmer(i + 1, j, arr, land, rows, cols);
    farmer(i - 1, j, arr, land, rows, cols);
    farmer(i, j + 1, arr, land, rows, cols);
    farmer(i, j - 1, arr, land, rows, cols);
}

int** findFarmland(int** land, int landSize, int* landColSize, int* returnSize, int** returnColumnSizes) {
    int** output = malloc(landSize * sizeof(int*));
    *returnColumnSizes = malloc(landSize * sizeof(int));
    *returnSize = 0;
    for (int i = 0; i < landSize; i++) {
        for (int j = 0; j < *landColSize; j++) {
            if (land[i][j] == 1) {
                int* arr = malloc(4 * sizeof(int));
                arr[0] = i;
                arr[1] = j;
                arr[2] = i;
                arr[3] = j;
                farmer(i, j, arr, land, landSize, *landColSize);
                output[(*returnSize)] = arr;
                (*returnColumnSizes)[(*returnSize)++] = 4;
            }
        }
    }
    return output;
}
```
