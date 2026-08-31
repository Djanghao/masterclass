# EASIEST DP GUARANTEE  Beginner Friendly

**Author:** anmol_1207
**Votes:** 91
**Link:** [https://leetcode.com/problems/paint-house-iii/solutions/2252875/](https://leetcode.com/problems/paint-house-iii/solutions/2252875/)

---

Okay, so I will guide you how I thought about it.
When I read the words minimise the cost->
Possible topics -> DP, Binary Search, Graph
But it does not look like graph. So Graph X
Constraints gave me idea of trying DP.

In DP, only those parameters should be there which are necessary for making answer of a state unique.
What I mean by it is :- If I decide the value of parameters, my answer should be unique.
It does not matter where I come from, If I reach that state with those parameters, my answer is unique.

For deciding which parameters to keep in DP State,
For every index, if it is not already colored last summer, we are deciding 
Should we pick this color or not.
This gives a Knapsack DP Pattern in which we have to make a decision for every index.
**=> Index will be a parameter of DP**

What color to choose or not choose also depends on the color of last house.
If the color is same, new neighbourhood is not formed otherwise new neighbourhood is formed.
**=> Color of parent is also a parameter of DP**

Our choice of color for a house also depends on value of target,
If Target is big, we will give different color than parent.
Otherwise same color as parent 
**=> Target will also be a parameter of DP**

So, by now we have done 2 steps 
-> (i) Identify DP Pattern
-> (ii) Make DP State (Which parameters will be there in DP )

Now Code if constraints are satisfied by DP State.
**DO Upvote if it helped you. I will be happy.**




```

int n;
vector<int> houses;
vector<vector<int>> cost;
vector<vector<vector<int>>> dp;
int c;
int rec(int i, int last, int target) {
    // Pruning
    if(target < 0 ) return -1; // we cant make negative target, also we can't access dp[][][-veTarget] so prune it initially.
	
    // cout<<"Checking Base case : "<<endl;
    // base case
    if(i==n && target!=0) { // it can be so that we have not made required targets.
        return -1;
    }
    if(i==n && target==0) {
        return 0;
    }
    
    // cache check
    // cout<<"Checking Cache : "<<endl;
    
    if(dp[i][last][target]!=-2) {
        return dp[i][last][target];
    }
    // cout<<"Cache not found"<<endl;
	
    int ans=INT_MAX; // keeping answer as INT_MAX because we will take minimum with possible answer.
    bool possible=false; // No color is possible till now 
	
    // cout<<"Checking if house already colored "<<endl;
    if(houses[i]!=0) {
        if(houses[i]!=last) {
            return dp[i][last][target]=rec(i+1,houses[i],target-1);
        }
        else {
            return dp[i][last][target]=rec(i+1,houses[i],target);
            }
    }
    // cout<<"House Not colored last summer"<<endl;
	
    // cout<<"Trying all colors : "<<endl;
    for(int k=0;k<c;k++) {
        // choice of color is k+1
        // index is k
        // cout<<"Trying color : "<<k+1<<endl;
        int temp;
        if(k+1 != last) {
         temp=rec(i+1,k+1,target-1);        
        }
        else {
            temp=rec(i+1,k+1,target);        
        }
        // if this color is possible
        if(temp!=-1) {
            // cout<<k+1<<" color is possible"<<endl;
            possible=true;
            ans=min(ans,cost[i][k]+temp);
        }
    }
    if(possible) {
    return dp[i][last][target]=ans;
                
    }
    else { // no possible color found for this place, as we need to color all houses, => answer is -1.
        return dp[i][last][target]=-1;
    }
    
}

class Solution {
public:
    int minCost(vector<int>& house, vector<vector<int>>& cst, int r, int col, int target) {
        cost=cst;
        houses=house;
        c=col;
        n=r;
		dp.resize(n+1);
        for(int i=0;i<=n;i++) {
            dp[i].resize(n+1);
            for(int j=0;j<=n;j++) {
                dp[i][j].resize(target+1);
                for(int k=0;k<=target;k++) {
                    dp[i][j][k]=-2;
                }
            }
        }
		//dp.resize(m+1 , vector<vector<int>>(n+1 , vector<int>(target+1 , -2));
        // cout<<"initialised: "<<endl;
        return rec(0,0,target); // hope nobody acceses -1 index in dp
        // return -1;
    }
};
```


Thankyou @https://leetcode.com/mudraxdagar10 for suggesting better way of initialising vectors.
   dp.resize(n+1 , vector<vector<int>>(n+1 , vector<int>(target+1 , -2));