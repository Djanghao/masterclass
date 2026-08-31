# No Matrix || Set || C++

**Author:** skp91513
**Votes:** 6
**Link:** [https://leetcode.com/problems/random-flip-matrix/solutions/3493673/](https://leetcode.com/problems/random-flip-matrix/solutions/3493673/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
   set<pair<int,int>> s;
    int r , c; 
    Solution(int m, int n) 
    {
        
        r = m ; 
        c = n ; 
    }
    
    vector<int> flip() 
    {
        int x = rand()%r; 
        int y = rand()%c; 
        if(s.find({x,y})==s.end())
        {    s.insert({x,y});
            return {x,y};
        }
        else return flip();
    }
    
    void reset() 
    {
         s.clear(); 
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * Solution* obj = new Solution(m, n);
 * vector<int> param_1 = obj->flip();
 * obj->reset();
 */
```