# golang dfs + memorization

**Author:** zhangrun123
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/5657323/](https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/5657323/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

type key struct {
    hour int
    drinkType bool
}

func maxEnergyBoost(energyDrinkA []int, energyDrinkB []int) int64 {
	//
  
	mem := make(map[key]int)
	var dfs func(hour int, total int, drinkType bool) int
	dfs = func(hour int, total int, drinkType bool) int {
		if hour >= total {
			return 0
		}

		if value, exist := mem[key{hour: hour, drinkType: drinkType}]; exist {
			return value
		}

		var res int
		if drinkType {
			res = energyDrinkA[hour]
		} else {
			res = energyDrinkB[hour]
		}

		res += max(
			dfs(hour+1, total, drinkType),
			dfs(hour+2, total, !drinkType),
		)

		mem[key{hour: hour, drinkType: drinkType}] = res
		return res
	}

	total := len(energyDrinkA)
	startWithA := dfs(0, total, true)
	startWithB := dfs(0, total, false)
	return int64(max(startWithA, startWithB))
}


```