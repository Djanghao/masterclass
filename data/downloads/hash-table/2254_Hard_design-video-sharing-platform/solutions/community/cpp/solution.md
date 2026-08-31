# Clean/Efficient Object oriented C++ code. Easy to Understand.

**Author:** dave4444
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-video-sharing-platform/solutions/5011999/](https://leetcode.com/problems/design-video-sharing-platform/solutions/5011999/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Understand the problem thoroughly before you start writing code.
Design on whiteboard and come up with some ideas on data structures
that are applicable here. Initially I used a normal queue to track the deleted video ids but then I quickly releazied that wont work
because we want the track the oldest ID first & hence the use
of min heap in my solution.
From problems like these once you have a rough idea on how its going to work, implementing one function at time helps a lot.

# Complexity
- Time complexity:
- v : number of videos in database
int upload(string video) : O(log v)
void remove(int videoId) : O(log v)
string watch(int videoId, int startMinute, int endMinute) : O(l) where l in the len of substr
void like(int videoId)  : O(1)
vector<int> getLikesAndDislikes(int videoId) : O(1)
int getViews(int videoId) : O(1)

# Code
```
class VideoSharingPlatform 
{
    private:
        struct video_data
        {
            std::string name;
            int likes;
            int dislikes;
            int views;
        };

        std::unordered_map<int, video_data> m_video_database;
        std::priority_queue<int, std::vector<int>, std::greater<int>> m_deleted_video_ids;
        int m_current_video_id{0};

    public:
        VideoSharingPlatform() {}
        
        int upload(string video) 
        {
            video_data new_video{video, 0, 0, 0};
            
            int uploaded_id;
            if (m_deleted_video_ids.empty())
            {
                m_video_database[m_current_video_id] = new_video;
                uploaded_id = m_current_video_id;
                ++m_current_video_id;
            }
            else
            {
                m_video_database[m_deleted_video_ids.top()] = new_video;
                uploaded_id = m_deleted_video_ids.top();
                m_deleted_video_ids.pop();
            }

            return uploaded_id;
        }
        
        void remove(int videoId) 
        {
            if (m_video_database.count(videoId) > 0)
            {
                m_deleted_video_ids.push(videoId);
                m_video_database.erase(videoId);
            }
        }
        
        string watch(int videoId, int startMinute, int endMinute) 
        {
            if (m_video_database.count(videoId) == 0)
            {
                return "-1";
            }

            auto &tmp_video = m_video_database[videoId];
            tmp_video.views += 1;

            return tmp_video.name.substr(startMinute, 
                                         std::min(endMinute, static_cast<int>(tmp_video.name.size())) + 1);
        }
        
        void like(int videoId) 
        {
            if (m_video_database.count(videoId) > 0)
            {
                m_video_database[videoId].likes += 1;
            }
        }
        
        void dislike(int videoId) 
        {
            if (m_video_database.count(videoId) > 0)
            {
                m_video_database[videoId].dislikes += 1;
            }
        } 
        
        vector<int> getLikesAndDislikes(int videoId) 
        {
            if (m_video_database.count(videoId) == 0)
            {
                return {-1};
            }

            return {m_video_database[videoId].likes, m_video_database[videoId].dislikes};
        }
        
        int getViews(int videoId) 
        {
            if (m_video_database.count(videoId) == 0)
            {
                return -1;
            }

            return m_video_database[videoId].views;
        }
};

/**
 * Your VideoSharingPlatform object will be instantiated and called as such:
 * VideoSharingPlatform* obj = new VideoSharingPlatform();
 * int param_1 = obj->upload(video);
 * obj->remove(videoId);
 * string param_3 = obj->watch(videoId,startMinute,endMinute);
 * obj->like(videoId);
 * obj->dislike(videoId);
 * vector<int> param_6 = obj->getLikesAndDislikes(videoId);
 * int param_7 = obj->getViews(videoId);
 */
```