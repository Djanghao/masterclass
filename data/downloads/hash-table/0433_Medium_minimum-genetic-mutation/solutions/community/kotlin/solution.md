# KOTLIN and JAVA solution using BFS/Queue

**Author:** anlk
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-genetic-mutation/solutions/6045810/](https://leetcode.com/problems/minimum-genetic-mutation/solutions/6045810/)

---

\u2618\uFE0F\u2618\uFE0F\u2618\uFE0F If this solution was helpful, please consider upvoting! \u2705

# Intuition
This problem can be modeled as finding the shortest path in an unweighted graph:

- Each gene string represents a node.
- An edge exists between two nodes if their strings differ by exactly one character (one mutation).
- The goal is to find the shortest path from the startGene to the endGene using only valid gene strings from the bank.

Since the graph is unweighted, Breadth-First Search (BFS) is the most suitable approach.

# Approach
- Validation:
    - If the endGene is not in the bank, return -1 immediately, as there's no valid path.
- BFS Initialization:
    - Start the BFS with the startGene.
    - Use a queue to track the current gene and the number of mutations so far.
    - Use a visited set to avoid processing the same gene multiple times.
- BFS Traversal:
    - For each gene in the queue, generate all possible mutations by changing each character to one of 'A', 'C', 'G', or 'T'.
    - Check if the mutated gene is in the bank and has not been visited.
    - If the mutated gene is the endGene, return the current number of mutations + 1.
    - Otherwise, add it to the queue and mark it as visited.
- If the queue is empty and the endGene has not been reached, return -1.

# Complexity
- Time complexity: $$O(n.m.m)$$
    - N is the number of genes in the bank.
    - M is the length of each gene (always 8 in this problem).
    - For each gene, we check up to M\xD73 possible mutations.
- Space Complexity: $$O(n+m)$$ for the queue, visited set, and bank.


# Code
```Kotlin []
class Solution {
    fun minMutation(startGene: String, endGene: String, bank: Array<String>): Int {
        val geneBank = bank.toSet()
        if (endGene !in geneBank) return -1

        val genes = charArrayOf('A', 'C', 'G', 'T')
        val queue: Queue<String> = LinkedList()
        val visited = mutableSetOf<String>()
        queue.add(startGene)
        visited.add(startGene)
        var mutations = 0
        while (queue.isNotEmpty()) {
            repeat(queue.size) {
                val current = queue.poll()
                if (current == endGene) return mutations
                val currentArray = current.toCharArray()
                for (i in currentArray.indices) {
                    val originalChar = currentArray[i]
                    for (gene in genes) {
                        if (gene == originalChar) continue
                        currentArray[i] = gene
                        val mutatedGene = String(currentArray)
                        if (mutatedGene in geneBank && mutatedGene !in visited) {
                            queue.add(mutatedGene)
                            visited.add(mutatedGene)
                        }
                    }
                    currentArray[i] = originalChar // revert change
                }
            }
            mutations++
        }
        return -1
    }
}
```


```Java []
class Solution {
    public int minMutation(String startGene, String endGene, String[] bank) {
        Set<String> geneBank = new HashSet<>(Arrays.asList(bank));
        if (!geneBank.contains(endGene)) {
            return -1;
        }

        char[] genes = {'A', 'C', 'G', 'T'};
        Queue<String> queue = new LinkedList<>();
        Set<String> visited = new HashSet<>();
        queue.add(startGene);
        visited.add(startGene);
        int mutations = 0;
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                String current = queue.poll();
                if (current.equals(endGene)) {
                    return mutations;
                }
                char[] currentArray = current.toCharArray();
                for (int j = 0; j < currentArray.length; j++) {
                    char originalChar = currentArray[j];
                    for (char gene : genes) {
                        if (gene == originalChar) continue;
                        currentArray[j] = gene;
                        String mutatedGene = new String(currentArray);
                        if (geneBank.contains(mutatedGene) && !visited.contains(mutatedGene)) {
                            queue.add(mutatedGene);
                            visited.add(mutatedGene);
                        }
                    }
                    currentArray[j] = originalChar; // revert change
                }
            }
            mutations++;
        }
        return -1; 
    }
}
```