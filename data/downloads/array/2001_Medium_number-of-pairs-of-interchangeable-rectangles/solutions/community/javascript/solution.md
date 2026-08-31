# C++ || JavaScript || Easy Solution

**Author:** Imran32
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/3922691/](https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/3922691/)

---

# Approach
Just count how many pairs of rectangles in the input list can be swapped while maintaining the same area. It calculates this by first finding the aspect ratio of each rectangle, then counting how many pairs with the same aspect ratio can be swapped. It adds up these counts for all unique aspect ratios to get the total count of interchangeable pairs.

# Complexity
- Time complexity: O(n * log n)

- Space complexity: O(n)

# Code
# C++
```
class Solution {
public:
    long long interchangeableRectangles(vector<vector<int>>& rectangles) {
        map<double,int>m;
        for(int i=0;i<rectangles.size();i++){
            double width=rectangles[i][0];
            double height=rectangles[i][1];
            m[width/height]++;
        }
        
        long long ans=0;
        for(auto k:m){
            if(k.second>1){
                long long n=k.second-1;
                ans+=(n*(n+1))/2;
            }
        }
        return ans;
    }
};
```

---



# JavaScript
```
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function(rectangles) {
    let m = new Map();
    for (let i = 0; i < rectangles.length; i++) {
        let width = rectangles[i][0];
        let height = rectangles[i][1];
        let aspectRatio = width / height;
        
        if (!m.has(aspectRatio)) {
            m.set(aspectRatio, 1);
        } else {
            m.set(aspectRatio, m.get(aspectRatio) + 1);
        }
    }
    
    let ans = 0;
    m.forEach((value) => {
        if (value > 1) {
            let n = value - 1;
            ans += (n * (n + 1)) / 2;
        }
    });
    
    return ans;
};
```