# [C/C++/Python] O(n) time and space solution! Take the challenge! With very, very, detail description

**Author:** ChrisTrompf
**Votes:** 166
**Link:** [https://leetcode.com/problems/smallest-range-ii/solutions/174928/](https://leetcode.com/problems/smallest-range-ii/solutions/174928/)

---

This question is a very deep question really, with lots to think about. Before we get to it, some things must be considered.

## **Simple C++ solution**
Imagine all the numbers where in asending order. At some point, as we move from smallest to highest, we will want to change from adding _K_ to subtracting _K_, and once changed, not change back. Thus we can produce a simple greedy solution that simply tries changing direction at each point and comparing it against the current best (smallest) difference. Thus a simple solution is;

```cpp
  int smallestRangeII(vector<int>& A, int K) {
    std::sort(A.begin(), A.end());
    int ret = A.back() - A.front();
    for (auto first = A.begin(), first2 = first + 1; first2 != A.end(); ++first, ++first2) {
      ret = std::min(ret, std::max(A.back() - K, *first + K) - std::min(A.front() + K, *first2 - K));
    }
    return ret;
  }
```

We're doing a cheaky sort on the input vector to produce an O(nlogn) time, O(1) space solution.

## **The 'simple' O(n) cases**
There are two simple cases, where we can return the answer O(n) easily. When the range is small and when the range is large. First we get the _min_ and _max_ values using a simple O(n) operation. 
1. If the range is less than or equal to _K_, then the best we can hope for is moving all elements in the same direction (up or down). The result will be the range stays the same and is our answer.
2. If the range is greater or equal to 4 times _K_, then we can add _K_ to all elements in the lower half of the range and subtract _K_ from the upper range. We have removed _K_ from both ends of the range and thus the resulting range is [_min_ + _K_, _max_ - _K_] and our answer is _max_ - _K_ - _min_ - _K_.

To see _why_ 4 times _K_ allows for a quick answer might not be obvious at first. Imagine the input numbers where in order and further where divided into 3 groups. [_min_, _min_ + _K_], (_min_ + _K_, _max_ - _K_), [_max_ - _K_, _max_]. It's obvious that we will want to add _K_ to all the elements in [_min_, _min_ + _K_] and subtract _K_ from all the elements in [_max_ - _K_, _max_]. If we ignore the middle range for the moment, it follows that the best we can hope for is [_min_ + _K_, _max_ - _K_]. 

Now to show that it's actually the answer we need to show all the elements in the middle range stay within that range once we add or subtract _K_ from each one. We've taken 2 * _K_ off our original range that we know is _at least_ 4 * _K_, so the middle range is _at least_ 2 * _K_. Thus we can add _K_ to the lower half knowing there is a gap of at least _K_ before we reach the upper range. Similarly, we can subtract _K_ from the upper half knowing there is a gap of at least _K_ before we reach the lower range. Therefore we can add or subtract _K_ from every element while remaining in the range [_min_ + _K_, _max_ - _K_]. Therefore that is our answer.

## **The harder cases**

### **Narrowing the search**
With the simple cases out of the way, we're trying to find a point between _min_ and _max_ where we want to change direction. The trick is to decide _where_ to do this exactly.

Well we can get an idea where to start. We know that we're going to add _K_ to _min_, so anything that is greater than 2 * _K_ above _min_, we can subtract _K_ from and know that it will not be less than _min_ + _K_ and hence not adversely impact our diff, thus everything greater or equal than 2 * _K_ we want to subtract _K_ from, and similarly anything less than or equal to _max_ - 2 * _K_ we want to add _K_  to. We therefore only actually need to consider elements in the range (_max_ - _2K_, _min_ + _2K_). We actually need to consider the element just before and just after as well as we will need these to test those elements inside the range. Thus we can produce a faster, less greedy, answer where we only consider these elements.

```cpp
  int smallestRangeII(vector<int>& A, int K) {
    auto rng = std::minmax_element(A.begin(), A.end());
    int imin = *rng.first;
    int imax = *rng.second;
    int ret = imax - imin;
    
    // If the minimum and maximum are close together, then the minimum is to simply add K to all elements and hence not change the distance
    if (ret <= K) {
      return ret;
    // If the minimum and maximum are so far apart each edge of the list can just be moved in towards the middle. Moving in K from each side.
    } else if (ret >= 4 * K) {
      return ret - 2 * K;
    }
    
    // Only elements in the middle concern us, they are the only ones that need to move away from the middle and hence we have to decide
    // which direction they must move. We only care about elements in the range [max - 2K, min + 2K], plus the nearest element on either
    // side of the range.
    std::sort(A.begin(), A.end());
    auto first = std::lower_bound(A.begin(), A.end(), imax - 2 * K);
    auto last = std::upper_bound(first, A.end(), imin + 2 * K);
    // Grab one more element (if there is one) on either side of the range, we need these for comparison of our range
    if (first != A.begin()) { --first; }
    if (last != A.end()) { ++last; }
    // Use a greedy algorithm to try every possible element in our range
    for (auto first2 = first + 1; first2 != last; ++first, ++first2) {
      ret = std::min(ret, std::max(imax - K, *first + K) - std::min(imin + K, *first2 - K));
    }
    return ret;
  }
```

Of course we can take advantage of this and produce an answer where we only sort the required numbers. Thus producing an answer which is log(mlogm) where _m_ is the number of elements in our reduced range. This has the advantage of not modifying our input vector, which could be frowned upon.

```cpp
  int smallestRangeII(vector<int>& A, int K) {
    auto rng = std::minmax_element(A.begin(), A.end());
    int ret = *rng.second - *rng.first;
    // If the minimum and maximum are close together, then the minimum is to simply add K to all elements and hence not change the distance
    if (ret <= K) {
      return ret;
    // If the minimum and maximum are so far apart each edge of the list can just be moved in towards the middle. Moving in K from each side.
    } else if (ret >= 4 * K) {
      return ret - 2 * K;
    }
   
    // Only elements in the middle concern us, they are the only ones that need to move away from the middle and hence we have to decide
    // which direction they must move. We only care about elements in the range [max - 2K, min + 2K], plus the nearest element on either
    // side of the range.
    int below = *rng.first;
    int after = *rng.second;
    std::vector<int> tmp;
    for (auto num : A) {
      if (num < *rng.second - 2 * K) { below = std::max(below, num); }
      else if (num > *rng.first + 2 * K) { after = std::min(after, num); }
      else { tmp.push_back(num); }
    }
    tmp.push_back(below);
    tmp.push_back(after);
    std::sort(tmp.begin(), tmp.end());
    
    // We're looking for the greatest difference between consecutive instruments.
    for (auto it = tmp.begin(), it2 = it + 1; it2 != tmp.end(); ++it, ++it2) {
      ret = std::min(ret, std::max(*rng.second - K, *it + K) - std::min(*rng.first + K, *it2 - K));
    }
    return ret;
  }
```	

### **What are we actually looking for?**
We know there is some element inside our reduced range of [_max_ - _2K_, _min_ + _2K_] is where we change from adding _K_ to subtracting _K_, but _what_ exactly makes the target point so special?

Well, we're after the point where our change over will cause the least impact to our diff. Lets walk through some examples to see if we can see a pattern. If we have [1, 3, 4, 6, 7] and _K_ of 3 and using our reduced range, we know it must change at either at 3, 4, or 6. A quick check by hand will confirm that changing at between 4 and 6 is where the money is at. So our result is [3, 6, 7, 3, 4] for a difference of 4. The trick should be clear now, but just to hammer it home, we're looking for the point where there is the biggest jump in value between consecutive values (if our numbsers where sorted). In case you're wondering, if there are multiple jumps of the same size, it doesn't matter which is chosen.

**Keep this in mind, all the above solutions simply find the point, inside our reduced range, where the jump in value is greatest.**

## **What about O(n) time already?**
That's a lot to get though, but it's important to know what we're looking for before we can solve it faster. Obviously we can't just sort the list and find the jump as the sort is too expensive for an O(n) time solution. What we need is a fast way to find the biggest jump in an unsorted list. This is where the magic happens.

Consider _n_ numbers, that are equally spaced. Say 10 to 100, incrementing by 10 [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]. Now if a single number is increased or decreased, the spacing will change. One higher and one lower (well dah!). Seems obvious and random, but stay with me.

If we know our _min_, _max_ and the count of numbers, then we can calculate what the space between each number will be if they are equally spaced. Thus any jump _greater_ than that number is what we're interested in as a potential changeover point. 

`(imax - imin) / count = jump`

If we group our numbers into ranges based on _jump_, we end up with [_min_, _min_ + _jump_), [_min_ + _jump_, _min_ + _2jump_), [_min_ + _2jump_, _min_ + _3jump_), ..., [_min_ + _x_ * _jump_, _max_]. All numbers that fall inside a range together are irrelivant, as they by definition must be less than _jump_ distance apart. Thus we actually only care about the maximum number inside each range compared to the minimum number in the next (non empty) range. Each of these pairs is the only place that can have a jump larger than _jump_.

Hence all we actually need to store is the minimum and maximum value that falls inside each _bucket_... hint hint.

With everything in place, I present my O(n) time, O(m) space (where m is the number of ranges required).

**C++ linear time solution**
```cpp
  int smallestRangeII(vector<int>& A, int K) {
    auto minmax_its = std::minmax_element(A.begin(), A.end());
    int imin = *minmax_its.first;
    int imax = *minmax_its.second;
    int diff = imax - imin;
    
    // If the range is smaller than K, then adding K to all elements will still have the same gap
    if (diff <= K) { 
      return diff;
    // If the range is larger than 4K, then adding K to all elements in the lower and taking K from all
    // elements in the upper range will shrink the range by K from each end
    } else if (diff >= 4 * K) {
      return diff - 2 * K;
    }
    
    // We're going to have to work for and answer, use buckets to group numbers. Storing the minimum and maximum values in each bucket
    struct Bucket {
      int imin = std::numeric_limits<int>::max();
      int imax = std::numeric_limits<int>::min();

      void add(int val) 
      { 
        imin = std::min(imin, val);
        imax = std::max(imax, val);
      }
      
      explicit operator bool () const { return imin != std::numeric_limits<int>::max(); }
    };
    
    // Calculate the number of buckets and the range of each bucket.
    int bucket_size = std::max(1, diff / (static_cast<int>(A.size()) - 1));
    std::vector<Bucket> buckets(diff / bucket_size + 1);
   
    // Fill the buckets
    for (auto num : A) {
      buckets[(num - imin) / bucket_size].add(num);
    }
    
    // Compare each bucket to its neighbouring bucket. The difference between the maximum of of one bucket and the minimum of it's neighbour
    // is what we're looking for. The maximum gap is the point we will want to change from adding K to subtracting K 
    auto prev_it = buckets.begin();
    for (auto it = prev_it + 1; it != buckets.end(); ++it) {
      if (*it) {
        diff = std::min(diff, std::max(imax - K, prev_it->imax + K) - std::min(imin + K, it->imin - K));
        prev_it = it;
      }
    }
    
    return diff;
  }
```

Ta-Da!

**Python linear time solution**
```python
def smallestRangeII(self, nums: List[int], k: int) -> int:
  minimum = min(nums)
  maximum = max(nums)

  # Simple cases first
  if maximum - minimum <= k:
    return maximum - minimum
  if maximum - minimum >= 4 * k:
    return maximum - minimum - 2 * k

  gap = max(1, (maximum - minimum) // len(nums))
  num_buckets = (maximum - minimum) // gap + 1
  buckets = [[maximum, minimum] for _ in range(num_buckets)]

  # Find the minimum and maximum values for each bucket
  for num in nums:
    idx = (num - minimum) // gap
    buckets[idx] = [min(buckets[idx][0], num), max(buckets[idx][1], num)]

  # Try each gap between buckets to find the best one
  ret = maximum - minimum
  prev = buckets[0][1]
  for bucket in buckets[1:]:
    if bucket[1] > minimum:
      ret = min(ret, max(maximum - k, prev + k) - min(minimum + k, bucket[0] - k))
      prev = bucket[1]
  return ret
```

**C linear time solution**
```c
int smallestRangeII(int* nums, int numsSize, int k) {
  /* Find the minimum and maximum values */
  int min = INT_MAX;
  int max = INT_MIN;
  for (int i = 0; i < numsSize; ++i) {
    min = (min < nums[i]) ? min : nums[i];  
    max = (max > nums[i]) ? max : nums[i];
  }
  
  /* Deal with the simple cases first */
  const int diff = max - min;
  if (diff <= k) {
    return diff;
  }
  if (diff >= 4 * k) {
    return diff - 2 * k;
  }
  
  /* Allocate enough buckets based on the gap */
  const int gap = (diff / numsSize) ? (diff / numsSize) : 1;
  const int num_buckets = diff / gap + 1;
  int (* const buckets)[2] = malloc(num_buckets * sizeof(int[2]));
  for (int i = 0; i < num_buckets; ++i) {
    buckets[i][0] = max;
    buckets[i][1] = min;
  }
  
  /* Find the minimum and maximum values for each bucket */
  for (int i = 0; i < numsSize; ++i) {
    int idx = (nums[i] - min) / gap;
    buckets[idx][0] = (buckets[idx][0] < nums[i]) ? buckets[idx][0] : nums[i];
    buckets[idx][1] = (buckets[idx][1] > nums[i]) ? buckets[idx][1] : nums[i];
  }
  
  /* Try each gap between buckets to find the best one */
  int ret = diff;
  int prev = buckets[0][1];
  for (int i = 1; i < num_buckets; ++i) {
    if (buckets[i][1] > min) {
      int upper = (max - k > prev + k) ? (max - k) : (prev + k);
      int lower = (min + k < buckets[i][0] - k) ? (min + k) : (buckets[i][0] - k);
      ret = (ret < upper - lower) ? ret : (upper - lower);
      prev = buckets[i][1];
    }
  }
  free(buckets);
  return ret;
}
```

**C++ linear time solution with reduced range**

I left off reducing my range in the above solutions to make things clearer, for completeness, here is everything tied together;
```cpp
  int smallestRangeII(vector<int>& A, int K) {
    auto minmax_its = std::minmax_element(A.begin(), A.end());
    int imin = *minmax_its.first;
    int imax = *minmax_its.second;
    int diff = imax - imin;
    
    // If the range is smaller than K, then adding K to all elements will still have the same gap
    if (diff <= K) { 
      return diff;
    // If the range is larger than 4K, then adding K to all elements in the lower and taking K from all
    // elements in the upper range will shrink the range by K from each end
    } else if (diff >= 4 * K) {
      return diff - 2 * K;
    }
    
    // Only elements in the middle concern us, they are the only ones that need to move away from the middle and hence we have to decide
    // which direction they must move. We only care about elements in the range [mmax - 2K, min + 2K], plus the nearest element on either
    // side of the range.
    int below = imin;
    int after = imax;
    int count = ((imin >= imax - 2 * K) ? 0 : 1) + ((imax <= imin + 2 * K) ? 0 : 1);
    std::vector<int> tmp;
    for (auto num : A) {
      if (num < imax - 2 * K) { below = std::max(below, num); }
      else if (num > imin + 2 * K) { after = std::min(after, num); }
      else { ++count; }
    }

    // We're going to have to work for and answer, use buckets to group numbers. Storing the minimum and maximum values in each bucket
    struct Bucket {
      int imin = std::numeric_limits<int>::max();
      int imax = std::numeric_limits<int>::min();

      void add(int val) 
      { 
        imin = std::min(imin, val);
        imax = std::max(imax, val);
      }
      
      explicit operator bool () const { return imin != std::numeric_limits<int>::max(); }
    };
    
    // Calculate the number of buckets and the range of each bucket.
    int inner_diff = after - below;
    int bucket_size = std::max(1, inner_diff / (count - 1));

    std::vector<Bucket> buckets(inner_diff / bucket_size + 1);
   
    // Fill the buckets
    for (auto num : A) {
      if (below <= num && num <= after) {
        buckets[(num - below) / bucket_size].add(num);
      }
    }
    
    // Compare each bucket to its neighbouring bucket. The difference between the maximum of of one bucket and the minimum of it's 
    // neighbour is what we're looking for. The maximum gap is the point we will wnat to change from adding K to subtracting K 
    auto prev_it = buckets.begin();
    for (auto it = prev_it + 1; it != buckets.end(); ++it) {
      if (*it) {
        diff = std::min(diff, std::max(imax -K, prev_it->imax + K) - std::min(imin + K, it->imin - K));
        prev_it = it;
      }
    }
    
    return diff;
  }
```

# Proof?
|operation|time complexity|space complexity|
|---|---|---|
|Get _min_ and _max_|O(n)|O(1)|
|Count elements in reduced range|O(n)|O(1)|
|Fill buckets|O(n)|O(m) where _m_ is the number of buckets|
|Process buckets|O(m)|O(1)|
|**TOTAL**|**O(n)**|**O(m)**|

Technically, since we know the maximum range, a O(1) space solution could be achieved by always allocating the maximum number of buckets that _could_ be required. I feel like that's kinda of cheating.

**Don't forget the thumbs up**

![image](./images/0.png)

