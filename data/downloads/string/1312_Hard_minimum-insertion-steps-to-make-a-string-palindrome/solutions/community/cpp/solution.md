# [C++] Simple DP (Memoization) and Bottom-up with O(n) Space

**Author:** PhoenixDD
**Votes:** 216
**Link:** [https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/470684/](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/470684/)

---

**Observation**
Let's imagine matching the characters of the string like a palindrome, from the begining and the end with 2 pointers `i` and `j`.
We may encounter 2 scenarios:
1) The character at `i` matches character at `j`.
2) The characters don't match each other

In case of 1 we just increase the pointer `i` and decrease the pointer `j`, `i++` and `j--` respectively.

In the second case we have 2 options:
1) Insert one character at `j` to match the character at `i`.

Or

2) Insert one character at `i` to match the character at `j`.

Since we are not actually adding the characters in the string but just calculating the cost,
In case 1 we increase the pointer `i` by `1` and `j` stays as it is, as we still need a character to match at `j`
and in case 2 we decrease the pointer `j` by `1` and `i` stays as it is, as we still need a character to match at `i`.
both the cases adds cost `1` since we are inserting a letter.

We can then use these two different pairs of new `i` and `j` values (`i+1, j` and `i, j-1`) to again repeat the process and use the **minimum** result of these as our result for current pair of `i, j`.
We can see that this is recursive and thus we can use recursion with caching to store the repeated values.

**Solution (Memoization)**
```c++
class Solution {
public:
    vector<vector<int>> memo;
    int dp(string &s,int i,int j) {
        if(i>=j)							//Base case.
            return 0;
        if(memo[i][j]!=-1)					//Check if we have already calculated the value for the pair `i` and `j`.
            return memo[i][j];
        return memo[i][j]=s[i]==s[j]?dp(s,i+1,j-1):1+min(dp(s,i+1,j),dp(s,i,j-1));		//Recursion as mentioned above.
    }
    int minInsertions(string s) {
        memo.resize(s.length(),vector<int>(s.length(),-1));
        return dp(s,0,s.length()-1);
    }
};
```
**Complexity**
Space: `O(n^2)` as we can store at max all possible pairs of `i` and `j`.
Time: `O(n^2)` as we calculate all pairs of possible `i` and `j`.

**Note:** Space complexity can be reduced to `O(n)` by using bottom-up DP and storing only the previous state. (As we can see from the recursion, we only need `i-1` or `j-1` at any given point.)

**Solution (Bottom-up)** 
As I mentioned in the **Note** earlier, that we can reduce the space complexity as we only need the previous `i+1` or `j-1` states, I thought why not just add the solution as well. So here goes.

We can be cognizant of how we fill the `memo` table to optimize the space complexity when we have such scenarios. The code is pretty self explanatory with the added comments.
```c++
class Solution {
public:
    int minInsertions(string s) {
        vector<int> memo(s.length(),0);
        int prev,temp;
        for(int i=s.length()-2;i>=0;i--) {
            prev=0;                                          //This stores the value at memo[i+1][j-1];
            for(int j=i;j<s.length();j++) {
                temp=memo[j];                               //Get the value of memo[i+1][j].
                memo[j]=s[i]==s[j]?prev:1+min(memo[j],memo[j-1]);     //memo[j]=memo[i+1][j], memo[j-1]=memo[i][j-1], prev=memo[i+1][j-1].
                prev=temp;                        //Store the value of memo[i+1][j] to use it as memo[i+1][j-1] in the next iteration.
            }
        }
        return memo[s.length()-1];
    }
};
```
**Complexity**
Space: `O(n)` as we reuse the previously stored value from previous state from the `memo` or `prev` variable.
Time: `O(n^2)` as we calculate all pairs of possible `i` and `j`.