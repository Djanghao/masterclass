# ✅✅ Weighted Quick Union With Path Compression Solution(WQUPC) || C++ || Union Find 🔥🔥

**Author:** AntonioMalloc
**Votes:** 0
**Link:** [https://leetcode.com/problems/sentence-similarity-ii/solutions/6124504/](https://leetcode.com/problems/sentence-similarity-ii/solutions/6124504/)

---

# Code
```cpp []
class UF {
private:
    // we use strings to identify connected components instead of the normal ints
    map<string, string> root;
    map<string, int> weight;

public:
    void addWord(string x) {
        if (!root.count(x)){
            root[x] = x;
            weight[x] = 1;
        }
    }

    bool isWordPresent(string x){
        if (root.count(x)) return true;
        return false;
    }

    string f(string x) {
        if (root[x] != x) {
            root[x] = f(root[x]);
        }
        return root[x];
    }

    void u(string x, string y){
        string xroot = f(x), yroot = f(y);
        if (xroot == yroot){
            return;
        } else if (weight[xroot] < weight[yroot]){
            weight[yroot] += weight[xroot];
            root[xroot] = yroot;
        } else if (weight[xroot] > weight[yroot]){
            weight[xroot] += weight[yroot];
            root[yroot] = xroot;
        } else {
            weight[xroot] += weight[yroot];
            root[yroot] = xroot;
        }
    }
};

class Solution {
public:
    bool areSentencesSimilarTwo(vector<string>& sentence1, vector<string>& sentence2, vector<vector<string>>& similarPairs) {
        if (sentence1.size() != sentence2.size()) return false;

        UF uf;
        for (auto& pair : similarPairs){
            uf.addWord(pair[0]);
            uf.addWord(pair[1]);
            uf.u(pair[0], pair[1]);
        }

        for (int i = 0; i < sentence1.size(); i++){
            if (sentence1[i] == sentence2[i]) continue;

            if (uf.isWordPresent(sentence1[i]) && uf.isWordPresent(sentence2[i])&&uf.f(sentence1[i]) == uf.f(sentence2[i])){
                continue;
            }
            return false;
        }
        return true;
    }
};
```