# ✅✅ c++ || 3 recursive methods || well explained  || DP

**Author:** bhomik23
**Votes:** 35
**Link:** [https://leetcode.com/problems/predict-the-winner/solutions/2206301/](https://leetcode.com/problems/predict-the-winner/solutions/2206301/)

---

METHOD_1
here we will just pass a recursive function where we have passed a bool variable "turn" which indicates the turn of player 1 when its true , and false when player 2 will have to pick

if i>j   => this will indicate the base case , here we will check the condition sum1>=sum2 , if well and good , otheriwse for that part player 2 has won 

another important thing to see is that for player 1 's turn we have used or ie || , means if either of the 2 calls is true , means that player 1 has won 
and for player 2 we have used && becuase as we know that , player 2 will choose the maximum posssible value , therefore if both of the recursive conditions will be true , means that in both of the calls player 1 has won , then only player 1 willl win 
 pls draw decison tree the try to understand 

no need of memoization as , it isnt giving TLE
we can easily do it through 2D matrix
```
class Solution {
public:
    int solve(vector<int>& nums, int sum1 , int sum2, bool turn ,int i, int j ){
        if(i>j){
            if(sum1>=sum2)
                return 1;
            
            return 0;
        }
        
        if(turn){
             return solve(nums,sum1+nums[i],sum2,false,i+1,j) || solve(nums,sum1+nums[j],sum2,false,i,j-1);
        }
        
        else
           return solve(nums,sum1,sum2+nums[i],true,i+1,j) &&  solve(nums,sum1,sum2+nums[j],true,i,j-1);
        
        
    }
    

    bool PredictTheWinner(vector<int>& nums) {
        return solve(nums,0,0,true,0,nums.size()-1);
    }
};
```

METHOD_2
here we will just calculate the maximum possible sum for player 1 , and  after that we will subtract this from total sum of nums , then we will get the sum for player 2 

here is just one catch , while writing recursive calls for player 2 we will not add nums[i ]/ nums[j], and just return the minimum because we are calculating the sum for player1

```
class Solution {
public:
    int solve(vector<int>& nums, bool turn ,int i, int j ){
        if(i>j)
            return 0;
        
        if(turn){
         return max(nums[i]+solve(nums,false,i+1,j),nums[j]+solve(nums,false,i,j-1));
        }
        
        else
           return min(solve(nums,true,i+1,j),solve(nums,true,i,j-1));
        
    }
    

    bool PredictTheWinner(vector<int>& nums) {
        
        int totalSum=0;
        for(int i=0;i<nums.size();i++){
            totalSum+=nums[i];
        }
        
        int sum1= solve(nums,true,0,nums.size()-1);
        
        int sum2=totalSum-sum1;
        
        return sum1>=sum2;
    }
};
```

METHOD_3
almost similar to 2nd method 
watch this video by [pepcoding](https://www.youtube.com/watch?v=ww4V7vRIzSk&t=90s)

```
class Solution {
public:
    int solve(vector<int>& nums,int i, int j ){
      if(i>j)
          return 0;
    
     int choice1=nums[i]+min(solve(nums,i+2,j),solve(nums,i+1,j-1));
     int choice2=nums[j]+min(solve(nums,i+1,j-1),solve(nums,i,j-2));
        
     return max(choice1,choice2);
        
    }
    

    bool PredictTheWinner(vector<int>& nums) {
        
        int totalSum=0;
        for(int i=0;i<nums.size();i++){
            totalSum+=nums[i];
        }
        
        int sum1= solve(nums,0,nums.size()-1);
        
        int sum2=totalSum-sum1;
        
        return sum1>=sum2;
    }
};
```