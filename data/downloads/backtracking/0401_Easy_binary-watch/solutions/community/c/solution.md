# 0ms C++ Back-tracking Solution with explanation

**Author:** Mad_air
**Votes:** 94
**Link:** [https://leetcode.com/problems/binary-watch/solutions/88451/](https://leetcode.com/problems/binary-watch/solutions/88451/)

---

I guess this is a pretty readable back-tracking solution. Using `pair<int, int>` time to represent time, `time.first` is hour and `time.second` is minute.   

 Here is some corner cases you might need to think about:
1. Is "01:00" valid?
2. Is "12:00" valid?
3. Is "3:60" valid?
4. Is "11:4" valid?
    
   
**Code:**
```c++
class Solution 
{
    // date: 2016-09-18     location: Vista Del Lago III
    vector<int> hour = {1, 2, 4, 8}, minute = {1, 2, 4, 8, 16, 32};
public:
    vector<string> readBinaryWatch(int num) {
        vector<string> res;
        helper(res, make_pair(0, 0), num, 0);
        return res;
    }
    
    void helper(vector<string>& res, pair<int, int> time, int num, int start_point) {
        if (num == 0) {
            res.push_back(to_string(time.first) +  (time.second < 10 ?  ":0" : ":") + to_string(time.second));
            return;
        }
        for (int i = start_point; i < hour.size() + minute.size(); i ++)
            if (i < hour.size()) {    
                time.first += hour[i];
                if (time.first < 12)     helper(res, time, num - 1, i + 1);     // "hour" should be less than 12.
                time.first -= hour[i];
            } else {     
                time.second += minute[i - hour.size()];
                if (time.second < 60)    helper(res, time, num - 1, i + 1);     // "minute" should be less than 60.
                time.second -= minute[i - hour.size()];
            }
    }
};
```