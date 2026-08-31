# C++ | Easy to understand | Hashmap, hashset, minHeap

**Author:** di_b
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-a-file-sharing-system/solutions/716082/](https://leetcode.com/problems/design-a-file-sharing-system/solutions/716082/)

---

```
class FileSharing {
public:
    unordered_map<int, unordered_set<int>> userChunk;
    unordered_map<int, set<int>> chunkUser;
    priority_queue<int, vector<int>, greater<int>> unusedId;
    int id = 1;
    FileSharing(int m) {
        
    }
    
    int join(vector<int> ownedChunks) {
        int userId;
        if(!unusedId.empty())
        {
            userId = unusedId.top();
            unusedId.pop();
        }
        else
            userId = id++;
        for(auto chunk : ownedChunks)
        {
            userChunk[userId].insert(chunk);
            chunkUser[chunk].insert(userId);
        }
        return userId;
    }
    
    void leave(int userID) {
        for(auto chunk : userChunk[userID])
            chunkUser[chunk].erase(userID);
        userChunk.erase(userID);
        unusedId.push(userID);
    }
    
    vector<int> request(int userID, int chunkID) {
        if(chunkUser.count(chunkID) == 0 || chunkUser[chunkID].empty())
            return {};
        vector<int> res;
        for(auto user : chunkUser[chunkID])
            res.push_back(user);
        userChunk[userID].insert(chunkID);
        chunkUser[chunkID].insert(userID);
        return res;
    }
};