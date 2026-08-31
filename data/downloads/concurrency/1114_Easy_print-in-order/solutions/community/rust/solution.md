# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/print-in-order/solutions/3040066/](https://leetcode.com/problems/print-in-order/solutions/3040066/)

---

# Code
```
use std::{
    sync::{Arc, Condvar, Mutex},
    thread,
};

#[derive(Debug, Clone)]
struct Foo {
    count: Arc<Mutex<i32>>,
    cond: Arc<Condvar>,
}

impl Foo {
    fn new() -> Self {
        Foo {
            count: Arc::new(Mutex::new(1)),
            cond: Arc::new(Condvar::new()),
        }
    }

    fn first(&self, print_first: impl FnOnce() + Send + 'static) {
        let count = self.count.clone();
        let cond = self.cond.clone();
        thread::spawn(move || {
            print_first();
            *count.lock().unwrap() = 2;
            cond.notify_all();
        });
    }

    fn second(&self, print_second: impl FnOnce() + Send + 'static) {
        let count = self.count.clone();
        let cond = self.cond.clone();
        thread::spawn(move || {
            let mut count = count.lock().unwrap();
            while *count != 2 {
                count = cond.wait(count).unwrap();
            }
            print_second();
            *count = 3;
            cond.notify_all();
        });
    }

    fn third(&self, print_third: impl FnOnce() + Send + 'static) {
        let count = self.count.clone();
        let cond = self.cond.clone();
        thread::spawn(move || {
            let mut count = count.lock().unwrap();
            while *count != 3 {
                count = cond.wait(count).unwrap();
            }
            print_third();
        });
    }
}

#[test]
fn test() {
    let foo = Foo::new();
    let foo1 = foo.clone();
    let foo2 = foo.clone();
    let foo3 = foo.clone();
    let t1 = thread::spawn(move || {
        foo1.first(|| {
            println!("first");
        });
    });
    let t2 = thread::spawn(move || {
        foo2.second(|| {
            println!("second");
        });
    });
    let t3 = thread::spawn(move || {
        foo3.third(|| {
            println!("third");
        });
    });
    t1.join().unwrap();
    t2.join().unwrap();
    t3.join().unwrap();
    // std::thread::sleep(std::time::Duration::from_secs(1));
}

```