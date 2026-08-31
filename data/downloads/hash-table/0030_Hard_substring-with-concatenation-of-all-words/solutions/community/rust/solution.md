# [Rust 🦀] Using custom trie-map & sliding window | 0ms

**Author:** tmtappr
**Votes:** 2
**Link:** [https://leetcode.com/problems/substring-with-concatenation-of-all-words/solutions/4486729/](https://leetcode.com/problems/substring-with-concatenation-of-all-words/solutions/4486729/)

---

# Intuition
Treating the iteration over `s` as a sliding window problem, only the word going into and the word coming out of the window need to be monitored. This reduces the amount of processing that needs to be done.

This solution can get 0 milliscond test times. Might take several runs, but it'll do it.

I wrote several large solutions to this problem progressively getting better speeds of execution before this final implementation. This problem can be difficult to find a performant solution to.

One of the areas that really boosted execution speed was only checking the beginning and end of the window for strings entering and exiting; this is a typical strategy of a sliding window, but this problem made it challenging. 

Another thing was reducing the amount of processing that needs to be done to detect a match. The `HashMap` class has a serious hashing overhead, and every character of a string has to be iterated over to produce a hash. The trie implementation only needs to check as many characters as it needs to and will terminate early if the key isn't in the trie.

# Approach
There are some complicated aspects to this, but first at the high level, this is a sliding window design. The characters at the end of the window are checked to see if a whole new word has entered the window, and at the beginning of the window a check is done to see if a whole word is sitting there about to exit.

When `words.len()` equals the number of words in `words[i % k]`, then we know we have a match. This is the complicated part. Since a word can start at any index once within the window, we need to maintain multiple word counts. For a valid permutation, each word's first character is going to be equidistant by `k` from its next adjacent word.

This is why the values of the trie-map are vectors. These vectors keep track of the word counts at each modulo `k` (word size) offset within the window. When a new word is detected entering the window, it's `i % k` position in its count array is updated. A separate array is used to hold the collective count of the words and if its `i % k` value equals the number of words, then the current index holds a permutation starting at the beginning of the window to the end.

The trie-map implementation is FAST. It beats the speed of `HashMap` hands down even when `HashMap` is optimized with a custom hasher. As previously mentioned, this can be attributed to the fact that for this specific application it has to perform significantly less work to determine a miss. It stops processing a key at the first character not in the trie. A `HashMap` has to process the entire string every time.

# Complexity
- Time complexity: $$O(n + k)$$
- Space complexity: $$O(|words| \	imes k)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` rust []
use std::collections::VecDeque;
use std::iter::repeat;

// This could be replaced with a HashMap if you don't want the trie.
type WordMultiSet = TrieMap<Vec<i32>, 28, b'_'>;

impl Solution {
    pub fn find_substring(s: String, words: Vec<String>) -> Vec<i32> {
        let n = words.len();
        let k = words[0].len();
        let w = words.len() * k;

        if s.len() < w { 
            return Vec::default(); 
        }
        let mut trie   = Self::get_word_multiset(&words);
        let mut window = repeat(b'_').take(w).collect::<VecDeque<_>>();
        let mut nwords = vec![0; k];
        let mut answer = Vec::new();

        for (i, b) in (0..).zip(s.bytes()) {
            window.push_back(b);
            window.pop_front();

            // Handle incoming word.
            if let Some(count) = trie.get_mut(window.range(w - k..)) {
                if count[i % k] > 0 { 
                    nwords[i % k] += 1; 
                }
                count[i % k] -= 1;

                if i + 1 >= w && nwords[i % k] == n {
                    answer.push((i + 1 - w) as i32);
                }
            }
            // Handle outgoing word.
            if let Some(count) = trie.get_mut(window.range(0..k)) {
                count[i % k] += 1;
                if count[i % k] > 0 { 
                    nwords[i % k] -= 1; 
                }
            }
        }
        answer
    }
    fn get_word_multiset<'a>(words: &'a [String]) -> WordMultiSet {
        let mut hset = WordMultiSet::new();
        let     k    = words[0].len();
        for w in words {
            let count = hset.get_or_insert_with(w.as_bytes(), ||vec![0; k]);
            let num   = count[0] + 1;
            count.fill(num);
        }
        hset
    }
}
```
``` rust []
#[repr(transparent)]
#[derive(Copy, Clone)]
struct ValueHandle(usize);

#[repr(transparent)]
#[derive(Copy, Clone)]
struct NodeHandle(u8);

struct Node<const ORDER: usize> {
    brats : [Option<NodeHandle>; ORDER],
    value : Option<ValueHandle>,
}
impl<const ORDER: usize> Node<ORDER> {
    fn new() -> Self {
        Self { brats: [None; ORDER], value: None }
    }
}

pub struct TrieMap<V, const ORDER: usize, const BASE_CHAR: u8> {
    root   : NodeHandle,
    nodes  : Vec<Node<ORDER>>,
    values : Vec<V>,
}
impl<V, const ORDER: usize, const BASE_CHAR: u8> TrieMap<V, ORDER, BASE_CHAR> {
    pub fn new() -> Self {
        Self { 
            root   : NodeHandle(0), 
            nodes  : vec![Node::new()], 
            values : vec![],
        }
    }
    pub fn get_mut<'a, K>(&mut self, key: K) -> Option<&mut V> 
    where
        K: IntoIterator<Item = &'a u8>,
    {
        let mut curr = self.root;
        for b in key {
            let idx = (b - BASE_CHAR) as usize;
            if let Some(next) = self.hderef(curr).brats[idx] {
                curr = next;
            } else {
                return None;
            }
        }
        if let Some(value) = self.hderef(curr).value {
            Some(&mut self.values[value.0])
        } else {
            None
        }
    }
    pub fn get_or_insert_with<'a, K, F>(&mut self, key: K, f: F) -> &mut V 
    where
        K: IntoIterator<Item = &'a u8>,
        F: FnOnce() -> V,
    {
        let mut curr = self.root;
        for b in key {
            let idx = (b - BASE_CHAR) as usize;
            if let Some(next) = self.hderef(curr).brats[idx] {
                curr = next;
            } else {
                let next = self.new_node();
                self.hderef_mut(curr).brats[idx] = Some(next);
                curr = next;
            }
        }
        let handle = {
            if let Some(handle) = self.hderef(curr).value {
                handle
            } else {
                let handle = ValueHandle(self.values.len());
                self.values.push(f());
                self.hderef_mut(curr).value = Some(handle);
                handle
            }
        };
        &mut self.values[handle.0]
    }
    fn new_node(&mut self) -> NodeHandle {
        self.nodes.push(Node::new());
        NodeHandle(self.nodes.len() as u8 - 1)
    }
    fn hderef(&self, handle: NodeHandle) -> &Node<ORDER> {
        &self.nodes[handle.0 as usize]
    }
    fn hderef_mut(&mut self, handle: NodeHandle) -> &mut Node<ORDER> {
        &mut self.nodes[handle.0 as usize]
    }
}
```