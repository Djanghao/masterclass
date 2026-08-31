# pop prioriy queue til top=1||86ms Beats 100%

**Author:** anwendeng
**Votes:** 37
**Link:** [https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5909257/](https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5909257/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This question can be solved with priority queue.
When the top element x=1, it can take an early stop & saves time.

2C++ & 1 python are made.
# Approach
<!-- Describe your approach to solving the problem. -->
[Please turn on English subtitles if necessary]
[https://youtu.be/ZfomMqDB4KA?si=EEggArakw_-6U8IY](https://youtu.be/ZfomMqDB4KA?si=EEggArakw_-6U8IY)
1. Initialize the priority queue pq with the whole vector `nums`, this part takes $O(n)$ time.
2. Initialize `long long score=0`
3. Procceed the loop from i=0 to k-1 step
4. Let x= the top element & add it to `score`
5. if x==1 break the loop, add k-1-i to `score` with an early stop
6. pop the `pq`
7. push `(x+2)//3` to pq
8. `score` is the answer
9. The 2nd C++ uses `mak_heap` & `pop_heap, push_heap`. This implementation is the fastest one 83ms!
# Real RUN for testcase
Let's consider the testcase 
```
[999999999,196963851,539418658,120132686,273213807,57187185,68854249,619718192]
10
```
The process is as follows which is by adding some outputs in the submitted C++ using make_heap.
```
------
------
x=999999999, score=999999999
heap=[619718192, 273213807, 539418658, 196963851, 120132686, 57187185, 68854249, 999999999]
------
x=619718192, score=1619718191
heap=[539418658, 333333333, 196963851, 273213807, 120132686, 57187185, 68854249, 619718192]
------
x=539418658, score=2159136849
heap=[333333333, 273213807, 196963851, 206572731, 120132686, 57187185, 68854249, 539418658]
------
x=333333333, score=2492470182
heap=[273213807, 206572731, 196963851, 179806220, 120132686, 57187185, 68854249, 333333333]
------
x=273213807, score=2765683989
heap=[206572731, 179806220, 196963851, 111111111, 120132686, 57187185, 68854249, 273213807]
------
x=206572731, score=2972256720
heap=[196963851, 179806220, 91071269, 111111111, 120132686, 57187185, 68854249, 206572731]
------
x=196963851, score=3169220571
heap=[179806220, 120132686, 91071269, 111111111, 68857577, 57187185, 68854249, 196963851]
------
x=179806220, score=3349026791
heap=[120132686, 111111111, 91071269, 65654617, 68857577, 57187185, 68854249, 179806220]
------
x=120132686, score=3469159477
heap=[111111111, 68857577, 91071269, 65654617, 59935407, 57187185, 68854249, 120132686]
------
x=111111111, score=3580270588
heap=[91071269, 68857577, 68854249, 65654617, 59935407, 57187185, 40044229, 111111111]
```
A testcase shows the benefit for the early stop
```
[999999999,9]
100000
```
Process as follows
```
------
x=999999999, score=999999999
heap=[9, 999999999]
------
x=333333333, score=1333333332
heap=[9, 333333333]
------
x=111111111, score=1444444443
heap=[9, 111111111]
------
x=37037037, score=1481481480
heap=[9, 37037037]
------
x=12345679, score=1493827159
heap=[9, 12345679]
------
x=4115227, score=1497942386
heap=[9, 4115227]
------
x=1371743, score=1499314129
heap=[9, 1371743]
------
x=457248, score=1499771377
heap=[9, 457248]
------
x=152416, score=1499923793
heap=[9, 152416]
------
x=50806, score=1499974599
heap=[9, 50806]
------
x=16936, score=1499991535
heap=[9, 16936]
------
x=5646, score=1499997181
heap=[9, 5646]
------
x=1882, score=1499999063
heap=[9, 1882]
------
x=628, score=1499999691
heap=[9, 628]
------
x=210, score=1499999901
heap=[9, 210]
------
x=70, score=1499999971
heap=[9, 70]
------
x=24, score=1499999995
heap=[9, 24]
------
x=9, score=1500000004
heap=[8, 9]
------
x=8, score=1500000012
heap=[3, 8]
------
x=3, score=1500000015
heap=[3, 3]
------
x=3, score=1500000018
heap=[1, 3]
------
x=1, score=1500000019
heap=[1, 1]
=======
ans=1500099997
```
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n+k\\log n)$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$
# Code||C++ 86ms Beats 100%||Python 613ms beats 100%
```cpp []
class Solution {
public:
    static long long maxKelements(vector<int>& nums, int k) {
        priority_queue<int> pq(nums.begin(), nums.end());
        long long score=0;
        for(int i=0; i<k; i++){
            int x=pq.top();
            score+=x;
            if (x==1){// early stop
                score+=(k-1-i);
                break;
            }
            pq.pop();
            pq.push((x+2)/3);
        }
        return score;
    }
};


auto init = []()
{ 
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    return 'c';
}();
```
```Python []
class Solution:
    def maxKelements(self, nums: List[int], k: int) -> int:
        heapify(pq:=[-x for x in nums])
        score=0
        for i in range(k):
            x=-heappop(pq)
            score+=x
            if x==1:
                score+=k-1-i
                break
            heappush(pq, -((x+2)//3))
        return score
        
```
# C++ using make_heap, pop_heap & push_heap|| 83ms beats 100%
```
class Solution {
public:
    long long maxKelements(vector<int>& nums, int k) {
        make_heap(nums.begin(), nums.end());
        long long score=0;
        for(int i=0; i<k; i++){
            pop_heap(nums.begin(), nums.end());
            int x=nums.back();
            score+=x;
            if (x==1){
                score+=(k-1-i);
                break;
            }
            nums.back()=(x+2)/3;
            push_heap(nums.begin(), nums.end());
        }
        return score;
    }
};


auto init = []()
{ 
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    return 'c';
}();
```