# Easy & Intuitive C++ solution

**Author:** yankit88
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-file-sharing-system/solutions/5914070/](https://leetcode.com/problems/design-a-file-sharing-system/solutions/5914070/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class FileSharing {
public:
    FileSharing(int m) {
        // cout<<"Create a file splitted into: "<<m<<" chunks";
        smallestUnallocaedUserId = 1;
    }
    
    int allocateUserId()
    {
        int userId;

        if (recycledUserIds.size() > 0)
        {
            userId = recycledUserIds.top();
            recycledUserIds.pop();
        }
        else
        {
            userId = smallestUnallocaedUserId;
            smallestUnallocaedUserId++;
        }

        return userId;
    }

    void unallocateUserId(int userId)
    {
        recycledUserIds.push(userId);
    }

    int join(vector<int> ownedChunks) {
        // Get userID
        int userId = allocateUserId();

        // Add the user as fileowners for the chunks
        for(auto chunkId:ownedChunks)
            fileOwners[chunkId].insert(userId);
        
        // Cache the files owned by user
        chunksOwnedByUsers[userId] = ownedChunks;

        return userId;
    }
    
    void leave(int userID) {
        // Unallocate user userID
        unallocateUserId(userID);

        // Remove the user from list of files owned
        for (auto chunkID:chunksOwnedByUsers[userID])
            fileOwners[chunkID].erase(userID);
        
        // Remove user from the system
        chunksOwnedByUsers.erase(userID);
    }
    
    vector<int> request(int userID, int chunkID) {
        vector<int> listOfFileOwners;

        for (auto fileOwner:fileOwners[chunkID])
            listOfFileOwners.push_back(fileOwner);

        if (listOfFileOwners.size() > 0)
        {
            fileOwners[chunkID].insert(userID);
            chunksOwnedByUsers[userID].push_back(chunkID);
        }

        return listOfFileOwners;
    }
private:
    unordered_map<int, set<int>>                        fileOwners;
    unordered_map<int, vector<int>>                     chunksOwnedByUsers;
    priority_queue<int, vector<int>, std::greater<int>> recycledUserIds;
    int                                                 smallestUnallocaedUserId;
};
```