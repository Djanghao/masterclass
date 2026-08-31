# ✅ Visit all leafs and sum multiplication of them

**Author:** elektrovenik
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/solutions/5496746/](https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/solutions/5496746/)

---

# Intuition
Use recursion, Luke!

# Approach
1. Traverse over tree
2. If wheisn't left and rights nodes, then it's leaf. Return array [0 => 1] (one leaf on zero level)
3. Visit left and right branches
4. Add to result multiplication of all pairs with distance less than need
5. Return count of leafs of this branch
6. Recursion complete. Just return result.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
Less than $$O(n)$$

# Code
```
class Solution {
	/**
	 * @param TreeNode $root
	 * @param Integer $distance
	 * @return Integer
	 */
	function countPairs($root, $distance) {

		$this->result = 0;
		$this->crawl($root, $distance);

		return $this->result;
	}

	private int $result = 0;

	private function crawl(TreeNode $root, int $distance): array
	{
		if (!$root->left && !$root->right)
			return [0 => 1]; // leaf node

		$left = $right = [];
		if ($root->left && ($root->left->val !== null))
			$left = $this->crawl($root->left, $distance);

		if ($root->right && ($root->right->val !== null))
			$right = $this->crawl($root->right, $distance);

		// count pairs with target distance
		for ($l = 0; $l < $distance; $l++)
			for ($r = 0; $r < $distance - 1 - $l; $r++)
				$this->result += $left[$l] * $right[$r];

		// sum of branch leafs
		$result = [];
		foreach ([$left, $right] as $leafs)
			foreach ($leafs as $d => $n)
				if ($d < $distance)
					$result[$d + 1] += $n;

		return $result;
	}
}

```