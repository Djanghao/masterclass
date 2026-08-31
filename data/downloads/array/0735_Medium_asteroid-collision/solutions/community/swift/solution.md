# Swift | One-Liner

**Author:** OrchidHunter
**Votes:** 5
**Link:** [https://leetcode.com/problems/asteroid-collision/solutions/3162869/](https://leetcode.com/problems/asteroid-collision/solutions/3162869/)

---

**One-Liner, terse (accepted answer)**
```
class Solution {
    func asteroidCollision(_ a: [Int]) -> [Int] {
        a.reduce(into: [Int]()) { s,a in while a<0, let t=s.last, t>0{if t <= -a {s.removeLast()};guard t < -a else {return}};s.append(a)}
    }
}
```
**NOTE:** This technically qualifies as a one-liner, since the outermost `return` keyword was omitted.

---

**One-Liner, expanded and annotated (accepted answer)**
```
class Solution {
    func asteroidCollision(_ asteroids: [Int]) -> [Int] {
        asteroids.reduce(into: [Int]()) { stack, asteroid in
            while asteroid < 0, let top = stack.last, top > 0 {
                if top <= -asteroid {
                    stack.removeLast()
                }
                guard top < -asteroid else { return } // `asteroid` destroyed, do not add
            }
            stack.append(asteroid)
        }
    }
}
```