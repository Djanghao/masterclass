# Easy C++ code

**Author:** venkatasaitanish
**Votes:** 95
**Link:** [https://leetcode.com/problems/count-lattice-points-inside-a-circle/solutions/1976815/](https://leetcode.com/problems/count-lattice-points-inside-a-circle/solutions/1976815/)

---

Let r be the radius of the circle.
We iterate from -r to +r in x-direction and y-direction. So we iterate over entire integer co-ordinates of the boundary square and find if it is inside a circle or not using Euclidean distance.
We insert all the co-ordinates in a set to avoid duplicates and return the size of set.
```
class Solution {
public:
    int countLatticePoints(vector<vector<int>>& v) { // v is vector of circles.
        int n = v.size();
        set<pair<int,int>> s;
        for(int i=0;i<n;i++){
            int a=v[i][0],b=v[i][1],r=v[i][2];
            for(int x=-r;x<=r;x++){
                for(int y=-r;y<=r;y++){
                    if((x*x)+(y*y)<=(r*r)){
                        s.insert({x+a,y+b});
                    }
                }
            }
        }
        int ans = s.size();
        return ans;
    }
};
```

**Approach in O(1) space**
From the given constraints we can notice that the lattice points lie in a certain range, where the co-ordinates are as:
*0<=x<=200  and 0<=y<=200*
So we iterate over every point from the range and check whether, it is present in any of the circle or not.
So this way, we can reduce the space complexity just by counting every point once.
```
class Solution {
public:
    int countLatticePoints(vector<vector<int>>& v) { // v is vector of circles.
        int n = v.size();
        int ans = 0;
        for(int x=0;x<=200;x++){
            for(int y=0;y<=200;y++){
                for(int i=0;i<n;i++){
                    int a=v[i][0],b=v[i][1],r=v[i][2];
                    if((a-x)*(a-x) + (b-y)*(b-y) <= r*r){
                        ans++;
                        break;
                    }
                }
            }
        }
        return ans;
    }
};
```
**Upvote if it helps !**