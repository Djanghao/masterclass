# [C++] [O(nlogn)] Runtime: 180 ms, Memory Usage: 90.8 MB

**Author:** gs_panwar
**Votes:** 5
**Link:** [https://leetcode.com/problems/k-empty-slots/solutions/1219707/](https://leetcode.com/problems/k-empty-slots/solutions/1219707/)

---

```
class Solution {
public:
    int kEmptySlots(vector<int>& bulbs, int k) {
        set<int> onBulbs;
        int n = bulbs.size();
        ++k;
        for(int i=0;i<n;++i) {
            int currBulb = bulbs[i];
            onBulbs.insert(currBulb);
            auto iter = onBulbs.find(currBulb);
            if(iter != onBulbs.begin()) {
                auto prevIter = iter;
                prevIter--;
                if(abs(*prevIter-*iter) == k)
                    return i+1;
            }
            auto nextIter = iter;
            nextIter++;
            if(nextIter != onBulbs.end()) {
                if(abs(*nextIter-*iter) == k)
                    return i+1;
            }
        }
        return -1;
    }
};
```