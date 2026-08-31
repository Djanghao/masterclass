# [Rust] 4 Implementations (150ms, 150ms, 30ms,16ms)

**Author:** keep_of_kalessin
**Votes:** 1
**Link:** [https://leetcode.com/problems/word-ladder/solutions/1765599/](https://leetcode.com/problems/word-ladder/solutions/1765599/)

---


### Adjacency list + BFS

The main idea is to transform the word list to an adjacency list graph representation. The we can easily run a BFS on it.

```rust
use std::collections::VecDeque;

const NO_PATH_FOUND: i32 = 0;

pub fn ladder_length(begin_word: String, end_word: String, mut word_list: Vec<String>) -> i32 {
    let mut start = None;
    let mut end = None;

    // make sure that the word list contains the begin/end words
    // then find their indexes
    for (idx, word) in word_list.iter().enumerate() {
        if begin_word.eq(word) {
            start = Some(idx);
        }

        if end_word.eq(word) {
            end = Some(idx);
        }

        if start.is_some() && end.is_some() {
            break;
        }
    }

    if end.is_none() {
        return NO_PATH_FOUND;
    }

    if start.is_none() {
        word_list.push(begin_word);
        start = Some(word_list.len() - 1);
    }

    let start = start.unwrap();
    let end = end.unwrap();

    // Build the adjacency lists
    let mut graph = vec![vec![]; word_list.len()];
    for i in 0..word_list.len() {
        for j in i + 1..word_list.len() {
            if is_adjacent(&word_list[i], &word_list[j]) {
                graph[i].push(j);
                graph[j].push(i);
            }
        }
    }

    // Run a BFS search
    let mut visited = vec![false; word_list.len()];
    let mut queue = VecDeque::new();

    // dist=1, because we count the words, not the transitions:
    // "cat" -> "bat" => 2 words, 1 transition
    queue.push_back((start, 1));

    while let Some((idx, dist)) = queue.pop_front() {
        if visited[idx] {
            continue;
        }

        if idx == end {
            return dist;
        }

        visited[idx] = true;
        graph[idx]
            .iter()
            .copied()
            .filter(|&idx| !visited[idx])
            .for_each(|i| queue.push_back((i, dist + 1)));
    }

    NO_PATH_FOUND
}

fn is_adjacent(a: &str, b: &str) -> bool {
    let a = a.as_bytes();
    let b = b.as_bytes();
    assert_eq!(a.len(), b.len());

    let mut diffs = 0;
    for idx in 0..a.len() {
        if a[idx] != b[idx] {
            diffs += 1;
        }

        if diffs > 1 {
            break;
        }
    }

    diffs == 1
}
```

### Bidirectional search

The same idea as above, bu we run a Bi-Directional BFS which should be much faster.

```rust
use std::collections::HashSet;

const NO_PATH_FOUND: i32 = 0;

pub fn ladder_length(begin_word: String, end_word: String, mut word_list: Vec<String>) -> i32 {
    let mut start = None;
    let mut end = None;

    // make sure that the word list contains the begin/end words
    // then find their indexes
    for (idx, word) in word_list.iter().enumerate() {
        if begin_word.eq(word) {
            start = Some(idx);
        }

        if end_word.eq(word) {
            end = Some(idx);
        }

        if start.is_some() && end.is_some() {
            break;
        }
    }

    if end.is_none() {
        return NO_PATH_FOUND;
    }

    if start.is_none() {
        word_list.push(begin_word);
        start = Some(word_list.len() - 1);
    }

    let start = start.unwrap();
    let end = end.unwrap();

    // Build the adjacency lists
    let mut graph = vec![vec![]; word_list.len()];
    for i in 0..word_list.len() {
        for j in i + 1..word_list.len() {
            if is_adjacent(&word_list[i], &word_list[j]) {
                graph[i].push(j);
                graph[j].push(i);
            }
        }
    }

    // Run a bidirectional BFS search
    let mut visited = vec![false; word_list.len()];
    visited[start] = true;
    visited[end] = true;

    let mut left = HashSet::new();
    left.insert(start);

    let mut right = HashSet::new();
    right.insert(end);

    let mut neighbours = HashSet::new();

    let mut len = 1;
    while !left.is_empty() && !right.is_empty() {
        // make sure that "left" contains fewer elements
        if left.len() > right.len() {
            std::mem::swap(&mut left, &mut right);
        }

        for word in left.drain() {
            for neighbour in graph[word].iter().copied() {
                if right.contains(&neighbour) {
                    return len + 1;
                }

                if !visited[neighbour] {
                    visited[neighbour] = true;
                    neighbours.insert(neighbour);
                }
            }
        }

        std::mem::swap(&mut left, &mut neighbours);
        len += 1;
    }

    NO_PATH_FOUND
}

fn is_adjacent(a: &str, b: &str) -> bool {
    let a = a.as_bytes();
    let b = b.as_bytes();
    assert_eq!(a.len(), b.len());

    let mut diffs = 0;
    for idx in 0..a.len() {
        if a[idx] != b[idx] {
            diffs += 1;
        }

        if diffs > 1 {
            break;
        }
    }

    diffs == 1
}
```

### Alternative (faster!) implementation of Bi-Directional BFS

It turns out that building the graph by using an O(n^2) algorithm, as in the
previous two implementations is very slow. For instance in a wordlist with 5000
words it takes around 4s (on my machine!) to build the graph and less than 500 microseconds to
run the BFS. So this implementation exploits the fact that the ladder length is
very short, thus it's pretty cheap to run `is_adjacent()` inside the hot loop.

For example both previous implementations take around 150ms on LeetCode, while
this one takes around 20-30ms, which is 7-8 times faster (all timings are fromthe time of writing this post and may change if leetcode modifies its test suite).

```rust
use std::collections::HashSet;

pub fn ladder_length(begin_word: String, end_word: String, word_list: Vec<String>) -> i32 {
    if word_list.iter().find(|&w| end_word.eq(w)).is_none() {
        return 0;
    }

    let mut visited = HashSet::new();
    let mut left = HashSet::new();
    let mut right = HashSet::new();
    let mut next = HashSet::new();

    left.insert(begin_word.as_str());
    right.insert(end_word.as_str());
    visited.insert(begin_word.as_str());
    visited.insert(end_word.as_str());

    let mut len = 1;
    while !left.is_empty() && !right.is_empty() {
        if left.len() > right.len() {
            std::mem::swap(&mut left, &mut right);
        }

        for w in left.drain() {
            for n in word_list.iter().map(|s| s.as_str()) {
                if is_adjacent(w, n) {
                    if right.contains(n) {
                        return len + 1;
                    }

                    if visited.insert(n) {
                        next.insert(n);
                    }
                }
            }
        }

        std::mem::swap(&mut left, &mut next);
        len += 1;
    }

    0
}

fn is_adjacent(a: &str, b: &str) -> bool {
    let a = a.as_bytes();
    let b = b.as_bytes();
    assert_eq!(a.len(), b.len());

    let mut diffs = 0;
    for idx in 0..a.len() {
        if a[idx] != b[idx] {
            diffs += 1;
        }

        if diffs > 1 {
            break;
        }
    }

    diffs == 1
}
```


### Bidirectional search + word list pruning

This solution build on the previous one. The main ideas is that we don't need to
iterate over and over again every word we have already processed.

So if we remove the "visited" words set, then:

* we have fewer elements to iterate over
* we don't have to maintain a `visited` set - i.e.- fewer allocations and fewer
  hashcode computations

This runs in 16ms in the LeetCode judge, which is slightly faster than the
previous approach

```rust
use std::collections::HashSet;

pub fn ladder_length(begin_word: String, end_word: String, mut word_list: Vec<String>) -> i32 {
    match word_list.iter().position(|w| end_word.eq(w)) {
        None => return 0,
        Some(idx) => word_list.swap_remove(idx),
    };

    let mut left = HashSet::new();
    let mut right = HashSet::new();
    let mut next = HashSet::new();

    left.insert(begin_word);
    right.insert(end_word);

    let mut len = 1;
    while !left.is_empty() && !right.is_empty() {
        if left.len() > right.len() {
            std::mem::swap(&mut left, &mut right);
        }

        for w in left.drain() {
            let mut idx = 0;

            for word in right.iter() {
                if is_adjacent(&w, word.as_str()) {
                    return len + 1;
                }
            }

            while idx < word_list.len() {
                if !is_adjacent(&w, &word_list[idx]) {
                    idx += 1;
                    continue;
                }

                let neighbour = word_list.swap_remove(idx);
                next.insert(neighbour);
            }
        }

        std::mem::swap(&mut left, &mut next);
        len += 1;
    }

    0
}

fn is_adjacent(a: &str, b: &str) -> bool {
    let a = a.as_bytes();
    let b = b.as_bytes();
    assert_eq!(a.len(), b.len());

    let mut diffs = 0;
    for idx in 0..a.len() {
        if a[idx] != b[idx] {
            diffs += 1;
        }

        if diffs > 1 {
            break;
        }
    }

    diffs == 1
}
```