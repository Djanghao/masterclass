# Two Pointer O(q * (n + e)) Time Complexity

**Author:** deleted_user
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-pairs-of-nodes/solutions/5702167/](https://leetcode.com/problems/count-pairs-of-nodes/solutions/5702167/)

---

# Intuition
- we are intially adding the pairs based on **pure indegree of each vertex**
- We are not considering shared pairs.
- later we are just checking that **did we add that pair and if so if remove that shared pair count is it still greater than query?** 
- If so then we have no problem otherwise we have accidentally added a pair, so remove it.
- Observe the code for better understanding

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(q * (n+e))$$ q - queries, e - edges, n - vertices.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n+e)$$ for storing edges.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    vector<int> countPairs(int n, vector<vector<int>>& edges, vector<int>& queries) {
        //this vector is to count the indegree for each vertex regardless of shared pairs
        vector<int> degree(n+1,0);
        //to count shared pairs
        map<pair<int,int>, int> shared;
        for(auto &edge : edges) {
            degree[edge[0]]++;
            degree[edge[1]]++;
            //for each access we store in key : min in both as first, max in both as second
            shared[{min(edge[0],edge[1]),max(edge[0],edge[1])}]++;
        }
        //before sorting the degrees we store the original degrees
        vector<int> original = degree;
        //we don't need vertices we are only interested in their counts
        //later we can check to include them is correct choice or not
        sort(degree.begin(),degree.end());
        vector<int> answers;
        for(auto &q : queries) {
            //we use 2 - pointer approach here
            int l = 1,r = n;
            long long ans= 0;
            while(l < r) {
                //if the total degree of largest and smallest is greater than q
                //we don't need to check the remaining degrees with the largest becoz anyway they are greater than q
                if(degree[l] + degree[r] > q) {
                    //so add all those pairs
                    //observe carefully we are not concerned about shared pairs of vertices we are adding all the pairs based on pure indegree of each vertex.
                    ans += (r - l);
                    //decrement 'r' becoz all the pairs are satisfied with the largest
                    //then we take next element
                    r--;
                }
                //if the smallest is only not satisfing check for next smallest in the hope that it may exceed 'q'
                else l++;
            }
            //now this step is crutial
            //after adding all the pairs count in ans based on pure indegree regardless of shared pairs
            //we check each pair if it is worth to add in ans or not

            for(auto &[key,val] : shared) {
                //below we have two conditions
                //first is to check whether we have added that pair previously or not
                //if added then checks other condition that is if by removing shared pairs it is still greater than 'q' or not
                //if not then we remove that pair from ans.

                //for ex: if n = 3
                //edges are [1,2],[2,3],[3,1] and 
                //a single query [3]
                //means we need to find all the incidence(a,b) > 3
                //incidence(1,2) = 3, incidence(2,3) = 3, incidence(1,3) = 3, so  ans should be "zero" for this query
                //but if you trace till the above algorithm for this test case the ans is 3
                //becoz the indegrees are counted without included shared pair like for 1 = 2,2 - 2,3 - 2 and when we need incidence(1,2) = 2 + 2 which is 4 > 3 so we accidentally counted that pair
                //we are checking if we counted that pair i.e: count(a) + count(b) > q
                //if so then also checking we remove shared pair count from it i.e 2 + 2 - 1 <= 3 which means that it is not greater than 3 if we remove shared pairs so it is "FALSE COUNT" 
                //remove that pair from ans
                if((original[key.first] + original[key.second] > q) && (original[key.first] + original[key.second] - val <= q)) {
                    ans--;
                }
            }
            answers.push_back(ans);
        }
        return answers;
    }
};
```