# Digit DP Solution 🔥🔥 | Complete Digit Dp guide ✅✅

**Author:** utkrsh1203
**Votes:** 8
**Link:** [https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/solutions/3933486/](https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/solutions/3933486/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is one of the standard digit dp problem which most of the people are not aware of, as this topic is mostly asked only in competitive programming. However if you want to learn this I have provided a small guide to learn this topic.

# Approach
<!-- Describe your approach to solving the problem. -->
Firstly, you need to find the basic logic behind digit dp and how it is implemented. For that I recommend you to solve the below mentioned problem, which will help you grasp the ideology behind digit dp.

I'd also recommend you to watch this [video](https://www.youtube.com/watch?v=wWfGCIL0AfU&pp=ygUIZGlnaXQgZHA%3D) before directly jumping to the question.

You can refer to this question where I have properly explained how to approach a digit dp question, and believe this is the best possible way to understand this complex topic.
[2719. Count of Integers](https://leetcode.com/problems/count-of-integers/solutions/3596874/easy-explaination-digit-dp-solution-recursion-memoization/)

Here is a [list](https://leetcode.com/list/rovd413m) of a few digit dp problems which you can refer for practicing this topic.

Do upvote if this helped you! :)

# Code




```Java []
class Solution {
    String s;
    int k;
    Integer[][][][][] dp;
    public int numberOfBeautifulIntegers(int low, int high, int k) {
        this.k = k;
        s = Integer.toString(low-1);
        dp = new Integer[s.length()][2][2][21][21];
        int l = f(0,true,true, 0, 0);
        
        s = Integer.toString(high);

        dp = new Integer[s.length()][2][2][21][21];
        int h = f(0,true,true, 0, 0);
        return h-l;
    }
    
    public int f(int i, boolean bound,boolean isZero, int cnt, int rem){
        
        if(i == s.length()){
            if(cnt == 0 && rem == 0){
                return 1;
            } 
            return 0;   
        }
        
        if(dp[i][bound ? 1 : 0][isZero ? 1 : 0][cnt+10][rem] != null) return dp[i][bound ? 1 : 0][isZero ? 1 : 0][cnt+10][rem];
        
        int max = 9;
        
        if(bound){
            max = s.charAt(i) - '0';
        }
        
        int ans = 0;
        for(int j = 0; j<=max; j++){
            int newCnt = cnt;
            if(!isZero || j > 0){
                newCnt += (j%2 == 0 ? 1:-1);
            }            
            ans += f(i+1, bound && j == max, isZero && j==0 , newCnt, (rem*10 + j)%k  );
        }
        return dp[i][bound ? 1 : 0][isZero ? 1 : 0][cnt+10][rem]=  ans;
        
    }
    
}
```


```C++ []
class Solution {
    string s;
    int k;
    int dp[10][2][2][21][21];

public:
    int numberOfBeautifulIntegers(int low, int high, int k) {
        this->k = k;
        s = to_string(low - 1);
        memset(dp, -1, sizeof(dp));
        int l = f(0, true, true, 0, 0);

        s = to_string(high);
        memset(dp, -1, sizeof(dp));
        int h = f(0, true, true, 0, 0);
        return h - l;
    }

    int f(int i, bool bound, bool isZero, int cnt, int rem) {
        if (i == s.length()) {
            if (cnt == 0 && rem == 0) {
                return 1;
            }
            return 0;
        }

        if (dp[i][bound ? 1 : 0][isZero ? 1 : 0][cnt + 10][rem] != -1)
            return dp[i][bound ? 1 : 0][isZero ? 1 : 0][cnt + 10][rem];

        int max = 9;

        if (bound) {
            max = s[i] - '0';
        }

        int ans = 0;
        for (int j = 0; j <= max; j++) {
            int newCnt = cnt;
            if (!isZero || j > 0) {
                newCnt += (j % 2 == 0 ? 1 : -1);
            }
            ans += f(i + 1, bound && j == max, isZero && j == 0, newCnt, (rem * 10 + j) % k);
        }
        return dp[i][bound ? 1 : 0][isZero ? 1 : 0][cnt + 10][rem] = ans;
    }
};
```


```Python []
class Solution:
    def __init__(self):
        self.s = ""
        self.k = 0
        self.dp = []

    def numberOfBeautifulIntegers(self, low, high, k):
        self.k = k
        self.s = str(low - 1)
        self.dp = [[[[[-1 for _ in range(21)] for _ in range(21)] for _ in range(2)] for _ in range(2)] for _ in range(len(self.s))]
        l = self.f(0, True, True, 0, 0)

        self.s = str(high)
        self.dp = [[[[[-1 for _ in range(21)] for _ in range(21)] for _ in range(2)] for _ in range(2)] for _ in range(len(self.s))]
        h = self.f(0, True, True, 0, 0)
        return h - l

    def f(self, i, bound, isZero, cnt, rem):
        if i == len(self.s):
            if cnt == 0 and rem == 0:
                return 1
            return 0

        if self.dp[i][int(bound)][int(isZero)][cnt + 10][rem] != -1:
            return self.dp[i][int(bound)][int(isZero)][cnt + 10][rem]

        max_val = 9

        if bound:
            max_val = int(self.s[i])

        ans = 0
        for j in range(max_val + 1):
            new_cnt = cnt
            if not isZero or j > 0:
                new_cnt += (1 if j % 2 == 0 else -1)
            ans += self.f(i + 1, bound and j == max_val, isZero and j == 0, new_cnt, (rem * 10 + j) % self.k)
        self.dp[i][int(bound)][int(isZero)][cnt + 10][rem] = ans
        return ans

```