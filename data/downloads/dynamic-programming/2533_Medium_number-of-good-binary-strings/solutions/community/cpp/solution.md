# Mathematics VS DP

**Author:** VladimirKataev
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-good-binary-strings/solutions/3066779/](https://leetcode.com/problems/number-of-good-binary-strings/solutions/3066779/)

---

## C++ DP

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
So, recently I had been taking some classes in discrete structures, and this question threw me for a loop. It seems like something my professor would have asked for an answer with mathematically, without a final answer (accepting a 10,000! in my answer, computers don't like that part). That said, there is also a simple way to solve this with memory allocations, with smaller and more reasonable intermediate answers.
# Approach
<!-- Describe your approach to solving the problem. -->
So, imagine we are generating a valid string of length n. It either ends with a "oneGroup" + #allAnswersOneGroupBehind, or it ends with a "zeroGroup" + #allAnswersZeroGroupBehind
# Complexity
- Time complexity: O(maxLength)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(maxLength)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:

    int goodBinaryStrings(int minLength, int maxLength, int oneGroup, int zeroGroup) {
        vector<int> ans(maxLength + 1, 0);  //we are doing DP
                                            //we are looking to add up ans[minLength] + ans[minLength+1] ... + ans[maxLength]
        ans[0] = 1; //there is in fact, a single way to make 0 1's and 0 0's
        int MOD = 1e9 + 7; //mods got me like

        for(int i = 1; i <= maxLength; i++){    //the current position is equal to ans[curr - oneGroup] + ans[curr - zeroGroup]
            int local = 0;
            if(i >= oneGroup) local += ans[i - oneGroup];
            local %= MOD;
            if(i >= zeroGroup) local += ans[i - zeroGroup];
            local %= MOD;
            ans[i] = local;

        }

        int ret = 0;
        for(int i = minLength; i <= maxLength; i++ ){   //refer to comment on line#6
            ret += ans[i];
            ret %= MOD;
        }

        return ret;
    }
};
```


## C++ Math (Integer overflow, bad, don't, but interesting mathematically)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

So imagine a minLength 5, maxLength 9, oneGroup 2, zeroGroup 3.
Each permutation has a number of zero groups and a number of one groups. In this set it's {all valid (zerogroup, onegroup) tuples} = (0,3)(0,4)(1,0)(1,1)(1,2)(1,3)(2,0)(2,1)(3,0) = 9 

There are 9 possible combinations of (#zero groups, #one groups). And each one of them has a certain amount of "unique orders". This can be found using nChooseK.

## $${n \\choose k} = \\frac{n!}{k! (n-k)!} $$

So for each combination, we add nChooseK(n = onegroups + zerogroups, k = zerogroups) to our final answer.

# Approach
<!-- Describe your approach to solving the problem. -->
# Complexity
Imagine a C, which is the possible number of (number of one groups, number zero groups) combinations

- Time complexity: O(C * maxLength)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
For every valid combination, the longest factorial part is up to maxLength long. What number is C approximately? I don't know. $$ C = 3*10^8 m/s$$
- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
This is pure math, allocating constant memory in factorials, therefore nChooseK. Also constant memory in the main, and 1 answer, no arrays.
That said, the space the numbers take up requires massive registers. Finding a nCk%MOD that works well would probably be the golden bullet to this vampire.
# Code
```
class Solution {
public:
    int MOD = 1e9 + 7;
    long long int nChooseK(int n, int k){
        int low = min(k, n-k);                          //some unexplained optimization
        int high = max(k, n-k);                         // nCk(6,4) = 6!/(4!2!)
        long long int numer = 1;                        // = (5*6)(1*2*3*4) / ((1*2*3*4)(1*2))
        for(int i = high+1; i <= n; i++) numer *= i ;   // = (5*6) / (1*2)
        int denom = 1;
        for(int i = low; i >= 2; i--) denom *= i;
        return numer / denom;
    }
    int goodBinaryStrings(int minLength, int maxLength, int oneGroup, int zeroGroup) {
        int ans = 0;
        for(int oneGroups = 0; oneGroup * oneGroups <= maxLength; oneGroups++){
            for(    int zeroGroups = max((minLength - (oneGroup * oneGroups)) / zeroGroup, 0); //lower zerogroups = minFreeChars / zeroGroup 
                    (oneGroup * oneGroups)+(zeroGroup * zeroGroups) <= maxLength;               // also, zeroGroups might be negative, so the floor is there
                    zeroGroups++){
                    if((oneGroup * oneGroups)+(zeroGroup * zeroGroups) < minLength) continue;   //sometimes we undercount the number
                                                                                                //bc division floors
                    //cout << zeroGroups << ':' << oneGroups << endl;
                    ans += nChooseK(oneGroups + zeroGroups, zeroGroups) % MOD;
            }

        }

        return ans;
    }
};
```
Yes this code is messy, especially compared to the first approach. please don't judge me.