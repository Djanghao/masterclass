# Backtracking Solution to Partition an Array into k Equal Sum Subsets

**Author:** lucas9360
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/5927201/](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/5927201/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The main idea is to divide the nums array into k subsets where each subset has the same sum. The total sum of the array must be divisible by k, which gives us the target sum for each subset. This problem boils down to a backtracking problem, where we try to progressively build valid subsets and check if it's possible to partition all numbers into these valid subsets.
# Approach
<!-- Describe your approach to solving the problem. -->
Initial divisibility check: We first check if the total sum of the array nums is divisible by k. If it is not, we immediately return false, as it's impossible to partition the array into subsets with equal sums.

Sorting in descending order: We sort the nums array in descending order. This helps to optimize the backtracking process because starting with the largest numbers first minimizes unnecessary explorations.

Backtracking:

We use a backtracking approach to try to add numbers to subsets. For each number, we check if it can be added to the current subset without exceeding the target sum.
If the current subset reaches the target sum, we start building the next subset. We repeat this process until all k subsets are formed.
If we can't form a valid subset, we backtrack and try a different combination.
Optimizations:

If the sum of a subset is 0 at the start and we fail to form a valid subset, we can stop trying with other smaller numbers, as they will also fail.
Tracking visited elements: We use a visited array to keep track of which numbers have already been used in subsets, ensuring that no number is reused.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is approximately \uD835\uDC42(\uD835\uDC58\uD835\uDC5B)O(kn), where n is the length of the nums array and k is the number of subsets. This happens because, in the worst case, we attempt to place each number into each subset.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is \uD835\uDC42(\uD835\uDC5B)O(n), where n is the length of the nums array, mainly for storing the visited array that tracks which numbers have been used.
# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Boolean
     */

   
    private function backtrack($index, $k, $currentSum, $target, &$nums, &$visited) {
        // Se todos os subconjuntos foram formados
        if ($k == 0) {
            return true;
        }
        
        // Se a soma atual atingir o valor-alvo, come\xE7amos um novo subconjunto
        if ($currentSum == $target) {
            return $this->backtrack(0, $k - 1, 0, $target, $nums, $visited);
        }

        // Tentar adicionar n\xFAmeros ao subconjunto atual
        for ($i = $index; $i < count($nums); $i++) {
            // Se j\xE1 foi visitado ou ultrapassa o limite do alvo, ignore
            if ($visited[$i] || $currentSum + $nums[$i] > $target) {
                continue;
            }
            
            // Marcar o n\xFAmero como usado
            $visited[$i] = true;
            
            // Chamada recursiva para tentar formar o subconjunto
            if ($this->backtrack($i + 1, $k, $currentSum + $nums[$i], $target, $nums, $visited)) {
                return true;
            }

            // Desfazer a escolha (backtracking)
            $visited[$i] = false;
            
            // Otimiza\xE7\xE3o: se a soma atual \xE9 0 e falhou, n\xE3o faz sentido continuar tentando com outros n\xFAmeros
            if ($currentSum == 0) {
                break;
            }
        }
        
        return false;
    }

    function canPartitionKSubsets($nums, $k) {
        $totalSum = array_sum($nums);
        
        // Verificar se a soma total \xE9 divis\xEDvel por k
        if ($totalSum % $k != 0) {
            return false;
        }
        
        $target = $totalSum / $k;  // Soma-alvo de cada subconjunto
        
        // Ordenar os n\xFAmeros em ordem decrescente para otimizar a busca
        rsort($nums);
        
        // Verificar se o maior n\xFAmero j\xE1 \xE9 maior que a soma-alvo
        if ($nums[0] > $target) {
            return false;
        }
        
        $visited = array_fill(0, count($nums), false);  // Array de controle de visitados
        
        // Iniciar o processo de backtracking
        return $this->backtrack(0, $k, 0, $target, $nums, $visited);
    }
}
```