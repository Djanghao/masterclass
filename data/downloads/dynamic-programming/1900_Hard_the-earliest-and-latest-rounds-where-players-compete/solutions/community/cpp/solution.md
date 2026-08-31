# c++ | easy | short

**Author:** venomhighs7
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-earliest-and-latest-rounds-where-players-compete/solutions/2772342/](https://leetcode.com/problems/the-earliest-and-latest-rounds-where-players-compete/solutions/2772342/)

---



# Code
```
class Solution {
public:
    int mn = 10000;
    int mx = 0;
    int first;
    int second;
    void dfs(vector<int> &arr, int round) {
        int size = arr.size() / 2;
        if(arr.size() == 1) return;
        for(int i = 0; i < size; i++) {
            if(arr[i] == first && arr[arr.size() - i - 1] == second) {
                mn = min(mn, round);
                mx = max(mx, round);
                return;
            }
        }
        bool f1 = false, f2 = false;
        for(auto n : arr) {
            f1 |= n == first;
            f2 |= n == second;
        }
        if(!f1 || !f2) { 
            return;
        }
        vector<int> nextarr(size + (arr.size() % 2));
        int m = (1 << size) - 1;
        for(int i = 0; i <= m; i++) { 
            int left = 0, right = nextarr.size() - 1;
            for(int j = 0; j < size; j++) {
                if((1 << j) & i) { 
                    nextarr[left++] = arr[j];
                }else { 
                    nextarr[right--] = arr[arr.size() - j - 1];
                }
                
            }
            if(arr.size() % 2) { 
                nextarr[left] = arr[arr.size() / 2];
            }
            dfs(nextarr, round + 1);
        }
    }
    vector<int> earliestAndLatest(int n, int firstPlayer, int secondPlayer) {
        vector<int> arr(n);
        for(int i= 1; i <= n; i++) {
            arr[i - 1] = i;
        }
        first = firstPlayer;
        second = secondPlayer;
        dfs(arr, 1);
        return {mn, mx};
    }
};
```