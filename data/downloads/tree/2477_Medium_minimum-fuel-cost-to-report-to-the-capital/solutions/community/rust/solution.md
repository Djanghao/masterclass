# go/rust dfs

**Author:** CHIYOI
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/3175154/](https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/3175154/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Depth first traverse over the graph from the capital city, count sub-cities and add the corresponding amount of fuel to the output, after each recursion(post-order).

# Approach
<!-- Describe your approach to solving the problem. -->
1. make the graph as *adjacency list*, remember to add two nodes for each edge because it's bidirectional
2. traverse over the graph, for each node:
    1. count all of its sub-nodes`c` for future calculations
    2. add this to the answer which is the total cost for the representatives travel from the current city to the parent city: `c` divided by `seats` and perform ceil round(if `c%seats != 0` then add one to the division result)
        - remember to except the capital city because it doesn't have any parent city

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ for the graph
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```go []
func minimumFuelCost(roads [][]int, seats int) int64 {
	graph := make([][]int, len(roads)+1)
	for _, e := range roads {
		from, to := e[0], e[1]
		graph[from] = append(graph[from], to)
		graph[to] = append(graph[to], from)
	}

	var travel func(i, from int) (c int, ans int64)
	travel = func(i, from int) (c int, ans int64) {
		c = 1
		for _, n := range graph[i] {
			if n != from {
				nc, na := travel(n, i)
				c, ans = c+nc, ans+na
			}
		}
		if from != -1 {
			ans += int64(c / seats)
			if c%seats != 0 {
				ans++
			}
		}
		return c, ans
	}
	_, ans := travel(0, -1)
	return ans
}
```
```rust []
impl Solution {
    pub fn minimum_fuel_cost(roads: Vec<Vec<i32>>, seats: i32) -> i64 {
        match roads
            .iter()
            .fold(vec![Vec::new(); roads.len() + 1], |mut graph, e| {
                match e[..] {
                    [from, to] => {
                        graph[from as usize].push(to as usize);
                        graph[to as usize].push(from as usize);
                        graph
                    }
                    _ => panic!("never"),
                }
            }) {
            graph => match |i, from| travel(i, from, &graph, seats as usize) {
                travel => travel(0, None),
            },
        }
        .1
    }
}

fn travel(i: usize, from: Option<usize>, graph: &Vec<Vec<usize>>, seats: usize) -> (usize, i64) {
    match graph[i].iter().fold((1, 0), |pass @ (c, ans), &n| {
        match from.map_or(true, |from| n != from) {
            true => match travel(n, Some(i), graph, seats) {
                (nc, na) => (c + nc, ans + na),
            },
            false => pass,
        }
    }) {
        (c, ans) => (
            c,
            match from {
                None => ans,
                _ => ans + (c / seats) as i64 + if c % seats != 0 { 1 } else { 0 },
            },
        ),
    }
}
```
- In rust, we cannot use recursive closure so we have to "capture" the environments in flesh. Here I made a partial-call to hide the environment arguments passed to the function.