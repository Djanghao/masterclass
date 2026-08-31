# Easy approach with Explanation

**Author:** little_late
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-keypresses/solutions/4083489/](https://leetcode.com/problems/minimum-number-of-keypresses/solutions/4083489/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Top frequency charecters should appear before low frequency charecters in the keypress sequence

Ex . [abc] in order to assign 'abc' to any button frequency of 'a' should be highest in the given string.

since there can be at most 26 type of charecters we can just create a map of counts of each charecter and sort it based on frequency. top 9 frequent should come at position 0 at each button and so on...

# Complexity
- Time complexity: for Sorting : O(26 * log(26)), for visiting each charecter in string O(n):: overall min O(length of string) and O(26 * log(26))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(26) to store the frequencies
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int minimumKeypresses(string s) {
        vector<int> counts(26,0);
        for(char &x: s) counts[x - 'a']++;
        vector<vector<int>> p;
        for(int i = 0; i < 26; i++) {
            p.push_back({counts[i],i});
        }
        sort(p.begin(),p.end());
        reverse(p.begin(),p.end());

        unordered_map<char,int> pos;
        for(int i =0; i < 26; i++) {
            pos[p[i][1]] = i;
        }
        int count = 0;
        for(char &x : s){
            int loc = pos[x - 'a'];
            if(loc <= 8)count+=1;
            else if(loc >= 9 and loc <= 17)count +=2;
            else if(loc >= 18)count+=3;
            
        }
        return count;
    }
};
```