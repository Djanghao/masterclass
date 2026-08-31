# C++ reverse of trapping rainwater

**Author:** pkk78
**Votes:** 0
**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/solutions/5344033/](https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/solutions/5344033/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Each warehouse item can accomodate max of min heights of warehouse on their left and right. So, calculate then sort and compare with box heights.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(MlogM+NlogN) - M box count, N warehouse ct. sorting
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(logM+N) - sorting of boxes take logM extra space.
# Code
```
class Solution {
public:
    int maxBoxesInWarehouse(vector<int>& boxes, vector<int>& warehouse) {
        
        //calc max of lmin and rmin for each warehouse height.
        // then sort the boxes by height
        int n = warehouse.size();
        vector<int> lmin(n, INT_MAX);
        vector<int> rmin(n, INT_MAX);

        lmin[0] = warehouse[0];
        rmin[n-1] = warehouse[n-1];
        for(int i=1; i < n; ++i){
            lmin[i] =  min(lmin[i-1], warehouse[i]); 
        }
        for(int j = n-2; j >= 0; --j){
            rmin[j] =  min(rmin[j+1], warehouse[j]); 
        }

        vector<int> height(n, INT_MAX);
        for(int i=0; i < n; ++i){
            height[i] = max(lmin[i], rmin[i]);
        }

        sort(height.begin(), height.end());
        sort(boxes.begin(), boxes.end());

        int res = 0;
        int curr = 0;


        for(int j = 0; j < boxes.size(); ++j){
            while(curr < n && boxes[j] > height[curr]){
                curr++;
                continue;
            }
            
            if(curr >= n)
                break;
            res+= 1;
            curr+= 1;
            if(curr >= n)
                break;
        }

        return res;

    }
};
```