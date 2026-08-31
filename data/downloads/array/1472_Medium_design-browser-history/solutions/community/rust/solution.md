# Self-Explanatory, Concise Rust Solution | O(1) and Beats 100%

**Author:** Prog_Jacob
**Votes:** 4
**Link:** [https://leetcode.com/problems/design-browser-history/solutions/3311326/](https://leetcode.com/problems/design-browser-history/solutions/3311326/)

---

# Code
```
struct BrowserHistory {
    list: Vec<String>,
    bound: i32,
    ptr: i32,
}

impl BrowserHistory {
    fn new(homepage: String) -> Self {
        Self { list: vec![homepage], bound: 0, ptr: 0 }
    }
    
    fn visit(&mut self, url: String) {
        self.ptr += 1;
        self.bound = self.ptr;

        if self.ptr == self.list.len() as i32 {
            self.list.push(url)
        } else { self.list[self.ptr as usize] = url };     
    }
    
    fn back(&mut self, steps: i32) -> String {
        self.ptr = (self.ptr - steps).max(0);
        self.list[self.ptr as usize].clone()
    }
    
    fn forward(&mut self, steps: i32) -> String {
        self.ptr = (self.ptr + steps).min(self.bound);
        self.list[self.ptr as usize].clone()
    }
}
```
## Complexity:
> **Time Complexity**: $O(1)$ for all associated functions.
> **Space Complexity**: $O(1)$ for all associated functions.

# Other Solution:
This Solution is more concise and easier to digest; however, visiting websites may take O(n) extra time. It might help you to understand the first solution, though.
```
struct BrowserHistory {
    list: Vec<String>,
    ptr: i32,
}

impl BrowserHistory {
    fn new(homepage: String) -> Self {
        Self { list: vec![homepage], ptr: 0 }
    }
    
    fn visit(&mut self, url: String) {
        self.ptr += 1;
        self.list.splice(self.ptr as usize.., vec![url]);   
    }
    
    fn back(&mut self, steps: i32) -> String {
        self.ptr = (self.ptr - steps).max(0);
        self.list[self.ptr as usize].clone()
    }
    
    fn forward(&mut self, steps: i32) -> String {
        self.ptr = (self.ptr + steps).min(self.list.len() as i32 - 1);
        self.list[self.ptr as usize].clone()
    }
}
```
## Complexity:
> **Time Complexity**: $O(1)$ for all associated functions. Except for `visit`, its time complexity may take $O(n)$ in worst case.
> **Space Complexity**: $O(1)$ for all associated functions.