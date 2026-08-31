# Simple Solution || Beginner Friendly || Easy to Understand ✅

**Author:** Anirban_Pramanik10
**Votes:** 92
**Link:** [https://leetcode.com/problems/diagonal-traverse-ii/solutions/4315204/](https://leetcode.com/problems/diagonal-traverse-ii/solutions/4315204/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
$$Initialization:$$
- Initialize a variable `count` to keep track of the total number of elements in the result array.
- Create an ArrayList of ArrayLists called `lists` to store the elements diagonally.

$$Traversing the Matrix Diagonally:$$
- Use two nested loops to traverse each element in the matrix `(nums)`.
- For each element at position `(i, j)`, calculate the diagonal index `idx` by adding `i` and `j`.
- If the size of lists is less than `idx + 1`, it means we are encountering a new diagonal, so add a new ArrayList to lists.
- Add the current element to the corresponding diagonal ArrayList in `lists`.
- Increment the `count` to keep track of the total number of elements.

$$Flattening Diagonal Lists to Result Array:$$
- Create an array `res` of size `count` to store the final result.
- Initialize an index `idx` to keep track of the position in the result array.

$$Flatten Diagonals in Reverse Order:$$
- Iterate over each diagonal ArrayList in `lists`.
- For each diagonal, iterate in reverse order and add the elements to the result array `(res)`.
- Increment the index `idx` for each added element.

$$Return Result Array:$$
- Return the final result array `res`.



# Complexity
- Time complexity: `O(n)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(n)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int[] findDiagonalOrder(List<List<Integer>> nums) {
        int count = 0;

        List<List<Integer>> lists = new ArrayList<>();
        for (int i = 0; i < nums.size(); i++) {
            List<Integer> row = nums.get(i);

            for (int j = 0; j < row.size(); j++) {
                int idx = i + j;

                if (lists.size() < idx + 1) {
                    lists.add(new ArrayList<>());
                }
                lists.get(idx).add(row.get(j));
                
                count ++;
            }
        }

        int[] res = new int[count];
        int idx = 0;
        for (List<Integer> list : lists) {
            for (int i = list.size() - 1; i >= 0; i--) {
                res[idx++] = list.get(i); 
            }
        }
        return res;
    }
}
```
```python []
class Solution:
    def findDiagonalOrder(self, nums):
        diagonals = [deque() for _ in range(len(nums) + max(len(row) for row in nums) - 1)]
        for row_id, row in enumerate(nums):
            for col_id in range(len(row)):
                diagonals[row_id + col_id].appendleft(row[col_id])
        return list(chain(*diagonals))
```
```python3 []
class Solution:
    def findDiagonalOrder(self, A: List[List[int]]) -> List[int]:
        d = defaultdict(list)
        for i in range(len(A)):
            for j in range(len(A[i])):
                d[i+j].append(A[i][j])
        return [v for k in d.keys() for v in reversed(d[k])]
```
```C++ []
class Solution {
public:
    vector<int> findDiagonalOrder(vector<vector<int>>& nums) {
        int m=nums.size(),n=0;
        
        //find max value and store in n;
        
        for(int i=0;i<m;i++){
            if(n<nums[i].size())
                n=nums[i].size();
        }
        vector<vector<int>>temp(m+n);
        vector<int>ans;
        
        // convert mat into adjacency list and keep value in temp
        
        for(int i=0;i<m;i++){
            for(int j=0;j<nums[i].size();j++){
                temp[i+j].push_back(nums[i][j]);
            }
        }
        
        // here we reverse matrix
        
        for(int i=0;i<m+n;i++){
            reverse(temp[i].begin(),temp[i].end());
        }
        
        // all value  of temp in ans vector
        
         for(int i=0;i<m+n;i++){
            for(int j=0;j<temp[i].size();j++){
                ans.push_back(temp[i][j]);
            }
        }
        return ans;
    }
};
```
```Javascript []
var findDiagonalOrder = function(nums) {
    const result = [];

    for (let row = 0; row < nums.length; row++) {
        for (let col = 0; col < nums[row].length; col++) {
            const num = nums[row][col];
            if (!num) continue;
            const current = result[row + col];

            current 
                ? current.unshift(num)
                : result[row + col] = [num];
        }
    }
    return result.flat();
};
```
```C []
class Solution {
public:
    vector<int> findDiagonalOrder(vector<vector<int>>& nums) {
        int m=nums.size(),n=0;
        
        //find max value and store in n;
        
        for(int i=0;i<m;i++){
            if(n<nums[i].size())
                n=nums[i].size();
        }
        vector<vector<int>>temp(m+n);
        vector<int>ans;
        
        // convert mat into adjacency list and keep value in temp
        
        for(int i=0;i<m;i++){
            for(int j=0;j<nums[i].size();j++){
                temp[i+j].push_back(nums[i][j]);
            }
        }
        
        // here we reverse matrix
        
        for(int i=0;i<m+n;i++){
            reverse(temp[i].begin(),temp[i].end());
        }
        
        // all value  of temp in ans vector
        
         for(int i=0;i<m+n;i++){
            for(int j=0;j<temp[i].size();j++){
                ans.push_back(temp[i][j]);
            }
        }
        return ans;
    }
};
```
# If you like the solution please UPVOTE !!

![da69d522-8deb-4aa6-a4db-446363bf029f_1687283488.9528875.gif](./images/0.gif)




