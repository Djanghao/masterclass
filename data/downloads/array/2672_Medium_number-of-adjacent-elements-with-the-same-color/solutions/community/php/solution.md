# Left+right splits/merges

**Author:** dtheriault
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/3494913/](https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/3494913/)

---

```typescript []
const colorTheArray = (n: number, queries: number[][]): number[] => {
    let adjacent = 0
    const answer: number[] = new Array(queries.length).fill(0)
    const colors: number[] = new Array(n+2).fill(0)
    for (let i = 0; i < queries.length; i++) {
        const [j, c] = [queries[i][0] + 1, queries[i][1]]
        if (c !== colors[j]) {
            // add 1 if left/right is the same
            adjacent += (c == colors[j - 1] ? 1 : 0) + (c == colors[j + 1] ? 1 : 0)
            if (colors[j] !== 0) {            
              // remove 1 if left/right was the same
              adjacent -= (colors[j] == colors[j-1] ? 1 : 0) + (colors[j] == colors[j+1] ? 1 : 0)
            }
        }
        colors[j] = c
        answer[i] = adjacent
    }
    return answer
}
```
```golang []
func colorTheArray(n int, queries [][]int) []int {
    adjacent, answer, c := 0, make([]int, len(queries)), make([]int, n)
    for i, q := range queries {
        // only if color is changing
        if q[1] != c[q[0]] {
            // if left is same
            if q[0] > 0 && c[q[0] - 1] == q[1] {
                adjacent++
            }
            // if right is same
            if q[0] < n-1 && c[q[0] + 1] == q[1] {
                adjacent++
            }
            // if prev left was same
            if c[q[0]] != 0 && q[0] > 0 && c[q[0] - 1] == c[q[0]] {
                adjacent--
            }
            // if prev right was same
            if c[q[0]] != 0 && q[0] < n-1 && c[q[0] + 1] == c[q[0]] {
                adjacent--
            }
        }
        c[q[0]] = q[1]
        answer[i] = adjacent
    }
    return answer
}
```
```python3 []
class Solution:
    def colorTheArray(self, n: int, queries: List[List[int]]) -> List[int]:
        adjacent, answer, colors = 0, [0] * len(queries), [0] * (n+2)
        for i, (j, c) in enumerate(queries):
            j += 1
            if c != colors[j]:
                adjacent += (colors[j - 1] == c) + (colors[j + 1] == c)
                if colors[j] != 0:
                    adjacent -= (colors[j - 1] == colors[j]) + (colors[j + 1] == colors[j])
            colors[j], answer[i] = c, adjacent
        return answer
```
```php []
class Solution
{
    public function colorTheArray(int $n, array $queries): array
    {
        $adjacent = 0;
        $answer = array_fill(0, count($queries), 0);
        $colors = array_fill(0, $n + 2, 0);
        foreach ($queries as $i => $query) {
            list($j, $c) = $query;
            $j++;
            if ($c !== $colors[$j]) {
                $adjacent += $c === $colors[$j-1] ? 1 : 0;
                $adjacent += $c === $colors[$j+1] ? 1 : 0;
                $adjacent -= $colors[$j] !== 0 && $colors[$j] == $colors[$j-1] ? 1 : 0;
                $adjacent -= $colors[$j] !== 0 && $colors[$j] == $colors[$j+1] ? 1 : 0;
            }
            $colors[$j] = $c;
            $answer[$i] = $adjacent;
        }
        return $answer;
    }
}

```