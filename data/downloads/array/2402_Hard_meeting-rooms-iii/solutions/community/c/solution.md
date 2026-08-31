# [C++ with explanation] Magic of Priority Queues

**Author:** Code-O-Maniac
**Votes:** 215
**Link:** [https://leetcode.com/problems/meeting-rooms-iii/solutions/2527280/](https://leetcode.com/problems/meeting-rooms-iii/solutions/2527280/)

---

**Overview**
Greedy Problem using Priority Queues.

**How I figured it out as Priority Queues?**
* Ordering was required at every step. 
* `O(n log n)` solution would work.
	
**Algorithm**
1. Sort the meetings based on `start_time `
2. Create a MIN priority queue for engaged rooms. Each node of PQ will store `{current_meeting_ending_time, room_number}` 
3. Create a MIN priority queue for non-engaged rooms. Each node of PQ will store `{room_number}`
4. Currently all the rooms are empty, so push them in non-engaged rooms PQ.
5. For each of the meeting, follow these steps:
* Move the meeting rooms in engaged, with `ending_time <= s`, to unused
* If there are multiple empty rooms, choose the one with `lower room_number` (Can be directly fetched from non-engaged rooms PQ)
* If there are no empty rooms, wait for the engaged room with nearest ending time to empty (Topmost node of engaged PQ)
** If we are using an engaged room to carry out the meeting, `starting_time` for this meeting will change and since duration has to be the same, the `newEndingTime` will be `sum(end_time_of_the_prev_meeting, duration)`
*  Mark the `current_room` as engaged.
* Increment the count in frequency map for the `current_room` 

6. Find the room with maximum meetings from frequency map.

**Code**
```
bool compare(vector<int>& v1, vector<int>& v2) {
    return v1[0] < v2[0];
}
class Solution {
public:
    int mostBooked(int n, vector<vector<int>>& meetings) {
        /* Sort the meetings based on start_time */
        sort(meetings.begin(), meetings.end(), compare);
        
        /* Create a priority queue for engaged rooms. Each node of PQ will store {current_meeting_ending_time, room_number} */
        priority_queue<pair<long long, int>, vector<pair<long long, int>>, greater<pair<long long, int>>> engaged;
        
        /* Create a priority queue for non-engaged rooms. Each node of PQ will store {room_number} */
        priority_queue<int, vector<int>, greater<int>> unused;
        
        /* Frequency map to store the frequency of meetings in each room */
        unordered_map<int, int> freq;
        
        /* Currently all the rooms are mepty */
        for(int i = 0; i < n; i++) {
            unused.push(i);
        }
        
        for(auto x:meetings) {
            int s = x[0], e = x[1];
            
            /* Move the meeting rooms in engaged, with ending_time <= s, to unused */ 
            while(engaged.size() > 0 && engaged.top().first <= s) {
                int room = engaged.top().second;
                engaged.pop();
                
                unused.push(room);
            }
            
            /* If there are multiple empty rooms, choose the one with lower room_number */
            if(unused.size() > 0) 
            {
                int room = unused.top();
                unused.pop();
                
                freq[abs(room)] += 1;
                
                /* Mark the room as engaged */
                engaged.push({e, room});
            }
            /* If there are no empty rooms, wait for the engaged room with nearest ending time to empty */
            else 
            {
                pair<long long, int> topmost = engaged.top();
                engaged.pop();
            
                freq[abs(topmost.second)] += 1;
                
                /* Since duration has to be the same, the newEnd will be sum(end_time_of_the_prev_meeting, duration) */ 
                long long newEnd = topmost.first;
                newEnd += (e - s);
                
                /* Mark the room as engaged */
                engaged.push({newEnd, topmost.second});
            }
        }
        
        /* Find the lowest room_number with maximum frequency */
        int maxi = 0;
        for(int i = 1; i < n; i++) {
            if(freq[i] > freq[maxi])
                maxi = i;
        }
        return maxi;
    }
};
```
