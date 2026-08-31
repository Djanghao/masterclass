# ✅Short || C++ || Explained Solution✔️ || Beginner Friendly ||🔥 🔥 BY MR CODER

**Author:** mrcoderrm
**Votes:** 29
**Link:** [https://leetcode.com/problems/find-duplicate-file-in-system/solutions/2596755/](https://leetcode.com/problems/find-duplicate-file-in-system/solutions/2596755/)

---


**Please do UPVOTE to motivate me to solve more daily challenges like this !!**

***Watch this video for the better explanation of the code.***

## **Since thumbnail is not working, click on the link directly.**
https://www.youtube.com/watch?v=4lCcJXxK-vM

**Also you can SUBSCRIBE  \uD83E\uDC81 \uD83E\uDC81 \uD83E\uDC81 this channel for the daily leetcode challange solution.**

**C++**
```
class Solution {
public:
 vector<vector<string>> findDuplicate(vector<string>& paths) {
    unordered_map<string, vector<string>> umtostore;
    vector<vector<string>> ans;

    for (auto i : paths) {
	    stringstream stream(i);
	    string filelocation;
	    string s;
	    getline(stream, filelocation, ' ');
	    while (getline(stream, s, ' ')) {
		    string fname = filelocation + '/' + s.substr(0, s.find('('));
		    string fcontent = s.substr(s.find('(') + 1, s.find(')') - s.find('(') - 1);
		    umtostore[fcontent].push_back(fname);
	    }
    }

    for (auto file : umtostore) {
	    if (file.second.size() > 1)
		    ans.push_back(file.second);
    }

    return ans;
}
};
```
**Please do UPVOTE to motivate me to solve more daily challenges like this !!**
