# Just a runnable solution

**Author:** ssrlive
**Votes:** 1
**Link:** [https://leetcode.com/problems/cut-off-trees-for-golf-event/solutions/2885776/](https://leetcode.com/problems/cut-off-trees-for-golf-event/solutions/2885776/)

---

# Code
```
impl Solution {
    pub fn cut_off_tree(forest: Vec<Vec<i32>>) -> i32 {
        let mut trees = forest
            .iter()
            .enumerate()
            .flat_map(|(i, row)| {
                row.iter()
                    .enumerate()
                    .filter_map(move |(j, &height)| if height > 1 { Some((height, i, j)) } else { None })
            })
            .collect::<Vec<_>>();
        trees.sort_unstable();

        let mut steps = 0;
        let mut start = (0, 0);
        for (_, i, j) in trees {
            let step = Self::bfs(&forest, start, (i, j));
            if step < 0 {
                return -1;
            }
            steps += step;
            start = (i, j);
        }
        steps
    }

    fn bfs(forest: &[Vec<i32>], start: (usize, usize), end: (usize, usize)) -> i32 {
        let mut queue = std::collections::VecDeque::new();
        queue.push_back((start, 0));
        let mut visited = std::collections::HashSet::new();
        visited.insert(start);

        while let Some(((i, j), step)) = queue.pop_front() {
            if (i, j) == end {
                return step;
            }

            for (di, dj) in &[(0, 1), (0, -1), (1, 0), (-1, 0)] {
                let (ni, nj) = (i as i32 + di, j as i32 + dj);
                if ni >= 0
                    && ni < forest.len() as i32
                    && nj >= 0
                    && nj < forest[0].len() as i32
                    && forest[ni as usize][nj as usize] > 0
                    && visited.insert((ni as usize, nj as usize))
                {
                    queue.push_back(((ni as usize, nj as usize), step + 1));
                }
            }
        }
        -1
    }
}
```