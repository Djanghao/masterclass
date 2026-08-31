# C++ | Digit DP | Clean Code | Detailed explanation | Easy to understand

**Author:** harshbardolia
**Votes:** 62
**Link:** [https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/3836309/](https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/3836309/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Looking at the constraints, the task and the conditions, it is easy for someone to understand that we have to use `Digit DP` to solve this problem. From the name itself, it is easy to guess that we are going to play with the digits. So lets dig right into the solution! ;-)

# Approach
<!-- Describe your approach to solving the problem. -->
#### Solve for a range (zero to high)
Using digit dp we always focus on building a number satisfying all the conditions. If we finally manage to build that number then we say, yes we have got one ;-) But how we\u2019ll build that number? For the time being let\u2019s say `low` is zero. So we need to find the total numbers which are not greater than `high` and also satisfy the given conditions.

#### Building the sequence of digits
Let\u2019s consider the number as a sequence of digits. Let\u2019s name the sequence `s`. Initially `s` is empty. We\u2019ll try to add new digits from left to right to build the sequence. In each recursive call we\u2019ll place a digit in our current position and will call recursively to add a digit in the next position. But can we place any of the digits from **0** to **9** in our current position? Of course not, because we need to make sure that the number is not getting larger than `b`.

#### Factors affecting the answer
1. **tight**: this will make sure that the final sequence of digits created does not get larger than `b`. Here value of `tight` will be **1** when we have a constraint on the current digit, and **0** when there is no constraint on the digit.
2. **isZero**: this will denote that the number formed by the sequence of digits is zero or not. In other words, all the digits selected in the sequence so far are zero or not.
3. **prevDigit**: this will affect out answer, as absolute difference of adjecent digits should be **exactly 1**. 

#### Base Case
If we reach the end of the sequence, then
- if the sequence is full of digits zero, that is the number is zero, we will return **0** as `A stepping number should not have a leading zero.`
- rest all the conditions are covered in the transitions, so we can simply return **1**.

#### DP Transitions
- Firstly we will find the `limit`, which represents upto which digit the current position can take in the sequence. We will determine it on the basis of `tight`.
- Now for all the valid digits. We will first find the value of new `tight` and `isZero` after we take the `curDigit` as the current digit for the sequence.
- If the sequence is filled with just **0** till now, then we can assign all the valid digits to the current position. Else, we will only assign the digits whose absolute difference with previous digit is **1**.

#### Calculating the answer
So to calculate the answer, we will find the answer for the range `[0 : low]` and the answer for the range `[0 : high]` using Digit DP.

We will subtract the answer of `[0 : low]` from `[0 : high]` for the final answer. Here we can possible subtract the one valid answer where `low` is a **stepping number**. So we can find if it is a **stepping number** easily, and add **1** to the final answer if it is.

> **Upvote if you find the solution easy to understand :)**


<!-- # Complexity
- Time complexity: -->
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

<!-- - Space complexity: -->
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
typedef long long   ll;
ll mod = 1000000007;

class Solution {
public:
    ll dp[101][2][2][11];

    ll helper(ll pos, ll tight, ll isZero, ll prevDigit, string &s) {
        if (pos == (ll) s.size()) {
            if (isZero) return 0;
            return 1;
        }

        if (dp[pos][tight][isZero][prevDigit + 1] != -1) return dp[pos][tight][isZero][prevDigit + 1];

        ll res = 0;
        ll limit;

        if (tight) limit = (s[pos] - '0');
        else limit = 9;

        for (ll curDigit = 0; curDigit <= limit; curDigit++) {

            ll newTight = tight;
            if (tight && curDigit < limit) newTight = 0;

            ll willBeZero = isZero;
            if (isZero && curDigit > 0) willBeZero = 0;

            if (isZero) {
                res += helper(pos + 1, newTight, willBeZero, curDigit, s);
                res %= mod;
            } else {
                if (abs(curDigit - prevDigit) == 1) {
                    res += helper(pos + 1, newTight, willBeZero, curDigit, s);
                    res %= mod;
                }
            }
        }

        dp[pos][tight][isZero][prevDigit + 1] = res;
        return res;
    }
    
    int countSteppingNumbers(string low, string high) {
        
        memset(dp, -1, sizeof(dp));
        ll l = helper(0, 1, 1, -1, low);
        
        memset(dp, -1, sizeof(dp));
        ll r = helper(0, 1, 1, -1, high);
        
        ll res = r - l;
        res %= mod;
        res += mod;
        res %= mod;
        
        ll add = true;
        for (ll i = 1; i < (ll) low.size(); i++)
            if (abs(low[i] - low[i - 1]) != 1) add = false;
        if (add) res++;
        
        res %= mod;
        return res;
    }
};
```