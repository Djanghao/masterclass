# Simple c++ solution(0ms) 100% fast

**Author:** reema_mahabooba
**Votes:** 211
**Link:** [https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/819361/](https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/819361/)

---

```
 bool containsPattern(vector<int>& arr, int m, int k) {

        int cnt=0;
        for(int i=0;i+m < arr.size(); i++){
            
            if(arr[i]!=arr[i+m]){
              cnt=0;  
            }
            cnt += (arr[i] == arr[i+m]);
            if(cnt == (k-1)*m)
                return true;
            
        }
        return false;
    }