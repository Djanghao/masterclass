# [c++] min_heap max_heap

**Author:** myownxanadu
**Votes:** 19
**Link:** [https://leetcode.com/problems/sequentially-ordinal-rank-tracker/solutions/1623474/](https://leetcode.com/problems/sequentially-ordinal-rank-tracker/solutions/1623474/)

---

The idea is similar to [problem#295](https://leetcode.com/problems/find-median-from-data-stream/). The only difference is that we are interested in getting the *number_of_get* th element instead of the median.
```
class SORTracker {
public:
    SORTracker() : number_of_get(0) {}
    
    void add(string name, int score) {
        min_heap.push(make_pair(score, name));
        while (min_heap.size() > number_of_get) {
            max_heap.push(min_heap.top());
            min_heap.pop();
        }
    }
    
    string get() {
        auto p = max_heap.top();
        min_heap.push(p);
        max_heap.pop();
        ++number_of_get;
        return p.second;
    }
    
private:
    struct Compare1 { // comparator for min_heap
        bool operator()(const pair<int, string>& a, const pair<int, string>& b)
        {
            if (a.first != b.first) {
                return a.first > b.first;
            } else {
                return a.second < b.second;
            }
        }
    };

    struct Compare2 { // comparator for max_heap
        bool operator()(const pair<int, string>& a, const pair<int, string>& b)
        {
            if (a.first != b.first) {
                return a.first < b.first;
            } else {
                return a.second > b.second;
            }
        }
    };
    
    priority_queue<pair<int, string>, vector<pair<int, string>>, Compare1> min_heap; // store number_of_get lowest-ranked locations
    priority_queue<pair<int, string>, vector<pair<int, string>>, Compare2> max_heap; // store the rest of the locations
    int number_of_get; // number of get() requests so far
};
```