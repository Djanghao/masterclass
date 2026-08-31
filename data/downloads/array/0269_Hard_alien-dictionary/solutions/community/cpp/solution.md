# C++ | Java BFS and Topoligical Sort with explanation

**Author:** lllmonster
**Votes:** 138
**Link:** [https://leetcode.com/problems/alien-dictionary/solutions/157298/](https://leetcode.com/problems/alien-dictionary/solutions/157298/)

---


BFS + Topological Sort, time complexity O(n), space complexity O(n)  

**STEP 1: Initialize**   
for each letter in each word `indegree[letter] = 0;`  

**STEP 2: Build Graph and Record the edge**   
for each edge (cur node, nex node) `graph.insert(cur, nex)`    
for each nex node `indegree[nex]++;`    

**STEP 3: Topological Sort**  
use queue, push all nodes which indegree is 0;  
use BFS start to iterate the whole graph.  

**STEP 4: Tell if cyclic**  
compare the result with indegree `if (res.size() == indegree.size());`


```C++ []
class Solution {
public:
    string alienOrder(vector<string>& words) {
        if (words.size() == 0) return "";
        unordered_map<char, int> indegree;
        unordered_map<char, unordered_set<char>> graph;
        
        // initialize
        for (int i = 0; i < words.size(); i++) {
            for (int j = 0; j < words[i].size(); j++) {
                char c = words[i][j];
                indegree[c] = 0; 
            }
        }
        
        // build graph and record indegree
        for (int i = 0; i < words.size() - 1; i++) {
            string cur = words[i];
            string nex = words[i + 1];
            if (cur.size() > nex.size() && cur.compare(0, nex.length(), nex) == 0) {
                return "";
            }
            int len = min(cur.size(), nex.size());
            for (int j = 0; j < len; j++) {
                if (cur[j] != nex[j]) {
                    unordered_set<char> set = graph[cur[j]];
                    if (set.find(nex[j]) == set.end()) {
                        graph[cur[j]].insert(nex[j]); // build graph
                        indegree[nex[j]]++; // add indegree
                    }
                    break;                        
                }
            }
        }
        
        // topoligical sort
        string ans;
        queue<char> q;
        for (auto& e : indegree) {
            if (e.second == 0) {
                q.push(e.first);
            }
        }
        while(!q.empty()) {
            char cur = q.front();
            q.pop();
            ans += cur;
            
            if (graph[cur].size() != 0) {
                for (auto& e : graph[cur]) {
                    indegree[e]--;
                    if (indegree[e] == 0) {
                        q.push(e);
                    }
                }
            }            
        }
        
        // tell if it is cyclic
        return ans.length() == indegree.size() ? ans : "";
    }
};
```
```java []
class Solution {
    public String alienOrder(String[] words) {
        Map<Character, Integer> degree = new HashMap<>();
        Map<Character, Set<Character>> map = new HashMap<>();
        for(int i = 0; i < words.length; i++) {
            for (int j = 0; j < words[i].length(); j++) {
                degree.put(words[i].charAt(j), 0);
            }
        }

        for(int i = 0; i < words.length-1; i++) {
            String cur = words[i];
            String next = words[i+1];
            if (cur.length() > next.length() && cur .startsWith(next)) {
                return "";
            }
            int len = Math.min(cur.length(), next.length());
            for(int j = 0; j < len; j++) {
                if (cur.charAt(j) != next.charAt(j)) {
                    if (!map.containsKey(cur.charAt(j))) {
                        map.put(cur.charAt(j), new HashSet<>());
                    }
                    if (map.get(cur.charAt(j)).add(next.charAt(j))) {
                        degree.put(next.charAt(j), degree.get(next.charAt(j))+1);
                    }
                    break;
                }
            }
        }
        StringBuilder sb = new StringBuilder();
        Queue<Character> q = new LinkedList<>();
        for(Character c : degree.keySet()) {
            if (degree.get(c) == 0) {
                q.offer(c);
            }
        }
        while(!q.isEmpty()) {
            Character c = q.poll();
            sb.append(c);
            if (!map.containsKey(c)) {
                continue;
            }
            
            for(Character nei : map.get(c)) {
                degree.put(nei, degree.get(nei)-1);
                if (degree.get(nei) == 0) {
                    q.offer(nei);
                }
            }
        }

        if (sb.toString().length() != degree.size()) {
            return "";
        }
        return sb.toString();
    }
}
```

