# Rust solution

**Author:** 54k
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-takes-to-reach-destination-without-drowning/solutions/3920157/](https://leetcode.com/problems/minimum-time-takes-to-reach-destination-without-drowning/solutions/3920157/)

---

# Code
```
impl Solution {
    pub fn minimum_seconds(land: Vec<Vec<String>>) -> i32 {
        use std::collections::VecDeque;
        const DIR: [(i32, i32); 4] = [(0, 1), (0, -1), (1, 0), (-1, 0)];

        fn is_valid(x: i32, y: i32, land: &Vec<Vec<String>>) -> bool {
            0 <= x && x < land.len() as i32 && 0 <= y && y < land[0].len() as i32
        }

        fn mark_flooded(land: &Vec<Vec<String>>) -> Vec<Vec<i32>> {
            let mut flood_time = vec![vec![i32::MAX; land[0].len()]; land.len()];
            let mut queue = VecDeque::new();
            let mut vis = vec![vec![false; land[0].len()]; land.len()];

            for i in 0..land.len() {
                for j in 0..land[0].len() {
                    if land[i][j] == "*".to_string() {
                        queue.push_back((i as i32, j as i32));
                        vis[i][j] = true;
                    }
                }
            }

            let mut time = 0;
            while queue.len() > 0 {
                let mut k = queue.len();
                while k > 0 {
                    let (x, y) = queue.pop_front().unwrap();
                    flood_time[x as usize][y as usize] = time;

                    for d in &DIR {
                        let (nx, ny) = (x + d.0, y + d.1);
                        if is_valid(nx, ny, &land)
                            && !vis[nx as usize][ny as usize]
                            && land[nx as usize][ny as usize] != "X".to_string()
                            && land[nx as usize][ny as usize] != "D".to_string()
                        {
                            vis[nx as usize][ny as usize] = true;
                            queue.push_back((nx, ny));
                        }
                    }
                    k -= 1;
                }
                time += 1;
            }
            flood_time
        }

        fn get_time(land: &Vec<Vec<String>>, flood_time: &Vec<Vec<i32>>) -> i32 {
            let mut queue = VecDeque::new();
            let mut vis = vec![vec![false; land[0].len()]; land.len()];

            for i in 0..land.len() {
                for j in 0..land[0].len() {
                    if land[i][j] == "S".to_string() {
                        queue.push_back((i as i32, j as i32, 0));
                        vis[i][j] = true;
                        break;
                    }
                }
            }

            while let Some((x, y, time)) = queue.pop_front() {
                if land[x as usize][y as usize] == "D".to_string() {
                    return time;
                }
                for d in &DIR {
                    let (nx, ny) = (x + d.0, y + d.1);

                    if is_valid(nx, ny, &land)
                        && !vis[nx as usize][ny as usize]
                        && flood_time[nx as usize][ny as usize] > time + 1
                        && land[nx as usize][ny as usize] != "X".to_string()
                    {
                        vis[nx as usize][ny as usize] = true;
                        queue.push_back((nx, ny, time + 1));
                    }
                }
            }

            -1
        }
        let flooded = mark_flooded(&land);
        get_time(&land, &flooded)
    }
}
```