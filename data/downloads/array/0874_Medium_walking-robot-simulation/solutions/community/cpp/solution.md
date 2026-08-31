# Tables of set+ binary search vs unordered_set||51ms Beats 96.69%

**Author:** anwendeng
**Votes:** 76
**Link:** [https://leetcode.com/problems/walking-robot-simulation/solutions/5734170/](https://leetcode.com/problems/walking-robot-simulation/solutions/5734170/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Several different kinds of solutions:
1. Construct 2 tables of set, use binary search to find `obstacles`.
2. Construct 1 table for obstacles, check each move whether it run to `obstacles`
3.  A variant of 1st approach uses `unordered_map<int, vector<int>>`.
# Approach
<!-- Describe your approach to solving the problem. -->
1. 1st approach is suited for which the move might be large, say `move>=100`, since the searching method is binary search in the red-black tree `set XobSet[x] or YobSet[y]`; but it brings no benefit for small `move<=9`. 
2. The binary search is using `upper_bound` with caution with forward/backward iterator & `less<>()` or `greater<>()`.
3. 2nd approach is targeting for small moves, since `move<=9`. `std::unordered_set` is suitable for this task. The implementation is much easier, but with caution  with overflowing of INT; using unsigned or long long for some variables can solve this problem.
4. Using unordered_map or unordered_set, it's better to use `reserve`
5. It's tried without using C++ unordered_set/unordered_map, but it fails because of MLE.
# Why switch-case not if-else?
Switch-case is more readable than nested if-else if statement.
On the other hand, switch-case is usually converted to a table by the compiler, which is very fast. The misprediction for conditional branches will cause a penalty.
# Note on binary search used in 1st C++ code
Since the binary search is using `upper_bound` with 4 different ways. Let's  consider the case `face==1`(leftward negative x-direction); other are similar.
```
case 1: {//left
    auto it=upper_bound(YobSet[y].rbegin(), YobSet[y].rend(), x, greater<>());
    if (it!=YobSet[y].rend() && *it>=x-c) x=*it+1;
    else x-=c;
    break;
}
```
We have `YobSet[y]` as a set( which is ordered & consisting of many x's), the binary search is so applied, from the back to the front (using `reverse_iterator` `YobSet[y].rbegin()` to `YobSet[y].rend()`) `upper_bound` with the ordering `greater<>()` (Find the iterator `it` for the biggest element  `<x` in `YobSet[y]`).

If `it==Yobset[y].rend()` (i.e. not found) or the value `*it<x-c` which means there is no `obstacles` on the path from `(x, y)` to `(x-c, y)`. Otherwise one can move Robot to the position `(*it+1, y)`
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code Tables of set+ binary search||84ms Beats 50.55%
```cpp []
class Solution {
public:
    static int robotSim(vector<int>& commands, vector<vector<int>>& obstacles) {
        unordered_map<int, set<int>> XobSet, YobSet;
        XobSet.reserve(10000), YobSet.reserve(10000);
        for(auto& ob: obstacles){
            int x=ob[0], y=ob[1];
            XobSet[x].insert(y);
            YobSet[y].insert(x);
        }

        const int dir[4][2]={{0, 1}, {-1, 0}, {0, -1}, {1, 0}};
        int x=0, y=0, dx=0, dy=1, face=0, maxD2=0;
        for(int c: commands){
            switch(c){
                case -2: face=(face+1)%4; dx=dir[face][0]; dy=dir[face][1]; break;
                case -1: face=(face+3)%4; dx=dir[face][0]; dy=dir[face][1]; break;
                default:
                //    cout<<"\
c="<<c<<" face="<<face<<":";
                    switch(face){
                        case 0: {//up
                            auto it=upper_bound(XobSet[x].begin(), XobSet[x].end(), y);
                            if (it!=XobSet[x].end() && *it<=y+c) y=*it-1;
                            else y+=c;
                            break;
                        }
                        case 1: {//left
                            auto it=upper_bound(YobSet[y].rbegin(), YobSet[y].rend(), x, greater<>());
                            if (it!=YobSet[y].rend() && *it>=x-c) x=*it+1;
                            else x-=c;
                            break;
                        }
                        case 2: {//down
                            auto it=upper_bound(XobSet[x].rbegin(), XobSet[x].rend(), y, greater<>());
                            if (it!=XobSet[x].rend() && *it>=y-c) y=*it+1;
                            else y-=c;
                            break;
                        }
                        case 3: {//right
                            auto it=upper_bound(YobSet[y].begin(), YobSet[y].end(), x);
                            if (it!=YobSet[y].end() && *it<=x+c) x=*it-1;
                            else x+=c;
                            break;
                        }
                    }
                //    cout<<"("<<x<<","<<y<<"),";
                    maxD2=max(maxD2, x*x+y*y);
                }
        }
        return maxD2;
    }
};
```
# Code using unordered_set||51ms Beats 96.69%
```
class Solution {
public:
    static int robotSim(vector<int>& commands, vector<vector<int>>& obstacles) {
        const long long M=60001, lb=-30000;
        unordered_set<long long> obSet;
        obSet.reserve(obstacles.size());
        for(auto& ob: obstacles){
            long long x=ob[0]-lb, y=ob[1]-lb;
            obSet.insert(x*M+y);
        }

        const int dir[4][2]={{0, 1}, {-1, 0}, {0, -1}, {1, 0}};
        int x=0, y=0, dx=0, dy=1, face=0, maxD2=0;
        for(int c: commands){
            switch(c){
                case -2: face=(face+1)%4; dx=dir[face][0]; dy=dir[face][1]; break;
                case -1: face=(face+3)%4; dx=dir[face][0]; dy=dir[face][1]; break;
                default:
                //    cout<<"\
c="<<c<<" face="<<face<<":";
                    for(int i=0; i<c; i++){
                        x+=dx, y+=dy;
                        if (obSet.count((x-lb)*M+y-lb)) {
                            x-=dx;  // previous move
                            y-=dy;
                            break;
                        }
                    //    cout<<"("<<x<<","<<y<<"),";
                        maxD2=max(maxD2, x*x+y*y);
                    }
            }
        }
        return maxD2;
    }
};
```
# C++ variant for 1st approach using sort & unordered_map to vector
```
        unordered_map<int, vector<int>> XobSet, YobSet;
        XobSet.reserve(10000), YobSet.reserve(10000);
        sort(obstacles.begin(), obstacles.end());
        for(auto& ob: obstacles){
            int x=ob[0], y=ob[1];
            XobSet[x].push_back(y);
            YobSet[y].push_back(x);
        }
// The rest is same as 1st code

```