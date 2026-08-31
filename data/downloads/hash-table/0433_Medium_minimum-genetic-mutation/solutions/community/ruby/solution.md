# Ruby BFS

**Author:** davich
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-genetic-mutation/solutions/4705404/](https://leetcode.com/problems/minimum-genetic-mutation/solutions/4705404/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String} start_gene
# @param {String} end_gene
# @param {String[]} bank
# @return {Integer}
def min_mutation(start_gene, end_gene, bank)
    bank = bank.to_set
    working_set = [start_gene]
    visited = Set.new()
    count = 0
    while working_set.any? && !working_set.include?(end_gene)
        visited.merge(working_set)
        working_set = next_set(working_set, bank, visited)
        count += 1
    end
    working_set.any? ? count : -1
end

def next_set(current, bank, visited)
    current.flat_map { |gene| valid_mutations(gene, bank, visited) }
end

def valid_mutations(gene, bank, visited)
    bank
    .reject { |bgene| visited.include?(bgene) }
    .select do |bgene|
        bgene.chars.zip(gene.chars).count { |a, b| a != b } == 1
    end
end
```