# C# DFS With Memoization solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/loud-and-rich/solutions/5378454/](https://leetcode.com/problems/loud-and-rich/solutions/5378454/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->Graph Representation: We'll represent the relationship using an adjacency list where an edge from a to b means a is richer than b.
Memoization: To avoid recalculating the results for the same person, we can use memoization to store the results of the DFS.
DFS Calculation: During the DFS traversal, for each person, we'll explore all the people richer than them and determine the quietest person among them.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Graph Construction: We initialize an adjacency list for the graph and populate it based on the 'richer' relationships.
//  Answer Array Initialization: We initialize the 'answer' array with '-1', which signifies that we haven't calculated
//  the quietest person for that individual yet.
//  DFS Traversal: For each person, we perform a DFS to find the quietest person who is as rich or richer than them. If 
//  we encounter a person for whom we\u2019ve already calculated the answer, we return the stored result to avoid redundant 
//  calculations.
//  Memoization: The answer array is used to store the result for each person to avoid recalculating it.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(V + E).
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(V + E). here, V represents the number of people, and E represents the number of richer relationships.
___

# Code
```
using System;
using System.Collections.Generic;

public class Solution {
    public int[] LoudAndRich(int[][] richer, int[] quiet) {
        int n = quiet.Length;
        List<int>[] graph = new List<int>[n];
        for (int i = 0; i < n; i++) {
            graph[i] = new List<int>();
        }
        
        foreach (var pair in richer) {
            graph[pair[1]].Add(pair[0]);
        }
        
        int[] answer = new int[n];
        Array.Fill(answer, -1);
        
        for (int i = 0; i < n; i++) {
            DFS(i, graph, quiet, answer);
        }
        
        return answer;
    }
    
    private int DFS(int person, List<int>[] graph, int[] quiet, int[] answer) {
        if (answer[person] != -1) {
            return answer[person];
        }
        
        int minQuietPerson = person;
        foreach (var richerPerson in graph[person]) {
            int candidate = DFS(richerPerson, graph, quiet, answer);
            if (quiet[candidate] < quiet[minQuietPerson]) {
                minQuietPerson = candidate;
            }
        }
        
        answer[person] = minQuietPerson;
        return minQuietPerson;
    }
}
```