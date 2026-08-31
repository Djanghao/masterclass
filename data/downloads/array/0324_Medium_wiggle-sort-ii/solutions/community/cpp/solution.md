# Short simple C++

**Author:** StefanPochmann
**Votes:** 93
**Link:** [https://leetcode.com/problems/wiggle-sort-ii/solutions/77706/](https://leetcode.com/problems/wiggle-sort-ii/solutions/77706/)

---

    void wiggleSort(vector<int>& nums) {
        vector<int> sorted(nums);
        sort(sorted.begin(), sorted.end());
        for (int i=nums.size()-1, j=0, k=i/2+1; i>=0; i--)
            nums[i] = sorted[i&1 ? k++ : j++];
    }

Sort and then write the smaller half of the numbers on the even indexes and the larger half of the numbers on the odd indexes, both from the back. Example:

    Small half:    4 . 3 . 2 . 1 . 0 .
    Large half:    . 9 . 8 . 7 . 6 . 5
    ----------------------------------
    Together:      4 9 3 8 2 7 1 6 0 5

So write `nums` from the back, interweaving `sorted[0..4]` (indexed by `j`) and `sorted[5..9]` (indexed by `k`).

For more explanation/proof, see [my equivalent Python solution](https://leetcode.com/discuss/76965/3-lines-python-with-explanation-proof).