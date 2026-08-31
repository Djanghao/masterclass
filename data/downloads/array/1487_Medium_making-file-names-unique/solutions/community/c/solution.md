# Easy Code with Explanation & YES, diagram

**Author:** interviewrecipes
**Votes:** 26
**Link:** [https://leetcode.com/problems/making-file-names-unique/solutions/719962/](https://leetcode.com/problems/making-file-names-unique/solutions/719962/)

---

![image](./images/0.png)

**Upvote would be appreciated! :)**

```
class Solution {
public:
    unordered_map<string, int> nameSuffix; // Folder name -> Next available value 
                                        // for the suffix.
    
    string addSuffix(string name) {
        string newName = "";
        do {
            newName = name + "(" + to_string(nameSuffix[name]) + ")"; // Generate a name.
            nameSuffix[name]++;                    // Increase the count by one
        } while (nameSuffix.find(newName) != nameSuffix.end()); // Until we get a used 
                                                                // name for the folder.
        return newName;
    }
    
    string getFolderName(string name) {
        string finalName = name; // If the folder name doesn't already exist, 
                                 // no need of renaming.
        if (nameSuffix.find(name) != nameSuffix.end()) { // If folder already exists -
            finalName = addSuffix(name);           // Add suffix to the name.
        }
        nameSuffix[finalName]++; // Record that the name is already in use.
        return finalName;     // Finally return the name for the folder.
    }
    vector<string> getFolderNames(vector<string>& names) {
        vector<string> ans;      // Hold all names of the folders after renaming.
        for (auto name: names) { // For each folder name -
            ans.push_back(getFolderName(name)); // Compute the name for the folder.
        }
        return ans; // Return answer.
    }
};
```

