# [C++] ✅ using BFS and Backtracking || 🔥 NO TLE

**Author:** hoshang2900
**Votes:** 161
**Link:** [https://leetcode.com/problems/word-ladder-ii/solutions/2421786/](https://leetcode.com/problems/word-ladder-ii/solutions/2421786/)

---

This solution relies on first finding the shortest transformation length between the beginWord and endWord strings and then performing a recursive backtrack to find all possible paths of the same length.

We start by checking if endWord is in the wordList; if it isn't, we cannot have a path from beginWord to endWord. Then, we perform a breadth-first search on our "graph" of words. The vertices in this graph are defined by words in our wordList, while edges between two vertices exist if we canTransform the words into each other (i.e. change one of the letters to arrive at a new word). While performing this search, we keep track of the parents of each word (this will allow us to recursively construct all valid paths later on). In this problem, since we are keeping track of a directed series of transformations, if we transform string a into string b, we say that a is a parent of b, and we track this in our parents map, which stores all the parents we encounter for a particular word. Note that we only care about relevant parents on the shortest path to a word, since we are trying to find the shortest path from source to destination, and once we have encountered a word, if we encounter it again on a longer path this new path cannot be the shortest path from beginWord to endWord.

Now, once we find the endWord, we keep track of the shortestpath length in variable. Note that once we find this, since we are keeping track of a word's parent at the time the word is queued in traverse, all possible parents that have a shortest path length for endWord must already be accounted for.

Finally, we recursively trace back through each node's parents (starting at endWord) and construct all valid paths. At each function call, we go through all possible parents for a given word, and if we arrive at the beginWord in the correct amount of steps, we add the path to our answer. Since we construct these paths in reverse order, we must invert them all at the end.

	// BFS gives TLE if we store path while traversing because whenever we find a better visit time for a word, we have to clear/make a new path vector everytime. 
	// The idea is to first use BFS to search from beginWord to endWord and generate the word-to-children mapping at the same time. 
	// Then, use DFS (backtracking) to generate the transformation sequences according to the mapping. 
	// The reverse DFS allows us to only make the shortest paths, never having to clear a whole sequence when we encounter better result in BFS
	// No string operations are done, by dealing with indices instead.



	class Solution {
	public:
    bool able(string s,string t){
        int c=0;
        for(int i=0;i<s.length();i++)
            c+=(s[i]!=t[i]);
        return c==1;
    }
    void bfs(vector<vector<int>> &g,vector<int> parent[],int n,int start,int end){
        vector <int> dist(n,1005);
        queue <int> q;
        q.push(start);
        parent[start]={-1};
        dist[start]=0;
        while(!q.empty()){
            int x=q.front();
            q.pop();
            for(int u:g[x]){
                if(dist[u]>dist[x]+1){
                    dist[u]=dist[x]+1;
                    q.push(u);
                    parent[u].clear();
                    parent[u].push_back(x);
                }
                else if(dist[u]==dist[x]+1)
                    parent[u].push_back(x);
            }
        }
    }
    void shortestPaths(vector<vector<int>> &Paths, vector<int> &path, vector<int> parent[],int node){
        if(node==-1){
            // as parent of start was -1, we've completed the backtrack
            Paths.push_back(path);
            return ;
        }
        for(auto u:parent[node]){
            path.push_back(u);
            shortestPaths(Paths,path,parent,u);
            path.pop_back();
        }
    }
    vector<vector<string>> findLadders(string beginWord, string endWord, vector<string>& wordList) {
        // start and end are indices of beginWord and endWord
        int n=wordList.size(),start=-1,end=-1;
        vector<vector<string>> ANS;
        for(int i=0;i<n;i++){
            if(wordList[i]==beginWord)
                start=i;
            if(wordList[i]==endWord)
                end=i;
        }
        
        // if endWord doesn't exist, return empty list
        if(end==-1)
            return ANS;
        
        // if beginWord doesn't exist, add it in start of WordList
        if(start==-1){
            wordList.emplace(wordList.begin(),beginWord);
            start=0;
            end++;
            n++;
        }
        // for each word, we're making adjency list of neighbour words (words that can be made with one letter change)
        // Paths will store all the shortest paths (formed later by backtracking)
        vector<vector<int>> g(n,vector<int>()),Paths;
        
        // storing possible parents for each word (to backtrack later), path is the current sequence (while backtracking)
        vector<int> parent[n],path;
        
        // creating adjency list for each pair of words in the wordList (including beginword)
        for(int i=0;i<n-1;i++)
            for(int j=i+1;j<n;j++)
                if(able(wordList[i],wordList[j])){
                    g[i].push_back(j);
                    g[j].push_back(i);
                }
        
        bfs(g,parent,n,start,end); 
        
        // backtracking to make shortestpaths
        shortestPaths(Paths,path,parent,end);
        for(auto u:Paths){
            vector <string> now;
            for(int i=0;i<u.size()-1;i++)
                now.push_back(wordList[u[i]]);
            reverse(now.begin(),now.end());
            now.push_back(wordList[end]);
            ANS.push_back(now);
        }
        return ANS;
    }
	}; 
	
**Please upvote to motivate me in my quest of documenting all leetcode solutions(to help the community).**

**HAPPY CODING:)**

*Any suggestions and improvements are always welcome*
	
	
	