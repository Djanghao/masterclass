# Solution

**Author:** deleted_user
**Votes:** 203
**Link:** [https://leetcode.com/problems/count-the-repetitions/solutions/2997580/](https://leetcode.com/problems/count-the-repetitions/solutions/2997580/)

---

```C++ []
class Solution {
public:
    int getMaxRepetitions(string s1, int n1, string s2, int n2) {
        vector<int> rapport(102,-1);
        vector<int> rest(102,-1);
        int b=-1;int posRest=0;int rap=0;
        int last=-1;
        rapport[0]=rest[0]=0;
        for(int i=1;i<=s2.size()+1;i++){
            int j;
            for(j=0;j<s1.size();j++){
                if(s2[posRest]==s1[j]){
                    posRest++;
                    if(posRest==s2.size()){
                        rap++;
                        posRest=0;
                    }
                }
            }
            for(int k=0;k<i;k++){
                if(posRest==rest[k]){b=k;last=i;break;}
            }
            rapport[i]=rap;rest[i]=posRest;
            if(b>=0)break;
        }
        int interval=last-b;
        if(b>=n1)return rapport[n1]/n2;
        return ((n1-b)/interval*(rapport[last]-rapport[b])+rapport[(n1-b)%interval+b])/n2;  }
};
```

```Python3 []
class Solution(object):
    def getMaxRepetitions(self, s1, n1, s2, n2):
        start = {}
        s1_round, s2_round, s2_idx = 0, 0, 0
        while s1_round < n1:
            s1_round += 1
            for ch in s1:
                if ch == s2[s2_idx]:
                    s2_idx += 1
                    if s2_idx == len(s2):
                        s2_round += 1
                        s2_idx = 0
            if s2_idx in start:
                prev_s1_round, prev_s2_round = start[s2_idx]
                circle_s1_round, circle_s2_round = s1_round - prev_s1_round, s2_round - prev_s2_round
                res = (n1 - prev_s1_round)
                left_s1_round = (n1 - prev_s1_round) % circle_s1_round + prev_s1_round
                for key in start:
                    val = start[key]
                    if val[0] == left_s1_round:
                        res += val[1]
                        break
                return res 
            else:
                start[s2_idx] = (s1_round, s2_round)
        return s2_round
```

```Java []
class Solution {
    public int getMaxRepetitions(String s1, int n1, String s2, int n2) {
         int l1 = s1.length(), l2 = s2.length();
        int[] next = new int[l2 + 1];
        int[] count = new int[l2 + 1];
        int cnt = 0, p = 0;
        for (int i = 0; i < n1; i++) {
            for (int j = 0; j < l1; j++) {
                if (s1.charAt(j) == s2.charAt(p)) {
                    p++;
                }
                if (p == l2) {
                    cnt++;
                    p = 0;
                }
            }
            count[i] = cnt;
            next[i] = p;
            for (int j = 0; j < i; j++) {
                if (next[j] == p) {
                    int prev_count = count[j];
                    int pattern_count = (count[i] - count[j]) * ((n1 - j - 1) / (i - j));
                    int remain_count = count[j + (n1 - j - 1) % (i - j)] - count[j];
                    return (prev_count + pattern_count + remain_count) / n2;
                }
            }
        }
        return count[n1 - 1] / n2;
    }
}
```
