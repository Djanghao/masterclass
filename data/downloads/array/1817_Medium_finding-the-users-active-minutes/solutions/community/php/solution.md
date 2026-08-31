# Time complexity: O(n+k)

**Author:** leokiin2017
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-the-users-active-minutes/solutions/4894698/](https://leetcode.com/problems/finding-the-users-active-minutes/solutions/4894698/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n+k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n+k)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[][] $logs
     * @param Integer $k
     * @return Integer[]
     */
    function findingUsersActiveMinutes($logs, $k) {
        $result = [];
        foreach (range(1, $k) as $v) {
            $result[$v] = 0;
        }
        $logs = $this->arrayUnique($logs);

        $resultUsers = [];
        foreach ($logs as $key => $value) {
            $result[count($value)]++;
        }

        return $result;
    }

    public function arrayUnique($logs)
    {
        $result = [];

        foreach ($logs as $v) {
            $result[$v[0]][$v[1]] = $v[1];
        }

        return $result;
    }
}

```