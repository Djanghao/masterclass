# ✅ [Python/Rust/C++] concise using map & heap (with detailed comments)

**Author:** iablokov
**Votes:** 7
**Link:** [https://leetcode.com/problems/top-k-frequent-words/solutions/2721398/](https://leetcode.com/problems/top-k-frequent-words/solutions/2721398/)

---

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
**** 
**Python.** This [**solution**](https://leetcode.com/submissions/detail/825677154/) employs *Counter* to obtain sorted word frequencies. It demonstrated **54 ms runtime (97.95%)** and used **13.9 MB memory (94.22%)**. Time complexity is log-linear: **O(N\\*logN)**. Space complexity is linear: **O(N)**.
```
from collections import Counter

class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        
        # [1] Starting from Python 3.7, dictionary order is guaranteed 
        #     to be insertion order, thus, we can use 'sorted' first
        return [w for w,_ in Counter(sorted(words)).most_common(k)]
        
        # [2] Other one-liners are also possible, e.g.,
        #     return list(zip(*Counter(sorted(words)).most_common(k)))[0]
```
**** 
**Rust.** This [**solution**](https://leetcode.com/submissions/detail/825788554/) employs *HashMap* and *BinaryHeap* to compute sorted frequencies. It demonstrated **0 ms runtime (100.00%)** and used **2.2 MB memory (37.84%)**. Time complexity is log-linear: **O(N\\*logN)**. Space complexity is linear: **O(N)**.
```
use std::collections::{HashMap, BinaryHeap};
use std::cmp::Reverse;

impl Solution 
{
    pub fn top_k_frequent(words: Vec<String>, k: i32) -> Vec<String> 
    {
        // [1] obtain word frequencies
        let mut freq = words
            .into_iter()
            .fold(HashMap::new(), |mut f,w| { *f.entry(w).or_default() += 1; f });
        
        // [2] heapify to sort:
        //     - first, by count in decreasing order
        //     - next, by word in alphabetic (reverse) order
        let mut heap = freq
            .into_iter()
            .map(|(w, c)| (c, Reverse(w)))
            .collect::<BinaryHeap<(i32,Reverse<String>)>>();

        // [3] extract first k elements from the heap
        (0..k)
            .map(|_| heap.pop().unwrap().1.0)
            .collect()

        // in nightly Rust, there is another solution:
        // heap.into_iter_sorted()
        //    .take(k as usize)
        //    .map(|(c,Reverse(s))| s)
        //    .collect::<Vec<String>>()
    }
}
```
**** 
**\u0421++.** This [**solution**](https://leetcode.com/submissions/detail/825832080/) employs *unordered_map* and *priority_queue* to obtain sorted frequencies. It demonstrated **4 ms runtime (99.62%)** and used **12.7 MB memory (39.56%)**. Time complexity is log-linear: **O(N\\*logN)**. Space complexity is linear: **O(N)**.
```
class Solution 
{
    using strint = pair<string, int>;
    
    // define a custom comparator for the frequency string/int pairs 
    struct cmp 
    {
        bool operator()(const strint& left, const strint& right) const 
        {
            return left.second != right.second ? 
                   left.second < right.second : left.first > right.first;
        }
    };
    
public:
    
    vector<string> topKFrequent(vector<string>& words, int k) 
    {
        // [1] obtain word frequencies
        unordered_map<string, int> freq;
        for (auto& word : words) ++freq[word];
        
        // [2] heapify to sort
        priority_queue<strint, vector<strint>, cmp> heap { freq.begin(), freq.end() };
        
        // [3] extract first k elements from the heap
        vector<string> res;
        while (!heap.empty() && k--) { res.push_back(heap.top().first); heap.pop(); }
        
        return res;
    }
};
```
