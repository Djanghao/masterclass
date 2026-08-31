# 109 ms | DP + bitmask | pre-caculated BFS | 73 lines after rustfmt

**Author:** abdy
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-moves-to-kill-all-pawns/solutions/5756367/](https://leetcode.com/problems/maximum-number-of-moves-to-kill-all-pawns/solutions/5756367/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

- dynamic programming
- `move(cur_pos, avail_pos, choose_min) = {max|min} [ dist(cur_pos, next_pos) + move(next_pos, avail_pos - next_pos, !choose_min) for next_pos in avail_pos]`: alice choose the maximum and bob choose the minimum.

# Approach
<!-- Describe your approach to solving the problem. -->
Some optimization method:
- Since there are at most 16 postions (including knight), a 16 bits integer can be used to indicate available postions/taken postions.
- whether choose_min is true can be known from parity of the count of visited positions
- minimum moves between any two positons can be cached / pre-caculated.

# Complexity
- Time complexity: $$O(n * 2 ^ n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n * 2 ^ n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
impl Solution {
	pub fn max_moves(kx: i32, ky: i32, positions: Vec<Vec<i32>>) -> i32 {
		let mut pos = vec![[kx, ky]];
		pos.extend(positions.iter().map(|v| [v[0], v[1]]));
		Self::solve(
			0,
			&pos,
			1,
			&mut vec![vec![[-1, -1]; pos.len()]; 1 << pos.len()],
			&mut Self::dists(&pos),
		)
	}
	fn solve(
		si: usize,
		pos: &[[i32; 2]],
		vis: u16,
		state: &mut [Vec<[i32; 2]>],
		dist: &mut [Vec<i32>],
	) -> i32 {
		let min = vis.count_ones() % 2 == 0; // true for Bob, false for Alice
		if state[vis as usize][si][min as usize] != -1 {
			return state[vis as usize][si][min as usize];
		} else if vis.trailing_ones() == pos.len() as u32 {
			return 0;
		}
		let it = (0..pos.len())
			.filter(|&pi| (1 << pi) & vis == 0)
			.map(|pi| dist[si][pi] + Self::solve(pi, pos, vis | (1 << pi), state, dist));
		let ans = if min { it.min() } else { it.max() }.unwrap();
		state[vis as usize][si][min as usize] = ans;
		ans
	}
	fn dists(pos: &[[i32; 2]]) -> Vec<Vec<i32>> {
		let mut dist = vec![vec![9999; pos.len()]; pos.len()];
		for (i, &s) in (0..).zip(pos) {
			let mut dis = [[9999; 50]; 50];
			let mut dq = vec![s];
			dis[s[0] as usize][s[1] as usize] = 0;
			let mut dep = 0;
			while !dq.is_empty()
				&& pos
					.iter()
					.any(|p| dis[p[0] as usize][p[1] as usize] == 9999)
			{
				dep += 1;
				for [x, y] in std::mem::take(&mut dq) {
					for [nx, ny] in [
						[x + 1, y + 2],
						[x + 1, y - 2],
						[x - 1, y + 2],
						[x - 1, y - 2],
						[x + 2, y + 1],
						[x + 2, y - 1],
						[x - 2, y + 1],
						[x - 2, y - 1],
					] {
						if (0..50).contains(&nx)
							&& (0..50).contains(&ny)
							&& dis[nx as usize][ny as usize] > dep
						{
							dis[nx as usize][ny as usize] = dep;
							dq.push([nx, ny]);
						}
					}
				}
			}
			for (j, p) in (0..).zip(pos) {
				dist[i][j] = dis[p[0] as usize][p[1] as usize];
			}
		}
		dist
	}
}
```