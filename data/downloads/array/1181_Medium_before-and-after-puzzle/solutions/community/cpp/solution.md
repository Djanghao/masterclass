# Solution

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/before-and-after-puzzle/solutions/3567393/](https://leetcode.com/problems/before-and-after-puzzle/solutions/3567393/)

---

```C++ []
class Solution {
public:
   vector<string> beforeAndAfterPuzzles(vector<string>& phrases) {
  unordered_map<string, set<string>> first, last;
  set<string> res;
  for (auto p : phrases) {
    auto fp = p.find(' '), lp = p.rfind(' ');
    fp = fp == string::npos ? p.size() : fp;
    lp = lp == string::npos ? 0 : lp + 1;
    for (auto pp : first[p.substr(lp)]) res.insert(p + pp);
    for (auto pp : last[p.substr(0, fp)]) res.insert(pp + p);
    first[p.substr(0, fp)].insert(p.substr(fp));
    last[p.substr(lp)].insert(p.substr(0, lp));
  }
  return vector<string>(begin(res), end(res));
}
};
```

```Python3 []
class Solution:
    def beforeAndAfterPuzzles(self, phrases: List[str]) -> List[str]:
        single_words = collections.defaultdict(int)
        graph = collections.defaultdict(list)
        
        start_words = set()
        
        for i, phrase in enumerate(phrases):
            words = phrase.split()
            
            if len(words) == 1:
                single_words[phrase] += 1
                continue
                
            graph[words[0]].append((words, i))
            start_words.add(words[0])
            
        combined = set(word for word, ct in single_words.items() if ct > 1)
        
        for start_word in start_words:
            for words, idx1 in graph[start_word]:
                for end_words, idx2 in graph[words[-1]]:
                    if idx1 == idx2:
                        continue
                        
                    combined.add(' '.join(words + end_words[1:]))
                    
                if words[-1] in single_words:
                    combined.add(' '.join(words))
        
        for start_word in single_words:
            for words, _ in graph[start_word]:
                combined.add(' '.join(words))
                
        return sorted(combined)
```

```Java []
class Solution {
    public List<String> beforeAndAfterPuzzles(String[] phrases) {
       Set<String> set=new HashSet();
       Map<String,List<String>> start=new HashMap(); 
       Map<String,List<String>> end=new HashMap(); 
       for(String s:phrases){
           int l = s.indexOf(" ");
           int r = s.lastIndexOf(" ");
           String ls = l==-1?s:s.substring(0,l);
           String rs = r==-1?s:s.substring(r+1);

           String ls2 = l==-1?"":s.substring(l);
           String rs2 = r==-1?"":s.substring(0,r+1);
           if(start.containsKey(ls)==false) start.put(ls,new ArrayList());
           if(end.containsKey(ls)==false) end.put(ls,new ArrayList());
            if(start.containsKey(rs)==false) start.put(rs,new ArrayList());
           if(end.containsKey(rs)==false) end.put(rs,new ArrayList());
            for(String t:start.get(rs)){
                set.add(s+t);
            }
            for(String t:end.get(ls)){
                set.add(t+s);
            }
            start.get(ls).add(ls2);
            end.get(rs).add(rs2);
       }
       List<String> res = new ArrayList(set);
       Collections.sort(res);
       return res;
    }
}
```