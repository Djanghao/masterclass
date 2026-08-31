# ✅Easy C++, C, Python3, Kotlin Solution | Intuition & Approach

**Author:** rishabhagg
**Votes:** 1
**Link:** [https://leetcode.com/problems/image-smoother/solutions/4513440/](https://leetcode.com/problems/image-smoother/solutions/4513440/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Looking at the constraint we can apply brute force method.


# Approach
<!-- Describe your approach to solving the problem. -->
For every index in the table, We sum the values of valid neighbours. After calculating, we store the value in the answer matrix. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
(m*n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# C++ Code
```
class Solution {
    int dx[9] = {-1,-1,-1,0,0,0,1,1,1};
    int dy[9] = {-1,0,1,-1,0,1,-1,0,1};
    bool isSafe(int i, int j, vector<vector<int>>& img){
        if(i < 0 || j < 0 || i == img.size() || j == img[0].size()){
            return false;
        }
        return true;
    }
public:
    vector<vector<int>> imageSmoother(vector<vector<int>>& img) {
        vector<vector<int>>ans(img.size(),vector<int>(img[0].size(),0));
        for(int i = 0; i < img.size(); i++){
            for(int j = 0; j < img[0].size(); j++){
                int count = 0;
                int sum = 0;
                for(int a = 0; a < 9; a++){
                    int nX = i + dx[a];
                    int nY = j + dy[a];
                    if(isSafe(nX,nY,img)){
                        count++;
                        sum += img[nX][nY];
                    }
                }
                ans[i][j] = floor((float)sum/count);
            }  
        }
        return ans;
    }
};
```

# C Code
```
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int dx[9] = {-1,-1,-1,0,0,0,1,1,1};
int dy[9] = {-1,0,1,-1,0,1,-1,0,1};

int** imageSmoother(int** img, int imgSize, int* imgColSize, int* returnSize, int** returnColumnSizes) {
    int m = imgSize;
    int n = imgColSize[0];
    int **result = (int **)calloc(m, sizeof(int *));
    *returnSize = m;
    *returnColumnSizes = (int *)calloc(m, sizeof(int));
    for (int i = 0; i < m; ++i) {
        result[i] = (int *)calloc(n, sizeof(int));
        (*returnColumnSizes)[i] = n;
    }
    for(int i = 0; i < m; i++){
        for(int j = 0; j < n; j++){
            int count = 0;
            int sum = 0;
            for(int a = 0; a < 9; a++){
                int nX = i + dx[a];
                int nY = j + dy[a];
                if(nX >= 0 && nY >= 0 && nX < m && nY < n){
                    count++;
                    sum += img[nX][nY];
                }
            }
            result[i][j] = sum/count;
        }  
    }
    return result;
}
```

# Python3 Code
```
class Solution:
    def imageSmoother(self, img: List[List[int]]) -> List[List[int]]:
        dx = [-1,-1,-1,0,0,0,1,1,1]
        dy = [-1,0,1,-1,0,1,-1,0,1]
        m = int(len(img))
        n = int(len(img[0]))
        ans = [[0 for i in range(n)] for j in range(m)]
        for i in range(m):
            for j in range(n):
                sum = 0
                count = 0
                for a in range(0,9):
                    x = i + dx[a]
                    y = j + dy[a]
                    if x >= 0 and y >= 0 and x < m  and y < n:
                        count += 1
                        sum += img[x][y]
                print(i,j,count,sum,sum//count)
                ans[i][j] = sum//count
        return ans
```

# Koltin Code
```
class Solution {
    val dx = listOf(-1,-1,-1,0,0,0,1,1,1)
    val dy = listOf(-1,0,1,-1,0,1,-1,0,1)

    fun imageSmoother(img: Array<IntArray>): Array<IntArray> {
        val m = img.size
        val n = img[0].size
        val ans = Array(m){IntArray(n)}
        for(i in 0 until m){
            for(j in 0 until n){
                var sum = 0
                var count = 0
                for(k in 0..8){
                    val x = i + dx[k]
                    val y = j + dy[k]
                    if(x in 0..<m && y >= 0 && y < n){
                        sum += img[x][y]
                        count++
                    }
                }
                ans[i][j] = sum/count
            }
        }
        return ans
    }
}
```