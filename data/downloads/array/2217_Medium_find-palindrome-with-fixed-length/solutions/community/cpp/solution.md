# simple and intuitive, pattern based c++ solution

**Author:** tallusoxidane
**Votes:** 13
**Link:** [https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/1891452/](https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/1891452/)

---

consider this, suppose you have 5 empty cells like this,
| __ | __ | __ | __ | __ |
| --- | --- | --- | --- | --- |

how many 5 digit numbers can you get (repetition of digits allowed)?
you have 9 options (1-9) to put in first cell,
10 options (0-9) to put in from second to last cell.
so,

| 9 | 10 | 10 | 10 | 10 |
| --- | --- | --- | --- | --- |

i.e., you can get 90000 numbers (from 10000 to 99999) of 5 digits.

Now, if I ask you to just concatenate these number reversely to themselves, so a number like, say,

```48317``` will become ```4831771384```

isn't the new number a palindrome?

___

Using the same logic, now consider this
if the length of palindrome number is 'x', then the total number of palindromes with 'x' length are as follows:

| Length of the number | Total number of Palindromes possible |
| --- | --- |
| 1 | 9 |
| 2 | 9 |
| 3 | 90 |
| 4 | 90 |
| 5 | 900 |
| 6 | 900 |
| 7 | 9000 |
| 8 | 9000 |
| 9 | 90000 |
| 10 | 90000 |

How do we get the above table?
If you don't get it, its fine. just scratch your head a bit, that's how your PSA will improve.

Anyway, if you still don't get it, here is the explanation.

Let's say the given length is 5, so we only need to consider first 3 cell. After that, we are only repeating the leading cells.
So, for a given length of 5 digits > the possible number of palindromes are > 9* 10* 10.
This will clear it up..

| x1 | x2 | x3 | x2 | x1 |
| --- | --- | --- | --- | --- |

**OR** if the length was 6, then also total possible palindromes would be 900 as,

| x1 | x2 | x3 | x3 | x2 | x1 |
| --- | --- | --- | --- | --- | --- |

___


**NOW** moving on to the next part,
consider the first and last palindrome with respect a specified length:

| Length of the number | Total number of Palindromes possible | First Palindrome | Second Palindrome |
| --- | --- | --- | --- |
| 1 | 9 | 1 | 9 |
| 2 | 9 | 11 | 99 |
| 3 | 90 | 101 | 999 |
| 4 | 90 | 1001 | 9999 |
| 5 | 900 | 10001 | 99999 |
| 6 | 900 | 100001 | 999999 |
| 7 | 9000 | 1000001 | 9999999 |
| 8 | 9000 | 10000001 | 99999999 |
| 9 | 90000 | 100000001 | 999999999 |
| 10 | 90000 | 1000000001 | 9999999999 |

Also, observe that, let's say for len==5, I am considering first 3 digits to generate a palindrome.
And the first 3 digits for the first palindrome would be: 100
for the next, 101,
then 102, 103, 104..and so on.
therefore, for the nth palindrome >> 100 + (n-1)

Voila !
Algo is ready..


**Based** on the above logic, the code is as follows:


```
#define ll long long

class Solution {
    
    ll nthpalindrome(int n, int len, int exp){
        
        ll n1 = pow(10,exp);
        ll n2 = n1+(n-1);
        
        string s1 = to_string(n2);
        string s2 = "";
        
        for(int i=1; i<=(len/2); i++){
            s2+=s1[i-1];
        }
        
        reverse(s2.begin(), s2.end());
        
        s1=s1+s2;
        
        ll ans = stoll(s1);
        
        return ans;
    }
    
    
public:
    vector<ll> kthPalindrome(vector<int>& v, int len) {
        int n = v.size();
        vector<ll> ans(n,0);
        int exp;
        
        if(len%2){
            exp=len/2;
        }else{
            exp=len/2-1;
        }
        
        int lim = 9*pow(10,exp);
        
        for(int i=0; i<n; i++){
            int nth = v[i];
            if(nth>lim) ans[i]=-1;
            else ans[i]=nthpalindrome(nth,len,exp);
        }
        
        return ans;
    }
};

```






