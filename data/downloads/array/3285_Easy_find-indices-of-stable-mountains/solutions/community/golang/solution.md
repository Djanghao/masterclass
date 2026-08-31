# Beats 100% Submission || Go|| Easy & Simple

**Author:** tejasvini1
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/6122513/](https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/6122513/)

---

# Intuition
Just iterate over the entire array skipping teh starting element and keep comparing the previous element with threshold.

# Approach
1. create a slice to store the values.
2. iterate over entire array starting from second index.
3. check if previous element is greater than threshold
4. if yes, add it to the res
5. Return the res at the end

# Complexity
- Time complexity:
o(n)

- Space complexity:
o(n)

# Code
```golang []
func stableMountains(height []int, threshold int) []int {
	res := make([]int, 0)
	for i := 1; i < len(height); i++ {
		if height[i-1] > threshold {
			res = append(res, i)
		}
	}
    return res
}
```