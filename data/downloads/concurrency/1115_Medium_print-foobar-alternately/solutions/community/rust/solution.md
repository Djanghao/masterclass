# Rust channel solution

**Author:** VKkJLJ2cES
**Votes:** 0
**Link:** [https://leetcode.com/problems/print-foobar-alternately/solutions/5972577/](https://leetcode.com/problems/print-foobar-alternately/solutions/5972577/)

---

# Code
```rust []
use std::{
    sync::mpsc::{channel, Receiver, Sender},
    thread,
};

fn main() {
    let fb = FB::new(50);

    let (tx1, rx1) = channel::<()>();
    let (tx2, rx2) = channel::<()>();

    thread::scope(|f| {
        f.spawn(|| fb.foo(tx2, rx1));
        f.spawn(|| fb.bar(&tx1, rx2));
        let _  = tx1.send(());
    })
}

struct FB {
    n: i32,
}

impl FB {
    pub fn new(n: i32) -> Self {
        Self { n }
    }

    pub fn foo(&self, tx: Sender<()>, rx: Receiver<()>) {
        for _ in 0..self.n {
            let _ = rx.recv();
            print!("Foo");
            let _ = tx.send(());
        }
    }

    pub fn bar(&self, tx: &Sender<()>, rx: Receiver<()>) {
        for _ in 0..self.n {
            let _ = rx.recv();
            print!("Bar");
            let _ = tx.send(());
        }
    }
}
```