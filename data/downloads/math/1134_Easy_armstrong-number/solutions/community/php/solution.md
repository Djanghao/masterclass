# PHP | String ('Armstrong Number')

**Author:** alexander_d
**Votes:** 0
**Link:** [https://leetcode.com/problems/armstrong-number/solutions/877645/](https://leetcode.com/problems/armstrong-number/solutions/877645/)

---

```
class Solution
{
    /**
     * @param Integer $N
     *
     * @return Boolean
     */
    public function isArmstrong(int $N): bool
    {
        $stringN = (string) $N;
        $lengthN = strlen($stringN);
        $powerSum = 0;
        for ($i = 0; $i < $lengthN; $i++) {
            $powerSum += ((int) $stringN[$i]) ** $lengthN;
        }
        
        return ($powerSum === $N);
    }
}
```