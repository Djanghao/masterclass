# make_heap+ accumulate||beats 100%

**Author:** anwendeng
**Votes:** 33
**Link:** [https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/6137511/](https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/6137511/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
An easy question is solved by using heap.
`std::make_heap, std::pop_heap & std::push_heap` is in use.

C++ & Python are done.
2nd C++ uses std::priority_queue which has more SC $O(n)$ & other process.
# Approach
<!-- Describe your approach to solving the problem. -->
1. Use `make_heap` to apply to `gifts`
2. Use a loop from i=0 to i=k-1 and the back of gifts>1 do the following
```
pop_heap(gifts.begin(), gifts.end());
x=gifts.back(); // choose x on the top
gifts.back()=sqrt(gifts.back()); // update the number on the top
push_heap(gifts.begin(), gifts.end());
```
3. `sum(gifts)` is the answer
4. Python code is also made
5. In Python version heapify, heappop & heappush are used. It's to notice the heap in Python is minimal heap whereas in C++ it 's the maximal heap. A changing sign trick is used.
6. 2nd C++ uses priority_queue; the process is to take the summation at first, and then  to subtract  the difference between the value on the top & its isqrt (inspired by the solution of @Sergei)
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n+k\\log n)$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$
# Code||C++ 0ms beats 100%
```cpp []
class Solution {
public:
    long long pickGifts(vector<int>& gifts, int k) {
        make_heap(gifts.begin(), gifts.end());
        for (int i=0, x=INT_MAX; i<k && x>1; i++){
            pop_heap(gifts.begin(), gifts.end());
            x=gifts.back();
            gifts.back()=sqrt(gifts.back());
            push_heap(gifts.begin(), gifts.end());
        }
        return accumulate(gifts.begin(), gifts.end(), 0LL);
    }
};
```
```Python []
class Solution:
    def pickGifts(self, gifts: List[int], k: int) -> int:
        gifts=[-x for x in gifts]
        heapify(gifts)
        x, i=1<<32, 0
        while i<k and x>1:
            x=-heappop(gifts)
            heappush(gifts, -isqrt(x))
            i+=1
        return -sum(gifts)
       
```
# C++ using priority_queue||0ms beats 100%
```
class Solution {
public:
    long long pickGifts(vector<int>& gifts, int k) {
        long long sum=accumulate(gifts.begin(), gifts.end(), 0LL);
        priority_queue<int> pq(gifts.begin(), gifts.end());
        for (int i=0, x=INT_MAX, y; i<k && x>1; i++){
            x=pq.top(), y=sqrt(x);
            pq.pop();
            sum-=(x-y);
            pq.push(y);
        }
        return sum;
    }
};
```
# Similar method solves [2530. Maximal Score After Applying K Operations](https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5909257/pop-prioriy-queue-til-top-1-86ms-beats-100/)
[Please turn on English subtitles]
[https://youtu.be/ZfomMqDB4KA?si=8rs9ijVcv9qjMNsm](https://youtu.be/ZfomMqDB4KA?si=8rs9ijVcv9qjMNsm)