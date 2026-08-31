# C++ Memoization

**Author:** aparna_g
**Votes:** 6
**Link:** [https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/solutions/1333667/](https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/solutions/1333667/)

---

```
class Solution {
public:

    vector<vector<int>> boxes;
    int ports , max_box , max_wt , n;
    vector<int> dp;
    
    int backtrack(int index) {
        if(index == n)
            return 0;
        if(dp[index] != 0)
            return dp[index];
        
        int start = index, end = index, currWt = boxes[index][1] , boxCount = 1 , lastPort = boxes[index][0] , ports_visited = 0;
        //as long as it's possible to load the boxes load them into the ship so that the visit to the storage unit is minimised.
        while(end+1<n && currWt + boxes[end+1][1] <= max_wt && boxCount + 1 <=max_box) 
        {
            end++;
            currWt += boxes[end][1];
            boxCount++;
            if(lastPort != boxes[end][0]){
                ports_visited++;
                lastPort = boxes[end][0];
            }
        }
        //2 - from the storage to the 1st port and then back to the storage from the last port either for loading the next set of boxes or returning after delivering all the boxes.         
        int trips = 2 + ports_visited + backtrack(end+1);
        
        //number of trips can still be minimised when a box going to port 'j' can be included in the next trip if there are other boxes going to port 'j'
        
        int x = -1;
        for(int i = end-1;i>=index;i--){
            if(boxes[i][0]!=lastPort) {
            cout<<end<<"    end\
";                
                x = i;
                break;
            }
        }
        if(x!=-1){
            trips = min(trips , 2+ports_visited-1+backtrack(x+1));
        }

        dp[index] = trips;        
        cout<<trips<<" "<<index<<"\
";
        return trips;        
    }
    
    
    int boxDelivering(vector<vector<int>>& boxes, int portsCount, int maxBoxes, int maxWeight) {
        this->boxes = boxes;
        //ports,boxes
        n = boxes.size();
        dp.assign(n,0);
        ports = portsCount; 
        max_box = maxBoxes;
        max_wt = maxWeight;
        return backtrack(0);
    }
};
```