# || CPP ||💡Dynamic Programming, Explained Thought process. O(n) solution

**Author:** LikeTheSun14
**Votes:** 18
**Link:** [https://leetcode.com/problems/total-appeal-of-a-string/solutions/3708693/](https://leetcode.com/problems/total-appeal-of-a-string/solutions/3708693/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
As latin alphabets contains only 26 character, its always possible that question asked about the unique characters or property based on it. first thought was storing the frequency in prefix vector and processing it.
This comment helped me a lot to come up with current approach
[Comment by cursydd ](https://leetcode.com/problems/total-appeal-of-a-string/description/comments/1802971)
  
# Approach
<!-- Describe your approach to solving the problem. -->
Since we are asked to find the appeal for all substring we can't traverse trough all the substring and sum up their appeals.
As it would have O(n^2) or higher time complexity.
which will definitely give TLE for n = 1e5;

So i tried to calculate the way we count the number of substring endings at index i. that would be i+1;
and we can calculate all of them in single pass.

I tried above concept with appeal, i.e. total appeal of all the substrings ending at ith index.
lets look at dry run of following two strings.
it will help you understand the dp transition states;

```
example 1:
s = "abcd"

Index:       0   1   2    3
Substrings:  a  ab  abc  abcd
             1   b   bc   bcd
                 3    c    cd
                      6     d
                           10 
```

   appeal at i = 1  -> 3= 1(pre index appeal) + (1+1)
   appeal at i = 2  -> 6= 3(pre index appeal) + (2+1)
   appeal at i = 3  -> 10= 6(pre index appeal) + (3+1)


``` 
    if(ith character has no previous occurance)
     cur appeal (at ith index) = appeal of previous index + ( index +1) 
```
total appeal = 1+3+6+10;

example 2:
s = "abcdb"
```
Index:       0   1   2     3    4
Substrings:  a  ab  abc  abcd  abcdb (string has extra b)
             1   b   bc   bcd   bcdb (string has extra b)
                 3    c    cd    cdb
                      6     d     db
                           10      b
                                  13 

``` 
   appeal at i = 4 -> 10 + (4+1) - ( extra repeating characters).
    **This extra characters  will be number of the substrings that are ending at the last occurance index ( i.e. last occurance +1 ),
as they already contains current character**


  ``` 
if(ith character has previous occurance)
 cur appeal (at ith index) = appeal of previous index + ( index +1) - (last occurance index +1)
```
# Summary
```
dp[i]  = dp[i-1] +(i +1) - ( last_occ[s[i]] +1)
```
and As our current Dp state only depends on previous State,
we can use two variables, Pre_appeal and Cur_appeal to obtain
the answer with constant space complexity.
we have initialized last_occ with -1,
When there are no previous occurance ( last_occ[s[i]] +1 ) turns to zero.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
**O(n)**

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
**O(1)** As we use constat space of 26 integers.

# Code

```
class Solution {
public:
    long long appealSum(string &s) {
        int n = s.size();
        vector<int> last_occ(26 ,-1 );
    long ans = 0;
    int pre_appeal = 0 ; 
        for(int i = 0; i < n; i++)
        {
            int cur_appeal = 0;
            cur_appeal = pre_appeal + (i +1)  - ( last[s[i] - 'a'] +1);
            ans += cur_appeal;
            last_occ[s[i] - 'a'] = i;
            pre_appeal = cur_appeal;
        }
        return ans;
    }
};
```
**Please Upvote if you found this helpful**
