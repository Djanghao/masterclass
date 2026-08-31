# [PHP] Solution based on Dijkstra's Algorithm

**Author:** agzamov
**Votes:** 2
**Link:** [https://leetcode.com/problems/path-with-maximum-probability/solutions/736421/](https://leetcode.com/problems/path-with-maximum-probability/solutions/736421/)

---

```
function maxProbability($n, $edges, $succProb, $start, $end) 
{
	foreach($edges as $key => $item) {
		$map[$item[0]][$item[1]] = $succProb[$key];
		$map[$item[1]][$item[0]] = $succProb[$key];
	}

	$queue[] = $start;
	$max[$start] = 1;

	while(count($queue)) {
		$current = array_shift($queue);
		foreach($map[$current] as $next => $succ) {
			$val = $succ * $max[$current];
			if(!array_key_exists($next, $max) || $val > $max[$next]) {
				$max[$next] = $val;
				$queue[] = $next;
			}
		}
	}

	return $max[$end];
}