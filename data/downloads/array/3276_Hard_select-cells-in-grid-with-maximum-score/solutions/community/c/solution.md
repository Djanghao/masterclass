# solution explained [recursion -> bitmask DP  -> greedy + bitmasking]

**Author:** niti_n_n_itin
**Votes:** 13
**Link:** [https://leetcode.com/problems/select-cells-in-grid-with-maximum-score/solutions/5718727/](https://leetcode.com/problems/select-cells-in-grid-with-maximum-score/solutions/5718727/)

---

## Recursion 

#### approach 

We will start by picking each element one by one from every row to see what is the maximum score we can get from all the combinations.

Note: `We can even decide not to choose any number from a row.`

for ex : 
[5 , 5]
[5, 5]
[10, 1]

In the above case, we will not pick any number from the second row (otherwise, it will violate the second condition).

```
class Solution {
public:
    int max_score ( vector<vector<int>> & ar, int i, unordered_map<int, int> &mp){
        int n = ar.size();
        if(i == n)
            return 0;
        int res = 0;
        for(auto x : ar[i])
            if(!mp[x]){
			    // set mp[x] =1 , to not pick this number again for other rows.
                mp[x] = 1;
                res = max(res, max_score(ar, i + 1, mp) + x);
				// set mp[x] =0 , to make it pickable again.
                mp[x] = 0;
            }
		// Skip picking number from this row
        res = max(res, max_score(ar, i + 1, mp));
        return res;
            
    }
    int maxScore(vector<vector<int>>& ar) {
	   // map to keep track of which number i have included 
        unordered_map<int, int> mp;
        return max_score(ar, 0, mp);
    }
};
```

Time complexity : `O ( N  ^ N) )` , where N = size of the grid 
Space complexity : `O ( N * N ) ` , where N = size of the grid , Why? Because this is the maximum number we can have which we will be storing in the map.


## Adding greedy optimisation : 

Now, here are some observations we can use to optimize our above approach a little bit.

1. `we can even decide to not choose any number from the row` -> We will only do this when we can't pick any element from that row; otherwise, it's always better to pick some number as they are greater than 0.
2. It's better to always pick the largest number.

But the problem here is that it could be repeating in some other row, and picking it now may result in a lesser max score.

for ex. 
[
[8,7,6],
[8,3,2]
]

It's a better choice to not pick 8 in the first row, as we then won't be able to pick 8 again in the second row.

BUT what if the largest number is not repeating in any other row? Then it always makes sense to pick it.

```
class Solution {
public:
    int max_score ( vector<vector<int>> & ar, int i, unordered_map<int, int> &mp, vector<unordered_map<int, int> > &mp2){
        int n = ar.size();
        if(i == n)
            return 0;
        int res = 0;
        bool cant_pick_number_from_row = true;
        for(auto x : ar[i]){
            int definately_pick = 0;
            // checking x occurrence in other rows.
            for (int j = 0 ; j < n; j ++){
                // leave the current row.
                if(i != j){
                    definately_pick += mp2[j][x];
                }
            }
            
            if(!mp[x]){
			    // set mp[x] =1 , to not pick this number again for other rows.
                mp[x] = 1;
                cant_pick_number_from_row = false;
                res = max(res, max_score(ar, i + 1, mp, mp2) + x);
				// set mp[x] =0 , to make it pickable again.
                mp[x] = 0;
                if(!definately_pick){
                // if it's not occurring in other rows , then there is no need to check for lesser number as they we always give less total score. 
                    break;
                }
                
            }
        }
		// Skip picking number from this row, only if we can not pick any number from this row.
        if(cant_pick_number_from_row)
            res = max(res, max_score(ar, i + 1, mp, mp2));
        return res;
            
    }
    int maxScore(vector<vector<int>>& ar) {
	   // map to keep track of which number i have included 
        unordered_map<int, int> mp;
        
        // Map to keep track of the number in every row, we will use to to check if we can
        // "DEFINITELY" pick the largest possible number
        vector<unordered_map<int, int> > mp2(ar.size());
        
        for(int i = 0; i < ar.size(); i++){
            //  Sorting the array in descending order so that i can choice large number first.         
            sort(ar[i].begin(), ar[i].end(), greater<>() );
            for(int x : ar[i])
                mp2[i][x]++;
        }
        
        
        return max_score(ar, 0, mp, mp2);
    }
};
```

Time complexity : although we improve it a little but i think it's complexity in the wrost case is still O(N ^N ).
space complexity : O ( N ^ N )

NOTE : This will still give TLE. So why do this? Because in DP bitmasking, I was using a string instead of an integer, which was also giving TLE, but after adding the above optimizations, it got passed.





## DP with bitmask : 

`what is bitmask DP`

In normal DP, our result memorization depends on some value. For example, how many steps until we reach the top ( [problem link](https://leetcode.com/problems/climbing-stairs/) ), which house we are robbing, and whether we robbed the previous house or not ( [problem link](https://leetcode.com/problems/house-robber-ii/) ). 

But in some questions, our memorization depends on some combinations. Like in this question, to decide whether we have computed the answer already, we need to know at what row we are (`i`) and what were the numbers we have chosen previously (`mp`). If we can somehow use the store and return the result based on i & mp, then we will reduce our repetitive computations. 


To store combinations, we use bitmasking. (You don't need to know more; I'm sure once you go through the code, you will understand it. Plus, I can't tell you more about it in this article. Just do 2-3 questions on bitmask DP to get more familiar with it.)

[DP question list](https://leetcode.com/discuss/general-discussion/1000929/solved-all-dynamic-programming-dp-problems-in-7-months)

Now to store the number I have picked, I will change mp from unordered_map to string, so that I can easily store it in `unordered_map<int, unordered_map<string, int>> dp;`

```
class Solution {
public:
    int max_score ( vector<vector<int>> & ar, int i, string & mp, vector<unordered_map<int, int> > & mp2, unordered_map<int, unordered_map<string, int>> &dp )
    {
        int n = ar.size();
        if(i == n)
            return 0;
        if(dp[i][mp])
            //  why re-compute when we already know the answer.           
            return dp[i][mp];

        int res = 0;
        bool cant_pick_number_from_row = true;
        for(auto x : ar[i]){
            int definately_pick = 0;
            // checking x occurrence in other rows.
            for (int j = 0 ; j < n; j ++){
                // leave the current row.
                if(i != j){
                    definately_pick += mp2[j][x];
                }
            }
            
            if(mp[x] == '0'){
			    // set mp[x] =1 , to not pick this number again for other rows.
                mp[x] = '1';
                cant_pick_number_from_row = false;
                res = max(res, max_score(ar, i + 1, mp, mp2, dp) + x);
				// set mp[x] =0 , to make it pickable again.
                mp[x] = '0';
                if(!definately_pick){
                // if it's not occurring in other rows , then there is no need to check for lesser number as they we always give less total score. 
                    break;
                }
                
            }
        }
		// Skip picking number from this row, only if we can not pick any number from this row.
        if(cant_pick_number_from_row)
            res = max(res, max_score(ar, i + 1, mp, mp2, dp));
        
        // store to result to avoid repeatative computation.
        return dp[i][mp] = res;
            
    }
    int maxScore(vector<vector<int>>& ar) {
	   // map to keep track of which number i have included 
        int MAX_ELEMENT_LIMIT = 100;
        string mp(MAX_ELEMENT_LIMIT + 1, '0');
        
        // Map to keep track of the number in every row, we will use to to check if we can
        // "DEFINITELY" pick the largest possible number
        vector<unordered_map<int, int> > mp2(ar.size());
        
        for(int i = 0; i < ar.size(); i++){
            // Sorting the array in descending order so that i can choice large number first.         
            sort(ar[i].begin(), ar[i].end(), greater<>() );
            for(int x : ar[i])
                mp2[i][x]++;
        }
        
        unordered_map<int, unordered_map<string, int>> dp;
        
        
        return max_score(ar, 0, mp, mp2, dp);
    }
};
```


Time complexity : i think O ( N * S), where N = no of grids, S = number range.
Space : O( N * S ) 

please correct me if i'm wrong ^. 


my journey : 

I first coded a recursive approach, then bitmask DP, but it was still giving TLE (maybe because I used a string instead of an integer for bitmask, but I was not sure how to do that). So, I added a greedy optimization, and it got passed.

Please comment if you have any doubts/questions or want to correct something.


