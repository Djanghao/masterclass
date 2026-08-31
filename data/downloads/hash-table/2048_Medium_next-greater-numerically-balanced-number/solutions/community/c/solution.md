# C++ | Backtracking | 4 steps solution | Stepwise explanation

**Author:** codingsuju
**Votes:** 8
**Link:** [https://leetcode.com/problems/next-greater-numerically-balanced-number/solutions/1537643/](https://leetcode.com/problems/next-greater-numerically-balanced-number/solutions/1537643/)

---

I knew simply incrementing n would work but I tried to do using permutation by backtracking
First of all, since n<=10^6, So there will be only 6 digits, and our result will be in at most 7 digits.
# Step 1:
So make list of balanced numbers i.e
1  22  333  4444  55555  666666 
This numbers are obvious to us, Isn't it? Yes, it is.
# Step 2:
Now we can find more such numbers by combining two or more of them.
for example : 1 and 22 combined  as 122
Now we have
list of balanced numbers as:
"1","22","122","333","1333","4444","14444","22333","55555","122333","155555","224444","666666","1224444"

# Step 3:
Can we find more good balanced numbers?
Yes, of course. Take one number from above and permute its digits , you get another number which is also balanced.
 for exmaple:
 lets take 
 122333
 Then if we permute its digits we may get: 212333 , 221333, 321233,...... and so on   ( Find it all by next_permutation or backtracking)
 Do this for all numbers from the above balanced numbers.
 You get like this ,
 1 22 122 212 221 333 1333 3133 3313 3331 4444 14444 22333 23233 23323 23332 32233 32323 32332 33223 33232 33322 41444 44144 44414 44441 55555 122333 123233 123323 123332 132233 132323 132332 133223 133232 133322 155555 212333 213233 213323 213332 221333 223133 223313 223331 224444 231233 231323 231332 232133 232313 232331 233123 233132 233213 233231 233312 233321 242444 244244 244424 244442 312233 312323 312332 313223 313232 313322 321233 321323 321332 322133 322313 322331 323123 323132 323213 323231 323312 323321 331223 331232 331322 332123 332132 332213 332231 332312 332321 333122 333212 333221 422444 424244 424424 424442 442244 442424 442442 444224 444242 444422 515555 551555 555155 555515 555551 666666 1224444 1242444 1244244 1244424 1244442 1422444 1424244 1424424 1424442 1442244 1442424 1442442 1444224 1444242 1444422 1666666 2124444 2142444 2144244 2144424 2144442 2214444 2241444 2244144 2244414 2244441 2255555 2412444 2414244 2414424 2414442 2421444 2424144 2424414 2424441 2441...
 
#  Step 4:
 Now you have list of balanced numbers. Sort it  and upper_bound is your answer.
```
class Solution {
public:
    vector<string> ans;
    void permute(string &s,vector<bool> &vis,string cur){
        if(cur.size()==s.size())
        {
            ans.push_back(cur);
            return;
        }
        for(int i=0;i<s.size();i++){
            if(vis[i]==false){
                vis[i]=true;
                permute(s,vis,cur+s[i]);
                vis[i]=false;
            }
        }
    }
    int nextBeautifulNumber(int n) {
      vector<string> nums{"1","22","122","333","1333","4444","14444","22333","55555","122333","155555","224444","666666","1224444"};
      for(int i=0;i<nums.size();i++){
          int n=nums[i].size();
          vector<bool> vis(n);
          for(int j=0;j<n;j++){
             vis[j]=false;
          }
          permute(nums[i],vis,"");
      }  
      set<int> a;
      for(string x:ans)
      {
          if(x!=""){
              int y=stoi(x);
              a.insert(y);
          }
      }
      auto it=upper_bound(a.begin(),a.end(),n);
      int res=*it;
      return res;
    }
};
