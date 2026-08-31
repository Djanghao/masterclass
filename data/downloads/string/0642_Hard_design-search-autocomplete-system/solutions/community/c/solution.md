# C++ 100% time 100% space w/ explanation (220ms, 58.9mb)

**Author:** Marcus_X
**Votes:** 13
**Link:** [https://leetcode.com/problems/design-search-autocomplete-system/solutions/269255/](https://leetcode.com/problems/design-search-autocomplete-system/solutions/269255/)

---

```
//
// Constructor: n log n (sorting sentences) n (hash inserts) 
//       Input: log n (binary search) m = matches found
//              ^-- each subsequent input uses previous subset bounds for binary search
//              m log m (run all matches through priority_queue/minheap, keep hottest 3)
//              1 (prepping results for return)
//      Insert: log n (find insertion point) n (vector insert) 1 (hash insert)
//
class AutocompleteSystem {
public:
    typedef pair<int,const char*> hotstr;
    unordered_map<string,int> hotmap;
    vector<string>::iterator l, r;
    vector<string> sentences;
    string userString;
    
    AutocompleteSystem(vector<string>& sentences_, vector<int>& times) {
        hotmap.clear();
        userString = "";
        sentences = sentences_;
        for (int i = 0; i < sentences.size(); ++i)
            hotmap[sentences[i]] = times[i];
        sort(sentences.begin(), sentences.end());
    }
    
    vector<string> input(char c) {
        if (c == '#') {
            insert(userString);
            userString = "";
            return {};
        } else if (userString.length() == 0) {
            l = sentences.begin();
            r = sentences.end();
        }
        userString += c;
        
        // Get iterator to range start that matches userString (lower_bound)
        // lower_bound: Iterator to the first element in the range [first,last) which does not compare less than val.
        auto cmp = [](hotstr& a, hotstr& b) { return a.first == b.first ? strcmp(a.second,b.second) < 0 : a.first > b.first; };
        priority_queue<hotstr,vector<hotstr>,decltype(cmp)> minheap(cmp);
        if ((l = lower_bound(l, r, userString)) == r) return {}; // nothing found case
        for (r = l; r != sentences.end() && !strncmp(r->c_str(), userString.c_str(), userString.length()); ++r) {
            // Pass through a 3-size minheap, keeping hottest at bottom, popping off coldest at top
            minheap.emplace(hotmap[*r], r->c_str());
            if (minheap.size() > 3) minheap.pop();
        }

        vector<string> results;
        while (minheap.size())
            results.push_back(minheap.top().second), minheap.pop();
        std::reverse(results.begin(), results.end());
        return results;
    }
    
    void insert(string& str) {
        auto existsIter = hotmap.find(str);
        if (existsIter != hotmap.end()) {
            existsIter->second++;
        } else {
            // upper_bound: Iterator to the first element in the range [first,last) which compares greater than val.
            auto insertIter = upper_bound(sentences.begin(), sentences.end(), str);
            sentences.insert(insertIter, str);
            hotmap[str] = 1;
        }
    }
};
```