# Easy C++ HashMap Solution

**Author:** imakshit2521
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-skiplist/solutions/2267475/](https://leetcode.com/problems/design-skiplist/solutions/2267475/)

---

```
class Skiplist {
public:
    map<int,int>s;
    Skiplist() {
        
    }
    
    bool search(int target) {
        if(s.find(target)!=s.end())
            return true;
        else 
            return false;
    }
    
    void add(int num) {
        s[num]++;
    }
    
    bool erase(int num) {
        if(s.find(num)==s.end())
            return false;
        else{
            s[num]--;
            if(s[num]==0)
                s.erase(num);
            return true;
        }
    }
};

/**
 * Your Skiplist object will be instantiated and called as such:
 * Skiplist* obj = new Skiplist();
 * bool param_1 = obj->search(target);
 * obj->add(num);
 * bool param_3 = obj->erase(num);
 */
```