# PHP (DFS + memo)

**Author:** sumeetk83
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/solutions/5638791/](https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/solutions/5638791/)

---

Inspired from the following: [rexue70](https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/solutions/1550342/java-clean-dfs-memo)


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution
{
    private $s1;
    private $s2;
    private $memo = [];

    public function possiblyEquals($s1, $s2)
    {
        $this->s1 = $s1;
        $this->s2 = $s2;
        return $this->dfs(0, 0, 0); // s1 pointer, s2 pointer, digit difference
    }

    private function dfs($i, $j, $diff)
    {
        // Base case: if we have reached the end of both strings and the difference is zero
        if ($i >= strlen($this->s1) && $j >= strlen($this->s2) && $diff == 0) {
            return true;
        }

        // Check memoization table
        if (isset($this->memo[$i][$j][$diff + 1000])) {
            return $this->memo[$i][$j][$diff + 1000];
        }

        $res = false;

        // Process s1 if i is within bounds
        if ($i < strlen($this->s1)) {
            if (is_numeric($this->s1[$i])) {
                $count = 0;
                $value = 0;
                while ($i + $count < strlen($this->s1) && $count < 3 && is_numeric($this->s1[$i + $count])) {
                    $value = $value * 10 + ((int)$this->s1[$i + $count] - 0);
                    $count++;
                    if ($this->dfs($i + $count, $j, $diff - $value)) {
                        $res = true;
                    }
                }
            } else {
                if ($diff > 0) {
                    if ($this->dfs($i + 1, $j, $diff - 1)) {
                        $res = true;
                    }
                } elseif ($diff == 0 && $j < strlen($this->s2) && $this->s1[$i] == $this->s2[$j]) {
                    if ($this->dfs($i + 1, $j + 1, $diff)) {
                        $res = true;
                    }
                }
            }
        }

        // Process s2 if j is within bounds
        if ($j < strlen($this->s2)) {
            if (is_numeric($this->s2[$j])) {
                $count = 0;
                $value = 0;
                while ($j + $count < strlen($this->s2) && $count < 3 && is_numeric($this->s2[$j + $count])) {
                    $value = $value * 10 + ((int)$this->s2[$j + $count] - 0);
                    $count++;
                    if ($this->dfs($i, $j + $count, $diff + $value)) {
                        $res = true;
                    }
                }
            } elseif ($diff < 0) {
                if ($this->dfs($i, $j + 1, $diff + 1)) {
                    $res = true;
                }
            }
        }

        // Store result in memoization table
        return $this->memo[$i][$j][$diff + 1000] = $res;
    }
}

```