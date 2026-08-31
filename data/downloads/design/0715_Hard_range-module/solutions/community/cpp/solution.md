# C++ Map Method Implementation with Clean Code

**Author:** Korean_Daniel
**Votes:** 20
**Link:** [https://leetcode.com/problems/range-module/solutions/3817686/](https://leetcode.com/problems/range-module/solutions/3817686/)

---

The code may be hard to read in some places but overall I think it's pretty clean. Let me know in the comments if there is anything I can improve on.

Memory complexity: O(n) to keep all ranges in map

Time complexity:

queryRange is O(log(n))
- log(n) for calling upper bound
- worst case log(n) for calling prev()
- constant time operations for everything else

addRange is O(klog(n)) where k is number of ranges removed
- log(n) for calling upper_bound
- call erase and prev() k times to erase mergeable ranges
- the rest are at most log(n) such as using [] operator

removeRange is O(klog(n))
- very similar to addRange in runtime
- log(n) for calling lower_bound
- call erase and prev() k times to erase overlapping ranges
- the rest are at most log(n) such as using [] operator

# Code
```
class RangeModule {
public:
    map<int, int> ranges;
    RangeModule() {}

    void addRange(int left, int right) {
        auto it = ranges.upper_bound(left);
        // erase everything that starts in between left and right
        // update right to be the end of merged range
        while(it != ranges.end() && it->first <= right){
            right = max(it->second, right);
            ++it;
            ranges.erase(prev(it));
        }
        // if you can add on to the previous range do it
        if(it != ranges.begin() && left <= (--it)->second){
            it->second = max(it->second, right);
        }
        // otherwise add new range
        else{
            ranges[left] = right;
        }
    }
    
    bool queryRange(int left, int right) {
        auto it = ranges.upper_bound(left);
        if(it == ranges.begin()) return false;
        return prev(it)->second >= right;
    }
    
    void removeRange(int left, int right) {
        auto it = ranges.lower_bound(left);
        int cutEnd = -1;
        // erase every range that starts before right
        // keep track of latest end using cutEnd
        while(it != ranges.end() && it->first < right){
            cutEnd = max(cutEnd, it->second);
            it++;
            ranges.erase(prev(it));
        }
        // if current range overlaps with a range that starts before it
        // update ranges and cutEnd
        if(it != ranges.begin() && left < (--it)->second){
            cutEnd = max(cutEnd, it->second);
            it->second = left;
        }
        // if you left a range hanging then put it in.
        if(right<cutEnd){
            ranges[right] = cutEnd;
        }
    }
};

/**
 * Your RangeModule object will be instantiated and called as such:
 * RangeModule* obj = new RangeModule();
 * obj->addRange(left,right);
 * bool param_2 = obj->queryRange(left,right);
 * obj->removeRange(left,right);
 */
```