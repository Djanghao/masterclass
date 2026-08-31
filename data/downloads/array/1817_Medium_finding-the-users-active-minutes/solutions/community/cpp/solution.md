# C++ Faster than 97% || 7 lines clean code

**Author:** mkhasib1
**Votes:** 7
**Link:** [https://leetcode.com/problems/finding-the-users-active-minutes/solutions/1156023/](https://leetcode.com/problems/finding-the-users-active-minutes/solutions/1156023/)

---

Well, in this problem you need to think of two things:
1. Knowing the actual minutes each user spent(without duplicates in the same minute).
2. Storing each user UAM.
To solve the first problem (**remove duplicates**) we need to think of a **set** data structure that only inserts **unique** data.
To solve the the second problem (Storing **ID->UAM**) we need to think of **map** data structure that stores **(key,vaue) pairs**.
Finally, **UAM** is the represented by the **size** of the elements (**unqiue minutes**) in the set.
```
vector<int> findingUsersActiveMinutes(vector<vector<int>>& logs, int k) {
        vector<int>answer(k,0);
        unordered_map<int,set<int>>umap;
        for(auto &log:logs)
            umap[log[0]].insert(log[1]); 
        for(auto &user:umap)
            answer[user.second.size()-1]++;
        return answer;
    }
```
If you **like**, **hit** the **Upvote** and If you **don't**, **hit** the **Downvote** \uD83D\uDE06