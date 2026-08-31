# Accepted: use hash maps and sets

**Author:** SohamGhormade
**Votes:** 21
**Link:** [https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/1166450/](https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/1166450/)

---

### Approach
1. Collect the user data (website and timestamp) into a map of maps
i.e user name string ->  website string and time stamp integer 

2. Collect 3-sequences for each user.
Reminder :
"A 3-sequence is a list of websites of length 3 sorted in ascending order by the time of their visits. "
3. Find and return the 3-sequence with the largest count.  
### Code
```
class Solution {
public:
    vector<string> mostVisitedPattern(vector<string>& users,
                                      vector<int>& time,
                                      vector<string>& sites) {
        
  unordered_map<string, map<int, string>> userToDatas;
  unordered_map<string, int> threeSequencesToCounts;
  int maxCount = 0;
  string res;
  
  // Step 1: collect user data in a map of maps 
  // Basically store website and time data for every user name, by user name 
  for (auto i = 0; i < users.size(); ++i)
  {
      userToDatas[users[i]][time[i]] = sites[i];
  }
      
  // Step 2: collect three sequences      
  for (auto userToData: userToDatas)
  {
    unordered_set<string> threeSequences;
    // T :O(n^3)
    for (auto it = begin(userToData.second); it != end(userToData.second); ++it)
    {   
      for (auto it1 = next(it); it1 != end(userToData.second); ++it1)
      {
          for (auto it2 = next(it1); it2 != end(userToData.second); ++it2)
          {
              threeSequences.insert(it->second + "$" + it1->second + "#" + it2->second);
      
          }
      }
    }
    for (auto threeSequence : threeSequences) 
    {
        ++threeSequencesToCounts[threeSequence];
    }
  }
        
  for (auto threeSequenceToCount : threeSequencesToCounts) {
      cout<< threeSequenceToCount.first<< " "<< threeSequenceToCount.second<< endl;
    if (threeSequenceToCount.second >= maxCount) {
	// If there is more than one solution, return the lexicographically smallest such 3-sequence.
      res = res == "" || 
           threeSequenceToCount.second > maxCount ? threeSequenceToCount.first : min(res, threeSequenceToCount.first);
      maxCount = threeSequenceToCount.second;
    }
  }
  
  auto seperator1 = res.find("$");
  auto seperator2 = res.find("#");
  
        return { res.substr(0, seperator1),// element 1
                res.substr(seperator1 + 1, seperator2 - seperator1 - 1), // element 2
                res.substr(seperator2 + 1) };// element 3
}
};
```

### References
- solution from Vlad [here](https://leetcode.com/problems/analyze-user-website-visit-pattern/discuss/357252/C%2B%2B-maps-and-sets).
- This solution is basically Vlad's solution with [rename of variables](https://leetcode.com/problems/analyze-user-website-visit-pattern/discuss/357252/C++-maps-and-sets/700398) to help with understanding.
