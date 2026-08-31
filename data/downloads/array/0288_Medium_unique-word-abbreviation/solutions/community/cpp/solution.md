# 8-lines in C++...

**Author:** jianchao-li
**Votes:** 44
**Link:** [https://leetcode.com/problems/unique-word-abbreviation/solutions/73133/](https://leetcode.com/problems/unique-word-abbreviation/solutions/73133/)

---

To check for unique abbreviation, we maintain a mapping from a specific abbreviation to all words which have the abbreviation. Then we just need to check no other words have the same abbreviation as the given word.

The code is as follows.  

    class ValidWordAbbr {
    public:
    	ValidWordAbbr(vector<string> &dictionary) {
    		for (string& d : dictionary) {
    			int n = d.length();
    			string abbr = d[0] + to_string(n) + d[n - 1];
    			mp[abbr].insert(d);
    		}
    	}
    
    	bool isUnique(string word) {
    		int n = word.length();
    		string abbr = word[0] + to_string(n) + word[n - 1];
    		return mp[abbr].count(word) == mp[abbr].size(); 
    	}
    private:
    	unordered_map<string, unordered_set<string>> mp;
    };
     
     
    // Your ValidWordAbbr object will be instantiated and called as such:
    // ValidWordAbbr vwa(dictionary);
    // vwa.isUnique("hello");
    // vwa.isUnique("anotherWord");