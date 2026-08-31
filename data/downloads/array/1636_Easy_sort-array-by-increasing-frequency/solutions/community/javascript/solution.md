# Brief explanation with example... Outperforms 💯🔥none can build a code like this...

**Author:** Success_Code
**Votes:** 130
**Link:** [https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/5519852/](https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/5519852/)

---



```python3 []
from dataclasses import dataclass


@dataclass(frozen=True)
class T:
  num: int
  freq: int

  def __lt__(self, other):
    if self.freq == other.freq:
      return self.num > other.num
    return self.freq < other.freq


class Solution:
  def frequencySort(self, nums: list[int]) -> list[int]:
    ans = []
    heap = []

    for num, freq in collections.Counter(nums).items():
      heapq.heappush(heap, T(num, freq))

    while len(heap) > 0:
      num = heap[0].num
      freq = heapq.heappop(heap).freq
      ans.extend([num] * freq)

    return ans
        
```
```Python []
class Solution(object):
    def frequencySort(self, nums):
        freq = Counter(nums)
        return sorted(nums, key=lambda x : (freq[x], -x))
```

```javascript []
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let freq = new Map()
    for(let i=0;i<nums.length;i++){
        if(freq.get(nums[i])){
            freq.set(nums[i],freq.get(nums[i])+1)
        }
        else{
            freq.set(nums[i],1)
        }
    }
    return nums.sort((a,b)=>freq.get(a)-freq.get(b)||b-a)
};
```
```C++ []
struct T {
  int num;
  int freq;
};

class Solution {
 public:
  vector<int> frequencySort(vector<int>& nums) {
    vector<int> ans;
    auto compare = [](const T& a, const T& b) {
      return a.freq == b.freq ? a.num < b.num : a.freq > b.freq;
    };
    priority_queue<T, vector<T>, decltype(compare)> heap(compare);
    unordered_map<int, int> count;

    for (const int num : nums)
      ++count[num];

    for (const auto& [num, freq] : count)
      heap.emplace(num, freq);

    while (!heap.empty()) {
      const auto [num, freq] = heap.top();
      heap.pop();
      for (int i = 0; i < freq; ++i)
        ans.push_back(num);
    }

    return ans;
  }
};
```
```java []
    class Solution {
  public int[] frequencySort(int[] nums) {
    record T(int num, int freq) {}
    int[] ans = new int[nums.length];
    int ansIndex = 0;
    Map<Integer, Integer> count = new HashMap<>();
    Queue<T> heap = new PriorityQueue<>((a, b) //
                                        -> a.freq == b.freq ? Integer.compare(b.num, a.num)
                                                            : Integer.compare(a.freq, b.freq));

    for (final int num : nums)
      count.merge(num, 1, Integer::sum);

    for (Map.Entry<Integer, Integer> entry : count.entrySet())
      heap.offer(new T(entry.getKey(), entry.getValue()));

    while (!heap.isEmpty()) {
      final int num = heap.peek().num;
      final int freq = heap.poll().freq;
      for (int i = 0; i < freq; ++i)
        ans[ansIndex++] = num;
    }

    return ans;
  }
}
```

