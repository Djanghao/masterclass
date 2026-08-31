# Easy to understand Min heap + unordered_map C++

**Author:** Uni_koko
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-video-sharing-platform/solutions/3666274/](https://leetcode.com/problems/design-video-sharing-platform/solutions/3666274/)

---

```
class VideoSharingPlatform {
public:
    
    /*
       when upload : return smallest associated min heap 
       remove: delete id and insert in heap
       watch: increase view from start to min(end,len-1) return substr :-1
       like : like++
       dislike: dislike++
       getlikedislike: 
       getviews: 
    
    */
    priority_queue<int, vector<int>, greater<int>>pq;
    int idx =0; //use this idx iff no elem in pq
    unordered_map<int,vector<int>>mp;  //like,dislike views watch
    unordered_map<int,string>idvid; // id video
    
    
    
    VideoSharingPlatform() {
        
    }
    
    int upload(string video) {
        int id ;
        if(pq.empty()) {
            id = idx;
            idx++;
        }
        else {
            id = pq.top(); pq.pop();
        }
        
        mp[id]={0,0,0};
        idvid[id]=video;
        return id;
        
    }
    
    void remove(int videoId) {
        if(mp.find(videoId)!=mp.end()) {
            mp.erase(videoId);
        }
        if(idvid.find(videoId)!=idvid.end()){
            idvid.erase(videoId);
            pq.push(videoId);
        }
    }
    
    string watch(int videoId, int startMinute, int endMinute) {
        if(mp.find(videoId)!=mp.end()) {
            mp[videoId][2]++;
            string curr = idvid[videoId];
            int n = curr.size();
            
            //The startMinute is used as the starting position, and the length of the substring is calculated as min(endMinute - startMinute + 1, n - startMinute), 
            return curr.substr(startMinute, min(endMinute - startMinute + 1, n - startMinute));
        }
        else 
            return "-1";
    }
    
    void like(int videoId) {
        if(mp.find(videoId)!=mp.end())
          mp[videoId][0]++;
        
        
    }
    
    void dislike(int videoId) {
         if(mp.find(videoId)!=mp.end())
            mp[videoId][1]++;
    }
    
    vector<int> getLikesAndDislikes(int videoId) {
        
        vector<int>ans;
         if(mp.find(videoId)!=mp.end()) {
        ans.push_back(mp[videoId][0]);
        ans.push_back(mp[videoId][1]);}
        if(ans.size()>0)
            return ans;
        else 
        {
            ans.push_back(-1);
            return ans;
        }
    }
    
    int getViews(int videoId) {
         if(mp.find(videoId)!=mp.end()) {
        return mp[videoId][2];}
        else
            return -1;
    }
};

```