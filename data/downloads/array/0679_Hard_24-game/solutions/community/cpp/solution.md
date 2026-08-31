# recursion, backtraking, all possible iterations easy explained

**Author:** ranaujjawal692
**Votes:** 5
**Link:** [https://leetcode.com/problems/24-game/solutions/3962536/](https://leetcode.com/problems/24-game/solutions/3962536/)

---

# Intuition
we will select two pair of elemets and  perform all given mathematical operations on that pair and then we store them in in  a vector and puch the result of each operation step by step by pushing them into a newly created vector with consists the calculated result and all no's except pair whose result is pushed into the vector

# Approach
we run for loop nested i,j and k we take i,j to as a pair each time to calculate the result we push it into the nelwy created list and the we again check it condition satisfies  

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n^3 * n!*(n-1)! * 3^(n-1))
n^3 for 3 for loop
n!*(n-1)!*3^(n-1) for recurssion call

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n^2)

# Code
```
class Solution {
public:
vector<double>fill(double a,double b){
// all operations
  vector<double>v={a+b,a-b,b-a,a*b};
    if(a!=0) v.push_back(b/a);
    if(b!=0) v.push_back(a/b);
  
  return v;
}
bool check(vector<double>&newl){
  if(newl.size()==1){
 // We have only one number left, check if it is approximately 24.
// will have only one element after appling operations    
return abs(newl[0]-24)<=0.1;
// <=0.1 is for upto 1 decimal places for approximation
  }
  for(int i=0;i<newl.size();i++){
    for(int j=i+1;j<newl.size();j++){
            vector<double> newList;
                for (int k = 0; k < newl.size(); k++) {
// pushing every element except i , j as we pus operation result of i,j
                    if (k != j && k != i) {
                        newList.push_back(newl[k]);
                    }
                }
                
    
   vector<double>res;
// new vector to store all possible obtained result
     res=fill(newl[i],newl[j]);
           for(int l=0;l<res.size();l++){
// push one operation
             newList.push_back(res[l]);
// check if the array is meeting requirement
             if(check(newList)) return true;
// if not pop last push
               newList.pop_back();
         }
  }}
  return false;
}
    bool judgePoint24(vector<int>& cards) {
        vector<double> newl(cards.begin(), cards.end());
        return check(newl);
    }
};
```