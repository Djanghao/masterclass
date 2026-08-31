# Short and clean Easy to understand solution

**Author:** 1806manan
**Votes:** 6
**Link:** [https://leetcode.com/problems/all-oone-data-structure/solutions/2697460/](https://leetcode.com/problems/all-oone-data-structure/solutions/2697460/)

---

***Easy , short and clean solution with the help of map and set only.***

```
class AllOne {
public:
    unordered_map<string , int>mp;
    set<pair<int,string>>s;
    AllOne() {
        mp.clear();
        s.clear();
    }
    
    void inc(string key) {
        if(mp[key]==0)
        {
            mp[key]++ ;
            s.insert({mp[key],key});
        }
        
        else
        {
            s.erase(s.find({mp[key],key}));
            mp[key]++;
            s.insert({mp[key],key});
        }
    }
    
    void dec(string key) {
        
        if(mp[key]==1)
        {
            mp.erase(key);
        	s.erase(s.find({1,key}));
        }
        else
        {
        	s.erase(s.find({mp[key],key}));
            mp[key]--;
        	s.insert({mp[key],key});
		}
    }
    
    string getMinKey() {
       return s.size()>0?(pair<int,string>(*(s.begin())).second):"";
    }
    string getMaxKey() {
        return s.size()>0?(pair<int,string>(*(s.rbegin())).second):"";
    }
};
```
