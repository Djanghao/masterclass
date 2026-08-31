# Maintain a Count | C++ | JAVA | PYTHON | O(Q) | Easy stright forward

**Author:** Rishabhsinghal12
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/3494927/](https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/3494927/)

---

```
1. Easy Question And Easy Solution.
2. Don't need to do or use any fancy data structure.
3. Just maintain a count of number of adjacent elements with the same color and 
   update the count according to queries
4. for index in each query just check the previous and next element and update the count 
```
**C++ CODE**
```
vector<int> colorTheArray(int n, vector<vector<int>>& queries) {
      
        int count = 0;
        
        vector<int> nums(n,0), result;
        
        for(auto &q: queries) {
            
            int idx = q[0], val = q[1];
            
            if(idx > 0) {
                if(nums[idx-1] == 0);//don't do anything
                else if(nums[idx] == nums[idx-1]) {
                    if(nums[idx] != val)if(count > 0)count--;
                }
                else {
                    if(val == nums[idx-1])count++;
                }
            }
			
            if(idx+1 < n) {
                if(nums[idx+1] == 0);//don't do anything
                else if(nums[idx] == nums[idx+1]) {
                    if(nums[idx] != val)if(count > 0)count--;
                }
                else {
                    if(val == nums[idx+1])count++;
                }
            }
            
            nums[idx] = val;
            result.push_back(count);
        }
        
        return result;
    }
```

**JAVA CODE**
```
public int[] colorTheArray(int n, int[][] queries) {
        int count = 0;
        int[] nums = new int[n];
        int[] result = new int[queries.length];
        
        for(int i = 0; i < queries.length; i++) {
            int idx = queries[i][0], val = queries[i][1];
            
            if(idx > 0) {
                if(nums[idx-1] == 0);
                else if(nums[idx] == nums[idx-1]) {
                    if(nums[idx] != val && count > 0) count--;
                }
                else {
                    if(val == nums[idx-1]) count++;
                }
            }
			
            if(idx+1 < n) {
                if(nums[idx+1] == 0);
                else if(nums[idx] == nums[idx+1]) {
                    if(nums[idx] != val && count > 0) count--;
                }
                else {
                    if(val == nums[idx+1]) count++;
                }
            }
            
            nums[idx] = val;
            result[i] = count;
        }
        
        return result;
    }
```

**PYTHON CODE**
```
class Solution:
    def colorTheArray(self, n: int, queries: List[List[int]]) -> List[int]:
        count = 0
        nums = [0] * n
        result = []
        
        for q in queries:
            idx, val = q
            
            if idx > 0:
                if nums[idx-1] == 0:
                    pass
                elif nums[idx] == nums[idx-1]:
                    if nums[idx] != val and count > 0:
                        count -= 1
                else:
                    if val == nums[idx-1]:
                        count += 1
			
            if idx+1 < n:
                if nums[idx+1] == 0:
                    pass
                elif nums[idx] == nums[idx+1]:
                    if nums[idx] != val and count > 0:
                        count -= 1
                else:
                    if val == nums[idx+1]:
                        count += 1
            
            nums[idx] = val
            result.append(count)
        
        return result
```