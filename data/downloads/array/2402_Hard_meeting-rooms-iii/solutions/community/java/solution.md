# ✅☑Beats 100% Users || [C++/Java/Python/JavaScript] || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 98
**Link:** [https://leetcode.com/problems/meeting-rooms-iii/solutions/4744077/](https://leetcode.com/problems/meeting-rooms-iii/solutions/4744077/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
(Also explained in the code)

1. **Initialization:**

    - We initialize two vectors: ans to keep track of the number of meetings each person attends, and times to keep track of the end time of each person's last meeting.
    - Both vectors are initialized with zeros.
1. **Sorting Meetings:**

    - We sort the meetings based on their start times. This helps us process them in chronological order.
1. **Processing Meetings:**

    - For each meeting, we find the person who has the earliest available time slot to attend the meeting.
    - If there's a person available (i.e., their last meeting ends before the current meeting starts), we assign them to attend the meeting and update their end time.
    - If no person is available, we find the person who has the earliest end time among all persons and assign them to attend the meeting. We also update their end time accordingly.
1. **Finding Most Booked:**

    - After processing all meetings, we find the person who attended the maximum number of meetings.
    - We iterate through the ans vector and find the person with the highest count of attended meetings.
1. **Return Result:**

    - We return the ID of the person who attended the most meetings.



# Complexity
- Time complexity:
   $$O(nlogn)$$
    

- Space complexity:
   $$O(n)$$
    


# Code
```C++ []
class Solution {
public:
    int mostBooked(int n, vector<vector<int>>& meetings) {
        vector<int> ans(n,0);
        vector< long long > times(n,0);
        sort(meetings.begin(),meetings.end());

        for(int i=0;i<meetings.size();i++){
            int start = meetings[i][0], end = meetings[i][1];
            bool flag = false;
            int minind = -1;
            long long val = 1e18;
            for(int j=0;j<n;j++){
                if(times[j]<val) val = times[j], minind = j;
                if(times[j] <= start){
                    flag = true;
                    ans[j]++;
                    times[j] = end;
                    break;
                }
            }
            if(!flag){
                ans[minind]++;
                times[minind]+=(1ll*(end-start));
            }
        }
        int maxi = -1, id = -1;
        for(int i =0;i<n;i++){
            if(ans[i]>maxi) maxi = ans[i], id = i;
        }
        return id;
    }
};




```
```Java []


class Solution {
    public int mostBooked(int n, int[][] meetings) {
        int[] ans = new int[n];
        long[] times = new long[n];
        Arrays.sort(meetings, (a, b) -> Integer.compare(a[0], b[0]));

        for (int i = 0; i < meetings.length; i++) {
            int start = meetings[i][0], end = meetings[i][1];
            boolean flag = false;
            int minind = -1;
            long val = Long.MAX_VALUE;
            for (int j = 0; j < n; j++) {
                if (times[j] < val) {
                    val = times[j];
                    minind = j;
                }
                if (times[j] <= start) {
                    flag = true;
                    ans[j]++;
                    times[j] = end;
                    break;
                }
            }
            if (!flag) {
                ans[minind]++;
                times[minind] += (end - start);
            }
        }

        int maxi = -1, id = -1;
        for (int i = 0; i < n; i++) {
            if (ans[i] > maxi) {
                maxi = ans[i];
                id = i;
            }
        }
        return id;
    }
}



```
```python3 []
class Solution:
    def mostBooked(self, n: int, meetings: List[List[int]]) -> int:
        ans = [0] * n
        times = [0] * n
        meetings.sort()

        for start, end in meetings:
            flag = False
            minind = -1
            val = float('inf')
            for j in range(n):
                if times[j] < val:
                    val = times[j]
                    minind = j
                if times[j] <= start:
                    flag = True
                    ans[j] += 1
                    times[j] = end
                    break
            if not flag:
                ans[minind] += 1
                times[minind] += (end - start)

        maxi = -1
        id = -1
        for i in range(n):
            if ans[i] > maxi:
                maxi = ans[i]
                id = i
        return id



```
```javascript []
class Solution {
    mostBooked(n, meetings) {
        const ans = new Array(n).fill(0);
        const times = new Array(n).fill(0);
        meetings.sort((a, b) => a[0] - b[0]);

        for (let i = 0; i < meetings.length; i++) {
            const [start, end] = meetings[i];
            let flag = false;
            let minind = -1;
            let val = Number.MAX_SAFE_INTEGER;
            for (let j = 0; j < n; j++) {
                if (times[j] < val) {
                    val = times[j];
                    minind = j;
                }
                if (times[j] <= start) {
                    flag = true;
                    ans[j]++;
                    times[j] = end;
                    break;
                }
            }
            if (!flag) {
                ans[minind]++;
                times[minind] += (end - start);
            }
        }

        let maxi = -1;
        let id = -1;
        for (let i = 0; i < n; i++) {
            if (ans[i] > maxi) {
                maxi = ans[i];
                id = i;
            }
        }
        return id;
    }
}


```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---