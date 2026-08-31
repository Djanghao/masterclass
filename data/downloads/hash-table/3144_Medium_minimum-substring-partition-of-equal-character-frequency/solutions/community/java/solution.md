# STANDARD DP | TABULATION | C++ | JAVA | PYTHON | JAVA SCRIPT |

**Author:** Jay_1410
**Votes:** 20
**Link:** [https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/solutions/5144610/](https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/solutions/5144610/)

---

- $$ Time complexity : O(N * N * 26)$$

- $$ Space  complexity : O(N) + O(26)$$
```C++ []
class Solution {
public:
    bool isBalanced(vector<int> &charFreq){
        int minFreq = 1001 , maxFreq = 0;
        for(int Freq : charFreq){
            if(Freq > 0){
                minFreq = min(minFreq , Freq);
                maxFreq = max(maxFreq , Freq);
            }
        }
        return minFreq == maxFreq;
    }

    int minimumSubstringsInPartition(string S){
        int N = S.size();
        vector<int> DP(N , N);
        for(int END = 0 ; END < N ; END++){
            vector<int> charFreq(26 , 0);
            for(int START = END ; START >= 0 ; START--){
                charFreq[S[START]-'a']++;
                if(isBalanced(charFreq)){
                    DP[END] = START > 0 ? min(DP[END] , 1 + DP[START - 1]) : 1;
                }
            }
        }
        return DP[N-1];
    }
};
```

```JAVA []
class Solution {
    public boolean isBalanced(int[] charFreq) {
        int minFreq = 1001, maxFreq = 0;
        for (int Freq : charFreq) {
            if (Freq > 0) {
                minFreq = Math.min(minFreq , Freq);
                maxFreq = Math.max(maxFreq , Freq);
            }
        }
        return minFreq == maxFreq;
    }

    public int minimumSubstringsInPartition(String S) {
        int N = S.length();
        int[] DP = new int[N];
        Arrays.fill(DP,N);
        for (int END = 0 ; END < N ; END++){
            int[] charFreq = new int[26];
            for (int START = END ; START >= 0 ; START--){
                charFreq[S.charAt(START) - 'a']++;
                if (isBalanced(charFreq)){
                    DP[END] = START > 0 ? Math.min(DP[END] , 1 + DP[START - 1]) : 1;
                }
            }
        }
        return DP[N - 1];
    }
}

```


```PYTHON3 []
class Solution:
    def isBalanced(self, charFreq):
        # Inspired by : lee215
        return len(set(charFreq.values())) == 1 

    def minimumSubstringsInPartition(self, S):
        N = len(S)
        DP = [N] * N
        for END in range(N):
            charFreq = Counter()
            for START in range(END, -1, -1):
                charFreq[S[START]] += 1
                if self.isBalanced(charFreq):
                    DP[END] = min(DP[END], 1 + DP[START - 1] if START > 0 else 1)

        return DP[N - 1]

```
```JAVASCRIPT []
const isBalanced = function(charFreq) {
    let minFreq = 1001 , maxFreq = 0;
    for(let Freq of charFreq){
        if(Freq > 0){
            minFreq = Math.min(minFreq , Freq);
            maxFreq = Math.max(maxFreq , Freq);
        }
    }
    return minFreq === maxFreq;
};

var minimumSubstringsInPartition = function(S){
    const N = S.length;
    const DP = new Array(N).fill(N);
    for(let END = 0 ; END < N ; END++){
        const charFreq = new Array(26).fill(0);
        for(let START = END ; START >= 0 ; START--){
            charFreq[S.charCodeAt(START) - 'a'.charCodeAt(0)]++;
            if(isBalanced(charFreq)){
                DP[END] = START > 0 ? Math.min(DP[END] , 1 + DP[START - 1]) : 1;
            }
        }
    }
    return DP[N - 1];
};

```

