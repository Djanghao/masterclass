# PHP Solution

**Author:** sshchetkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-palindrome/solutions/2567161/](https://leetcode.com/problems/prime-palindrome/solutions/2567161/)

---

```
class Solution
{
    /**
     * @param int $n
     * @return int
     */
    function primePalindrome(int $n): int {
        while (true) {
            if ($n > 11 && strlen((string)$n) % 2 === 0) {
                $n = pow(10, ceil(log10($n + 1)));
                continue;
            }

            if ($this->isPalindrome($n) && $this->isPrime($n)) {
                break;
            }

            $n++;
        }

        return $n;
    }

    /**
     * @param int $n
     * @return bool
     */
    private function isPalindrome(int $n): bool
    {
        return (int)strrev((string)$n) === $n;
    }

    /**
     * @param int $n
     * @return bool
     */
    private function isPrime(int $n): bool {
        if ($n <= 3) {
            if ($n <= 1) {
                return false;
            }

            return true;
        }

        if ($n % 2 === 0 || $n % 3 === 0) {
            return false;
        }

        for ($i = 3;  pow($i, 2) <= $n; $i += 2) {
            if ($n % $i === 0) {
                return false;
            }
        }

        return true;
    }
}
```