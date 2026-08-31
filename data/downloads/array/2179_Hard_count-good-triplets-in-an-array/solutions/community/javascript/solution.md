# Segment Tree | Complete Explanation With Intuition | Multiple Languages

**Author:** sourasb
**Votes:** 8
**Link:** [https://leetcode.com/problems/count-good-triplets-in-an-array/solutions/3365255/](https://leetcode.com/problems/count-good-triplets-in-an-array/solutions/3365255/)

---

# Intuition & Approach
All the numbers in both arrays are unique and in the range of `0 to n-1`. The objective is to find triplets `(x, y, z)` that satisfy the conditions `posAx < posAy < posAz` and `posBx < posBy < posBz`, where `posAx` indicates the index of `x` in `A`, and `posBz` indicates the index of `z` in `B`.

If we fix a middle element, say `y`, we can find all the common elements in both arrays before and after `y`. All these common elements are valid candidates for `x` and `z`, respectively. Therefore, `(commonLeft * commonRight)` gives the total number of good triplets for that `y`. We repeat this process for all possible values of `y` to find the count of good triplets.

For each element in `A`, we find its corresponding index in `B` and update the segment tree at that index. An element's index in `B` is only updated in the segment tree if it has already been visited in `A`. In other words, if an element has not been visited in `A`, its corresponding index in `B` will not be updated in the segment tree.

So, when we pick up an element in `A`, we obtain its index in `B`, say `indexB`. Now, `segmentTree[0..indexB]` will only contain indexes in the range `0 to indexB`, since we only update the segment tree when we visit the element in `A`. Updated values in the segment tree indicate that those specific updated indexes have been visited in `A`. Thus, by considering `segmentTree[0..indexB]`, we can obtain all the elements common to both `A` and `B` before a specific element.

Now, to calculate the common elements after a specific element, we can use mathematics. Let's say there are `k` common elements before a specific element `y`. Then, there are `posAy-k` unique elements in `A` before `y` that are not present in `B`. If `By` is present at index `j` in `B`, then there are `(n-1-j)` elements after `y` in `B`. To get the count of common elements after `y`, we need to subtract the count of unique elements before `Ay`, i.e., `posAy-k`, from the count of elements in `B` after `By`.

# Algorithm
```
1. Create a hash map to store the mapping of elements in nums2 to their indices.
Initialize a segment tree of size n * 4 + 1, where n is the length of nums1.
3. Initialize ans = 0.
4. Loop through nums2 and add their indices to the hash map.
5. Update the segment tree with the index of the first element in nums1.
6. Loop through nums1 starting from the second element.
    a. Get the index of the current element in nums1 from the hash map.
    b. Query the segment tree to get the number of common elements on the left of the current element in nums1 and nums2.
    c. Calculate the number of unique elements on the left of the current element in nums1 and the number of elements on the right of the current element in nums2.
    d. Calculate the number of common elements on the right of the current element in nums1 and nums2.
    e. Add the product of the number of common elements on the left and right to ans.
    f. Update the segment tree with the index of the current element in nums1.
7. Return ans.
```

# Complexity
- **Time complexity:**
The loop over `nums2` to create `elemToIndexMappingInB` takes `O(n)` time. The segment tree construction takes `O(n)` time. The loop over `nums1` takes `O(n log n)` time due to the segment tree query and update operations. Therefore, the overall time complexity is `O(n log n + n)` i.e `O(n log n)`.

- **Space complexity:**
The `elemToIndexMappingInB` map takes `O(n)` space. The segment tree takes `O(n)` space. Therefore, the overall space complexity is `O(2n)` = `O(n)`.

# Code
```java []
class Solution {

    public long goodTriplets(int[] nums1, int[] nums2) {
        Map<Integer, Integer> elemToIndexMappingInB = new HashMap<>();
        int n = nums1.length;
        long[] segmentTree = new long[n * 4 + 1];
        long ans = 0;
        for (int i = 0; i < nums2.length; i++) {
            elemToIndexMappingInB.put(nums2[i], i);
        }
        update(segmentTree, 1, 0, n - 1, elemToIndexMappingInB.get(nums1[0]));
        for (int i = 1; i < n; i++) {
            int indexInB = elemToIndexMappingInB.get(nums1[i]);
            long commonElementsOnLeft = query(segmentTree, 1, 0, n - 1, 0, indexInB);
            long uniqueElementsOnLeftInA = i - commonElementsOnLeft;
            long elementsAfterIndexInB = n - 1 - indexInB;
            long commonElementsOnRight = elementsAfterIndexInB - uniqueElementsOnLeftInA;
            ans += commonElementsOnLeft * commonElementsOnRight;
            update(segmentTree, 1, 0, n - 1, indexInB);
        }
        return ans;
    }

    private void update(long[] st, int index, int start, int end, int updateIndex) {
        if (start == end) {
            st[index] += 1;
            return;
        }
        int mid = start + (end - start) / 2;
        if (updateIndex <= mid) update(st, index * 2, start, mid, updateIndex);
        else update(st, index * 2 + 1, mid + 1, end, updateIndex);
        st[index] = st[index * 2] + st[index * 2 + 1];
    }

    private long query(long[] st, int index, int start, int end, int queryStart, int queryEnd) {
        if (end < queryStart || start > queryEnd) return 0;
        if (start >= queryStart && end <= queryEnd) return st[index];
        int mid = start + (end - start) / 2;
        long left = query(st, index * 2, start, mid, queryStart, queryEnd);
        long right = query(st, index * 2 + 1, mid + 1, end, queryStart, queryEnd);
        return left + right;
    }
}
```
```cpp []
#include <unordered_map>
#include <vector>

class Solution {
public:
    long long goodTriplets(std::vector<int>& nums1, std::vector<int>& nums2) {
        std::unordered_map<int, int> elemToIndexMappingInB;
        int n = nums1.size();
        std::vector<long long> segmentTree(n * 4 + 1);
        long long ans = 0;
        for (int i = 0; i < nums2.size(); i++) {
            elemToIndexMappingInB[nums2[i]] = i;
        }
        update(segmentTree, 1, 0, n - 1, elemToIndexMappingInB[nums1[0]]);
        for (int i = 1; i < n; i++) {
            int indexInB = elemToIndexMappingInB[nums1[i]];
            long long commonElementsOnLeft = query(segmentTree, 1, 0, n - 1, 0, indexInB);
            long long uniqueElementsOnLeftInA = i - commonElementsOnLeft;
            long long elementsAfterIndexInB = n - 1 - indexInB;
            long long commonElementsOnRight = elementsAfterIndexInB - uniqueElementsOnLeftInA;
            ans += commonElementsOnLeft * commonElementsOnRight;
            update(segmentTree, 1, 0, n - 1, indexInB);
        }
        return ans;
    }

private:
    void update(std::vector<long long>& st, int index, int start, int end, int updateIndex) {
        if (start == end) {
            st[index] += 1;
            return;
        }
        int mid = start + (end - start) / 2;
        if (updateIndex <= mid) update(st, index * 2, start, mid, updateIndex);
        else update(st, index * 2 + 1, mid + 1, end, updateIndex);
        st[index] = st[index * 2] + st[index * 2 + 1];
    }

    long long query(std::vector<long long>& st, int index, int start, int end, int queryStart, int queryEnd) {
        if (end < queryStart || start > queryEnd) return 0;
        if (start >= queryStart && end <= queryEnd) return st[index];
        int mid = start + (end - start) / 2;
        long long left = query(st, index * 2, start, mid, queryStart, queryEnd);
        long long right = query(st, index * 2 + 1, mid + 1, end, queryStart, queryEnd);
        return left + right;
    }
};
```
```python []
class Solution:
    def goodTriplets(self, nums1: List[int], nums2: List[int]) -> int:
        elemToIndexMappingInB = {}
        n = len(nums1)
        segmentTree = [0] * (n * 4 + 1)
        ans = 0
        for i in range(len(nums2)):
            elemToIndexMappingInB[nums2[i]] = i
        self.update(segmentTree, 1, 0, n - 1, elemToIndexMappingInB[nums1[0]])
        for i in range(1, n):
            indexInB = elemToIndexMappingInB[nums1[i]]
            commonElementsOnLeft = self.query(segmentTree, 1, 0, n - 1, 0, indexInB)
            uniqueElementsOnLeftInA = i - commonElementsOnLeft
            elementsAfterIndexInB = n - 1 - indexInB
            commonElementsOnRight = elementsAfterIndexInB - uniqueElementsOnLeftInA
            ans += commonElementsOnLeft * commonElementsOnRight
            self.update(segmentTree, 1, 0, n - 1, indexInB)
        return ans

    def update(self, st, index, start, end, updateIndex):
        if start == end:
            st[index] += 1
            return
        mid = start + (end - start) // 2
        if updateIndex <= mid:
            self.update(st, index * 2, start, mid, updateIndex)
        else:
            self.update(st, index * 2 + 1, mid + 1, end, updateIndex)
        st[index] = st[index * 2] + st[index * 2 + 1]

    def query(self, st, index, start, end, queryStart, queryEnd):
        if end < queryStart or start > queryEnd:
            return 0
        if start >= queryStart and end <= queryEnd:
            return st[index]
        mid = start + (end - start) // 2
        left = self.query(st, index * 2, start, mid, queryStart, queryEnd)
        right = self.query(st, index * 2 + 1, mid + 1, end, queryStart, queryEnd)
        return left + right
```
```javascript []
function goodTriplets(nums1, nums2) {
  const elemToIndexMappingInB = new Map();
  const n = nums1.length;
  const segmentTree = new Array(n * 4 + 1).fill(0);
  let ans = 0;
  for (let i = 0; i < nums2.length; i++) {
    elemToIndexMappingInB.set(nums2[i], i);
  }
  update(segmentTree, 1, 0, n - 1, elemToIndexMappingInB.get(nums1[0]));
  for (let i = 1; i < n; i++) {
    const indexInB = elemToIndexMappingInB.get(nums1[i]);
    const commonElementsOnLeft = query(segmentTree, 1, 0, n - 1, 0, indexInB);
    const uniqueElementsOnLeftInA = i - commonElementsOnLeft;
    const elementsAfterIndexInB = n - 1 - indexInB;
    const commonElementsOnRight = elementsAfterIndexInB - uniqueElementsOnLeftInA;
    ans += commonElementsOnLeft * commonElementsOnRight;
    update(segmentTree, 1, 0, n - 1, indexInB);
  }
  return ans;
}

function update(st, index, start, end, updateIndex) {
  if (start == end) {
    st[index] += 1;
    return;
  }
  const mid = start + Math.floor((end - start) / 2);
  if (updateIndex <= mid) update(st, index * 2, start, mid, updateIndex);
  else update(st, index * 2 + 1, mid + 1, end, updateIndex);
  st[index] = st[index * 2] + st[index * 2 + 1];
}

function query(st, index, start, end, queryStart, queryEnd) {
  if (end < queryStart || start > queryEnd) return 0;
  if (start >= queryStart && end <= queryEnd) return st[index];
  const mid = start + Math.floor((end - start) / 2);
  const left = query(st, index * 2, start, mid, queryStart, queryEnd);
  const right = query(st, index * 2 + 1, mid + 1, end, queryStart, queryEnd);
  return left + right;
}
```