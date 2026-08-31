# BFS Solution Dart (W/ Explanation)

**Author:** AndreLock
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-provinces/solutions/3594774/](https://leetcode.com/problems/number-of-provinces/solutions/3594774/)

---

# Approach
//Given a list of lists showing a nodes undirected connections
//return how many seperate groups of nodes there are.

//Ex Input: [1,1,0], [1,1,0] [0,0,1]
//The above input is three nodes the first two are
//connected to each other and the final node is not connected
//to any nodes.

//To solve this I first converted the input list to an adjacency list
//to simplify the process of doing bfs. Then from there I iterated through the list
//and for each unvisited node I found added one to the total number of groups and then ran
//BFS on it adding all connected nodes to visited.

//Time: 299ms Beats: 71.43%
//Memory: 150.7MB Beats: 28.57%


# Code
```
class Solution {
  int findCircleNum(List<List<int>> isConnected) {
      Map<int, List<int>> adj_list = {};
      for(int i = 0 ; i < isConnected.length ; ++i){
              List<int> current_adj = [];
          for(int x = 0 ; x < isConnected[i].length ; ++x){
              if(isConnected[i][x] == 1){
                current_adj.add(x);
              }
          }
          adj_list[i] = current_adj;
      }
      Set<int> explored = {};
      int provinces = 0;
      for(var vert in adj_list.entries){
        if(explored.contains(vert.key)){
          continue;
        }
        provinces += 1;
        searchConnected(explored, adj_list, vert.key);
      }
      return provinces;
  }
  void searchConnected(Set<int> searched, Map<int, List<int>> adj_list, int current){
    if(searched.contains(current)){
      return;
    }
    searched.add(current);
    List<int> current_list = (adj_list[current] ?? []);
    for(int vertex in current_list){
      searchConnected(searched, adj_list, vertex);
    }
  }
}
```