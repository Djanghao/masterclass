# [hashmap][c++]

**Author:** rajat_gupta_
**Votes:** 25
**Link:** [https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/995368/](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/995368/)

---

```
class Solution {
public:
    int lenLongestFibSubseq(vector<int>& arr) {
        unordered_set<int> set;
        for(int i=0;i<arr.size();i++){
            set.insert(arr[i]);
        }
        int cnt=0;
        int maxi=INT_MIN;
        for(int i=0;i<arr.size();i++){
            for(int j=i+1;j<arr.size();j++){
                int a=arr[i],b=arr[j];
                int c=a+b;
                cnt=2;
              while(set.find(c)!=set.end()){
                  cnt++;
                  a=b;
                  b=c;
                  c=a+b;
              }
              maxi=max(maxi,cnt);
            }
        }
        return maxi>2?maxi:0;
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
