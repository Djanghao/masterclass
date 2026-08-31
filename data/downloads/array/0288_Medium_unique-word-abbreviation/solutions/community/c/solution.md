# C++ Easy solution , using unordered_map

**Author:** Divyansh--
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-word-abbreviation/solutions/1890691/](https://leetcode.com/problems/unique-word-abbreviation/solutions/1890691/)

---

```
class ValidWordAbbr {
public:
    unordered_map<string,unordered_set<string>> mp;
	// this function returns the string in abbravation form
    string shot(string s)
    {
        if(s.size()<=2)
            return s;
        return s[0] + to_string(s.size()-2) + s[s.size()-1];
    }
    ValidWordAbbr(vector<string>& dictionary) {
	// adding mapping of abbreavtion to string(in set) to the map declared globally
        for(auto x : dictionary)
            mp[shot(x)].insert(x);
    }
    
    bool isUnique(string word) {
	// s is the abbrevated form
        string s = shot(word);
		// if the abbrevation is not in the map then return true;
        if(mp.find(s)==mp.end())
            return true;
        else
        {
			 // if abbrevation is in the map then the word should be same
            if(mp[s].size()==1 && mp[s].find(word)!=mp[s].end())
                return true;
        }
        return false;
    }
};


```