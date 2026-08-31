# BackTrack + Video Solution | Java C++ Python

**Author:** jeevankumar159
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3706150/](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3706150/)

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/VvDtzvqOIao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```
class Solution {
    int ans = 0;
    int [][] requests;
    
    public int maximumRequests(int n, int[][] requests) {
        this.requests = requests;
        int [] transfers = new int[n];
        backTrack(0, 0,transfers);
        return ans;
    }
    
    public void backTrack(int index, int count, int [] transfers){
        if(index == requests.length){
            for(int i : transfers){
                if(i!=0) return;
            }
            ans = Math.max(ans,count);
            return;
        }
        
        
        transfers[requests[index][0]]--;
        transfers[requests[index][1]]++;
        backTrack(index+1, count+1,transfers);
            
        transfers[requests[index][0]]++;
        transfers[requests[index][1]]--;
        backTrack(index+1, count,transfers);
        
        
    }
}
```

```
class Solution {
public:
    int ans = 0;
    std::vector<std::vector<int>> requests;
    
    int maximumRequests(int n, std::vector<std::vector<int>>& requests) {
        this->requests = requests;
        std::vector<int> transfers(n, 0);
        backTrack(0, 0, transfers);
        return ans;
    }
    
    void backTrack(int index, int count, std::vector<int>& transfers) {
        if (index == requests.size()) {
            for (int i : transfers) {
                if (i != 0)
                    return;
            }
            ans = std::max(ans, count);
            return;
        }
        
        transfers[requests[index][0]]--;
        transfers[requests[index][1]]++;
        backTrack(index + 1, count + 1, transfers);
        
        transfers[requests[index][0]]++;
        transfers[requests[index][1]]--;
        backTrack(index + 1, count, transfers);
    }
};

```

```
class Solution:
    def __init__(self):
        self.ans = 0
        self.requests = []

    def maximumRequests(self, n, requests):
        self.requests = requests
        transfers = [0] * n
        self.backTrack(0, 0, transfers)
        return self.ans

    def backTrack(self, index, count, transfers):
        if index == len(self.requests):
            if all(i == 0 for i in transfers):
                self.ans = max(self.ans, count)
            return
        
        transfers[self.requests[index][0]] -= 1
        transfers[self.requests[index][1]] += 1
        self.backTrack(index + 1, count + 1, transfers)
        
        transfers[self.requests[index][0]] += 1
        transfers[self.requests[index][1]] -= 1
        self.backTrack(index + 1, count, transfers)

        
```