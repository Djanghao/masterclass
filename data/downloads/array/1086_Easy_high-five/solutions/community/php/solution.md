# PHP | Hashmap + Built-in functions ('High Five')

**Author:** alexander_d
**Votes:** 2
**Link:** [https://leetcode.com/problems/high-five/solutions/869694/](https://leetcode.com/problems/high-five/solutions/869694/)

---

```
class Solution
{
    /**
     * @param Integer[][] $items
     *
     * @return Integer[][]
     */
    public function highFive(array $items): array
    {
        $result = [];

        $studentScores = [];
        foreach ($items as $studentScore) {
            $studentScores[$studentScore[0]][] = $studentScore[1];
        }
        ksort($studentScores);
        foreach ($studentScores as $student => $studentScore) {
            rsort($studentScore);
            $result[] = [
                $student,
                (int) (array_sum(array_slice($studentScore, 0, 5)) / 5),
            ];
        }

        return $result;
    }
}
```