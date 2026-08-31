# Best Approach 🔥+ Video Explanation| O(1) Space ✅| Simple Traversal | Explanation✅ | C++

**Author:** abhi_9v
**Votes:** 12
**Link:** [https://leetcode.com/problems/find-champion-i/solutions/4250484/](https://leetcode.com/problems/find-champion-i/solutions/4250484/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Simple traversal technique. We can traverse either row-wise or column-wise to see which row/colum has only 1 in it (except where i==j).

# Approach
<!-- Describe your approach to solving the problem. -->
Traversing to each row.
The row having only 1 (where i!=j) is our answer

Easy Video Explanation
https://youtu.be/7_VUSgFZf14


# Complexity
- Time complexity: O(m*n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int findChampion(vector<vector<int>>& grid) {
        int n = grid.size();
        
        for(int i=0; i<n; i++){
            bool temp=true;
            for(int j=0; j<n; j++){
                if(i==j) continue;
                if(grid[i][j]!=1){
                    temp = false;
                }
            }
            if(temp) return i;
        }
        return n-1;
    }
};
```

![WhatsApp Image 2023-11-11 at 11.26.21_f71cabf9.jpg](./images/0.jpeg)

Join us on Telegram: https://telegram.me/CodeVicharYoutube
