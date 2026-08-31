# Easy O(n^2) solution in PHP and Golang

**Author:** Aksafan
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-missing-and-repeated-values/solutions/4415177/](https://leetcode.com/problems/find-missing-and-repeated-values/solutions/4415177/)

---

# Approach
1. Build a vector.
2. Calculate all numbers frequency.
3. Check for `0` and `>1` frequencies.

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
PHP
```php
class Solution
{
    /**
     * @param int[][] $grid
     * @return int[]
     */
    function findMissingAndRepeatedValues(array $grid): array
    {
        $n = count($grid);
        $vector = array_fill_keys(range(1, $n ** 2), 0);

        foreach ($grid as $item) {
            foreach ($item as $num) {
                $vector[$num] += 1;
            }
        }

        [$a, $b] = [0, 0];
        foreach ($vector as $num => $frequency) {
            if ($frequency > 1) {
                $a = $num;
            }
            if ($frequency === 0) {
                $b = $num;
            }
            if ($a && $b) {
                break;
            }
        }

        return [$a, $b];
    }
}
```

Golang
```go
func findMissingAndRepeatedValues(grid [][]int) []int {
	n := len(grid)
	vector := make(map[int]int)

	for i := 1; i <= n*n; i++ {
		vector[i] = 0
	}

	for _, item := range grid {
		for _, num := range item {
			vector[num]++
		}
	}

	var a, b int
	for num, frequency := range vector {
		if frequency > 1 {
			a = num
		}
		if frequency == 0 {
			b = num
		}
		if a != 0 && b != 0 {
			break
		}
	}

	return []int{a, b}
}
```