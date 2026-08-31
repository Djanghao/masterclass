# Simple C++ Binary search approach

**Author:** abhinandanvyas
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-font-to-fit-a-sentence-in-a-screen/solutions/4357769/](https://leetcode.com/problems/maximum-font-to-fit-a-sentence-in-a-screen/solutions/4357769/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N*Log(N))

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
/**
 * // This is the FontInfo's API interface.
 * // You should not implement it, or speculate about its implementation
 * class FontInfo {
 *   public:
 *     // Return the width of char ch when fontSize is used.
 *     int getWidth(int fontSize, char ch);
 *     
 *     // Return Height of any char when fontSize is used.
 *     int getHeight(int fontSize)
 * };
 */
class Solution {
public:
    int maxFont(string text, int w, int h, vector<int>& fonts, FontInfo fontInfo) {
        int ans = -1;
        int n = fonts.size();
        int m = text.size();
        int low = 0,high = n;
        while(low<high){
        int mid = low+(high-low)/2;

        int fontsize =fonts[mid];
        long long int tempw = 0;
        long long int temph = fontInfo.getHeight(fontsize);
            for(int i=0;i<m;i++){
                
                tempw += fontInfo.getWidth(fontsize,text[i]);
            }
                // ans = max(ans,fontsize);
        if(temph>h || tempw>w){
            high = mid;
        }   
        else{
            ans = mid;
            low = mid+1; 
        }

        }
        return ans != -1 ? fonts[ans] : -1;
    
    }
};
```