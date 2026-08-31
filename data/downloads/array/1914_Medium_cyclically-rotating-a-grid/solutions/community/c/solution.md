# Inplace | Intuitive and Easy | 4 pointer (TBLR) | Detailed Explanation

**Author:** yajassardana
**Votes:** 137
**Link:** [https://leetcode.com/problems/cyclically-rotating-a-grid/solutions/1299663/](https://leetcode.com/problems/cyclically-rotating-a-grid/solutions/1299663/)

---

#### Intution:
* We can see that the question requires us to do a **layer wise rotation**. Now such a rotation will require us to do a layer wise traversal of the given 2-D matrix. Such a traversal is done while solving the standard question: [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/). 
* To write and carry out a logical, intuitive and maintainable solution for such a traversal, we use 4 pointers, namely: `Top, Bottom, Left & Right` to keep a track of our current layer boundaries.
* For a given **k**, if k is greater than the number of elements in a particular layer, then we must rotate that layer `k%total_layer_elements` times, as after `total_layer_elements` times rotations, we'll come back to our original configuration, and hence all rotations performed before it will become redudant, therefore to remove the redundancy and optimize our soltution, we only perform the rotate operation `k%total_layer_elements` times .
#### Algorithm:
* In order to rotate a layer, we use `top, bottom, left & right` pointers to do a **clockwise traversal**, while at every-step, assigning the next element to the current one.
* This will take care of all the elements except the element at index `{top+1, left}`, so before starting our current rotation, we store the current value of layer's **top left corner element** in `temp`, so as to assign it to `{top+1, left}` at the end of current layer's rotation.
* After rotating the current layer `k%total_layer_elements` times, we move on to the next inner layer by doing  `top++, left++, bottom--, right--.`
* Total elements in each layer will be `2*(bottom-top+1) + 2*(right-left+1) - 4`. We subtract 4 as we're counting each corner element twice due to the multiplication part of the above expression, hence, we must subtract them once. This expression can be further simplified as `2*(bottom-top) + 2*(right-left)`.
##### **Complexities:**
1.  **Time**: ***O((m + n)^3)*** : Every layer can at max rotate at max one less than `no. of elements in that layer` times. This `no of elements in a layer` value will keep on decreasing as we go from outer towards inner layers. Ignoring constants, the summation of squares of (m+n) to 4 gives asymptotic time complexity of order `(m+n)^3`.
2.   **Space** : ***O(1)*** : As the solution works inplace.
	
```
    vector<vector<int>> rotateGrid(vector<vector<int>>& grid, int k) {
        int bottom = grid.size() - 1, right = grid[0].size()-1;//Bottom right coordinates
        int top = 0, left = 0;//Top left coordinates
        while(bottom>top&&right>left){
            int total_layer_elements = 2*(bottom-top) + 2*(right-left);//Total elements in current layer
            int num_of_rotations = k%total_layer_elements;//Number of rotations to be performed for the current layer.
            while(num_of_rotations--){
            int temp = grid[top][left];
            for(int j = left; j<right; j++){//Left to Right in current Top row
                grid[top][j] = grid[top][j+1];
            }
            for(int i = top; i<bottom; i++){//Top to Bottom in current Right column
                grid[i][right] = grid[i+1][right];
            }
            for(int j = right; j>left; j--){//Right to Left in current Bottom row
                grid[bottom][j] = grid[bottom][j-1]; 
            }
            for(int i = bottom; i>top; i--){//Bottom top Top in current left column
                grid[i][left] = grid[i-1][left];
            }
            grid[top+1][left] = temp;
            }
            top++, left++, bottom--, right--;
        }
        return grid;
    }
```