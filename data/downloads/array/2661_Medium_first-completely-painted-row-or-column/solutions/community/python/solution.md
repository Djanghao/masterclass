# ✔💯 DAY 395 | EASY | 100% 0ms | [PYTHON/JAVA/C++] | EXPLAINED | Approach 💫

**Author:** ManojKumarPatnaik
**Votes:** 17
**Link:** [https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/3468252/](https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/3468252/)

---

# Please Upvote as it really motivates me \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99
# Intuition & Approach
<!-- Describe your approach to solving the problem. -->
##### \u2022	We are given an array  arr and a matrix  mat.
##### \u2022	We first create a  HashMap called  map to store the coordinates of each element in  mat. The key of the  HashMap is the value of the element, and the value is an array of two integers representing the row and column indices of the element.
##### \u2022	We also create two arrays row and  col to keep track of the number of elements painted in each row and column of  mat.
##### \u2022	We then iterate over the elements of arr and for each element, we get its coordinates from the  map
##### \u2022	We increment the count of painted elements in the row and column corresponding to the coordinates of the current element.
##### \u2022	We then check if the count of painted elements in the row or column of the current element is equal to the length of the row or column, respectively. If either of these conditions is true, it means that the entire row or column has been painted, and we return the index of the current element.
##### \u2022	If we have iterated over all the elements of  arr and have not found any completely painted row or column, we return -1.
##### \u2022	The intuition behind this approach is that we can keep track of the number of painted elements in each row and column of mat as we iterate over the elements of  arr. If the count of painted elements in any row or column becomes equal to the length of the row or column, it means that the entire row or column has been painted, and we can return the index of the current element. If we have iterated over all the elements of  arr and have not found any completely painted row or column, it means that there is no completely painted row or column in  mat, and we return -1.




# Complexity
- Time complexity: o(n2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:o(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
    public int firstCompleteIndex(int[] arr, int[][] mat) {
        int m= mat.length;
        int n = mat[0].length;
        HashMap<Integer,int[]> map = new HashMap<>();
        for(int i=0;i<m;i++)
            for(int j=0;j<n;j++)
                map.put(mat[i][j],new int[]{i,j});
        int row[] = new int[m];
        int col[] = new int[n];
        for(int i=0;i<arr.length;i++){
            int x[] = map.get(arr[i]);
            row[x[0]]++;
            col[x[1]]++;
            if(row[x[0]]==n || col[x[1]]==m) return i;            
        }
        return -1;
    }
```

```python []
def firstCompleteIndex(arr: List[int], mat: List[List[int]]) -> int:
    m = len(mat)
    n = len(mat[0])
    map = {}
    for i in range(m):
        for j in range(n):
            map[mat[i][j]] = [i, j]
    row = [0] * m
    col = [0] * n
    for i in range(len(arr)):
        x = map[arr[i]]
        row[x[0]] += 1
        col[x[1]] += 1
        if row[x[0]] == n or col[x[1]] == m:
            return i
    return -1
```
```c++ []
#include <unordered_map>
#include <vectorusing namespace std;

int firstCompleteIndex(vector<int>& arr, vector<vector<int>>& mat) {
    int m = mat.size();
    int n = mat[0].size();
    unordered_map<int, vector<int>> map;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            map[mat[i][j]] = {i, j};
        }
    }
    vector<int> row(m);
    vector<int> col(n);
    for (int i = 0; i < arr.size(); i++) {
        vector<int> x = map[arr[i]];
        row[x[0]]++;
        col[x[1]]++;
        if (row[x[0]] == n || col[x[1]] == m) {
            return i;
        }
    }
    return -1;
}
```

# Please Upvote as it really motivates me \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99


![BREUSELEE.webp](./images/0.webp)
![image.png](./images/1.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A