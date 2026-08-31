# JS, Python, Java, C++ | Simple Map Solution w/ Explanation

**Author:** sgallivan
**Votes:** 17
**Link:** [https://leetcode.com/problems/find-duplicate-file-in-system/solutions/1215552/](https://leetcode.com/problems/find-duplicate-file-in-system/solutions/1215552/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The order to group duplicate files, we should use a **map** to store the file paths by content value. For each string (**pStr**) in **paths**, we can iterate through the string up to the first space to find the **path**. Then we can iterate through the remainder of **pStr** and use two more pointers (**j, k**) to mark the indexes around the filename (**file**) and contents (**cont**).

When we find a **')'**, we've found the end of a complete entry, so we should add it to our content map (**contMap**) by merging **path** and **file** (with a **'/'** between) and storing the result in **contMap** under **cont**.

Once we've added all files to **contMap**, we can iterate through its values and add any groups that are larger than **1** (indicating duplicates) to our answer array (**ans**) before we **return ans**.

 - _**Time Complexity: O(N + C)** where **N** is the total number of files and **C** is the number of different keys in **contMap**_
 - _**Space Complexity: O(N)** for **N** files in **contMap**_

---

#### ***Implementation:***

Python is much faster when using **split()** as opposed to direct iteration through the strings.

Java is faster when using a **StringBuilder** to compile the **path + file** before entry into **contMap**.

---

#### ***Javascript Code:***

The best result for the code below is **104ms / 52.6MB** (beats 100% / 90%).
```javascript
var findDuplicate = function(paths) {
    let contMap = new Map(), ans = []
    for (let pStr of paths) {
        let i = 0, j, k
        while (pStr.charAt(i) !== ' ') i++
        let path = pStr.slice(0,i)
        for (j = ++i; i < pStr.length; i++)
            if (pStr.charAt(i) === '(') k = i
            else if (pStr.charAt(i) === ')') {
                let pathfile = path + '/' + pStr.slice(j, k),
                    cont = pStr.slice(k+1, i)
                if (!contMap.has(cont))
                    contMap.set(cont, [pathfile])
                else contMap.get(cont).push(pathfile)
                j = i + 2
            }
    }
    for (let v of contMap.values())
        if (v.length > 1) ans.push(v)
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **76ms / 24.0MB** (beats 95% / 70%).
```python
class Solution:
    def findDuplicate(self, paths: List[str]) -> List[List[str]]:
        contMap, ans = defaultdict(list), []
        for pStr in paths:
            sep = pStr.split(" ")
            for i in range(1, len(sep)):
                parts = sep[i].split('(')
                cont = parts[1][:-1]
                contMap[cont].append(sep[0] + '/' + parts[0])
        for v in contMap.values():
            if len(v) > 1: ans.append(v)
        return ans
```

---

#### ***Java Code:***

The best result for the code below is **12ms / 48.5MB** (beats 100% / 46%).
```java
class Solution {
    public List<List<String>> findDuplicate(String[] paths) {
        Map<String, List<String>> contMap = new HashMap<>();
        StringBuilder pathfile = new StringBuilder();
        for (String pStr : paths) {
            int i = 0;
            pathfile.setLength(0);
            while (pStr.charAt(i) != ' ') i++;
            pathfile.append(pStr.substring(0,i)).append('/');
            int pLen = ++i;
            for (int j = i, k = 0; i < pStr.length(); i++)
                if (pStr.charAt(i) == '(') {
                    pathfile.append(pStr.substring(j,i));
                    k = i + 1;
                } else if (pStr.charAt(i) == ')') {
                    String cont = pStr.substring(k, i);
                    if (!contMap.containsKey(cont))
                        contMap.put(cont, new ArrayList<>());
                    contMap.get(cont).add(pathfile.toString());
                    j = i + 2;
                    pathfile.setLength(pLen);
                }
        }
        List<List<String>> ans = new ArrayList<>();
        for (List<String> v : contMap.values())
            if (v.size() > 1) ans.add(v);
        return ans;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **76ms / 36.5MB** (beats 92% / 78%).
```c++
class Solution {
public:
    vector<vector<string>> findDuplicate(vector<string>& paths) {
        unordered_map<string, vector<string>> contMap;
        for (auto &pStr : paths) {
            int i = 0;
            while (pStr[i] != ' ') i++;
            string path = pStr.substr(0,i);
            for (int j = i + 1, k = 0; i < pStr.size(); i++)
                if (pStr[i] == '(') k = i+1;
                else if (pStr[i] == ')') {
                    string pathfile = path + '/' + pStr.substr(j, k-j-1),
                        cont = pStr.substr(k, i-k);
                    if (contMap.find(cont) == contMap.end())
                        contMap[cont] = vector<string>();
                    contMap[cont].push_back(pathfile);
                    j = i + 2;
                }
        }
        vector<vector<string>> ans;
        for (auto &kv : contMap)
            if (kv.second.size() > 1) ans.push_back(kv.second);
        return ans;
    }
};
```