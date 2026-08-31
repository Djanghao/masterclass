# Intuition

**Author:** singh_avi
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/solutions/5965401/](https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/solutions/5965401/)

---

# Intuition
If the number of nodes with odd edges > 4, we cannot make all even by just 2 edges.

Similarly, if there are only 1 or 3 such nodes, its not possible to make them all even with a single edge.

If there are 4, check if its possible to connect any 2 of them which are not connected already

If there are 2 and they are not connected already great. If there exist some disjointed nodes then also great because we can connect them to these 2. If there is some other node that is not connected to both of these then also great. Otherwise return false

# Complexity
- Time complexity:
$$O(n^2)$$ in the absolutely worst case

- Space complexity:
$$O(n^2)$$

# Code
```golang []
func isPossible(n int, edges [][]int) bool {
    
    adjacencyList := make(map[int][]int)

	for _, edge := range edges {
		adjacencyList[edge[0]] = append(adjacencyList[edge[0]], edge[1])
		adjacencyList[edge[1]] = append(adjacencyList[edge[1]], edge[0])
	}

	numOdd := 0
	oddKeys := []int{}
    
	for key, v := range adjacencyList {
		if len(v)%2 != 0 {
			oddKeys = append(oddKeys, key)
			numOdd++
		}
	}

    fmt.Printf("num odd %v \
", oddKeys)
    fmt.Printf("adj %v", adjacencyList)


	if numOdd > 4 || numOdd == 1 || numOdd == 3 {
		return false
	}

	if numOdd == 0 {
		return true
	}

	if numOdd == 2 {
		key1 := oddKeys[0]
		key2 := oddKeys[1]

		areNodesConnected := false
		for _, val := range adjacencyList[key1] {

			if val == key2 {
				areNodesConnected = true
				break
			}

		}

		if !areNodesConnected {
			return true
		}

		for i := 1; i <= n; i++ {
			if i == key1 || i == key2 {
				continue
			}

			if adjacencyList[i] == nil {
				return true
			}

			val1Found := false
			val2Found := false

			for _, v := range adjacencyList[i] {
				if v == key1 {
					val1Found = true
				}

				if v == key2 {
					val2Found = true
				}
			}

			if !val1Found && !val2Found {
				return true
			}

		}

		return false
	}

	if numOdd == 4 {
		key1 := oddKeys[0]
		key2 := oddKeys[1]
		key3 := oddKeys[2]
		key4 := oddKeys[3]

		if !checkIfKeyExists(key1, adjacencyList[key2]) {
			if !checkIfKeyExists(key3, adjacencyList[key4]) {
				return true
			}
		}

		if !checkIfKeyExists(key1, adjacencyList[key3]) {
			if !checkIfKeyExists(key2, adjacencyList[key4]) {
				return true
			}
		}

		if !checkIfKeyExists(key1, adjacencyList[key4]) {
			if !checkIfKeyExists(key2, adjacencyList[key3]) {
				return true
			}
		}

		return false
	}

	return true
}

func checkIfKeyExists(key int, keys []int) bool {
	for _, k := range keys {
		if k == key {
			return true
		}
	}

	return false
}

```