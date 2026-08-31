# c++ || o(n) || Brute force

**Author:** rajat_gupta_
**Votes:** 17
**Link:** [https://leetcode.com/problems/maximum-population-year/solutions/1198915/](https://leetcode.com/problems/maximum-population-year/solutions/1198915/)

---

**TC : O(n)**
```
class Solution {
public:
    int maximumPopulation(vector<vector<int>>& logs) {
        int arr[101]={0};
        for(vector<int> log : logs){
            arr[log[0]-1950]++;
            arr[log[1]-1950]--;
        }
        int max=0,year,cnt=0;
        for(int i=0;i<101;i++){
            cnt+=arr[i];
            if(cnt>max)
                max=cnt,year=i;
        }
        return year+1950;
    }
};
```
**Brute force**
```
class Solution {
public:
    int maximumPopulation(vector<vector<int>>& logs) { 
        vector<int> map(101, 0);
        for(auto &log : logs){
            for(int i = log[0]; i < log[1]; ++i){
                map[i - 1950]++;
            }
        }
        int max = 0, ans;
        for(int i = 0; i <= 100; ++i){
            if(max < map[i]){
                max = map[i];
                ans = i;
            }
        }
        return ans+1950;
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
