# Java | CPP | union & find | DFS

**Author:** yeelimtse
**Votes:** 4
**Link:** [https://leetcode.com/problems/synonymous-sentences/solutions/1941712/](https://leetcode.com/problems/synonymous-sentences/solutions/1941712/)

---

Intuition:
1. Union and find: for every synonym pair, union two words (always choose the word that is **lexicographically smaller** to be the parent).
2. Build a sets based on each parent.
3. Perform **DFS** to find all combinations.
4. Sort all combinations.

**JAVA**
``` 
class Solution {
    Map<String, String> parent = new HashMap();
    Map<String, List<String>> sets = new HashMap();
    public List<String> generateSentences(List<List<String>> synonyms, String text) {
        List<String> res = new ArrayList();
        
        // union find
        for (List<String> pair : synonyms) {
            String word1 = pair.get(0);
            String word2 = pair.get(1);
            String par1 = find(word1);
            String par2 = find(word2);
            if (par1.equals(par2)) continue;
            if (par1.compareTo(par2) < 0) parent.put(par2, par1);
            else parent.put(par1, par2);
        }
        
        // build sets
        for (Map.Entry entry: parent.entrySet()) {
            String word = (String)entry.getKey();
            String par = find(word);
            if (!sets.containsKey(par)) sets.put(par, new ArrayList());
            sets.get(par).add(word);
        }
        
        // find combinations
        String[] texts = text.split(" ");
        String[] comb = new String[texts.length];
        findCombination(text.split(" "), 0, comb, res);
        Collections.sort(res, (a, b) -> a.compareTo(b));
        return res;
    }
    
    private String find(String word) {
        if (!parent.containsKey(word)) {
            parent.put(word, word);
            return word;
        }
        if (!parent.get(word).equals(word)) {
            parent.put(word, find(parent.get(word)));
        }
        return parent.get(word);
    }
    
    private void findCombination(String[] texts, int index, String[] comb, List<String> res) {
        if (index == texts.length) {
            res.add(String.join(" ", comb));
            return;
        }
        
        if (!parent.containsKey(texts[index])) {
            comb[index] = texts[index];
            findCombination(texts, index + 1, comb, res);
        } else {
            String par = find(texts[index]);
            List<String> equalwords = sets.get(par);
            for (String equalword : equalwords) {
                comb[index] = equalword;
                findCombination(texts, index + 1, comb, res);
            }
        }
    }
}
```
**CPP**
```
class Solution {
private:
    unordered_map<string, string> parent;
    unordered_map<string, set<string>> sets;

    string find(string word) {
        if (parent.find(word) == parent.end()) parent[word] = word;
        if (parent[word] == word) return word;
        parent[word] = find(parent[word]);
        return parent[word];
    }
    
    vector<string> split(string text) {
        istringstream ss(text); 
        string t; vector<string> res; 
        while (ss >> t) res.push_back(t); 
        return res;
    }
    
    void findCombinations(vector<string>& texts, int index, string comb, vector<string>& res) {
        if (index == texts.size()) {
            res.push_back(comb);
            return;
        }
        if (parent.find(texts[index]) == parent.end()) {
            findCombinations(texts, index + 1, comb + (index == 0 ? "" :" ") + texts[index], res);
        } else {
            string par = find(texts[index]);
            for (const auto& equalword : sets[par]) {
                findCombinations(texts, index + 1, comb + (index == 0 ? "" :" ") + equalword, res);
            }
        }
    }
    
public:
    vector<string> generateSentences(vector<vector<string>>& synonyms, string text) {
        vector<string> res;
        for (const auto& pair : synonyms) {
            string parA = find(pair[0]);
            string parB = find(pair[1]);
            if (parA.compare(parB) < 0) parent[parB] = parA;
            else parent[parA] = parB;
        }
        
        // build sets
        for (const auto& entry : parent) {
            string word = entry.first;
            string par = find(word);
            sets[par].insert(word);
        }
        
        // find combinations
        vector<string> texts = split(text);
        findCombinations(texts, 0, "", res);
        sort(res.begin(), res.end());
        return res;
    }
};
```