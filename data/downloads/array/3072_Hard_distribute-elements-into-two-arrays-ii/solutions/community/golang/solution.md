# [C++ / Go] - Binary Indexex Tree / BIT - O(nlogn) solution

**Author:** mikazuki4712
**Votes:** 1
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/4819831/](https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/4819831/)

---

# Intuition
The problem needs dynamic data updating and querying so Binary Indexed Tree can be used here
- We need to compress the value for tree storing.

# Approach
- Compress value $10^9$ to maximum of n ($10^5$)
- Build two BITs to store the occurrences of appeared number in each arrays

# Code
```C++ []
class BIT {
private:
    vector<int> tree;
    int n;

public:
    BIT(int size) : tree(size + 1), n(size) {}

    void update(int idx, int val) {
        idx++;
        while (idx <= n) {
            tree[idx] += val;
            idx += idx & -idx;
        }
    }

    int query(int idx) {
        idx++;
        int result = 0;
        while (idx > 0) {
            result += tree[idx];
            idx -= idx & -idx;
        }
        return result;
    }
};

class Solution {
public:
    vector<int> compress(const vector<int>& nums) {
        vector<int> d(nums.begin(), nums.end());
        sort(d.begin(), d.end());
        d.erase(unique(d.begin(), d.end()), d.end());
        return d;
    }
    
    vector<int> resultArray(vector<int>& nums) {
        int n = nums.size();
        
        vector<int> d = compress(nums);
        int m = d.size();
        unordered_map<int, int> trans;
        for (int i = 0; i < d.size(); i++)
            trans[d[i]] = i;
        
        vector<int> arr1, arr2;
        BIT bit1(m), bit2(m);

        arr1.push_back(nums[0]);
        bit1.update(trans[nums[0]], 1);

        arr2.push_back(nums[1]);
        bit2.update(trans[nums[1]], 1);
        
        for (int i = 2; i < n; ++i) {
            int count1 = arr1.size() - bit1.query(trans[nums[i]]);
            int count2 = arr2.size() - bit2.query(trans[nums[i]]);

            if (count1 > count2 || (count1 == count2 && arr1.size() <= arr2.size())) {
                arr1.push_back(nums[i]);
                bit1.update(trans[nums[i]], 1);
            } else {
                arr2.push_back(nums[i]);
                bit2.update(trans[nums[i]], 1);
            }
        }

        arr1.insert(arr1.end(), arr2.begin(), arr2.end());
        return arr1;
    }
};
```
```Go []
type BIT struct {
	tree []int
	n    int
}

func newBIT(n int) BIT {
	return BIT {
		tree: make([]int, n + 1),
		n:    n,
	}
}

func (b *BIT) update(idx, val int) {
	idx++
	for idx <= b.n {
		b.tree[idx] += val
		idx += idx & -idx
	}
}

func (b *BIT) query(idx int) int {
	idx++
	result := 0
	for idx > 0 {
		result += b.tree[idx]
		idx -= idx & -idx
	}
	return result
}

func compress(nums []int) []int {
	d := make([]int, len(nums))
	copy(d, nums)

	sort.Ints(d)
	cur := 0
	for i := 1; i < len(d); i++ {
		if d[i] != d[cur] {
			cur++
			d[cur] = d[i]
		}
	}
	return d[:cur + 1]
}

func resultArray(nums []int) []int {
    n := len(nums)

	d := compress(nums)
    m := len(d)
	trans := make(map[int]int)
	for i, val := range d {
		trans[val] = i
	}

	var arr1, arr2 []int
	bit1 := newBIT(m)
	bit2 := newBIT(m)

    arr1 = append(arr1, nums[0])
    bit1.update(trans[nums[0]], 1)

    arr2 = append(arr2, nums[1])
    bit2.update(trans[nums[1]], 1)

    for i := 2; i < n; i++ {
		count1 := len(arr1) - bit1.query(trans[nums[i]])
		count2 := len(arr2) - bit2.query(trans[nums[i]])

		if count1 > count2 || (count1 == count2 && len(arr1) <= len(arr2)) {
			arr1 = append(arr1, nums[i])
			bit1.update(trans[nums[i]], 1)
		} else {
			arr2 = append(arr2, nums[i])
			bit2.update(trans[nums[i]], 1)
		}
	}

	arr1 = append(arr1, arr2...)
	return arr1
}
```

# Complexity
- Time complexity: $O(nlogn)$
    - Average time complexity for BIT operation : $O(logn)$
    - Loop through n numbers => $O(nlogn)$
- Space complexity: $O(n)$ for storing the tree structure

