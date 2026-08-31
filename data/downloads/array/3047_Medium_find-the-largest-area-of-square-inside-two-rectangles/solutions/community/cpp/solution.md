# C++ 100% Faster | Easy Step By Step Explanation

**Author:** VYOM_GOYAL
**Votes:** 70
**Link:** [https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/4778582/](https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/4778582/)

---

# Intuition
1. The problem aims to find the maximum area of a square that can fit within the intersection of two rectangles.
2. We can achieve this by iterating through all pairs of rectangles and checking if they intersect.
3. For intersecting rectangles, we need to find the largest square that fits within the overlapping area, considering both X and Y dimensions.

# Approach
1. **Nested Loop:** The code iterates through all pairs of rectangles using nested loops. This ensures that every possible intersection is considered.
2. **Overlap Check:** For each pair, it checks if the rectangles have overlapping ranges in both X and Y directions. This is done using max and min functions to compare the left/right and bottom/top coordinates.
3. **Side Length Calculation:** If an intersection exists, the code calculates the minimum side length of a square that can fit within the overlapping area. This is done by finding the minimum difference in X and Y coordinates between the rectangles' edges.
4. **Area Calculation and Update:** The square's area is calculated by squaring the minimum side length. The area variable is updated with the maximum area found so far for any intersecting pair.
5. **Return Maximum Area:** Finally, the function returns the maximum area found during the loop, or 0 if no intersections were possible.

# Complexity
- Time complexity: **O(n^2)**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(1)**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    long long largestSquareArea(vector<vector<int>>& nums1, vector<vector<int>>& nums2) {
        long long area=0;
        for(int i=0;i<nums1.size();i++){
            for(int j=i+1;j<nums1.size();j++){
                long long minimum_x = max(nums1[i][0], nums1[j][0]);
                long long maximum_x = min(nums2[i][0], nums2[j][0]);
                long long minimum_y = max(nums1[i][1], nums1[j][1]);
                long long maximum_y = min(nums2[i][1], nums2[j][1]);
                
                if(minimum_x<maximum_x && minimum_y<maximum_y){
                    long long s = min(maximum_x-minimum_x, maximum_y-minimum_y);
                    area = max(area, s*s);
                }
            }
        }
        return area;
    }
};

auto init = []() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    return 'c';
}();

```
![Please Upvote2.jpeg](./images/0.jpeg)
