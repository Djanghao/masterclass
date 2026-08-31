# Clear and simple explanation with intuition: 100% faster

**Author:** thisisakshat
**Votes:** 186
**Link:** [https://leetcode.com/problems/combinations/solutions/1141903/](https://leetcode.com/problems/combinations/solutions/1141903/)

---

**Intuition:** Since we are asked to calculate all the possible combinations , hence we have to use backtracking

**Concept:** In every backtracking problem , there are two things to keep in mind , which we will explore here as well :
*  Base Case: Every problem of backtracking has some base case which tells us at which point we have to stop with the recursion process. In our case, when the size of our array `current` equals to `k` i.e. `current.size()=k`, we stop with the recursion and add it to our final result `ans`.

*   Conditions: There is just one thing to keep in mind here:
   After generating combinations corresponding to a particular number `i` , proceed to the next element by popping the element from the temporary array `current`, as we used that already. 
 
We basically consider a number `i`, generate the combinations corresponding to it by recursively calling it again, and then we pop that element as we are done with it and proceed to the next!!
		
And thats it!! We are done!! Keeping this in mind, here is the code

**Code:**
```
class Solution {
public:
    vector<vector<int>> ans;
    
    void helper(int idx, int k,vector<int>&current,int n)
    {
        if(current.size()==k)    // base case
        {
            ans.push_back(current);
            return;
        }
        
        for(int i=idx;i<n+1;i++)
        {
            current.push_back(i);  //consider the current element i
            helper(i+1,k,current,n); // generate combinations
            current.pop_back(); //proceed to next element
        }
    }
    
    vector<vector<int>> combine(int n, int k) {
        vector<int>current;
        helper(1,k,current,n);
        return ans; //return answer
    }
};
```
**For similar problems: [Backtracking Collection](https://leetcode.com/discuss/interview-question/1141947/backtracking-study-and-analysis)**

If you like, please **UPVOTE**