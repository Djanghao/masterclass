# Floyd-Warshall's algorithm, beats 100%

**Author:** casualcow
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5536683/](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5536683/)

---

# Intuition
leverages Floyd-Warshall's algorithm

# Approach
Floyd-Warshall's algorithm

# Complexity
- Time complexity:
classic compute of distances between i-k-j cities, O(n^3)

- Space complexity:
distanceMatrix , O(n^2)

# Code
```
impl Solution {
    pub fn find_the_city(n: i32, edges: Vec<Vec<i32>>, distance_threshold: i32) -> i32 {
        let nusize = n as usize;
        let mut distance_matrix = vec![vec![(1e9 as i32 + 7); nusize]; nusize];
        for i in 0..nusize {
            distance_matrix[i][i] = 0;
        }
        for edge in edges {
            let (src, dst, weight) = (edge[0] as usize, edge[1] as usize, edge[2]);
            distance_matrix[src][dst] = weight;
            distance_matrix[dst][src] = weight;
        }
        //Floyd-Warshall's algo in dense graph to compute shortest paths between all pairs of cities, time O(n^3)
        for k in 0..nusize {
            for i in 0..nusize {
                for j in 0..nusize {
                    //i-j v.s. i-k-j, k is intermediate city
                    distance_matrix[i][j] = distance_matrix[i][j].min(distance_matrix[i][k] + distance_matrix[k][j]);
                }
            }
        }
        let mut ans = 0; // the greatest number city with fewest reachable cities counts
        let mut fewest_reachable_cnt = n;
        for i in 0..n {
            let mut reachable_cnt = 0;
            for j in 0..n {
                if i != j && distance_matrix[i as usize][j as usize] <= distance_threshold{
                    reachable_cnt += 1;
                }
            }
            if reachable_cnt <= fewest_reachable_cnt {
                fewest_reachable_cnt = reachable_cnt;
                ans = i;
            }
        }
        ans
    }
}
```