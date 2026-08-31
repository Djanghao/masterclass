# ✅Logic Behind Sorting and DP for Interviews | Clean C++ Code | Recursion to DP(Space Optimised)

**Author:** rishabhagg
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-height-by-stacking-cuboids/solutions/4204904/](https://leetcode.com/problems/maximum-height-by-stacking-cuboids/solutions/4204904/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Firstly looking at the constraints, it looks that there is no requirement of a greedy solution. So I thought of a recursive brute force solution which can be easily optimised using meomoization using dp array if we generate any duplicate recursive tree.

By looking at the question the solution can be framed like either take the cuboid or not take the cuboid.
# Approach
<!-- Describe your approach to solving the problem. -->
-Why sorting each value in cuboid?
Since as per the question, the length,breadth and height of cuboid can be taken in any order. We will sort each value and consider the order as Length, Breadth and Height. Each value in cuboid will now have maximum value as Height,i.e, to get the maximum height we will now have the maximum value of each brick's height.

-Why sorting the cuboid array?
We are given that a cuboid can be placed on a cuboid if all the dimensions of top one are smaller than or equal to bottom one. So we will sort the cuboid array using comparator function. 

Recursive Function(Brute Force):- 
We will think like that we will pick the smallest brick first and then will try to find the bigger brick than it. 
Note- You can also pick the biggest brick first and then find smaller brick than it, for this you need to either start from left if the array is sorted in ascending order else you can sort the array from descending order.
In recursive function, we will have index of current brick and previous brick, initialised to 0 and -1 respectively. Now look at the code to understand the flow of the solution. 
Since it will have exponential time complexity so we will create an array with size (n+1)*n, since prev is taken as -1, we will shift the prev index by 1 in the function to store the values so we will not get any runtime error. 
A bottom up dp solution can be made as shown below.

Why DP?
Dry run an example, You will observe that you will get repeating sub problems since you are skipping and taking the indexes. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Recursive Solution - Exponential(Time Limit Exceeded)
Meomization Solution and DP - O(n^2) (Accepted)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Meomization Solution and DP - O(n^2)
Space Optimised O(2*n)
# Code
Recursive Solution(Time Limit Exceeded)
```
class Solution {
    // comparator function for sorting the cuboid array
    static bool comp(vector<int>& d1, vector<int>& d2){
        if(d1[0] == d2[0]){
            if(d1[1] == d2[1]){
                return d1[2] < d2[2];
            }
            return d1[1] < d2[1];
        }
        return d1[0] < d2[0];
    }

    int solve(vector<vector<int>>& cuboid,int prev,int pos){
        if(pos == cuboid.size()){
            //reached end of array
            return 0;
        }
        //skip
        int skip = solve(cuboid,prev,pos+1);
        int take = 0;
        //take if it is the first brick or check for bigger brick
        if(prev == -1 || (cuboid[prev][0] <= cuboid[pos][0] && cuboid[prev][1] <= cuboid[pos][1] && cuboid[prev][2] <= cuboid[pos][2])){
            take = cuboid[pos][2] + solve(cuboid,pos,pos+1);
        }
        //return maximum height
        return max(skip,take);
    }
public:
    int maxHeight(vector<vector<int>>& cuboids) {
        //sorting each value
        for(int i = 0; i < cuboids.size(); i++){
            sort(cuboids[i].begin(),cuboids[i].end());
        }
        sort(cuboids.begin(),cuboids.end(),comp);
        return solve(cuboids,-1,0);
    }
};
```
Meomization Solution(Accepted)
```
class Solution {
    //comparator function
    static bool comp(vector<int>& d1, vector<int>& d2){
        if(d1[0] == d2[0]){
            if(d1[1] == d2[1]){
                return d1[2] < d2[2];
            }
            return d1[1] < d2[1];
        }
        return d1[0] < d2[0];
    }

    int solve(vector<vector<int>>& cuboid,int prev,int pos, vector<vector<int>>&dp){
        if(pos == cuboid.size()){
            //no more bricks present
            return 0;
        }
        if(dp[prev+1][pos] != -1){
            return dp[prev+1][pos];
        }
        //not take
        int skip = solve(cuboid,prev,pos+1,dp);
        int take = 0;
        //take if it is the first brick or check for bigger brick
        if(prev == -1 || (cuboid[prev][0] <= cuboid[pos][0] && cuboid[prev][1] <= cuboid[pos][1] && cuboid[prev][2] <= cuboid[pos][2])){
            take = cuboid[pos][2] + solve(cuboid,pos,pos+1,dp);
        }
         //return maximum height
        return dp[prev+1][pos] = max(skip,take);
    }
public:
    int maxHeight(vector<vector<int>>& cuboids) {
        //sorting each value
        for(int i = 0; i < cuboids.size(); i++){
            sort(cuboids[i].begin(),cuboids[i].end());
        }
        sort(cuboids.begin(),cuboids.end(),comp);
        vector<vector<int>> dp(cuboids.size() + 1,vector<int>(cuboids.size(),-1));
        return solve(cuboids,-1,0,dp);
    }
};
```
DP solution(Accepted)
```
class Solution {
    //comparator function
    static bool comp(vector<int>& d1, vector<int>& d2){
        if(d1[0] == d2[0]){
            if(d1[1] == d2[1]){
                return d1[2] < d2[2];
            }
            return d1[1] < d2[1];
        }
        return d1[0] < d2[0];
    }
public:
    int maxHeight(vector<vector<int>>& cuboids) {
        //sorting each value
        for(int i = 0; i < cuboids.size(); i++){
            sort(cuboids[i].begin(),cuboids[i].end());
        }
        //sorting the array
        sort(cuboids.begin(),cuboids.end(),comp);
        //dp array(pos,prev)
        vector<vector<int>> dp(cuboids.size()+1,vector<int>(cuboids.size()+1,0));
        for(int pos = cuboids.size() - 1; pos >= 0; pos--){
            for(int prev = pos - 1; prev >= -1; prev--){
                int skip = dp[pos+1][prev+1];
                int take = 0;
                if(prev == -1 || (cuboids[prev][0] <= cuboids[pos][0] && cuboids[prev][1] <= cuboids[pos][1] && cuboids[prev][2] <= cuboids[pos][2])){
                    take = cuboids[pos][2] + dp[pos+1][pos+1];
                }
                dp[pos][prev+1] = max(skip,take);
            }
        }
        return dp[0][0];
    }
};
```
Space Optimised(Since there is a requirement of only current row and forward row in dp table at all time)
```
class Solution {
    //comparator function
    static bool comp(vector<int>& d1, vector<int>& d2){
        if(d1[0] == d2[0]){
            if(d1[1] == d2[1]){
                return d1[2] < d2[2];
            }
            return d1[1] < d2[1];
        }
        return d1[0] < d2[0];
    }
public:
    int maxHeight(vector<vector<int>>& cuboids) {
        //sorting each value
        for(int i = 0; i < cuboids.size(); i++){
            sort(cuboids[i].begin(),cuboids[i].end());
        }
        //sorting the array
        sort(cuboids.begin(),cuboids.end(),comp);
        //dp array(pos,prev)
        vector<int> curr(cuboids.size()+1,0);
        vector<int> forw(cuboids.size()+1,0);
        for(int pos = cuboids.size() - 1; pos >= 0; pos--){
            for(int prev = pos - 1; prev >= -1; prev--){
                int skip = forw[prev+1];
                int take = 0;
                if(prev == -1 || (cuboids[prev][0] <= cuboids[pos][0] && cuboids[prev][1] <= cuboids[pos][1] && cuboids[prev][2] <= cuboids[pos][2])){
                    take = cuboids[pos][2] + forw[pos+1];
                }
                curr[prev+1] = max(skip,take);
            }
            forw = curr;
        }
        return curr[0];
    }
};
```