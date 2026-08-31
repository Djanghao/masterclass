# C++ solution using a map.  total 11 lines

**Author:** hsuyuanyuan
**Votes:** 212
**Link:** [https://leetcode.com/problems/meeting-rooms-ii/solutions/67866/](https://leetcode.com/problems/meeting-rooms-ii/solutions/67866/)

---


class Solution {
public:
    int minMeetingRooms(vector<Interval>& intervals) {
        map<int, int> mp; // key: time;  val: +1 if start, -1 if end
        
        for(int i=0; i< intervals.size(); i++) {
            mp[intervals[i].start] ++;
            mp[intervals[i].end] --;
        }
        
        int cnt = 0, maxCnt = 0;
        for(auto it = mp.begin(); it != mp.end(); it++) {
            cnt += it->second;
            maxCnt = max( cnt, maxCnt);
        }
        
        return maxCnt;
    }
};