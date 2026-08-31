# C++ Solution

**Author:** COBighead
**Votes:** 1
**Link:** [https://leetcode.com/problems/pour-water/solutions/3590972/](https://leetcode.com/problems/pour-water/solutions/3590972/)

---



# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    vector<int> pourWater(vector<int>& heights, int volume, int k) {
        for(int i=0;i<volume;i++){
            int cur=k;
            bool filled=false;

            int left=k;
            int right=k;

            while(left>0){
                if(heights[left-1]<heights[left]){
                    left--;
                    cur=left;
                }
                else if(heights[left-1]==heights[left])
                    left--;
                else
                    break;
            }
            if(cur<k){
                heights[cur]++;
                filled=true;
            }

            if(!filled){
                while(right<heights.size()-1){
                    if(heights[right+1]<heights[right]){
                        right++;
                        cur=right;
                    }
                    else if(heights[right+1]==heights[right])
                        right++;
                    else
                        break;
                }

                if(cur>k){
                    heights[cur]++;
                    filled=true;
                }
            }

            if(!filled){
                heights[k]++;
                filled=true;
            }
            
        }

        return heights;

    }
};
```