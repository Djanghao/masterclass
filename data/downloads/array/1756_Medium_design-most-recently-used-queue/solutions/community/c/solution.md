# [C++] 2 Solutions: Binary Indexed Tree | Square Root Decomposition [Detailed Explanation]

**Author:** cryptx_
**Votes:** 10
**Link:** [https://leetcode.com/problems/design-most-recently-used-queue/solutions/2484260/](https://leetcode.com/problems/design-most-recently-used-queue/solutions/2484260/)

---

**Solution 1: Binary Indexed Tree (Fenwick Tree)**
```
/*
    https://leetcode.com/problems/design-most-recently-used-queue/
    
    Things to note:
    1. We need a fast way to find the kth element, brute force way is O(N), so
    it should be better than that.
    2. Elements need to put at the back efficiently

    
    SOLUTION 1: BINARY INDEXED TREE
    
    TC: O(log(T) * log(T))
    SC: O(T)

    where T = n + 2000 + 1, n = initial size of array

    To find out the kth element, we can use cummulative sum of elements. In the
    cummulative sum, each element contributes 1, i's not their value which is used
    for the sum, rather their frequency.
    Idea is to use binary search in the range of elements and for the nums[mid], 
    check if it's cummulative sum till that point is k.

    Once we move the element to the back, we need to update the cummulative sum as well.
    So we can use either a segment tree or binary indexed tree for this.
    Here in this solution a Binary Indexed tree is used. Initially we update the sum
    for 1..n. Then for each fetch, when we move the element to back, we do 2 update calls.
    One update(kth_idx, -1) which effectively removes contribution of kth element
    and the other update(last_idx, 1), adds 1 to signify a new element has been added at the
    back.
*/

//////////////////////////////////////////////// SOLUTION 1: BINARY INDEXED TREE /////////////////////////
class MRUQueue {
private:
    class BIT {
    private:
        vector<int> tree;
    public:

        BIT(int n) {
            tree.resize(n + 1, 0);
        }

        int query(int idx) {
            int sum = 0;
            while(idx > 0) {
                sum += tree[idx];
                idx = idx - (idx & -idx);
            }
            return sum;
        }

        void update(int idx, int delta) {
            while(idx < tree.size()) {
                tree[idx] += delta;
                idx = idx + (idx & -idx);
            }
        }
    };

private:
    // total size
    int n = 0;
    // last position where an element exists
    int last = 0;
    // stores the numbers and saves queue order
    vector<int> nums;
    BIT bit;

public:
    MRUQueue(int n) : bit(n + 2000) {
        // We add extra 2000 to account for the movement of elements to the back
        // side. 2000 is based on the problem constraints
        nums.resize(n + 1 + 2000, 0);
        // Create BIT from 1..n and also update the initial array state
        for(int idx = 1; idx <= n; idx++) {
            nums[idx] = idx;
            // build the BIT tree with 1..n values
            bit.update(idx, 1);
        }

        this->n = n;
        this->last = n;
    }
    
    int fetch(int k) {
        // Using binary search we look for the index for which the
        // cummulative sum is equal to k
        int low = 1, high = this->n + 2000 + 1;
        
        int idx = 0;
        while(low < high) {
            int mid = low + (high - low) / 2;
            if(bit.query(mid) >= k)
                high = mid;
            else
                low = mid + 1; 
        }

        // Now that kth element is found,     
        // move the element to the back of array
        ++last;
        nums[last] = nums[high];
        nums[high] = 0;
       
        // update BIT to remove the element
        bit.update(high, -1);
        // since the element is added at the last position, its count = 1
        bit.update(last, 1);
        
        return nums[last];
    }
};
```

**Solution 2: Square Root Decomposition**
```
/*
	SOLUTION 2: SQUARE ROOT DECOMPOSITION
    
    TC: O(sqrt(n))
    SC: O(n + sqrt(n))
    
    Idea is to create buckets of size sqrt(n) and then do search in two levels.
    1st search for the bucket where the element exists and then search in that bucket only.
    
    We store the iterator of starting element of each bucket.Then for the given k, get the 
    bucket idx by k = k / bucket_size.
    Then inside the bucket traverse will we get the kth element.
    Since element is removed, the subsequent buckets need to undergo change as well.
    Since we removed an element, each bucket now takes an element from right and hence
    the starting element of each bucket becomes the next element.
*/
//////////////////////////////////////////////// SOLUTION 2: SQUARE ROOT DECOMPOSITION /////////////////////////
class MRUQueue {
    list<int> nums;
    // Stores iterator to the start element of each bucket
    vector<list<int>::iterator> buckets;
    int BUCKET_SIZE = 0;
public:
    MRUQueue(int n) {
        this -> BUCKET_SIZE = sqrt(n);
        
        for(int num = 0; num <= n; num++) { 
            // add the element and check if the curr number
            // is start of a new bucket
            nums.emplace_back(num);
            // Check if num can become start of a new bucket
            if(num % BUCKET_SIZE == 0)
                buckets.emplace_back(prev(nums.end()));
        }
    }
    
    int fetch(int k) {
        // Edge case: When k equals bucket size
        // Since we used 0 as a dummy element, all the elements moved right by one.
        // So will correctly the bucket index. 
        // Eg k = 2, bucket_size = 2
        // idx = 2 / 2 => 1
        // buckets: [0, 1], [2, 3], [4, 5]
        // We will get bucket idx = 1 which is correct.
        // Had we not put 0 at front, we would have gotten bucket idx = 1,
        // though 2 would have existed in bucket = 0 in that case
        // buckets: [1, 2], [3, 4], [5]
        int bucket_idx = k / BUCKET_SIZE;
        // iterator to the start of the bucket that contains the
        // kth element
        auto it = buckets[bucket_idx];
        
        // Get the net index to fetch in the current bucket
        // if we get 0, it means the 1st element.
        k = k % BUCKET_SIZE;
        // traverse till the kth element
        for(; k > 0; --k, ++it);
        
        // The current bucket needs to update the start
        // if kth element is the start of bucket
        // edge case: If this is the last bucket and also it has only
        // one element, then ensure that next element exists before iterating forward
        if(it == buckets[bucket_idx] && next(it) != nums.end())
            buckets[bucket_idx] = next(it);
        
        // put the kth element at the end
        nums.splice(nums.end(), nums, it);
        
        // Update the start of buckets after current bucket
        // as an element has been removed
        for(auto idx = bucket_idx + 1; idx < buckets.size(); idx++)
            buckets[idx] = next(buckets[idx]);
        
        return *it;
    }
};
```