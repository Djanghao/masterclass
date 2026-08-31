# JS, Python, Java, C++ | Easy Recursive DFS Solution w/ Explanation

**Author:** sgallivan
**Votes:** 103
**Link:** [https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/1148310/](https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/1148310/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

Since each digit can possibly mean one of several characters, we'll need to create code that branches down the different paths as we iterate through the input digit string (**D**).

This quite obviously calls for a **depth-first search** (**DFS**) approach as we will check each permutation of characters and store them in our answer array (**ans**). For a DFS approach we can use one of several options, but a **recursive** solution is generally the cleanest.

But first, we'll need to set up a lookup table (**L**) to convert a digit to its possible characters. Since the digits are actually low-indexed integers, we can actually choose between an **array** or **map**/**dictionary** here with little difference.

For our DFS function (**dfs**), we'll have to feed it the current position (**pos**) in **D** as well as the string (**str**) being built. The function will also need to have access to **D**, **L**, and **ans**.

The DFS function itself is fairly simple. It will push a completed **str** onto **ans**, otherwise it will look up the characters that match the current **pos**, and then fire off new recursive functions down each of those paths.

Once we're done, we should be ready to **return ans**.

---

#### ***Implementation:***

Javascript and Python will have scoped access to **D**, **L**, and **ans** inside **dfs**, so won't need to pass in references via arguments.

Java should make sure to use a **char[][]** and a **StringBuilder** for better performance here.

---

#### ***Javascript Code:***

The best result for the code below is **68ms / 38.4MB** (beats 97% / 92%).
```javascript
const L = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
     '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}

var letterCombinations = function(D) {
    let len = D.length, ans = []
    if (!len) return []
    const dfs = (pos, str) => {
        if (pos === len) ans.push(str)
        else {
            let letters = L[D[pos]]
            for (let i = 0; i < letters.length; i++)
                dfs(pos+1,str+letters[i])
        }
    }
    dfs(0,"")
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **24ms / 14.2MB** (beats 95% / 86%).
```python
L = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
     '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}

class Solution:
    def letterCombinations(self, D: str) -> List[str]:
        lenD, ans = len(D), []
        if D == "": return []
        def dfs(pos: int, st: str):
            if pos == lenD: ans.append(st)
            else:
                letters = L[D[pos]]
                for letter in letters:
                    dfs(pos+1,st+letter)
        dfs(0,"")
        return ans
```

---

#### ***Java Code:***

The best result for the code below is **0ms / 37.5MB** (beats 100% / 94%).
```java
class Solution {
    final char[][] L = {{},{},{'a','b','c'},{'d','e','f'},{'g','h','i'},{'j','k','l'},
	{'m','n','o'},{'p','q','r','s'},{'t','u','v'},{'w','x','y','z'}};
    
    public List<String> letterCombinations(String D) {
        int len = D.length();
        List<String> ans = new ArrayList<>();
        if (len == 0) return ans;
        dfs(0, len, new StringBuilder(), ans, D);
        return ans;
    }
    
    public void dfs(int pos, int len, StringBuilder sb, List<String> ans, String D) {
        if (pos == len) ans.add(sb.toString());
        else {
            char[] letters = L[Character.getNumericValue(D.charAt(pos))];
            for (int i = 0; i < letters.length; i++)
                dfs(pos+1, len, new StringBuilder(sb).append(letters[i]), ans, D);
        }
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **0ms / 6.4MB** (beats 100% / 96%).
```c++
unordered_map<char, string> L({{'2',"abc"},{'3',"def"},{'4',"ghi"},
    {'5',"jkl"},{'6',"mno"},{'7',"pqrs"},{'8',"tuv"},{'9',"wxyz"}});

class Solution {
public:
    vector<string> letterCombinations(string D) {
        int len = D.size();
        vector<string> ans;
        if (!len) return ans;
        dfs(0, len, "", ans, D);
        return ans;
    }
    
    void dfs(int pos, int &len, string str, vector<string> &ans, string &D) {
        if (pos == len) ans.push_back(str);
        else {
            string letters = L[D[pos]];
            for (int i = 0; i < letters.size(); i++)
                dfs(pos+1, len, str+letters[i], ans, D);
        }
    }
};
```