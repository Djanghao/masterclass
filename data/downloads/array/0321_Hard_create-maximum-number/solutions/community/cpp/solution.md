# Short Python / Ruby / C++

**Author:** StefanPochmann
**Votes:** 203
**Link:** [https://leetcode.com/problems/create-maximum-number/solutions/77286/](https://leetcode.com/problems/create-maximum-number/solutions/77286/)

---

**Python**

    def maxNumber(self, nums1, nums2, k):

        def prep(nums, k):
            drop = len(nums) - k
            out = []
            for num in nums:
                while drop and out and out[-1] < num:
                    out.pop()
                    drop -= 1
                out.append(num)
            return out[:k]

        def merge(a, b):
            return [max(a, b).pop(0) for _ in a+b]

        return max(merge(prep(nums1, i), prep(nums2, k-i))
                   for i in range(k+1)
                   if i <= len(nums1) and k-i <= len(nums2))

Solved it on my own but now I see others already posted this idea. Oh well, at least it's short, particularly my `merge` function.

The last two lines can be combined, but I find it rather ugly and not worth it:  
`for i in range(max(k-len(nums2), 0), min(k, len(nums1))+1))`

---

**Ruby**

    def prep(nums, k)
      drop = nums.size - k
      out = [9]
      nums.each do |num|
        while drop > 0 && out[-1] < num
          out.pop
          drop -= 1
        end
        out << num
      end
      out[1..k]
    end
    
    def max_number(nums1, nums2, k)
      ([k-nums2.size, 0].max .. [nums1.size, k].min).map { |k1|
        parts = [prep(nums1, k1), prep(nums2, k-k1)]
        (1..k).map { parts.max.shift }
      }.max
    end

---

**C++**

Translated it to C++ as well now. Not as short anymore, but still decent. And C++ allows different functions with the same name, so I chose to do that here to show how nicely the `maxNumber(nums1, nums2, k)` problem can be based on the problems `maxNumber(nums, k)` and `maxNumber(nums1, nums2)`, which would make fine problems on their own.

    vector<int> maxNumber(vector<int>& nums1, vector<int>& nums2, int k) {
        int n1 = nums1.size(), n2 = nums2.size();
        vector<int> best;
        for (int k1=max(k-n2, 0); k1<=min(k, n1); ++k1)
            best = max(best, maxNumber(maxNumber(nums1, k1),
                                       maxNumber(nums2, k-k1)));
        return best;
    }

    vector<int> maxNumber(vector<int> nums, int k) {
        int drop = nums.size() - k;
        vector<int> out;
        for (int num : nums) {
            while (drop && out.size() && out.back() < num) {
                out.pop_back();
                drop--;
            }
            out.push_back(num);
        }
        out.resize(k);
        return out;
    }

    vector<int> maxNumber(vector<int> nums1, vector<int> nums2) {
        vector<int> out;
        while (nums1.size() + nums2.size()) {
            vector<int>& now = nums1 > nums2 ? nums1 : nums2;
            out.push_back(now[0]);
            now.erase(now.begin());
        }
        return out;
    }

An alternative for `maxNumber(nums1, nums2)`:

    vector<int> maxNumber(vector<int> nums1, vector<int> nums2) {
        vector<int> out;
        auto i1 = nums1.begin(), end1 = nums1.end();
        auto i2 = nums2.begin(), end2 = nums2.end();
        while (i1 != end1 || i2 != end2)
            out.push_back(lexicographical_compare(i1, end1, i2, end2) ? *i2++ : *i1++);
        return out;
    }