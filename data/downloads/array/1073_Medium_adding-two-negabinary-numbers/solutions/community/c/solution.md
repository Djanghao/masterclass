# C++ | Easy solution with detailed explanation

**Author:** deepak728
**Votes:** 3
**Link:** [https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/2084891/](https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/2084891/)

---

# Approach :
Everything will be same as binary addition with base -2. Except when remainder is negative. 

`sum = a1+a2+carry` Possible values of sum are` { -1, 0, 1, 2, 3} `
`remainder = sum%(-2)` Possible values of remainder are` { -1, 0 , 1} `
`carry = sum / (-2) `Possible values of carry are` { -1, 0, 1} `
In case of binary addition possible values of sum are` { 0, 1,2,3}` ,  remainders and carry are `{0 ,1} ` 

We cannot have negative remainder so we should make it positive. 

After doing some iterations you will find that remainder is negative only when sum is negative. 
`N = divisor * quotient + remainder. `
Here we are finding carry by dividing sum by (-2) so quotient is basically carry. 
```
sum = (-2) *  carry + r 
when sum is -1. 
-1 = (-2) * 0 -1 
To make remainder positive add and subtract -2. 
-1 = -2* 0 -2 -1 +2;
-1 = -2 * ( calculated_carry + 1 ) +1 
```
To make remainder positive we have to increment carry by 1 and add 2 to remainder. 

```
vector<int> addNegabinary(vector<int>& arr1, vector<int>& arr2) {
        vector<int> ans;
        int l= max(arr1.size(),arr2.size())+2;    // carry can be forwarded to maximum 2 positions. 
        int a1,a2,sum, carry=0,r;
        reverse(arr1.begin(),arr1.end());
        reverse(arr2.begin(),arr2.end());
        int i=0; 
        
        while(i<l){
            a1 = i<arr1.size() ? arr1[i] : 0;
            a2 = i<arr2.size() ? arr2[i] : 0; 
            sum = a1+a2+carry;
            r= sum%(-2);
            carry= sum/ (-2);
            if(r<0){
                r+=abs(-2);
                carry =carry+1;
            }
            ans.push_back(r);
            i++;
        }
        while(ans.back()==0&&ans.size()!=1)
            ans.pop_back();     // remove trailing zeroes 
        reverse(ans.begin(),ans.end());
        
        return ans;
    }
```
