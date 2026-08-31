# Php solution to get the parent based on equation log 2

**Author:** tamer-kamel
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/1831469/](https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/1831469/)

---

After get the current level of the label by log 2.
Get the parent of the label (label/2)
But the parent has opposite direction so:
	Real Parent = power 2 of current level + power 2 of previous level - (label/2) -1

```
$arr = [1];
        
$n = (int)log($label, 2);

for($i=$n; $i>0; $i--){
	$arr[$i] = $label;
	$label = pow(2, $i)+pow(2, $i-1)-(int)($label/2)-1;
}

ksort($arr);

return $arr;
```