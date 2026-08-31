# BFS (with explanation)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-genetic-mutation/solutions/5413294/](https://leetcode.com/problems/minimum-genetic-mutation/solutions/5413294/)

---

# Approach
This solution uses a breadth-first search (BFS) algorithm.

- The solution uses a queue to keep track of the genes to visit next. 
- It starts with the startGene and keeps track of the number of steps taken to reach each gene. 
- It expands the search by applying mutations to each gene in the queue and adding the new genes to the queue if they are not visited before. 
- The search continues until the endGene is found or all possible genes have been explored.

# Complexity
- Time complexity:
$$O(N*L*4)$$, where N is the length of the input genes and L is the number of genes in the bank list. This is because for each position in the gene, there are 4 possible mutations (one for each nucleotide), and for each mutation, we need to check if the new gene is in the bank list and not visited.

- Space complexity:
$$O(N)$$, where N is the length of the input genes. This is because we are using a set to keep track of visited genes, which can have a maximum size of N. Additionally, we are using a queue to perform BFS, which can have a maximum size of N as well.

# Code
``` python3 []
class Solution:
    def minMutation(self, startGene: str, endGene: str, bank: List[str]) -> int:
        if endGene not in bank:
            return -1

        # Create a set of the bank for faster lookups
        bank_set = set(bank)
        # Create a set to keep track of visited genes
        visited = set([startGene])
        # Create a set of all possible nucleotides
        gene_set = set(["A","C","G","T"])
        # Create a queue for BFS
        queue = deque([(startGene, 0)])

        while queue:
            gene, count = queue.popleft()

            # For each position in the gene, try all possible mutations
            for i, nucleotide in enumerate(gene):
                for new_nucleotide in gene_set:
                    # Create the new gene by applying the mutation
                    new_gene = gene[:i] + new_nucleotide + gene[i+1:]
                    
                    # If the new gene is in the bank and not visited, add it to the queue
                    if new_gene in bank_set and new_gene not in visited:
                        queue.append((new_gene, count + 1))
                        
                        # If the new gene is the endGene, return the number of steps
                        if new_gene == endGene:
                            return count + 1
                        # Mark the new gene as visited
                        visited.add(new_gene)

        # If no path is found, return -1
        return -1
```
``` javascript []
/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    if (!bank.includes(endGene)) {
        return -1;
    }

    // Create a set of the bank for faster lookups
    let bankSet = new Set(bank);
    // Create a set to keep track of visited genes
    let visited = new Set([startGene]);
    // Create a set of all possible nucleotides
    let geneSet = new Set(["A","C","G","T"]);
    // Create a queue for BFS
    let queue = [[startGene, 0]];

    while (queue.length > 0) {
        let [gene, count] = queue.shift();

        // For each position in the gene, try all possible mutations
        for (let i = 0; i < gene.length; i++) {
            for (let newNucleotide of geneSet) {
                let newGene = gene.substring(0, i) + newNucleotide + gene.substring(i + 1);

                // If the new gene is in the bank and not visited, add it to the queue
                if (bankSet.has(newGene) && !visited.has(newGene)) {
                    queue.push([newGene, count + 1]);

                    // If the new gene is the end gene, return the number of steps
                    if (newGene === endGene) {
                        return count + 1;
                    }
                    // Mark the new gene as visited
                    visited.add(newGene);
                }
            }
        }
    }

    // If no path is found, return -1
    return -1;
};
```
``` php []
class Solution {

    /**
     * @param String $startGene
     * @param String $endGene
     * @param String[] $bank
     * @return Integer
     */
    function minMutation($startGene, $endGene, $bank) {
        if (!in_array($endGene, $bank)) {
            return -1;
        }

        $bank_set = array_flip($bank);
        $visited = [$startGene];
        $gene_set = ['A', 'C', 'G', 'T'];
        $queue = [['gene' => $startGene, 'count' => 0]];

        while (!empty($queue)) {
            $item = array_shift($queue);
            $gene = $item['gene'];
            $count = $item['count'];

            // For each position in the gene, try all possible mutations
            for ($i = 0; $i < strlen($gene); $i++) {
                foreach ($gene_set as $new_nucleotide) {
                    // Create the new gene by applying the mutation
                    $new_gene = substr_replace($gene, $new_nucleotide, $i, 1);

                    // If the new gene is in the bank and not visited, add it to the queue
                    if (isset($bank_set[$new_gene]) && !in_array($new_gene, $visited)) {
                        $queue[] = ['gene' => $new_gene, 'count' => $count + 1];

                        // If the new gene is the endGene, return the number of steps
                        if ($new_gene == $endGene) {
                            return $count + 1;
                        }
                        // Mark the new gene as visited
                        $visited[] = $new_gene;
                    }
                }
            }
        }

        // If no path is found, return -1
        return -1;
    }
}
```