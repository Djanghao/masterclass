# Clean and Concise || C++ || Python

**Author:** yadivyanshu
**Votes:** 7
**Link:** [https://leetcode.com/problems/peaks-in-array/solutions/5513098/](https://leetcode.com/problems/peaks-in-array/solutions/5513098/)

---


```cpp []
class SGTree {
	vector<int> seg;
public:
	SGTree(int n) {
		seg.resize(4 * n + 1, 0);
	}

	void build(int ind, int low, int high, vector<int>& arr) {
		if (low == high) {
			seg[ind] = arr[low];
			return;
		}

		int mid = (low + high) / 2;
		build(2 * ind + 1, low, mid, arr);
		build(2 * ind + 2, mid + 1, high, arr);
		seg[ind] = seg[2 * ind + 1] + seg[2 * ind + 2];
	}

	int query(int ind, int low, int high, int l, int r) {
		// no overlap
		// l r low high or low high l r
		if (r < low || high < l) return 0;

		// complete overlap
		// [l low high r]
		if (low >= l && high <= r) return seg[ind];

		int mid = (low + high) >> 1;
		int left = query(2 * ind + 1, low, mid, l, r);
		int right = query(2 * ind + 2, mid + 1, high, l, r);
		return (left + right);
	}

	void update(int ind, int low, int high, int i, int val) {
		if (low == high) {
			seg[ind] = val;
			return;
		}

		int mid = (low + high) >> 1;
		if (i <= mid) update(2 * ind + 1, low, mid, i, val);
		else update(2 * ind + 2, mid + 1, high, i, val);
		seg[ind] = seg[2 * ind + 1] + seg[2 * ind + 2];
	}
};


class Solution {
public:
    vector<int> countOfPeaks(vector<int>& nums, vector<vector<int>>& queries, vector<int> ret = {}) {
        int n = nums.size();
        vector<int> arr(n, 0);
        for(int i = 1; i < n-1; i++)
            if(nums[i] > max(nums[i-1], nums[i+1])) arr[i]++;
        SGTree obj(n);
        obj.build(0, 0, n-1, arr);

        for(auto &it : queries) {
            int l = it[1], r = it[2];
            if(it[0] == 1) {
                int count = obj.query(0, 0, n-1, l+1, r-1);
                ret.push_back(count);
            }else{
                int i = it[1], val = it[2];
                nums[i] = val;
                if(i > 1) { // left index
                    int updatedVal = nums[i-1] > max(nums[i-2], nums[i]) ? 1 : 0;
                    if(arr[i-1] != updatedVal) obj.update(0, 0, n-1, i-1, updatedVal);
                    arr[i-1] = updatedVal;
                }
                if(i != 0 && i != n-1) { // current index
                    int updatedVal = nums[i] > max(nums[i-1], nums[i+1]) ? 1 : 0;
                    if(arr[i] != updatedVal) obj.update(0, 0, n-1, i, updatedVal);
                    arr[i] = updatedVal;
                }
                if(i < n-2) { // right index
                    int updatedVal = nums[i+1] > max(nums[i], nums[i+2]) ? 1 : 0;
                    if(arr[i+1] != updatedVal) obj.update(0, 0, n-1, i+1, updatedVal);
                    arr[i+1] = updatedVal;
                }
            }
        }

        return ret;
    }
};
```
```python []
class SGTree:
    def __init__(self, n):
        self.n = n
        self.seg = [0] * (4 * n + 1)

    def build(self, ind, low, high, arr):
        if low == high:
            self.seg[ind] = arr[low]
            return

        mid = (low + high) >> 1
        self.build(2 * ind + 1, low, mid, arr)
        self.build(2 * ind + 2, mid + 1, high, arr)

        self.seg[ind] = self.seg[2 * ind + 1] + self.seg[2 * ind + 2]
        

    def query(self, ind, low, high, l, r):
        if r < low or high < l:
            return 0
        if low >= l and high <= r:
            return self.seg[ind]

        mid = (low + high) >> 1
        left = self.query(2 * ind + 1, low, mid, l, r)
        right = self.query(2 * ind + 2, mid + 1, high, l, r)
        return left + right

    def update(self, ind, low, high, i, val):
        if low == high:
            self.seg[ind] = val
            return
        mid = (low + high) >> 1
        if i <= mid:
            self.update(2 * ind + 1, low, mid, i, val)
        else:
            self.update(2 * ind + 2, mid + 1, high, i, val)
        self.seg[ind] = self.seg[2 * ind + 1] + self.seg[2 * ind + 2]


class Solution:
    def countOfPeaks(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        n = len(nums)
        arr = [0] * n
        for i in range(1, n-1):
            if nums[i] > max(nums[i-1], nums[i+1]):
                arr[i] = 1
        obj = SGTree(n)
        obj.build(0, 0, n-1, arr)

        ret = []
        for it in queries:
            if it[0] == 1:
                count = obj.query(0, 0, n-1, it[1] + 1, it[2] - 1)
                ret.append(count)
            else:
                i, val = it[1], it[2]
                nums[i] = val
                if i > 1:   # left index
                    updatedVal = 1 if nums[i-1] > max(nums[i-2], nums[i]) else 0
                    if arr[i-1] != updatedVal:
                        obj.update(0, 0, n-1, i-1, updatedVal)
                        arr[i-1] = updatedVal
                if i != 0 and i != n-1:  # current index
                    updatedVal = 1 if nums[i] > max(nums[i-1], nums[i+1]) else 0
                    if arr[i] != updatedVal:
                        obj.update(0, 0, n-1, i, updatedVal)
                        arr[i] = updatedVal
                if i < n-2:  # right index
                    updatedVal = 1 if nums[i+1] > max(nums[i], nums[i+2]) else 0
                    if arr[i+1] != updatedVal:
                        obj.update(0, 0, n-1, i+1, updatedVal)
                        arr[i+1] = updatedVal

        return ret
```
