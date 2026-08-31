# c++ backtracking solution explained about large input and integer overflow

**Author:** Pragya_Anand
**Votes:** 13
**Link:** [https://leetcode.com/problems/split-array-into-fibonacci-sequence/solutions/1189702/](https://leetcode.com/problems/split-array-into-fibonacci-sequence/solutions/1189702/)

---

```
class Solution {
public:
  //you need to be extra concious about the large input beacuse it is given in string format . in java we can handle //that but in c++ we need different technique to handle that....
    bool backtrack(string s,vector<int>&ans,int index,long long f1,long long f2,int size)
    {
      // base case if we reach end and our ans have more than 2 element than its true otherwise false
      if(s.size()==index)
        return size>2;
      long long int n=0;
      for(int i=index;i<s.size();i++)
      {
        n=n*10+(s[i]-'0');
        //to avoid negative overflow 
        if(n<0)
          return false;
        //to avoid positive overflow
        if(n>INT_MAX)
          break;
        //if we had not reach to 3 elements i.e ans have only two elements than we need to check if we can put this //number into our ans or not
        if(size<2||f1+f2==n)
        {
          ans.push_back(n);
          //basic backtrack step to check further cases if it is true then we would return true
          if(backtrack(s,ans,i+1,f2,n,size+1))
            return true;
          //if we are not able to find ans then we would backtrack our answer and thus we would remove this last element
          ans.pop_back();
        }if(n==0)// if n is 0 i.e at start only if n is 0 we would return false because this would voilate question rules.
          return false;
      }return false;
    }
    vector<int> splitIntoFibonacci(string S) {
        vector<int>ans;
      //here we need two to pass three different variable except string itself, ans vector, index i.e 1st numer, 2nd //number and the size of vector to avoid overflow condition because input maybe very very large...
        backtrack(S,ans,0,0,0,0);
        return ans ;
    }
};
do upvote if you find it useful....
```