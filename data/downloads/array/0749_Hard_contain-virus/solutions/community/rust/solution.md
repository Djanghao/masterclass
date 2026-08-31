# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/contain-virus/solutions/2910579/](https://leetcode.com/problems/contain-virus/solutions/2910579/)

---

# Code
```
struct MySolution {
    infected: Vec<Vec<i32>>,
    n: usize,
    m: usize,
    c: i32,
    mx: usize,
    w: i32,
    r: i32,
    ans: i32,
    itr: i32,
    s: std::collections::HashSet<usize>,
}

impl MySolution {
    fn new() -> Self {
        MySolution {
            infected: vec![vec![]],
            n: 0,
            m: 0,
            c: 2,
            mx: 0,
            w: 0,
            r: 0,
            ans: 0,
            itr: 0,
            s: std::collections::HashSet::new(),
        }
    }

    fn dfs(&mut self, i: i32, j: i32) -> i32 {
        if i < 0 || j < 0 {
            return 0;
        }
        let (i, j) = (i as usize, j as usize);
        if i >= self.n || j >= self.m || self.infected[i][j] != 1 {
            return 0;
        }
        let mut ans = 0;
        if i + 1 < self.n && self.infected[i + 1][j] == 0 {
            self.s.insert((i + 1) * self.m + j);
            ans += 1;
        }
        if i >= 1 && self.infected[i - 1][j] == 0 {
            self.s.insert((i - 1) * self.m + j);
            ans += 1;
        }
        if j + 1 < self.m && self.infected[i][j + 1] == 0 {
            self.s.insert(i * self.m + (j + 1));
            ans += 1;
        }
        if j >= 1 && self.infected[i][j - 1] == 0 {
            self.s.insert(i * self.m + (j - 1));
            ans += 1;
        }
        self.infected[i][j] = self.c;
        ans += self.dfs(i as i32 + 1, j as i32);
        ans += self.dfs(i as i32 - 1, j as i32);
        ans += self.dfs(i as i32, j as i32 + 1);
        ans += self.dfs(i as i32, j as i32 - 1);
        ans
    }

    fn contain_virus(&mut self, infected: Vec<Vec<i32>>) -> i32 {
        self.infected = infected;
        self.n = self.infected.len();
        self.m = self.infected[0].len();
        self.ans = 0;
        loop {
            self.c = 2;
            self.mx = 0;
            for i in 0..self.n {
                for j in 0..self.m {
                    if self.infected[i][j] == 1 {
                        self.s.clear();
                        let walls = self.dfs(i as i32, j as i32);
                        if self.mx < self.s.len() {
                            self.mx = self.s.len();
                            self.w = walls;
                            self.r = self.c;
                        }
                        self.c += 1;
                    }
                }
            }
            if self.mx == 0 {
                break;
            }
            self.ans += self.w;
            for i in 0..self.n {
                for j in 0..self.m {
                    if self.infected[i][j] == self.r {
                        self.infected[i][j] = 1e9 as i32;
                    } else if self.infected[i][j] > 1 && self.infected[i][j] != 1e9 as i32 {
                        self.infected[i][j] = 1;
                        if i + 1 < self.n && self.infected[i + 1][j] == 0 {
                            self.infected[i + 1][j] = 1;
                        }
                        if i >= 1 && self.infected[i - 1][j] == 0 {
                            self.infected[i - 1][j] = 1;
                        }
                        if j + 1 < self.m && self.infected[i][j + 1] == 0 {
                            self.infected[i][j + 1] = 1;
                        }
                        if j >= 1 && self.infected[i][j - 1] == 0 {
                            self.infected[i][j - 1] = 1;
                        }
                    }
                }
            }
        }
        self.ans
    }
}

impl Solution {
    pub fn contain_virus(is_infected: Vec<Vec<i32>>) -> i32 {
        let mut my_solution = MySolution::new();
        my_solution.contain_virus(is_infected)
    }
}
```