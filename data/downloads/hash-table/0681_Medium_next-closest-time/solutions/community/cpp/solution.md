# Simple and elegant C++ in 18-lines and 0ms with comments

**Author:** JosipDev
**Votes:** 3
**Link:** [https://leetcode.com/problems/next-closest-time/solutions/1138740/](https://leetcode.com/problems/next-closest-time/solutions/1138740/)

---

```
string nextClosestTime(string time) {
        string s(time.substr(0,2) + time.substr(3)); // only digits
        sort(s.begin(), s.end()); // make searching "easier"
        
        vector<int> indices =  {4,3,1,0};
        for (int i : indices) {
            auto it = upper_bound(s.begin(), s.end(), time[i]); // first digit larger than current
            if (it != s.end()) {
                time[i] = *it; // replace digit and check if the time is valid
                if (time.substr(0,2) < "24" && 
                    time.substr(3) < "60") return time;
            }
            time[i] = *s.begin(); // if not found, take the smallest
        }
        
        return time;
    }
```