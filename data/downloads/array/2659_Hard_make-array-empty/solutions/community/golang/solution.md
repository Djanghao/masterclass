# Easy & Optimized Solution Using Maximum Popular Programming Languages

**Author:** RockstarPabitra
**Votes:** 5
**Link:** [https://leetcode.com/problems/make-array-empty/solutions/3505772/](https://leetcode.com/problems/make-array-empty/solutions/3505772/)

---

```
Please Up-Vote If This Helps You !!!
```

# Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(n log n)

The code first initializes an empty object `(map)` and assigns the length of nums to n and 0 to p. This takes constant time and space complexity `O(1)`.

The for loop starting from line 7 iterates over each element in nums, assigning the index of the element to the corresponding key in the map object. This takes `O(n)` time and `O(n)` space.

The code then sorts the nums array in ascending order using the built-in sort method. This takes `O(n log n)` time complexity.

The second for loop starting from line 10 iterates over each element in the sorted nums array. It first checks if the index of the current element in the map object is less than the previously encountered index p. If so, it adds the remaining unsorted elements to the answer variable. This operation takes `O(1)` time.

Overall, the time complexity of the code is dominated by the sort method, which takes `O(n log n)` time complexity. Therefore, the overall time complexity of the code is `O(n log n)`.
# Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(n)

The space complexity is `O(n)` because of the map object which stores the index of each element of nums, which can take up to n elements. The rest of the variables used in the code take constant space, so they do not add to the space complexity.
# Code
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var countOperationsToEmptyArray = function(nums) {
    var map = {};
    var n = nums.length,p=0;
    var ans = n;
    for(let i = 0; i < n; i++){
        map[nums[i]] = i;
    }
    
    nums.sort((a,b) => a-b);
    for(let i = 0; i < n; p = map[nums[i++]]){
        if(map[nums[i]]<p){
            ans += n-i;
        }
    }
    return ans
};
```
```python []
    def countOperationsToEmptyArray(self, A: List[int]) -> int:
        n = len(A)
        pos = sorted(range(n), key=lambda i: A[i])
        return n + sum(n - i for i in range(1, n) if pos[i] < pos[i - 1])
```
```C []
typedef struct {
    int value;
    int index;
} Pair;

int compare(const void *a, const void *b) {
    return ((Pair*)a)->value - ((Pair*)b)->value;
}

long long countOperationsToEmptyArray(int* nums, int numsSize){
    Pair pairs[numsSize];
    for (int i = 0; i < numsSize; i++) {
        pairs[i].value = nums[i];
        pairs[i].index = i;
    }
    qsort(pairs, numsSize, sizeof(Pair), compare);
    long long ans = numsSize;
    for (int i = 1; i < numsSize; i++) {
        if (pairs[i].index < pairs[i - 1].index) ans += numsSize - i;
    }
    return ans;
}
```
```Go []
func countOperationsToEmptyArray(nums []int) int64 {
    n := len(nums)
    indexed := make([][2]int, n)
    for i := range nums {
        indexed[i][0] = i+1
        indexed[i][1] = nums[i]
    }
    sort.Slice(indexed, func(i, j int) bool { return indexed[i][1] < indexed[j][1] })
    
    ans := int64(n)
    for i := 1; i < n; i++ {
        if indexed[i][0] < indexed[i-1][0] {
            ans += int64(n - i)
        }
    }
    return ans
}
```
```C# []
public class Solution
{
    public long CountOperationsToEmptyArray(int[] nums)
    {
        var n = nums.Length;
        var ind = Enumerable.Range(0, n).ToArray();

        Array.Sort(ind, (x, y) => nums[x].CompareTo(nums[y]));
        var m = n;
        var result = 0L;

        for (int i = 1, last = 0; i < n; ++i)
            if (ind[i] < ind[i - 1])
            {
                result += m;
                m -= i - last;
                last = i;
            }

        result += m;

        return result;
    }
}
```


```C++ []
    public long countOperationsToEmptyArray(int[] A) {
        int n = A.length;
        Integer[] pos = new Integer[n];
        for (int i = 0; i < n; ++i)
            pos[i] = i;
        Arrays.sort(pos, (i, j) -> A[i] - A[j]);
        long res = n;
        for (int i = 1; i < n; ++i)
            if (pos[i] < pos[i - 1])
                res += n - i;
        return res;
    }
```

```Kotlin []
class Solution {
    fun countOperationsToEmptyArray(nums: IntArray): Long {
        val sortNums = Array(nums.size){IntArray(2)}

        for (i in nums.indices) {
            sortNums[i][0] = nums[i]
            sortNums[i][1] = i
        }
        sortNums.sortBy{ it[0] }

        var res = 0L + nums.size
        for (i in 1..sortNums.lastIndex) {
            if (sortNums[i - 1][1] > sortNums[i][1])
                res += nums.size - i
        }
        
        return res
    }
}
```
```Swift []
class Solution {
    func countOperationsToEmptyArray(_ nums: [Int]) -> Int {
        let arr = nums.enumerated().sorted { $0.1 < $1.1 }
        var result = nums.count
        for i in arr.indices.dropLast() where arr[i].0 > arr[i+1].0 {
            result += nums.count - (i+1)
        }
        return result
    }
}
```
```scala []
object Solution {
  def countOperationsToEmptyArray(nums: Array[Int]): Long = {
    val pos = nums.zipWithIndex.sorted.map(_._2)
    val rotations = pos.zipWithIndex.tail.zip(pos).map { case ((p, i), pp) => if (p < pp) nums.length - i else 0 }
    rotations.foldLeft(nums.length.toLong)(_ + _)
  }
}
```
```rust []
struct Bit {
    nums: Vec<i32>,
}
impl Bit {
    fn low_bit(i: usize) -> usize {
        return i & (!i + 1);
    }
    fn add(&mut self, mut i: usize, v: i32) {
        while i < self.nums.len() {
            self.nums[i] += v;
            i += Self::low_bit(i);
        }
    }
    fn query(&self, mut i: usize) -> i32 {
        let mut ans = 0;
        while i > 0 {
            ans += self.nums[i];
            i -= Self::low_bit(i);
        }
        return ans;
    }
}

impl Solution {
    pub fn count_operations_to_empty_array(nums: Vec<i32>) -> i64 {
        let mut idx: Vec<usize> = (0..nums.len()).collect();
        idx.sort_by_key(|&id| nums[id]);
        let mut ans = 0;
        let mut pre = 0;
        let mut bit = Bit { nums: vec![0; nums.len() + 100] };
        for &i in idx.iter() {
            if i >= pre {
                let x1 = bit.query(pre);
                let x2 = bit.query(i + 1);
                ans += (i - pre) as i64 - (x2 - x1) as i64 + 1;
            } else {
                let x = bit.query(i + 1) + (bit.query(nums.len()) - bit.query(pre));
                ans += (i + nums.len() - pre) as i64 - x as i64 + 1;
            }
            bit.add(i + 1, 1);
            pre = i;
        }
        return ans;
    }
}
```


```java []
    public long countOperationsToEmptyArray(int[] A) {
        int n = A.length;
        Integer[] pos = new Integer[n];
        for (int i = 0; i < n; ++i)
            pos[i] = i;
        Arrays.sort(pos, (i, j) -> A[i] - A[j]);
        long res = n;
        for (int i = 1; i < n; ++i)
            if (pos[i] < pos[i - 1])
                res += n - i;
        return res;
    }
```
