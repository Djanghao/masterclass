# C++ STL, partition and heapsort

**Author:** jianchao-li
**Votes:** 1172
**Link:** [https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/60309/](https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/60309/)

---

#### STL

This problem needs to use partial sorting. In STL, there are two built-in functions (`nth_element` and `partial_sort`) for this.

```cpp
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        nth_element(nums.begin(), nums.begin() + k - 1, nums.end(), greater<int>());
        return nums[k - 1];
    }
};
```

```cpp
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        partial_sort(nums.begin(), nums.begin() + k, nums.end(), greater<int>());
        return nums[k - 1];
    }
};
```

Note the off-by-1 difference in the second argument of the two built-in functions.

We may also use a heap to solve this problem. We can maintain the largest `k` elements in a heap with the smallest among them at the top. Or we can add all the elements to a heap, with the largest at the top, and then pop the heap for `k - 1` times, then the one on the top is our target. The first one is min-heap and the second one is max-heap. In STL, both `priority_queue` and `multiset` can be used as a min/max-heap.

**min-heap using `priority_queue`**

```cpp
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        priority_queue<int, vector<int>, greater<int>> pq;
        for (int num : nums) {
            pq.push(num);
            if (pq.size() > k) {
                pq.pop();
            }
        }
        return pq.top();
    }
};
```

**max-heap using `priority_queue`**

```cpp
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        priority_queue<int> pq(nums.begin(), nums.end());
        for (int i = 0; i < k - 1; i++) {
            pq.pop();
        }
        return pq.top();
    }
};
```

**min-heap using `multiset`**

```cpp
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        multiset<int> mset;
        for (int num : nums) {
            mset.insert(num);
            if (mset.size() > k) {
                mset.erase(mset.begin());
            }
        }
        return *mset.begin();
    }
};
```

**max-heap using `multiset`**

```cpp
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        multiset<int, greater<int>> mset(nums.begin(), nums.end());
        for (int i = 0; i < k - 1; i++) {
            mset.erase(mset.begin());
        }
        return *mset.begin();
    }
};
```

#### Partition

The partition subroutine of quicksort can also be used to solve this problem. In `partition`, we divide the array into

```
elements>=pivot pivot elements<=pivot
```

Then, according to the index of `pivot`, we will know whther the `k`th largest element is to the left or right of `pivot` or just itself.

In average, this algorithm reduces the size of the problem by approximately one half after each partition, giving the recurrence `T(n) = T(n/2) + O(n)` with `O(n)` being the time for partition. The solution is `T(n) = O(n)`, which means we have found an average linear-time solution. However, in the worst case, the recurrence will become `T(n) = T(n - 1) + O(n)` and `T(n) = O(n^2)`.

```cpp
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        int left = 0, right = nums.size() - 1, kth;
        while (true) {
            int idx = partition(nums, left, right);
            if (idx == k - 1) {
                kth = nums[idx];
                break;
            }
            if (idx < k - 1) {
                left = idx + 1;
            } else {
                right = idx - 1;
            }
        }
        return kth;
    }
private:
    int partition(vector<int>& nums, int left, int right) {
        int pivot = nums[left], l = left + 1, r = right;
        while (l <= r) {
            if (nums[l] < pivot && nums[r] > pivot) {
                swap(nums[l++], nums[r--]);
            }
            if (nums[l] >= pivot) {
                l++;
            }
            if (nums[r] <= pivot) {
                r--;
            }
        }
        swap(nums[left], nums[r]);
        return r;
    }
};
```

#### Heapsort

In the above we have presented heap solutions using STL. You may also implement your own heap if you are interested. I suggest you to read the Heapsort chapter of Introduction to Algorithms if you are not familiar with it. The following code implements a max-heap.

```cpp
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        buildMaxHeap(nums);
        for (int i = 0; i < k - 1; i++) {
            swap(nums[0], nums[--heapSize]);
            maxHeapify(nums, 0);
        }
        return nums[0];
    }
private:
    int heapSize;
    
    int left(int i) {
        return (i << 1) + 1;
    }
    
    int right(int i) {
        return (i << 1) + 2;
    }
    
    void maxHeapify(vector<int>& nums, int i) {
        int largest = i, l = left(i), r = right(i);
        if (l < heapSize && nums[l] > nums[largest]) {
            largest = l;
        }
        if (r < heapSize && nums[r] > nums[largest]) {
            largest = r;
        }
        if (largest != i) {
            swap(nums[i], nums[largest]);
            maxHeapify(nums, largest);
        }
    }
    
    void buildMaxHeap(vector<int>& nums) {
        heapSize = nums.size();
        for (int i = (heapSize >> 1) - 1; i >= 0; i--) {
            maxHeapify(nums, i);
        }
    }
};
```