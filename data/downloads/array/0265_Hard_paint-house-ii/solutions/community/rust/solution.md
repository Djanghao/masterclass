# Functional style O(n*k) solution in Rust

**Author:** ustinovas
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-house-ii/solutions/3049047/](https://leetcode.com/problems/paint-house-ii/solutions/3049047/)

---

# Intuition
On each iteration we shold combine the cost of painting house to a certain color with the minimal cost of painting of all previous houses. However, if the minimal cost is for the house of the same color we should instead take a second minimal value.

# Complexity
- Time complexity:
$$O(n*k)$$ as minimum search and cost update takes $$O(k)$$ for every of $$n$$ houses.

- Space complexity:
$$O(k)$$ as we allocated a vector of length $$k$$ to store accumulated costs.

# Code
```
impl Solution {
    pub fn min_cost_ii(costs: Vec<Vec<i32>>) -> i32 {
        Some(costs.iter()
            .fold(vec![0; costs[0].len()], 
                |mut acc, cost| {
                    let search_mins = |(min, min_2): (Option<i32>, Option<i32>), &c|
                        if min.map_or(false, |min| c > min) { (min, min_2.map(|min_2| min_2.min(c)).or(Some(c))) } else { (Some(c), min) };
                    let (min, min_2) = acc.iter().fold((None, None), search_mins);
                    let (min, min_2) = (min.unwrap(), min_2.unwrap());
                    for (idx, el) in acc.iter_mut().enumerate() {
                        *el = cost[idx] + if *el == min { min_2 } else { min };
                    }
                    acc
                }))
            .map(|costs| *costs.iter().min().unwrap())
            .unwrap()
    }
}
```