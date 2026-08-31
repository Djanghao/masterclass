# Simple DFS

**Author:** sumeetk83
**Votes:** 0
**Link:** [https://leetcode.com/problems/accounts-merge/solutions/5690544/](https://leetcode.com/problems/accounts-merge/solutions/5690544/)

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
```php []
class Solution {
    public function accountsMerge($accounts) {
        $emailToName = [];
        $graph = [];

        // Step 1: Build the graph
        foreach ($accounts as $account) {
            $name = $account[0];
            $firstEmail = $account[1];

            for ($i = 1; $i < count($account); $i++) {
                $email = $account[$i];
                if (!isset($graph[$firstEmail])) {
                    $graph[$firstEmail] = [];
                }
                if (!isset($graph[$email])) {
                    $graph[$email] = [];
                }
                $graph[$firstEmail][] = $email;
                $graph[$email][] = $firstEmail;
                $emailToName[$email] = $name;
            }
        }

        // Step 2: Find all connected components using DFS
        $visited = [];
        $result = [];

        foreach ($graph as $email => $neighbors) {
            if (!isset($visited[$email])) {
                $component = [];
                $this->dfs($email, $graph, $visited, $component);
                sort($component);
                array_unshift($component, $emailToName[$email]);
                $result[] = $component;
            }
        }

        return $result;
    }

    private function dfs($email, &$graph, &$visited, &$component) {
        $visited[$email] = true;
        $component[] = $email;

        foreach ($graph[$email] as $neighbor) {
            if (!isset($visited[$neighbor])) {
                $this->dfs($neighbor, $graph, $visited, $component);
            }
        }
    }
}

// Example usage:
// $solution = new Solution();
// $accounts = [
//     ["John", "johnsmith@mail.com", "john00@mail.com"],
//     ["John", "johnnybravo@mail.com"],
//     ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
//     ["Mary", "mary@mail.com"]
// ];
// $result = $solution->accountsMerge($accounts);
// print_r($result);

```