# One HashMap [ No Sorting ]

**Author:** Rowque
**Votes:** 68
**Link:** [https://leetcode.com/problems/most-popular-video-creator/solutions/2758053/](https://leetcode.com/problems/most-popular-video-creator/solutions/2758053/)

---

**Algorithm**:
 + Maintain a hashmap along with a class which will store:
      - **sum**       : Denotes the `total view count of a creator`, this will help us in finding popular creator among two different people.
      - **small**     : Denotes the `lexicographical smallest id` with greatest frequency of this creator.
      - **max_view**  : Denotes the `maximum view count of this creator` , this will help us in finding a single creators lexicographically smallest id with maximum view count at a particular video.
       
       
+  We will simple use a counter which will have the maximum view count among all creator.
+  We will use this count to find the creators with this total view count from hashmap.

> We can use 3 different hashmap for 3 different values also, but in that case the repetition of same key thrice in the memory is costly as compared to binding all values for a single key.

**Time** - O(n)
**Space** - O(n)

# C++
    struct video{
        long sum = 0;
        string small;
        int max_view = 0;
    };
    
    vector<vector<string>> mostPopularCreator(vector<string>& c, vector<string>& ids, vector<int>& views){
        unordered_map<string, video> mp;
        long count = 0;

        for (int i = 0; i < size(c); i++){
		    // Check if creator present or not
            if (!mp.count(c[i])){
                mp[c[i]] = { views[i], ids[i], views[i] };
                count = max(count, mp[c[i]].sum);
                continue;
            }
        
		    // If already present , update all parameters as said in above algorithm
            mp[c[i]].sum += views[i];
            if (mp[c[i]].max_view < views[i] || mp[c[i]].max_view == views[i] && ids[i] < mp[c[i]].small) {
                mp[c[i]].max_view = views[i];
                mp[c[i]].small = ids[i];
            }
    
            count = max(count, mp[c[i]].sum);
        }

        //extract words with highest count of views
        vector<vector<string>> ans;
        for (auto &r: mp)
            if (r.second.sum == count)
                ans.push_back({ r.first, r.second.small });

        return ans;
    }