# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-dining-philosophers/solutions/3067965/](https://leetcode.com/problems/the-dining-philosophers/solutions/3067965/)

---

# Code
```
use std::sync::{Arc, Mutex};

#[derive(Clone, Debug)]
struct DiningPhilosophers {
    forks: Vec<Arc<Mutex<()>>>,
}

impl DiningPhilosophers {
    fn new() -> Self {
        DiningPhilosophers {
            forks: {
                let mut v = Vec::with_capacity(5);
                (0..5).for_each(|_| v.push(Arc::new(Mutex::new(()))));
                v
            },
        }
    }

    fn wants_to_eat(
        &self,
        philosopher: i32,
        pick_left_fork: impl FnOnce(),
        pick_right_fork: impl FnOnce(),
        eat: impl FnOnce(),
        put_left_fork: impl FnOnce(),
        put_right_fork: impl FnOnce(),
    ) {
        let left = philosopher as usize;
        let right = ((philosopher + 1) % 5) as usize;
        let (first, second) = if philosopher % 2 == 0 {
            (left, right)
        } else {
            (right, left)
        };
        let _f = self.forks[first].lock();
        let _s = self.forks[second].lock();
        pick_left_fork();
        pick_right_fork();
        eat();
        put_left_fork();
        put_right_fork();
    }
}

#[test]
fn test() {
    use std::thread;
    let dp = DiningPhilosophers::new();
    let mut handles = Vec::new();
    for i in 0..5 {
        let dp = dp.clone();
        handles.push(thread::spawn(move || {
            dp.wants_to_eat(
                i,
                || println!("{} pick left fork", i),
                || println!("{} pick right fork", i),
                || println!("{} eat", i),
                || println!("{} put left fork", i),
                || println!("{} put right fork", i),
            );
        }));
    }
    for handle in handles {
        handle.join().unwrap();
    }
}
```