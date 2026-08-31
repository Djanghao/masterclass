# PHP solution with Generator

**Author:** punkundead
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/3733335/](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/3733335/)

---

# Complexity
- Time complexity: $$O(n)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution
{

    /**
     * @param String $answerKey
     * @param Integer $k
     * @return Integer
     */
    function maxConsecutiveAnswers($answerKey, $k): int
    {
        $max = min(strlen($answerKey), $k * 2);
        foreach ($this->getLen($answerKey, $k, 'T') as $len) {
            $max = max($max, $len);
        }
        foreach ($this->getLen($answerKey, $k, 'F') as $len) {
            $max = max($max, $len);
        }
        return $max;
    }

    function getLen(string $answerKey, int $k, string $c): Generator
    {
        for ($i = 0, $j = -1; $i < strlen($answerKey); $i++) {
            if ($answerKey[$i] !== $c) $k--;
            if ($k === -1) {
                yield $i - $j - 1;
                do {
                    $j++;
                } while ($answerKey[$j] === $c);
                $k = 0;
            }
        }
        yield $i - $j - 1;
    }
}

```