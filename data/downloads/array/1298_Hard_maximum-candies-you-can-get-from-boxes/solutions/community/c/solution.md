# C++ BFS well commented code | Easy to understand

**Author:** khushiprerak
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/1764633/](https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/1764633/)

---

```
class Solution {
public:
    int maxCandies(vector<int>& status, vector<int>& candies, vector<vector<int>>& keys, vector<vector<int>>& containedBoxes, vector<int>& initialBoxes) {
        
        vector<int> vis(n, false); // indicates that we have taken the candies from the box and sent the box for further processing in the queue (to collect other boxes and keys) 
        
        vector<int> found(n,false); // indicates that we have collected the box (we're either given the box initially or we find it in some other open box) 
        
        // status of the box indicates whether the box is open or not. If we find the key to a box, we mark the status of that box as open even if we haven't collected it yet
        
        queue<int> pending; // for processing the contents of open boxes collected  
        
        int count = 0; // total number of candies taken 
        
        for(int box : initialBoxes) {
            
            found[box] = true; // indicates that the box is collected  
            if(status[box] && found[box] ) { // if we have the box and it is open 
                vis[box] = true; // candies from the box taken  
                count += candies[box]; 
                pending.push(box); // box sent for further processing 
            }
        }
        
        while(!pending.empty()) {
            auto cur = pending.front();
            pending.pop();
            
            for(int i=0;i<keys[cur].size();i++) {
                int next = keys[cur][i]; // next indicates the box whose key we have found in cur box 
                status[next] = 1; // as we have found the key, we can change the status of next box to open 
                if(found[next] && status[next] && !vis[next]) { // if the box whose key we found was collected earlier, we take the candies from that box and push it in queue for further processing 
                    vis[next] = true; 
                    count += candies[next];
                    pending.push(next);
                }
            }
            
            
            for(int i=0;i<containedBoxes[cur].size();i++) {
                int next = containedBoxes[cur][i]; // boxes found in cur box 
                found[next]=true; // indicates that we have collected the box 
                if(status[next] && found[next] && !vis[next]) { // if the box that we found in cur box is open, we take the candies from that box and push it in queue for further processing 
                    vis[next] = true;
                    count += candies[next];
                    pending.push(next);
                }
            }
        }
        
        return count;
    }
};
```