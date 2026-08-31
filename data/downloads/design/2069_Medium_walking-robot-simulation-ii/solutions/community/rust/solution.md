# O(1) Time and Space | Rust

**Author:** Prog_Jacob
**Votes:** 0
**Link:** [https://leetcode.com/problems/walking-robot-simulation-ii/solutions/4539219/](https://leetcode.com/problems/walking-robot-simulation-ii/solutions/4539219/)

---

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
struct Robot {
    height: i32,
    width: i32,
    step: i32,
}

impl Robot {
    fn new(width: i32, height: i32) -> Self {
        Self {
            height: height - 1,
            width: width - 1,
            step: 0,
        }
    }

    fn step(&mut self, num: i32) {
        self.step += num;
    }

    fn get_pos(&self) -> Vec<i32> {
        let cycle = (self.height + self.width) * 2;
        let step = self.step % cycle;

        match step {
            s if s <= self.width => vec![step, 0],
            s if s <= self.width + self.height =>  {
                vec![self.width, step - self.width]
            }
            s if s <= self.width * 2 + self.height => {
                vec![self.width * 2 + self.height - step, self.height]
            }
            _ => vec![0, cycle - step],
        }
    }

    fn get_dir(&self) -> String {
        let cycle = (self.height + self.width) * 2;
        let step = self.step % cycle;

        if step == 0 && self.step != 0 {
            return String::from("South");
        }

        String::from(match step {
            s if s <= self.width => "East",
            s if s <= self.width + self.height => "North",
            s if s <= self.width * 2 + self.height => "West",
            _ => "South",
        })
    }
}

```

# More Compact
```
struct Robot {
    height: i32,
    width: i32,
    step: i32,
}

impl Robot {
    fn new(width: i32, height: i32) -> Self {
        Self {
            height: height - 1,
            width: width - 1,
            step: 0,
        }
    }

    fn step(&mut self, num: i32) {
        self.step += num;
    }

    fn get_pos(&self) -> Vec<i32> {
        let (x, y, _) = Self::map(&self);
        vec![x, y]
    }

    fn get_dir(&self) -> String {
        let (x, y, dir) = Self::map(&self);

        String::from(
            if x + y == 0 && self.step != 0 {
                "South"
            } else { dir }
        )
    }

    fn map(&self) -> (i32, i32, &str) {
        let cycle = (self.height + self.width) * 2;
        let step = self.step % cycle;

        match step {
            s if s <= self.width => (s, 0, "East"),
            s if s <= self.width + self.height =>  {
                (self.width, s - self.width, "North")
            }
            s if s <= self.width * 2 + self.height => {
                (self.width * 2 + self.height - s, self.height, "West")
            }
            s => (0, cycle - s, "South"),
        }
    }
}
```