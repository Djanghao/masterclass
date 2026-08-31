# Easy C++ Solution

**Author:** shubham9411
**Votes:** 22
**Link:** [https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/1003398/](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/1003398/)

---

```
int numSplits(string s) {
        unordered_map<char, int> mp1, mp2;
        for(auto ch:s) {
		    // Add all the chars to map
            mp1[ch]++;
        }
        int count = 0;
        for(int i=0;i < s.length();i++) {
		    // Decrease count in left window
            mp1[s[i]]--;
			// check if current char no longer exist in left window if not then delete it from map
            if(mp1[s[i]] == 0) mp1.erase(s[i]);
			// Increase count in right window
            mp2[s[i]]++;
			// Check if size of both map is same meaning both window have equal unique chars
            if(mp2.size() == mp1.size()) count++;
        }
        return count;
    }
```