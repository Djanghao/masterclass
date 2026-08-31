# [C/C++/Python/TS/JS/Java] Various solutions. c++ is O(n) time and just 6 lines. C hashmap solution

**Author:** ChrisTrompf
**Votes:** 147
**Link:** [https://leetcode.com/problems/two-sum/solutions/189807/](https://leetcode.com/problems/two-sum/solutions/189807/)

---

# **C++**
C++ has all the nice tools to solve this quickly and easily.
### Short and simple c++ solution. O(n) time, O(n) space
```cpp
  vector<int> twoSum(vector<int>& nums, int target) {
    std::unordered_map<int, int> tmp;
    for (int i = 0; i < nums.size(); ++i) {
      if (tmp.count(target - nums[i])) {
        return {tmp[target - nums[i]], i};
      }
      tmp[nums[i]] = i;
    }
    return {-1, -1};
  }
```
# **Python**
### Short and simple python solution. O(n) time, O(n) space
```python
def twoSum(self, nums: List[int], target: int) -> List[int]:
  tmp = {}
  for i, num in enumerate(nums):
    if target - num in tmp:
      return [tmp[target - num], i]
    tmp[num] = i
  return [-1, -1]
```
# **TypeScript/JavaScript**
``` javascript []
var twoSum = function(nums, target) {
  let tmp = new Map();
  for (let i = 0; i < nums.length; ++i) {
    if (tmp.has(target - nums[i])) {
      return [tmp.get(target - nums[i]), i];
    }
    tmp.set(nums[i], i);
  }
  return [-1, -1];
};
```
``` typescript []
function twoSum(nums: number[], target: number): number[] {
  let tmp = new Map();
  for (let i = 0; i < nums.length; ++i) {
    if (tmp.has(target - nums[i])) {
      return [tmp.get(target - nums[i]), i];
    }
    tmp.set(nums[i], i);
  }
  return [-1, -1];
};
```
# **Java**
### Short and simple java solution. O(n) time, O(n) space
```java
public int[] twoSum(int[] nums, int target) {
  Map<Integer, Integer> tmp = new HashMap<>();
  for (int i = 0; i < nums.length; ++i) {
    if (tmp.containsKey(target - nums[i])) {
      return new int[] {tmp.get(target - nums[i]), i};
    }
    tmp.put(nums[i], i);
  }
  return new int[] {-1, -1};
}
```
# **C**
C does not have all the niceities of c++ and other language, so we have to do it the hard way.
### Obvious brute force approach. O(n^2) time, O(1) space
```c
int* twoSum(int* nums, int numsSize, int target) {
  int* ret = (int *)malloc(2 * sizeof(int));
  for (ret[0] = 0; ret[0] < numsSize; ++ret[0]) {
    for (ret[1] = ret[0] + 1; ret[1] < numsSize; ++ret[1]) {
      if (nums[ret[0]] + nums[ret[1]] == target) {
        return ret;
      }
    }
  }
  return ret;
}
```
### Sorting approach. O(nlogn) time, O(n) space
The brute force is obviously expensive. If we were able to instead have the numbers in sorted order, we can find a solution in O(n) time. The reasoning behind this is as follows; 
1. Start with the two indexes, pointing to the lowest (_lo_) and highest (_hi_) values.
2. If current values are _less_ than our target, then increase _lo_ and hence increase the sum. If the sum is _greater_ than our target, then decrease _hi_ and hence reduce the sum.
3. Continue from 2. so long as the sum doesn't equal the target.

The problem is of course that c makes us do it the hard way. In particular we don't want to rearrange the _nums_ array as we need to return the indexes. We have to provide our own functions. `partition_indexes` that reorders an array of indexes based on the value of _nums_ that the indexes address and `sort_indexes` that uses quicksort to reorder the index mappings.

Even though finding the answer if the numbers are sorted is O(n), we have to pay O(nlogn) time for the sort, so the solution is O(nlogn) time.

```c
void swap(int * const a, int * const b) {
  int tmp = *a;
  *a = *b;
  *b = tmp;
}

// Partition indexes that map to nums, without changing nums values or ordering
int partition_indexes(const int* const nums, int* const indexes, int lo, int hi) {
  int pivot = lo++;
  int pivot_val = nums[indexes[pivot]];
  int idx = pivot;
  int tmp;
  for (; lo < hi; ++lo) {
    if (nums[indexes[lo]] <= pivot_val) {
      swap(indexes + lo, indexes + ++idx);
    }
  }
 
  // Swap the pivot (which is at the front) with the last value less or equal to the pivot
  swap(indexes + pivot, indexes + idx);
  
  return idx;
}

// Sort indexes that map to nums, without changing nums values or ordering
void sort_indexes(const int* const nums, int* const indexes, int lo, int hi) {
  if (lo < hi) {
    int pivot = partition_indexes(nums, indexes, lo, hi);
    sort_indexes(nums, indexes, lo, pivot);
    sort_indexes(nums, indexes, pivot + 1, hi);
  }
}

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
  int* ret = (int*)malloc(2 * sizeof(int));
  
  // Build index mapping to nums that is sorted assendingly
  int* indexes = (int *)malloc(numsSize * sizeof(int));
  for (int i = 0; i < numsSize; ++i) {
    indexes[i] = i;
  }
  sort_indexes(nums, indexes, 0, numsSize);

  // Move in from either side, if the pair is below target, then left index must increase
  // to increase the sum, while right must decrease if the sum is over
  int lo = 0;
  int hi = numsSize - 1;
  while (nums[indexes[lo]] + nums[indexes[hi]] != target) {
    if (nums[indexes[lo]] + nums[indexes[hi]] < target) {
      ++lo;
    } else {
      --hi;
    }
  }
  
  ret[0] = indexes[lo];
  ret[1] = indexes[hi];
  
  free(indexes);

  *returnSize = 2;
  return ret;
}
```
### Sorting pointers. O(nlogn) time, O(n) space
Rather than write our own sort algorithm, can we do something to use the built in `qsort`? Yes we can. If instead of sorting indexes, which requires our own sort, we can store pointers to the each number. This allows us to sort the pointers on the value they point to.

We can then use the two pointer approach as normal to find the answers. The only catch after that is that we need to convert the the pointers back to an index in `nums`. As each `links` entry points to a location _inside_ `nums`, we can convert back to an index by calculating the offset using pointer arithmetic.

```c
static int iptr_cmp(const void* lhs, const void* rhs) {
  return **((int**)lhs) - **((int**)rhs);
}

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
  // Build pointers to the value to sort assendingly
  int* links[numsSize];
  for (int i = 0; i < numsSize; ++i) {
    links[i] = &nums[i];
  }
  qsort(links, numsSize, sizeof(*links), iptr_cmp);

  // Move in from either side, if the pair is below target, then left index must increase
  // to increase the sum, while right must decrease if the sum is over
  int lo = 0;
  int hi = numsSize - 1;
  while (*links[lo] + *links[hi] != target) {
    if (*links[lo] + *links[hi] < target) {
      ++lo;
    } else {
      --hi;
    }
  }

  // Convert the link pointer back to an index via pointer arithmetic
  int* const ret = (int*)malloc(2 * sizeof(int));
  ret[0] = links[lo] - nums;
  ret[1] = links[hi] - nums;
  *returnSize = 2;
  return ret;
}
```

### Hashmap. O(n) time, O(n) space
The hashmap solution for c++ is nice and simple, the c takes a bit more work and uses the external uthash (which is automatically included for c solutions).

```c
struct number_hash {
  int value;
  int index;
  UT_hash_handle hh;
};

void destroy_table(struct number_hash** table) {
  struct number_hash* curr;
  struct number_hash* tmp;
  
  HASH_ITER(hh, *table, curr, tmp) {
    HASH_DEL(*table, curr);
    free(curr);
  }
}

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
  struct number_hash* table = NULL;
  struct number_hash* element;
  int* ret = (int*) malloc(2 * sizeof(int));
  int remaining;
  for (int i = 0; i < numsSize; ++i) {
    remaining = target - nums[i];
   
    // Find if there has already been an element such that the sum is target
    HASH_FIND_INT(table, &remaining, element);
    if (element) {
      ret[0] = element->index;
      ret[1] = i;
      break;
    }
   
    // Add the new number to the hash table if it doesn't exist already
    HASH_FIND_INT(table, &nums[i], element);
    if (!element) {
      element = (struct number_hash *) malloc(sizeof(*element));
      element->value = nums[i];
      element->index = i;

      HASH_ADD_INT(table, value, element);
    }
  }
  
  destroy_table(&table);
  
  *returnSize = 2;
  return ret;
}
```
