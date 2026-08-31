# C++ 100%Fast + Highly Readable + Beginner Friendly

**Author:** SM3210
**Votes:** 17
**Link:** [https://leetcode.com/problems/flipping-an-image/solutions/1124348/](https://leetcode.com/problems/flipping-an-image/solutions/1124348/)

---

**Plz Upvote If You Liked This Solution - -**


```
class Solution {
public:
    vector<vector<int>> flipAndInvertImage(vector<vector<int>>& image) {
        for(int i=0;i<image.size();i++){
            vector<int> x=image[i];
            reverse(x.begin(),x.end());
            image[i]=x;
        }
        
        for(int i=0;i<image.size();i++){
            for(int j=0;j<image[i].size();j++)
                image[i][j]^=1;
        }
        
        return image;
    }
};