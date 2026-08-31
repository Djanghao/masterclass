# ✅C++✅||🕉️Apni-Bhasha-Mein||👍Seedhi-Baat-No-Bakwaas👌||DP😍 |Interview Prep👨‍💻🔥

**Author:** modisanskar5
**Votes:** 14
**Link:** [https://leetcode.com/problems/decode-ways-ii/solutions/3868973/](https://leetcode.com/problems/decode-ways-ii/solutions/3868973/)

---

# Intuition & Approach
- Explained in the code

# Complexity
- Time complexity: $O(N)$

- Space complexity: $O(N)$

# Code
```
class Solution
{
    public:

        	LOGIC

       	IMP\uD83D\uDCA1
       	- Decode Ways 1 karlo aasan hoga samajhna.

       	KARNA KYA HAIN\u2753
       	1. Decode Ways 1 jaisa question hi hain .
       	2. Only twist is ki ab '*' ki entry ho gayi hain.
       	3. '*' ki jagah '9' chars aa sakte hain .
       	4. Baki wohi same "single" and "double" chars decodings nikalni hain numeric string se.

       	INTUITION &APPROACH\uD83E\uDD14
       	1. Apne paas dobara se 2 choice hain "single char" aur "double" char choose karne
       	ki.
       	2. So we will use "RECURSION"\uD83D\uDCA5.
       	3. And single aur double char aise choose karne hain ki starting char '0' na ho.
       	4. Ab yahan per "3 cases" ban sakte hain:-
       	- "1st case:-" Single char hi le bas usme bas start char "0" nahin hona chahiye.
       	Aur agar char "*" hua to 9 choices hain hamare paas "*" ki jagah dalne ki.

       	- "2nd case:-" Double char ho aur usme se 1st char ya to "1" ho ya "*" then iske 
       	baad next char check karenge ki kahin wo bhi to "*" nahin ya fir normal digit hain
       	If "*" then again "9" digits se replace kar sakte hain "*" ko like "1*"
       	Nahin to simple "+2 karenge" agar simple num nikla like "12,13".

       	- "3rd Case:-" Double char aur usme 1 st char "2" ya fir "*" ho then iske aage ka
       	char check karenge ki wo "*" hain ya normal digit hain "<=6" agar
       	"*" nikla then apne baas "6" options hain "*" ko replace karne ke . Like "2*"
       	"Normal digit" nikla aur wo digit "<=6" hain then "+2" karenge aur aage badhenge.
       	Like "21,23...".

       	5. In saare options ka addition karke mod nikal lenge.
       	6. BASE CASE:-
       	- 1st char '0' nahin hona chahiye.
       	- index ki length string ke size ke barabar ho jaye to return 1.
       	Kyo\u2753Kyoki hamare paas bas 1 hi choice bachi hain us string ko lene ki.
       	7. "Recursive Function :-" helper(int ind,string &s)
       	Here ind represents at which position of string we are at.
       	8. Now there will be overlapping subproblems to deal with so we will use
       	"MEMOIZATION".
       	9. Steps for Memoization:-
       	- How many params are changing\u2753Here "1 param" is changing which is "index" in a
       	string.
       	- Declare the size of dp array -> Here it will be "1D" array.
       	- Check for already solved indexes.
       	- Store the result in dp array.
       	10. What will dp[i] represent \u2753-> It will represent the number of decodings
       	possible till ith index in a string s.

       	//=====================================================================================================
       	//Memoization

        int MOD = 1e9 + 7;
    int decodings(int ind, string &s, vector<int> &dp)
    {
        if (ind == s.size())
           	//If we have reached the string end then we have only one choice
           	//to take the remaining char
            return 1;
        if (s[ind] == '0')
           	//invalid choice
            return 0;
        if (dp[ind] != -1)
           	//Already solved
            return dp[ind];

        long long oneCharChoice = decodings(ind + 1, s, dp);
       	//Choice of choosing 1 char
        if (s[ind] == '*')
            oneCharChoice = (oneCharChoice *9) % MOD;
       	//If the 1 char is '*' then there are 9 ways of replacing that with char

        long long twoCharChoice1 = 0;
       	//Double digits choice in whic the 1st char is 1
        long long twoCharChoice2 = 0;
       	//Double digits choice in whic the 1st char is 2

        if (ind + 1 < s.size())
        {
            if (s[ind] == '1' || s[ind] == '*')
            {
                twoCharChoice1 = decodings(ind + 2, s, dp);
                if (s[ind + 1] == '*')
                {
                    twoCharChoice1 = (twoCharChoice1 *9) % MOD;
                   	//9 ways of replacing '*' 
                }
            }
            if (s[ind] == '2' || s[ind] == '*')
            {
                if (s[ind + 1] == '*')
                {
                    twoCharChoice2 = decodings(ind + 2, s, dp);
                    twoCharChoice2 = (6 *twoCharChoice2) % MOD;
                   	//6 ways of replacing '*' 
                }
                    else if (s[ind + 1] - '0' <= 6)
                    {
                       	//Normal digit other than '*'
                        twoCharChoice2 = decodings(ind + 2, s, dp);
                    }
                }
            }
            return dp[ind] = ((oneCharChoice + twoCharChoice1) % MOD + twoCharChoice2) % MOD;
           	//Storing of all choices
        }
        int numDecodings(string s)
        {
            int n = s.size();
            vector<int> dp(n + 1, -1);
            return decodings(0, s, dp);
        }
    };
```
If you *like* \uD83D\uDC4D this solution do *upvote* \u2B06\uFE0F and if there is any *improvement or suggestion* do mention it in the *comment* section \uD83D\uDE0A.

<p align="center">
<img src="https://assets.leetcode.com/users/images/1b604300-df68-46aa-a267-71f38463bb89_1684820402.7869222.jpeg" width='350' alt="Upvote Image">
</p>