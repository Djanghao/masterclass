# Priority Queue

**Author:** votrubac
**Votes:** 14
**Link:** [https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/1390637/](https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/1390637/)

---

On each step we want to remove as many stones as possible, so we pick the largets pile.

We can track piles and get the largest one using max heap.

#### Approach 1: Array-based heap
**C++**
```cpp
int minStoneSum(vector<int>& p, int k) {
    make_heap(begin(p), end(p));
    while (--k >= 0) {
        pop_heap(begin(p), end(p));
        p.back() -= p.back() / 2;
        push_heap(begin(p), end(p));
    }
    return accumulate(begin(p), end(p), 0);
}
```

#### Approach 2: Priority queue
**C++**
```cpp
int minStoneSum(vector<int>& piles, int k) {
    int total = accumulate(begin(piles), end(piles), 0);
    priority_queue<int> p(begin(piles), end(piles));
    while (--k >= 0) {
        auto st = p.top(); p.pop();
        total -= st / 2;
        p.push((st + 1) / 2);
    }
    return total;
}
```