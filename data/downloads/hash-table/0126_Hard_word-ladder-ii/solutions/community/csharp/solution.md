# Simple C# Solution (With Explanation)

**Author:** inderbindra
**Votes:** 1
**Link:** [https://leetcode.com/problems/word-ladder-ii/solutions/5167704/](https://leetcode.com/problems/word-ladder-ii/solutions/5167704/)

---

# Approach

This code aims to find all shortest transformation sequences from a given `beginWord` to `endWord` using a breadth-first search (BFS) approach with depth-first search (DFS) for backtracking. The algorithm constructs an adjacency list to represent word transitions, where each word is connected to its neighboring words with a single character change. 

1. **Initialization:**
   - Create a word set from the given `wordList` to facilitate efficient word lookups.
   - Initialize an empty `result` list to store all shortest transformation sequences.
   - Check if `endWord` is present in the `wordSet`. If not, return an empty result list.

2. **BFS:**
   - Create a queue to perform BFS traversal.
   - Start BFS with `beginWord`.
   - Explore all possible transformations of `beginWord` by changing one character at a time.
   - If a transformed word is in the `wordSet` and not visited before, enqueue it, update its visited status, and add it to the adjacency list.
   - Keep track of the distance (number of transformations) from `beginWord` using `visitedMap`.

3. **DFS (Backtracking):**
   - Once `endWord` is reached during BFS, perform DFS to backtrack and find all shortest transformation sequences.
   - Start DFS from `endWord` and recursively explore its predecessors in the adjacency list.
   - Add each word to the current sequence (`seq`) and backtrack when `beginWord` is reached.
   - Add each valid sequence to the `result` list.

4. **Return Result:**
   - After DFS completes, return the `result` list containing all shortest transformation sequences.

# Complexity

- **Time Complexity: O((n * L) + (p * m))**
    - To calculate the **time complexity** of this code, we need to analyze the different parts of the algorithm: the BFS traversal (to construct the adjacency list) and the DFS traversal (to generate all possible paths from `beginWord` to `endWord`).

    1. **BFS Traversal (Constructing Adjacency List)**
        - In this part of the code, a BFS is performed to explore all possible word transformations and construct the adjacency list `adjList`:

        - **Outer loop**: The BFS loop runs until the queue is empty. In the worst case, the queue processes all possible transformations of the words in `wordList`. This gives us a total of `(O(n))` iterations, where `(n)` is the number of words in `wordList`.
  
        - **Inner loop (character transformations)**: For each word in the queue, the algorithm tries to change each character (with 26 possibilities for each character). If the word is of length `(L)`, there are `(L * 26)` possible transformations. Checking if the transformed word is in `wordSet` and updating the `visitedMap` and `adjList` both take constant time. Thus, for each word, the time complexity for character transformations is `(O(L * 26) = O(L)`, as 26 is constant.

        - **Total time for BFS**: Each word is processed once, and for each word, we perform `O(L)` character transformations. Since there are `(n)` words, the BFS time complexity is: `O(n * L)`.

    2. **DFS Traversal (Generating All Paths)**
        - After BFS constructs the adjacency list, the algorithm performs DFS to generate all the possible shortest paths from `endWord` to `beginWord`:

        - **DFS Recursion**: The DFS explores all possible paths. In the worst case, there can be many paths if there are multiple shortest paths. The maximum number of paths is exponential in the size of the graph, but since the graph is constrained by the words and their transformations, the exact number of paths depends on the structure of the adjacency list.

        - **Total DFS Time Complexity**: In the worst case, DFS could explore all the possible paths between words. Suppose there are `(p)` possible paths and each path has a length of `(m)`. Generating each path has a time complexity of `(O(m)`, and with `(p)` paths, DFS would take `(O(p * m)` The number of paths can vary significantly, so this part can be exponential in the worst case, though it's hard to give an exact bound without more details.

    - **Total Time Complexity**:
        - **BFS**: `(O(n * L))`, where `(n)` is the number of words in `wordList`, and `(L)` is the length of the words.
        - **DFS**: The DFS can take up to `(O(p * m))`, where `(p)` is the number of shortest paths between `beginWord` and `endWord` and `(m)` is the length of each path.

    - Thus, the overall **time complexity** is `O(n * L) + O(p * m)`.
    - In the worst case, `(p)` could be exponential if there are many possible shortest paths.

- **Space Complexity : O(n * L)**
    - **WordSet**: `(O(n * L))`, where `(n)` is the number of words, and `(L)` is the length of each word.
    - **VisitedMap and Queue**: These also take `(O(n * L))` space for storing the words.
    - **Adjacency List**: In the worst case, the adjacency list can have up to `(O(n * L))` entries.
    - **DFS Stack**: The DFS uses a stack of depth `O(m)` to store the words in the current path.

    - Thus, the overall **space complexity** is `O(n * L)`.

# Code
```
public class Solution {
    Dictionary<string, HashSet<string>> adjList;
    IList<IList<string>> result;
    public IList<IList<string>> FindLadders(string beginWord, string endWord, IList<string> wordList) {
        HashSet<string> wordSet = new(wordList);
        result = new List<IList<string>>();
        if(!wordSet.Contains(endWord))
        {
            return result;
        }
        
        adjList= new();
        Dictionary<string, int> visitedMap = new();
        Queue<string> queue = new();
        queue.Enqueue(beginWord);
        visitedMap.Add(beginWord, 0);
        int queueLength = 0;
        string step = string.Empty;
        string patternStr = string.Empty;
        StringBuilder pattern = new StringBuilder();
        char c;
        int ladderLevel = 0;
        while(queue.Count > 0)
        {
            queueLength = queue.Count;
            ladderLevel++;
            for(int i=0; i<queueLength; i++)
            {
                step = queue.Dequeue();
                if(step == endWord)
                {
                    DFS(step, beginWord, new Stack<string>());
                    break;
                }
                for(int j=0; j<step.Length; j++)
                {
                    pattern.Append(step);
                    for(int k=0; k<26; k++)
                    {
                        c = pattern[j];
                        pattern[j] = (char)(97 + k);
                        patternStr = pattern.ToString();
                        if(patternStr == step)
                        {
                            continue;
                        }
                        //Console.WriteLine("PatternStr = " + patternStr);
                        if(wordSet.Contains(patternStr) && !visitedMap.ContainsKey(patternStr))
                        {
                            queue.Enqueue(patternStr);
                            adjList.TryAdd(patternStr, new HashSet<string>());
                            adjList[patternStr].Add(step);
                           // Console.WriteLine("1. PatternStr = " + patternStr + " step = " + step);
                            visitedMap.Add(patternStr, 1 + visitedMap[step]);
                        }
                        // This case is for adding multiple paths like cog -> log & cog -> dog
                        // so this condition will make sure to add cog in adjList key and dog & log in the HastSet.
                        // Suppose word = dog and it will nWord = cog in visitedMap, then when the loop iterates 
                        // for word = log then it will not add the adjList, that's why this case is added, so it adds it.
                        else if(visitedMap.ContainsKey(patternStr) && visitedMap[patternStr] == 1 + visitedMap[step])
                        {
                            adjList.TryAdd(patternStr, new HashSet<string>());
                            adjList[patternStr].Add(step);
                            //Console.WriteLine("2. PatternStr = " + patternStr + " step = " + step);
                        }
                        pattern[j] = c;
                    }
                    pattern.Clear();
                }
            }
            if(step == endWord)
            {
                break;
            }
        }
        return result;
    }
    private void DFS(string word, string beginWord, Stack<string> seq)
    {
        if(word == beginWord)
        {
            seq.Push(word);
            result.Add(seq.ToList());
            seq.Pop();
            return;
        }
        if(adjList.ContainsKey(word))
        {
            IList<string> list = adjList[word].ToList();
            for(int i=0; i<list.Count; i++)
            {
                seq.Push(word);
                DFS(list[i], beginWord, seq);
                seq.Pop();
            }
        }
    }
}
```