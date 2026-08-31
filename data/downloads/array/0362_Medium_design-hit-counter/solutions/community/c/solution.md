# Extremely simple C++, O(1) hit O(log(n)) getHits, just use vector. Suprised I haven't seen this yet.

**Author:** JacobAlbertSchmidt
**Votes:** 4
**Link:** [https://leetcode.com/problems/design-hit-counter/solutions/1070131/](https://leetcode.com/problems/design-hit-counter/solutions/1070131/)

---

This is a very simple design, suprised I didn't see anyone else come up with the same answer.

We just accumlate the counts every time we add a hit. Then do a binary search to find and return the difference between the upper and lowerbounds requested. 
```upper_bound``` is O(log(n)), so getHits() is O(log(n)).

```
class HitCounter {
    struct Hit {
        int timestamp;
        int count;
    };
    vector<Hit> hits;
public:
    /** Initialize your data structure here. */
    HitCounter() {
    }
    
    /** Record a hit.
        @param timestamp - The current timestamp (in seconds granularity). */
    void hit(int timestamp) {
        if (hits.empty())
            hits.push_back(Hit{timestamp, 0});
        else
            hits.push_back(Hit{timestamp, hits.back().count + 1});
    }
    
    /** Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity). */
    int getHits(int timestamp) {
        int l = timestamp - 60*5;
        
        auto lb = upper_bound(hits.begin(), hits.end(), Hit{l, {}}, [](const auto &a, const auto &b) {
            return a.timestamp < b.timestamp; 
        });
                
        if (lb == hits.end()) 
            return 0;
        
        auto ub = upper_bound(lb, hits.end(), Hit{timestamp, {}}, [](const auto &a, const auto &b) {
            return a.timestamp < b.timestamp;
        });
        
        ub -= 1;
        return ub->count - lb->count + 1;
    }
};
```
