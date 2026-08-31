# C++✅✅ | Faster🚀 than 90%🔥| ❗Long Explanation❗ | 2-D DP + BITMASK | Clean Code |

**Author:** mr_kamran
**Votes:** 86
**Link:** [https://leetcode.com/problems/smallest-sufficient-team/solutions/3771569/](https://leetcode.com/problems/smallest-sufficient-team/solutions/3771569/)

---

# PLEASE DO UPVOTE!!!!!

**CONNECT WITH ME ON LINKEDIN :  https://www.linkedin.com/in/md-kamran-55b98521a/**

## INTUITION

This problem is kind of variation of 0/1 Knapsack, as we have to get like the target value, which is getting all the required skills, given that number of people selected should be minimum possible, and they should have all those skills as group. What we can do here is, we have the constraints for skills as <=16, so Bitmask will works like butter here in terms of veryfying our target in O(1).
So First of all we will store all the skills of a particular people in form of Bitmask, and then we will call of DP function which is boiled down to a 0/1 Knapsack, here our target is the final required bitmask that is nothing but, a mask which has all req_skills (or simply a mask of size m with all bits set), and we will do pick and non pick a particular people, i.e either add it to ans (here take BITWISE OR to set the people[index]'s skill bits in our mask) or simply ignore that index, all the base cases and memoization part is explained with inline comments

## APPROACH

1. Hash req_skills (set the index for that req_skills[i])
2. Now create seperate Bitmasks for skillset that a particular people as (ie. set that skill bit for that people[i])
3. Declare a 2D DP
4. **Base Cases** are, if we have traversed our people_skills vector fully, then check if the mask is having all bits set or not, and if our stored ans is greater in length than the current answer then update the stored ans
5. **Memoization** if we have already reached a partiular index with a specific mask value, (repeated Sub-Problem), then if value stored in DP is less than current answer, there is no point proceeding furthur, so return

5. Call the helper function, Pick non Pick indexes, and store the valid ans in the res vector



**Ask Furthur Doubts in the Comment Section**
# Code
```
class Solution {
public:

vector<int>res;

void helper(int i,vector<int>&people_skill,int m,int mask,vector<int>&ans,vector<vector<int>>&dp)
{
  if(i == people_skill.size()) //Base Case
  {
    if(mask == ((1<<m)-1)) //Check for all req_skills included
    {
      if(res.size() == 0 || (ans.size() < res.size())) res = ans; //better ans then update
    }
    return;
  }

  if(dp[i][mask] != -1) //Memoization Part
  {
    if(dp[i][mask] <= ans.size()) return;
  }

  helper(i+1,people_skill,m,mask,ans,dp); //Non-Pick / Ignore Case

  ans.push_back(i); // Pick Case

  helper(i+1,people_skill,m,(mask|people_skill[i]),ans,dp); //Next Call

  ans.pop_back(); //Undo the change in Pick

  if(ans.size() > 0) dp[i][mask] = ans.size(); //if found and answer then update DP
}


 vector<int> smallestSufficientTeam(vector<string>& req_skills, vector<vector<string>>& people) {

        int n = people.size();
        int m = req_skills.size();

        unordered_map<string,int>mpp; //for hashing skill v/s bit

        for(int i = 0;i<m;++i) mpp[req_skills[i]] = (1<<i); //setting ith bit, for req_skill[i] skill

        vector<int>people_skill; //vector of mask for peoples

        for(auto it : people) 
        {
          int mask = 0;
          for(int j = 0; j < it.size(); ++j)
          {
            if(mpp.count(it[j])) mask |= mpp[it[j]]; //if it[j] is a required skill then set that bit for that people's mask
          }
          people_skill.push_back(mask); //store the mask 
        }

        vector<vector<int>> dp(n, vector<int>((1<<m),-1)); //n=number of people, and (1<<m) to express all value mask of size m can take
        vector<int>ans;

        helper(0,people_skill,m,0,ans,dp);
        return res;
    }
};

```
![b62ab1be-232a-438f-9524-7d8ca4dbd5fe_1675328166.1161866.png](./images/0.png)