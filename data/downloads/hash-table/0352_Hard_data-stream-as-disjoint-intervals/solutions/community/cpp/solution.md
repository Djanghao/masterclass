# C++ || Binary Search + Ordered Set (With full explanation) || Beats 99% 🏁🔥

**Author:** ufoblivr
**Votes:** 255
**Link:** [https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/3107308/](https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/3107308/)

---

# Intuition
The intuition behind this implementation is to use a data structure that allows for easy ordering and searching, as well as efficient insertion and deletion of intervals. In this case, a std::map is used to store the disjoint intervals. The key is the start value of the interval and the value is the end value.
By using a data structure like map which implements a balanced binary search tree, we can easily find the correct position of new value and merge it with the existing intervals if necessary, which will help us to maintain the disjoint property of the intervals.

# Approach
The approach used in this implementation is to use a data structure, in this case a std::map, to store the disjoint intervals. Each interval is stored as a key-value pair in the map, where the key is the start value of the interval and the value is the end value.

When a new value is added to the stream, the lower_bound() function is used to find the correct position of the new value in the map, and then the implementation checks if the new value can be added to an existing interval or if it needs to create a new one. It also checks if the new value can merge with the interval before or after it, and merges them if necessary.

The getIntervals() function iterates through the map and stores the intervals in a vector of vectors, which is returned.

By using the map's properties of ordering and searching, the implementation can easily find the correct position of the new value in the stream and merge it with the existing intervals if necessary.

This approach is efficient in terms of space and time complexity because it allows for easy ordering and searching, as well as efficient insertion and deletion of intervals, which is important for maintaining the disjoint property of the intervals.

# Complexity
- Time complexity:
The time complexity of the addNum() function is **O(log n)** on average, where n is the number of disjoint intervals stored in the map. This is because the lower_bound() function used to find the position of the new value in the map has an average time complexity of O(log n) when used with a std::map. This is due to the fact that the map is implemented as a balanced binary search tree, and the time complexity of searching for an element in a balanced binary search tree is O(log n).
The time complexity of the getIntervals() function is O(n) where n is the number of disjoint intervals stored in the map. This is because the function iterates through all the intervals in the map and stores them in a vector, the time complexity of iterating through the map is O(n) .

- Space complexity:
The space complexity of this implementation is **O(n)**, where n is the number of disjoint intervals stored in the map. Each interval is stored as a key-value pair in the map, and since the intervals do not overlap, the total number of intervals is equal to the total number of integers in the stream.

# Code
```
class SummaryRanges {
public:
    SummaryRanges() {
        
    }
    
    void addNum(int value) {
        auto it = _map.lower_bound(value);
        bool merged = false;
        if(it != _map.begin()) {
            auto prev = it;
            --prev;
            if(prev->second + 1 >= value) {
                merged = true;
                prev->second = max(prev->second, value);
            }
        }

        if(it != _map.end()) {
            if(it->first - 1 <= value) {
                if(merged) {
                    auto prev = it;
                    --prev;
                    if(prev->second >= it->first - 1) {
                        prev->second = max(prev->second, it->second);
                        _map.erase(it);
                    }
                } else {
                    merged = true;
                    if(it->first != value) {
                        pair<int, int> p = *it;
                        p.first = min(p.first, value);
                        it = _map.insert(it, p);
                        ++it;
                        if(it != _map.end())
                            _map.erase(it);
                    }
                }
            }
        }
        if(!merged)
            _map.insert(it, {value, value});
    }
    
    vector<vector<int>> getIntervals() {
        vector<vector<int>> intervals;
        for(auto const & p : _map)
            intervals.push_back({p.first, p.second});
        return intervals;
    }

    map<int, int> _map;
};
```

![2wlbi6.webp](./images/0.webp)
