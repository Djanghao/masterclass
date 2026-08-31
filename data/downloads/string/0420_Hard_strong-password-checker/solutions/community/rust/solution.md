# Rust Solution using Dijkstra's Algorithm (156 ms, 85.3 MB) and BFS (18 ms, 6.7 MB)

**Author:** Noble_Mushtak
**Votes:** 9
**Link:** [https://leetcode.com/problems/strong-password-checker/solutions/1497854/](https://leetcode.com/problems/strong-password-checker/solutions/1497854/)

---

The words "minimum number of steps" made me think of "minimum cost," which made me think of Dijkstra's algorithm, so I solved it by modelling the changes we can make to the string as edges in a graph and then applying Dijkstra's algorithm. This is not the fastest or easiest solution to implement, but I think it's still interesting.

In order to create a strong password from the given string, we need to traverse through the string, so each node in this graph must keep track of the current index where we are in the string. Then, the graph has four types of edges: (1) Add the character at the current index to the strong password and increment the index (2) Increment the current index without adding the current character (i.e. delete the char at the current index) (3) Insert a character right before the current index (4) Do action 3 followed by action 2 (i.e. replace the char at the current index)

Next, every node in the graph can be represented as a tuple `(ind, num_chars, lower, upper, digit, last_two)`. `ind` represents the current index. `num_chars` represents the number of characters we have added to the strong password so far. `lower`, `upper`, and `digit` are booleans representing whether we have added a lowercase, uppercase, or digit so far. Finally, `last_two` is one of three possibilities: `Double(c)` which represents that the strong password ends in "cc", `Alone(c)` which represents that the strong password ends in "c" but not "cc", or `Empty` which represents that the strong password is empty. In the implementation, we do not allow traversing from nodes with `Double(c)` along edges where we are adding "c" to the end of the strong password, which prevents having three characters in a row in the strong password.

We start out at the beginning of the given string with an empty strong password, so the initial node is `(0, 0, false, false, false, Empty)`. Once we know the initial node, we can implement Dijkstra's algorithm with the four types of edges mentioned above, and we stop once we reach a node of the form `(I, N, true, true, true, _)` where `6 <= N <= 20` and `I` is at the end of the string (i.e. `I = password.len()`) because that means we created a valid strong password after processing all of the string.

One problem is that for edges type 3 and type 4, we have to choose a character to insert and there are 64 different possible characters we could insert, which means, between all the edge types, for any given node there are up to possible 1+1+64+64=130 outgoing edges. In order to cut down on that, we notice that inserting any lowercase letter is the same as any other lowercase letter, as long as it's different from the character at the current index to avoid creating three characters in a row. The same holds for uppercase letters and digits, so we really just need to have one outgoing edge for lowercase letter, one outgoing edge for uppercase letter, and one outgoing edge for digits. This means there are only 3 outgoing edged for types 3 and 4, bringing us to 1+1+3+3=8 outgoing edges for each vertex, which is much more feasible.

There are 51 possibilities for `ind` (0...50), 21 for `num_chars` (0...20), `2` for `lower`, `upper`, and `digit`, and finally `1+64+64=129` possibilities for `last_two`, meaning the number of vertices in our graph is `51*21*2*2*2*129=1105272`. And then there are `8` edges for each vertex, giving us `8842176` edges. The complexity of Dijkstra's is `O((V+E)log(V))` and `(1105272+8842176)log(1105272)/log(2)=199704668`. That is certainly much slower than the linear-time `O(N)` solutions where `N=50`, but it still allows us to reliably run in under a second.

To get the complexity in more symbolic terms, if N is the length of the string, M is the maximum length of a strong password, T is the number of types of characters the strong password must have (i.e. for this problem, T=3 because lowercase, uppercase, digit are required), and A is the number of possible characters in the string (i.e. for this problem, A=26+26+10+1+1=64 because lowercase, uppercase, digit, period, and exclamation mark), then the number of vertices is V=(N+1)(M+1)\\*2^T\\*(1+2\\*A) and the number of edges is E=V\\*(1+1+2\\*T), so the complexity ends up being O(NM\\*2^T\\*A\\*T\\*log(NM\\*2^T\\*A)), which can also be expressed as O(2^T\\*NMAT(T+log(NMA))).
```
use std::collections::BinaryHeap;
use std::cmp::Reverse;

#[derive(Clone, Copy, PartialOrd, PartialEq, Eq, Ord, Debug)]
enum LastTwo {
    Empty,
    Alone(char),
    Double(char)
}
use LastTwo::*;

fn upd(lt: LastTwo, c: char) -> LastTwo {
    if lt == Alone(c) || lt == Double(c) {
        Double(c)
    } else {
        Alone(c)
    }
}

#[derive(Clone, Copy, PartialOrd, PartialEq, Eq, Ord, Debug)]
struct Info {
    cost: Reverse<usize>,
    ind: usize,
    num_chars: usize,
    lower: bool,
    upper: bool,
    digit: bool,
    last_two: LastTwo
}

impl Info {
    fn new(cost: Reverse<usize>, ind: usize, num_chars: usize, lower: bool, upper: bool, digit: bool, last_two: LastTwo) -> Info {
        Info { cost, ind, num_chars, lower, upper, digit, last_two }
    }
    
    fn calc_hash(&self) -> usize {
        let mut res = self.ind;
        res *= 21;
        res += self.num_chars;
        res *= 2;
        res += (self.lower as usize);
        res *= 2;
        res += (self.upper as usize);
        res *= 2;
        res += (self.digit as usize);
        res *= 1+2*256;
        res += match self.last_two {
            Empty => 0,
            Alone(ch) => 1+(ch as usize),
            Double(ch) => 257+(ch as usize)
        };
        res
    }
}

fn inc_rev(x: Reverse<usize>) -> Reverse<usize> {
    Reverse(x.0+1)
}

fn add_new_info(s: &mut [Option<usize>], h: &mut BinaryHeap<Info>, info: Info) {
    let hash = info.calc_hash();
    let should_insert = match s[hash] {
        None => true,
        Some(c) => info.cost.0 < c
    };
    if should_insert {
        s[hash] = Some(info.cost.0);
        h.push(info);
    }
}

fn add_char(mut s: &mut [Option<usize>], mut h: &mut BinaryHeap<Info>, info: Info, ch: char, new_cost: Reverse<usize>, new_ind: usize) -> bool {
    let new_lower = info.lower || ch.is_ascii_lowercase();
    let new_upper = info.upper || ch.is_ascii_uppercase();
    let new_digit = info.digit || ch.is_ascii_digit();
    if info.last_two != Double(ch) && info.num_chars < 20 {
        add_new_info(&mut s, &mut h, Info::new(new_cost, new_ind, info.num_chars+1, new_lower, new_upper, new_digit, upd(info.last_two, ch)));
        true
    } else { false }
}

fn change_char(mut s: &mut [Option<usize>], mut h: &mut BinaryHeap<Info>, chars: &[char], info: Info, ch: char) -> bool {
    if ch == chars[info.ind] || (info.ind+1 < chars.len() && ch == chars[info.ind+1]) {
        return false;
    }

    add_char(&mut s, &mut h, info, ch, inc_rev(info.cost), info.ind+1)
}

fn insert_char(mut s: &mut [Option<usize>], mut h: &mut BinaryHeap<Info>, chars: &[char], info: Info, ch: char) -> bool {
    if info.ind < chars.len() && ch == chars[info.ind] {
        return false;
    }
    
    add_char(&mut s, &mut h, info, ch, inc_rev(info.cost), info.ind)
}

impl Solution {
    pub fn strong_password_checker(password: String) -> i32 {
        let chars: Vec<char> = password.chars().collect();
        
        let mut min_cost: Vec<Option<usize>> = vec![None; (chars.len()+1)*21*2*2*2*(1+2*256)];
        let mut heap: BinaryHeap<Info> = BinaryHeap::new();
        
        add_new_info(&mut min_cost, &mut heap, Info::new(Reverse(0), 0, 0, false, false, false, Empty));
        
        while let Some(info) = heap.pop() {
            if let Some(c) = min_cost[info.calc_hash()] {
                if c < info.cost.0 {
                    continue;
                }
            }
            
            if info.ind == chars.len() && info.num_chars >= 6 && info.lower && info.upper && info.digit {
                return info.cost.0 as i32;
            }
            
            if info.ind < chars.len() {
                //Edge type 1 (i.e. change nothing)
                add_char(&mut min_cost, &mut heap, info, chars[info.ind], info.cost, info.ind+1);
                
                //Edge type 2 (i.e. delete character)
                add_new_info(&mut min_cost, &mut heap, Info::new(inc_rev(info.cost), info.ind+1, info.num_chars, info.lower, info.upper, info.digit, info.last_two));
                
                //Edge type 4 (i.e. replace char): lowercase
                for ch in ('a'..='z') {
                    if change_char(&mut min_cost, &mut heap, &chars, info, ch) { break; }
                }
                //Edge type 4: uppercase
                for ch in ('A'..='Z') {
                    if change_char(&mut min_cost, &mut heap, &chars, info, ch) { break; }
                }
                //Edge type 4: digit
                for ch in ('0'..='9') {
                    if change_char(&mut min_cost, &mut heap, &chars, info, ch) { break; }
                }
            }
            
            //Edge type 3 (i.e. insert char): lowercase
            for ch in ('a'..='z') {
                if insert_char(&mut min_cost, &mut heap, &chars, info, ch) { break; }
            }
            //Edge type 3: uppercase
            for ch in ('A'..='Z') {
                if insert_char(&mut min_cost, &mut heap, &chars, info, ch) { break; }
            }
            //Edge type 3: digit
            for ch in ('0'..='9') {
                if insert_char(&mut min_cost, &mut heap, &chars, info, ch) { break; }
            }
        }
        panic!("No answer found!");
    }
}
```

EDIT: The reason I used Dijkstra's algorithm is because the edges have different weights: Edge type 1 has weight 0 while edge types 2, 3, 4 have weight 1. However, I realized that, since edge type 1 has weight 0, we can immediately traverse all the edges of type 1 whenever we add a new node to the queue. And this doesn't cause us to go into an infinite loop because each edge of type 1 increments the index, so this traversal stops once we hit the index `password.len()`.

By immediately traversing the edges of type 1, the rest of our search only has to deal with edges of type 2, 3, 4. Since all of these edges have the same weight, this means we can treat the graph as unweighted, and thus use BFS instead of Dijkstra's. This allows us to replace our priority queue with just a queue, which takes the log factor off of our complexity, i.e. the complexity for BFS is just O(V+E)=O(2^T\\*NMAT). As advertised in the title, this solution takes just 18 ms as opposed to the Dijkstra's solution which takes 156 ms.
```
use std::collections::VecDeque;

#[derive(Clone, Copy, PartialOrd, PartialEq, Eq, Ord, Debug)]
enum LastTwo {
    Empty,
    Alone(char),
    Double(char)
}
use LastTwo::*;

fn upd(lt: LastTwo, c: char) -> LastTwo {
    if lt == Alone(c) || lt == Double(c) {
        Double(c)
    } else {
        Alone(c)
    }
}

#[derive(Clone, Copy, PartialOrd, PartialEq, Eq, Ord, Debug)]
struct Info {
    cost: usize,
    ind: usize,
    num_chars: usize,
    lower: bool,
    upper: bool,
    digit: bool,
    last_two: LastTwo
}

impl Info {
    fn new(cost: usize, ind: usize, num_chars: usize, lower: bool, upper: bool, digit: bool, last_two: LastTwo) -> Info {
        Info { cost, ind, num_chars, lower, upper, digit, last_two }
    }
    
    fn calc_hash(&self) -> usize {
        let mut res = self.ind;
        res *= 21;
        res += self.num_chars;
        res *= 2;
        res += (self.lower as usize);
        res *= 2;
        res += (self.upper as usize);
        res *= 2;
        res += (self.digit as usize);
        res *= 1+2*256;
        res += match self.last_two {
            Empty => 0,
            Alone(ch) => 1+(ch as usize),
            Double(ch) => 257+(ch as usize)
        };
        res
    }
}

fn add_char_to_info(info: Info, ch: char, new_cost: usize, new_ind: usize) -> Option<Info> {
    if info.last_two == Double(ch) || info.num_chars >= 20 { return None; }
    
    let new_lower = info.lower || ch.is_ascii_lowercase();
    let new_upper = info.upper || ch.is_ascii_uppercase();
    let new_digit = info.digit || ch.is_ascii_digit();
    Some(Info::new(new_cost, new_ind, info.num_chars+1, new_lower, new_upper, new_digit, upd(info.last_two, ch)))
}

fn add_new_info(s: &mut [bool], h: &mut VecDeque<Info>, chars: &[char], mut info: Info) {
    loop {
        let hash = info.calc_hash();
        if !s[hash] {
            s[hash] = true;
            h.push_back(info);
            
            //Once we hit chars.len(), there are no more type 1 edges
            if info.ind >= chars.len() {
                break;
            }
            //If we can traverse an edge type 1 here, traverse that edge immediately
            //i.e. set info to new_info so new_info gets added to the queue on the next loop iteration
            if let Some(new_info) = add_char_to_info(info, chars[info.ind], info.cost, info.ind+1) {
                info = new_info;
            }
            else { break; }
        } else {
            break;
        }
    }
}

fn add_char(mut s: &mut [bool], mut h: &mut VecDeque<Info>, chars: &[char], info: Info, ch: char, new_cost: usize, new_ind: usize) -> bool {
    if let Some(new_info) = add_char_to_info(info, ch, new_cost, new_ind) {
        add_new_info(&mut s, &mut h, chars, new_info);
        true
    } else { false }
}

fn change_char(mut s: &mut [bool], mut h: &mut VecDeque<Info>, chars: &[char], info: Info, ch: char) -> bool {
    if ch == chars[info.ind] || (info.ind+1 < chars.len() && ch == chars[info.ind+1]) {
        return false;
    }

    add_char(&mut s, &mut h, chars, info, ch, info.cost+1, info.ind+1)
}

fn insert_char(mut s: &mut [bool], mut h: &mut VecDeque<Info>, chars: &[char], info: Info, ch: char) -> bool {
    if info.ind < chars.len() && ch == chars[info.ind] {
        return false;
    }
    
    add_char(&mut s, &mut h, chars, info, ch, info.cost+1, info.ind)
}

impl Solution {
    pub fn strong_password_checker(password: String) -> i32 {
        let chars: Vec<char> = password.chars().collect();
        
        let mut min_cost: Vec<bool> = vec![false; (chars.len()+1)*21*2*2*2*(1+2*256)];
        let mut heap: VecDeque<Info> = VecDeque::new();
        
        add_new_info(&mut min_cost, &mut heap, &chars, Info::new(0, 0, 0, false, false, false, Empty));
        
        while let Some(info) = heap.pop_front() {
            if info.ind == chars.len() && info.num_chars >= 6 && info.lower && info.upper && info.digit {
                return info.cost as i32;
            }
            
            if info.ind < chars.len() {
                //Edge type 2 (i.e. delete character)
                add_new_info(&mut min_cost, &mut heap, &chars, Info::new(info.cost+1, info.ind+1, info.num_chars, info.lower, info.upper, info.digit, info.last_two));
                
                //Edge type 4 (i.e. replace char): lowercase
                for ch in ('a'..='z') {
                    if change_char(&mut min_cost, &mut heap, &chars, info, ch) { break; }
                }
                //Edge type 4: uppercase
                for ch in ('A'..='Z') {
                    if change_char(&mut min_cost, &mut heap, &chars, info, ch) { break; }
                }
                //Edge type 4: digit
                for ch in ('0'..='9') {
                    if change_char(&mut min_cost, &mut heap, &chars, info, ch) { break; }
                }
            }
            
            //Edge type 3 (i.e. insert char): lowercase
            for ch in ('a'..='z') {
                if insert_char(&mut min_cost, &mut heap, &chars, info, ch) { break; }
            }
            //Edge type 3: uppercase
            for ch in ('A'..='Z') {
                if insert_char(&mut min_cost, &mut heap, &chars, info, ch) { break; }
            }
            //Edge type 3: digit
            for ch in ('0'..='9') {
                if insert_char(&mut min_cost, &mut heap, &chars, info, ch) { break; }
            }
        }
        panic!("No answer found!");
    }
}
```