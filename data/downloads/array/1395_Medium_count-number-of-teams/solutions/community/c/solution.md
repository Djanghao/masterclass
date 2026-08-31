# C++ || O(n3) || 104 ms || O(n2) || 4 ms || Easy to understand

**Author:** Anonymous_Kumar
**Votes:** 46
**Link:** [https://leetcode.com/problems/count-number-of-teams/solutions/791892/](https://leetcode.com/problems/count-number-of-teams/solutions/791892/)

---

***Runtime: 104 ms, faster than 40.56% of C++ online submissions for Count Number of Teams.
Memory Usage: 7.6 MB, less than 52.71% of C++ online submissions for Count Number of Teams.***
```
class Solution {
public:
    int numTeams(vector<int>& r) {
        int n = r.size();
        int result = 0;
        for(int i = 0 ; i < n-2 ; i++){
            for(int j = i+1 ; j < n-1 ; j++){
                for(int k = j+1 ; k < n ; k++){
                    if(((r[i] < r[j]) && (r[j] < r[k])) || ((r[i] > r[j]) && (r[j] > r[k]))){
                        result++;
                    }
                }
            }
        }
        return result;
    }
};
```
***Runtime: 4 ms, faster than 98.59% of C++ online submissions for Count Number of Teams.
Memory Usage: 7.5 MB, less than 93.78% of C++ online submissions for Count Number of Teams.***
```
class Solution {
public:
    int numTeams(vector<int>& arr) {
        int n = arr.size();
        int result = 0;
        for(int i = 1 ; i < n-1 ; i++){
            int leftSmall = 0, leftLarge = 0;
            int rightSmall = 0, rightLarge = 0;
            //left part
            for(int j = 0 ; j < i ; j++){
                if(arr[j] < arr[i]){
                    leftSmall++;
                }
                if(arr[j] > arr[i]){
                    leftLarge++;
                }
            }
            //right part
            for(int j = i+1 ; j < n ; j++){
                if(arr[j] < arr[i]){
                    rightSmall++;
                }
                if(arr[j] > arr[i]){
                    rightLarge++;
                }
            }
            result += leftSmall * rightLarge + leftLarge * rightSmall;
        }
        return result;
    }
};
```