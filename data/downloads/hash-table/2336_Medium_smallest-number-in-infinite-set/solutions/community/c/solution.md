# without hardcoding the value 1000

**Author:** garvbareja
**Votes:** 154
**Link:** [https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/2263510/](https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/2263510/)

---

I saw a lot of top solutions pushing 1-> 1000 numbers in pq/set which I personally dont find good enough

**APPROACH**
maintain a variable which points to the current smallest element untill addBack is called
when addBack() is called only add elements to the set which were popped earlier i.e. smaller than cur
when popSmallest() is called return the top most element in the set if it exists else return cur

I believe this approach uses less time and space as the set only holds elements that were added back
I got 100% faster submission in both time and space(c++)

```
class SmallestInfiniteSet {
public:
    int cur;
    set<int> s;
    SmallestInfiniteSet() {
        cur=1;
    }
    
    int popSmallest() {
        if(s.size()){
            int res=*s.begin(); s.erase(res);
            return res;
        }else{
            cur+=1;
            return cur-1;
        }
    }
    
    void addBack(int num) {
        if(cur>num) s.insert(num);
    }
};
```