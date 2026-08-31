# Easiest way || By using Map

**Author:** 123_tripathi
**Votes:** 26
**Link:** [https://leetcode.com/problems/design-underground-system/solutions/1977026/](https://leetcode.com/problems/design-underground-system/solutions/1977026/)

---

```
//Please do upvote, if you like my solution :)
//and free to ask if have any query :)
class dataa{
public:
    string from;
    string to;
    int in;
    int out;
};
class UndergroundSystem {
public:
    map<pair<string,string>,vector<int>> loc;
    map<int,dataa> store;
	
    UndergroundSystem() {
    }
    
    void checkIn(int id, string stationName, int t) {
        dataa d;
        d.from = stationName;
        d.in = t;
        store[id] = d;
    }
    
    void checkOut(int id, string stationName, int t) {
        dataa d = store[id];
        d.to = stationName;
        d.out = t;
        loc[{d.from,d.to}].push_back(d.out-d.in);
    }
    
    double getAverageTime(string startStation, string endStation) {
        auto &time = loc[{startStation,endStation}];
        double size = time.size();
        return accumulate(time.begin(),time.end(),0)/size;;
    }
};
```