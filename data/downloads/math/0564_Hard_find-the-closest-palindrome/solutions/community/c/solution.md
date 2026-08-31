# [C++] Concise and Easy to Understand with Explanation- Faster than 100%

**Author:** pratyush63
**Votes:** 157
**Link:** [https://leetcode.com/problems/find-the-closest-palindrome/solutions/649229/](https://leetcode.com/problems/find-the-closest-palindrome/solutions/649229/)

---


For any possible number, there is 5 cases:
 Say the number is 4723
* Case 1. The next closest palidrome has one digit extra : So here it will be 10001
* Case 2. The next closest palindrome has one digit less: So here it will be 999
* Case 3. The next closest palidrome has the same number of digits 
For case 3 there are 3 subcases:
-The middle digit remains same.Postfix is the mirror image of prefix. So here 47(prefix)74(postfix)-->4774
-The middle digit increases by 1.Postfix is the mirror image of prefix. So here 4884
-The middle digit decreases by 1.Postfix is the mirror image of prefix. So here 4664
Among these 5 candidates:
The candidate having the least absolute difference from the original number is the answer. In this case it is 4774. 

class Solution {
public:

    string nearestPalindromic(string n) {
       if(n.length()==1) return to_string(stoi(n)-1); //Special case for single digit numbers
       
       int digits=n.length();
       vector<long>candidates;
       candidates.push_back(pow(10,digits-1)-1);//Case 1
       candidates.push_back(pow(10,digits)+1);//Case 2

       int mid=(digits+1)/2;
       long prefix=stol(n.substr(0,mid));
       //Case 3
       vector<long>v={prefix,prefix+1,prefix-1};
       for(long i:v)
       {
           string postfix=to_string(i);
           if(digits%2!=0) postfix.pop_back();//// If the total length is odd number, pop the middle number in postfix
           reverse(postfix.begin(),postfix.end());
           string c=to_string(i)+postfix;
           candidates.push_back(stol(c));
       }
       long mindiff=LONG_MAX;long result;long num=stol(n);
       for(int i=0;i<5;i++)
       {
           if(candidates[i]!=num&&abs(candidates[i]-num)<mindiff)//Candidate must not be the same number and abs diff is minm
           {
               mindiff=abs(candidates[i]-num);
               result=candidates[i];
           }
           else if(abs(candidates[i]-num)==mindiff) result=min(result,candidates[i]);
       }
        return to_string(result);
    }
    };