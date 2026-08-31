# Recursion->Boolean Array->Mask || Easy to understand || Simple Code

**Author:** MohakHarjani
**Votes:** 37
**Link:** [https://leetcode.com/problems/maximize-score-after-n-operations/solutions/3521639/](https://leetcode.com/problems/maximize-score-after-n-operations/solutions/3521639/)

---

## RECURSION
```
class Solution {
public:
    int solve(vector<int>&nums, vector<bool>&visited, int operation)
    {     
        int maxScore = 0;
        for (int i = 0; i < nums.size() - 1; i++)
        {
            if (visited[i]) continue;
            for (int j = i + 1; j < nums.size(); j++)
            {
                if (visited[j]) continue;
                visited[i] = true;
                visited[j] = true;
                //=====================================================================
                int currScore = operation * __gcd(nums[i], nums[j]);
                int nextMaxScore = solve(nums, visited, operation + 1);
                int totalScore = currScore + nextMaxScore;
                maxScore = max(maxScore, totalScore);
                //======================================================================
                visited[i] = false;
                visited[j] = false;
            }
        }
        return maxScore; 
    }
    int maxScore(vector<int>& nums) 
    {
        int n = nums.size();
        vector<bool>visited(n, false);
        int ans = solve(nums, visited, 1);
        return ans;
        
    }
};
```
//======================================================================================================================
## TOP-DOWN MEMOIZATION [USING VISITED ARRAY]
```
class Solution {
public:
    int solve(vector<int>&nums,  unordered_map<vector<bool>, int>&mp, vector<bool>&visited, int operation)
    {
        if (mp.count(visited)) return mp[visited]; //use stored result
            
        int maxScore = 0;
        for (int i = 0; i < nums.size() - 1; i++)
        {
            if (visited[i]) continue;
            for (int j = i + 1; j < nums.size(); j++)
            {
                if (visited[j]) continue;
                visited[i] = true;
                visited[j] = true;
                //=====================================================================
                int currScore = operation * __gcd(nums[i], nums[j]);
                int nextMaxScore = solve(nums, mp, visited, operation + 1);
                int totalScore = currScore + nextMaxScore;
                maxScore = max(maxScore, totalScore);
                //======================================================================
                visited[i] = false;
                visited[j] = false;
            }
        }
        return mp[visited] = maxScore; //store the result
    }
    int maxScore(vector<int>& nums) 
    {
        int n = nums.size();
        vector<bool>visited(n, false);
        unordered_map<vector<bool>, int>mp;
        int ans = solve(nums, mp, visited, 1);
        return ans;
        
    }
};
```
//======================================================================================================================
## TOP-DOWN MEMOIZATION [USING MASK]
Simply converted a boolean array in form of an integer and work is done :)
Almost same code as above
```
class Solution {
public:
    bool isBitSet(int& num, int bitIdx)
    {
        //(1 << bitIdx) => only the 'bitIdx'th bit set, rest all 0'S
        if ((num & (1 << bitIdx)) != 0) 
            return true;
        return false;
    }
    void setBit(int& num, int bitIdx)
    {
        num = num | (1 << bitIdx);
    }
    int solve(vector<int>&nums,  map<int, int>&mp, int visited, int operation)
    {
        if (mp.count(visited)) return mp[visited]; //use stored result
            
        int maxScore = 0;
        for (int i = 0; i < nums.size() - 1; i++)
        {
            if (isBitSet(visited, i)) continue;
            for (int j = i + 1; j < nums.size(); j++)
            {
                if (isBitSet(visited, j)) continue;
                
                int newVisited = visited;
                setBit(newVisited, i); //mark i as visited
                setBit(newVisited, j); //mark j as visited
                //=====================================================================
                int currScore = operation * __gcd(nums[i], nums[j]);
                int nextMaxScore = solve(nums, mp, newVisited, operation + 1);
                int totalScore = currScore + nextMaxScore;
                maxScore = max(maxScore, totalScore);
                //=====================================================================
                //rather than unSetting we will use the same old mask in next Iteration
            }
        }
        return mp[visited] = maxScore; //store the result
    }
    int maxScore(vector<int>& nums) 
    {
        int n = nums.size();
        int visited = 0;
        map<int, int>mp;
        int ans = solve(nums, mp, visited, 1);
        return ans;
        
    }
};
```
