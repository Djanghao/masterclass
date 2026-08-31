# Kotlin / C++: O(V + E) time and O(V) space with topological sort

**Author:** kotlinvim
**Votes:** 1
**Link:** [https://leetcode.com/problems/alien-dictionary/solutions/965329/](https://leetcode.com/problems/alien-dictionary/solutions/965329/)

---

````
   fun alienOrder(words: Array<String>): String {
        // step 1: build dict
        val dict = HashSet<Char>()
        for (w in words) {
            for (c in w) {
                dict.add(c)
            }
        }

        // step 2: build graph where each vertex represents letter diffs with nei
        val graph = HashMap<Char, HashSet<Char>>()
        val indegree = IntArray(26)
        for (i in 1..words.size - 1) {
            val prev = words[i - 1]
            val curr = words[i]
            
            var j = 0
            while (j < prev.length && j < curr.length) {
                if (prev[j] != curr[j]) {
                    if (!graph.contains(prev[j]) || !graph[prev[j]]!!.contains(curr[j])) {
                        indegree[curr[j] - 'a']++
                    }
                    graph.getOrPut(prev[j], { hashSetOf() }).add(curr[j])
                    break
                }
                j++
            }
            // no follow rules - "abc" "abcd"
            if (j < prev.length && j == curr.length) return ""
        }
        
        // step 3: topological sort
        val q = ArrayDeque<Char>()
        for (c in 'a'..'z') {
            // !! indgree initiated with 0, so need to check dict
            if (indegree[c - 'a'] == 0 && dict.contains(c)) {
                q.offer(c)
            }
        }
        
        val sb = StringBuilder()
        while (!q.isEmpty()) {
            val n = q.poll()
            sb.append(n)

            // !! a vertex might have no nei
            if (graph.contains(n)) {
                for (nei in graph[n]!!) {
                    if (--indegree[nei - 'a'] == 0) {
                        q.offer(nei)
                    }
                }
            }
        }
        
        // step 4: check if graph has cycle
        return if (sb.length != dict.size) "" else sb.toString()
    }
	
	// C++

    string alienOrder(vector<string>& words) {
        unordered_set<char> dict;
        for (auto w : words) {
            for (auto c : w) {
                dict.insert(c);
            }
        }

        unordered_map<char, unordered_set<char>> graph;
        vector<int> indegree(26, 0);
        for (int i = 1; i < words.size(); i++) {
            auto prev = words[i - 1];
            auto curr = words[i];
            int j = 0;
            while (j < prev.length() && j < curr.length()) {
                if (prev[j] != curr[j]) {
                    if (graph.count(prev[j]) == 0 || graph[prev[j]].count(curr[j]) == 0)
                        indegree[curr[j] - 'a']++;
                    graph[prev[j]].insert(curr[j]);
                    break;
                }
                j++;
            }

            if (j < prev.length() && j == curr.length()) return "";
        }
        
        queue<char> q;
        for (int i = 0; i < 26; i++) {
            if (indegree[i] == 0 && dict.count('a' + i) > 0) {
                q.push('a' + i);
            }
        }
        
        string res;
        while (!q.empty()) {
            auto node = q.front(); q.pop();
            res += node;
            for (auto nei : graph[node]) {
                if (--indegree[nei - 'a'] == 0) {
                    q.push(nei);
                }
            }
        }
        
        return res.length() == dict.size() ? res : "";
    }