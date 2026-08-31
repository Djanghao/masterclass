# 100% faster Simple C++ solution well explained, DP , Recursive

**Author:** uzumaki__naruto
**Votes:** 107
**Link:** [https://leetcode.com/problems/predict-the-winner/solutions/1625806/](https://leetcode.com/problems/predict-the-winner/solutions/1625806/)

---

***Please do upvote if you like my explaination so that it can remain on top and help others also***

Our basic idea will be to get the max score any player can have, given that both players play optimally.

# Recursive Approach
**Step1: Assumption**
Let the function ***maxScore(...)*** gives the maximum score a player can have if its their turn
And let ***'total'*** be the sum of all the elements in the array that is yet to be picked,

**Step 2: Main Logic**
Now, the maxm any player will be able to get is ***total-maxm the other player can get**.*
Mathematically maximum we can get is total-maximum the next player can get.
Now, we can choose an element either from start or end, it depends on us. But since we are trying to play optimally so we will try to reduce the maximum score of the other player.

So In simple words it will be ***total-min(maxSum when our player chooses starting element ,maxSum when our player chooses ending element)***

*so maxSum(...) will depend on the following parameters :*
* nums array
* starting index(i)
* ending index(j)
* total

Now, for every next player total will be equal to total-(the element we choose)

**Step 3: Base Condition**
It will be simplem when i>j we can't evaluate, so we return 0;

**Now enough with the theory, lets see it in code**

**TC:- O(2^N)** As we have N levels and each level we have 2 choices either to select ith or jth element.

**SC: O(N^2)** Recursive stack space.

```
class Solution {
    bool checkWin(int ans,int total){
	   //ans=max player 1 can score and total=sum of all elements in the array
	   //so, player2's score=total-player1's score . ie:-total-ans;
	   //According to question player1's score should be greater than or equal to player2's score. 
	   return ans>=total-ans;
    }
    int maxScore(vector<int>&A,int total,int i,int j){
        if(i>j) //our base condition
            return 0;
      return total-min(maxScore(A,total-A[i],i+1,j),maxScore(A,total-A[j],i,j-1)); //max the current player can get is total-maxm the next player can get.
    }
public:
    bool PredictTheWinner(vector<int>& nums) {
        int total=0; 
		//total=sum of all elements in the array
        for(auto x:nums)
            total+=x;
        return checkWin(maxScore(nums,total,0,nums.size()-1),total);
    }
};
```


# Memoization (DP)
**Step 1: Dp Statement**
Our dp[i][j] will contain the maxm a player can score if he has access to elements from i to j only

**Step 2: Thats all we will code now :**


**TC:- O(N^2)** As we have N^2 dp states and we visit every state only once.

**SC: O(N^2)** Dp array size

```
class Solution {
    int dp[21][21]; //dp array
	//dp[i][j]= maxm a player can score if they have access to elements form index i to index j only
    bool checkWin(int ans,int total){
        return ans>=total-ans;
    }
    int maxScore(vector<int>&A,int total,int i,int j){
        if(i>j)
            return 0;
        if(dp[i][j]!=-1)
            return dp[i][j];
        dp[i][j]=total-min(maxScore(A,total-A[i],i+1,j),maxScore(A,total-A[j],i,j-1));
        return dp[i][j];
    }
public:
    bool PredictTheWinner(vector<int>& nums) {
        int total=0;
        for(int i=0;i<21;i++)
            for(int j=0;j<21;j++)
                dp[i][j]=-1;  //initialising to -1
        for(auto x:nums)
            total+=x;
        return checkWin(maxScore(nums,total,0,nums.size()-1),total);
    }
};
```

***I did a lot of hardwork in explaining this. If you like it please do upvote and if you have any query feel free to ask me in the comment section down below.***

***Thank you***