# 0ms enum

**Author:** user0036N
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/5162864/](https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/5162864/)

---

Once we have turned in the same spot, we have completed a loop. 

# Code
```
#[derive(Eq,PartialEq, Clone, Hash)]
enum Action {
    Right(usize, usize, bool),
    Down(usize, usize, bool),
    Left(usize, usize, bool),
    Up(usize, usize, bool),
}

impl Action {
    fn turned(&self) -> bool {
        match self {
            Action::Right(_, _, a) => *a,
            Action::Down(_, _, a) => *a,
            Action::Left(_, _, a) => *a,
            Action::Up(_, _, a) => *a,
        }
    }
    fn point(&self) -> (usize, usize) {
        match self {
            Action::Right(a, b, _) => (*a, *b),
            Action::Down(a, b, _) => (*a, *b),
            Action::Left(a, b, _) => (*a, *b),
            Action::Up(a, b, _) => (*a, *b),
        }
    }
}

fn next(action: Action, room: &Vec<Vec<i32>>) -> Action {
    let m = room.len();
    let n = room[0].len();
    match action {
        Action::Right(a, b, _) => {
            if b+1 == n || room[a][b+1] == 1 {
                Action::Down(a, b, true)
            } else {
                Action::Right(a, b+1, false)
            }
        },
        Action::Down(a, b, _) => {
            if a+1 == m || room[a+1][b] == 1 {
                Action::Left(a, b, true)
            } else {
                Action::Down(a+1, b, false)
            }
        },
        Action::Left(a, b, _) => {
            if b == 0 || room[a][b-1] == 1 {
                Action::Up(a, b, true)
            } else {
                Action::Left(a, b-1, false)
            }
        },
        Action::Up(a, b, _) => {
            if a == 0 || room[a-1][b] == 1 {
                Action::Right(a, b, true)
            } else {
                Action::Up(a-1, b, false)
            }
        }
    }
}

impl Solution {
    pub fn number_of_clean_rooms(mut room: Vec<Vec<i32>>) -> i32 {
        use std::collections::HashSet;
        let mut action = Action::Right(0, 0, true);
        let mut turns = HashSet::new();
        let mut cleaned_squares = 0;
        loop {
            if action.turned() {
                if turns.contains(&action) {
                    return cleaned_squares;
                } else {
                    turns.insert(action.clone());
                }
            }
            let (i, j) = action.point();
            if room[i][j] == 0 {
                room[i][j] = -1;
                cleaned_squares += 1;
            }
            action = next(action, &room);
        }
    }
}
```