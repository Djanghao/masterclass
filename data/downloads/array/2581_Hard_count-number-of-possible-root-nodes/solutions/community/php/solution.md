# C++ & Java & PHP

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-possible-root-nodes/solutions/3257590/](https://leetcode.com/problems/count-number-of-possible-root-nodes/solutions/3257590/)

---

# C++
```
#include <iostream>
#include <vector>
#include <map>
using namespace std;
class Solution {
public:
    map<pair<int,int>,int> visited;
    map<pair<int,int>,int> g;
    int dp(vector<vector<int>>& adj, int node, int par) {
        if (visited.count(make_pair(par, node))) {
            return visited[make_pair(par, node)];}
        int guess = g.count(make_pair(par, node));
        for (int i = 0; i < adj[node].size(); i++) {
            if (adj[node][i] != par) {
                guess += dp(adj, adj[node][i], node);}}
        return visited[make_pair(par, node)] = guess;}
    int rootCount(vector<vector<int>>& edges, vector<vector<int>>& guesses, int k) {
        int n = edges.size();
        for (int i = 0; i < guesses.size(); i++) {
            g[make_pair(guesses[i][0], guesses[i][1])] = 1;}
        vector<vector<int>> adj(n + 1);
        for (int i = 0; i < n; i++) {
            adj[edges[i][0]].push_back(edges[i][1]);
            adj[edges[i][1]].push_back(edges[i][0]);}
        int count = 0;
        for (int i = 0; i < n + 1; i++) {
            int guess = dp(adj, i, -1);
            if (guess >= k) {
                count++;}}
        return count;}};
```
# Java
```
class Solution {
    int res = 0;
    public int rootCount(int[][] edges, int[][] guesses, int k) {
        List<Integer>[] graph = makeGraph(edges);
        Set<String> allGuess = new HashSet<>();
        Set<String> ansGuess = new HashSet<>();
        for(int[] guess : guesses){
            allGuess.add(guess[0]+"-"+guess[1]);}
        int total = DFS1(0, -1, allGuess, ansGuess, graph);
        DFS2(0, -1, total, k, ansGuess, allGuess, graph);
        return total >= k ? res + 1 : res;}
    private void DFS2(int node, int parent, int total, int k, Set<String> ansGuess, Set<String> allGuess, List<Integer>[] graph){
        int curr = total;
        for(int child : graph[node]){
            if(child == parent) continue;
            if(ansGuess.contains(node+"-"+child)){
                curr -= 1;}
            if(allGuess.contains(child+"-"+node)){
                curr += 1;}
            if(curr >= k) res += 1;
            DFS2(child, node, curr, k, ansGuess, allGuess, graph);
            curr = total;}}
    private int DFS1(int node, int parent, Set<String> allGuess, Set<String> ansGuess, List<Integer>[] graph){
        int count = 0;
        for(int child : graph[node]){
            if(child == parent) continue;
            count += DFS1(child, node, allGuess, ansGuess, graph);}
        if(allGuess.contains(parent+"-"+node)){
            ansGuess.add(parent+"-"+node);
            count += 1;}
        return count;}
    private List<Integer>[] makeGraph(int[][] edges){
        List<Integer>[] graph = new ArrayList[edges.length + 1];
        for(int i=0 ; i<=edges.length ; ++i){
            graph[i] = new ArrayList<>();}
        for(int[] edge : edges){
            graph[edge[0]].add(edge[1]);
            graph[edge[1]].add(edge[0]);}
        return graph;}}
```
# PHP
```
<?php
class Solution {
    public $visited;
    public $g;
    public function __construct() {
        $this->visited = array();
        $this->g = array();
    }
    public function dp(&$adj, $node, $par) {
        if (isset($this->visited[$par][$node])) {
            return $this->visited[$par][$node];
        }
        $guess = isset($this->g[$par][$node]) ? $this->g[$par][$node] : 0;
        foreach ($adj[$node] as $i => $child) {
            if ($child != $par) {
                $guess += $this->dp($adj, $child, $node);
            }
        }
        return $this->visited[$par][$node] = $guess;
    }
    public function rootCount(&$edges, &$guesses, $k) {
        $n = count($edges);
        foreach ($guesses as $guess) {
            $this->g[$guess[0]][$guess[1]] = 1;
        }
        $adj = array();
        for ($i = 0; $i < $n; $i++) {
            $adj[$edges[$i][0]][] = $edges[$i][1];
            $adj[$edges[$i][1]][] = $edges[$i][0];
        }
        $count = 0;
        for ($i = 0; $i < $n + 1; $i++) {
            $guess = $this->dp($adj, $i, -1);
            if ($guess >= $k) {
                $count++;
            }
        }
        return $count;
    }
}
?>
```