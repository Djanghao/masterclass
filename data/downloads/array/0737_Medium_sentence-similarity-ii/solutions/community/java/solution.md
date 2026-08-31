# [JAVA] Inverted index solution [accepted]

**Author:** mccarl
**Votes:** 3
**Link:** [https://leetcode.com/problems/sentence-similarity-ii/solutions/4320957/](https://leetcode.com/problems/sentence-similarity-ii/solutions/4320957/)

---

# Intuition
In casem when we must find any synonyms one of the way to solve the problem is Inverted index - it's a base algorythm in Search and in Solr.

# Approach
DFS for going throw graph, wich builded for inverted index
In the worst case, every string might be connected to every other string, making it a complete graph. The DFS for a complete graph is ```O(V+E)``` where V is the number of vertices (unique strings) and E is the number of edges (pairs). In this case, E is approximately ```V^2/2``` in a complete graph.

# Complexity
- Time complexity: O(N) 

<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public static boolean areSentencesSimilarTwo(String[] sentence1, String[] sentence2, List<List<String>> similarPairs) {
        if (sentence1.length != sentence2.length){
            return false;
        }
        Map<String, Set<String>> index = buildInvertedIndex(similarPairs);
        
        for (int i = 0; i < sentence1.length; i++) {
            if (sentence1[i].equals(sentence2[i])){
                continue;
            }
            if (!index.containsKey(sentence1[i]) || !index.get(sentence1[i]).contains(sentence2[i])) {
                return false;
            }
        }
        return true;
    }
    private static Map<String, Set<String>> buildInvertedIndex(List<List<String>> listOfPairs) {
        // Create a graph
        Map<String, Set<String>> graph = new HashMap<>();
        for (List<String> pair : listOfPairs) {
            String first = pair.get(0);
            String second = pair.get(1);

            graph.computeIfAbsent(first, k -> new HashSet<>()).add(second);
            graph.computeIfAbsent(second, k -> new HashSet<>()).add(first);
        }

        // Build the inverted index
        Map<String, Set<String>> index = new HashMap<>();
        Set<String> visited = new HashSet<>();
        for (String node : graph.keySet()) {
            if (!visited.contains(node)) {
                Set<String> component = new HashSet<>();
                explore(graph, node, visited, component);
                for (String str : component) {
                    index.put(str, component);
                }
            }
        }

        return index;
    }

    private static void explore(Map<String, Set<String>> graph, String node, Set<String> visited, Set<String> component) {
        visited.add(node);
        component.add(node);
        for (String neighbor : graph.get(node)) {
            if (!visited.contains(neighbor)) {
                explore(graph, neighbor, visited, component);
            }
        }
    }
}
```