# ✅Short || C++ || Explained Solution✔️ || Beginner Friendly ||🔥 🔥 BY MR CODER

**Author:** mrcoderrm1
**Votes:** 11
**Link:** [https://leetcode.com/problems/orderly-queue/solutions/2784359/](https://leetcode.com/problems/orderly-queue/solutions/2784359/)

---

**C++**
```
class Solution {
public:
    string orderlyQueue(string S, int K) {
       // for k>1 we can make it fully sorted string after roation because here we are not bound to the roatate first char only.
        if (K > 1) {
            sort(S.begin(), S.end());
            return S;
        }
        // for k==1 we can rotate whole string any times like-  S="cba" we can get cba, bac,acb so in S+S ="cbacba" we need to find only lexicographically smallest string  of size n in S+S.
            string tempr=S;
            S= S+ S;
            for(int i=1;i<tempr.size();i++){
                tempr=min(tempr,S.substr(i,tempr.size()));
            }
            return tempr;
    }
};
```
**If you find my solution helpful please upvote it.**