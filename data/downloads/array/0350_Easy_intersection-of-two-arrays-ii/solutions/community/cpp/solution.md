# Short Python / C++

**Author:** StefanPochmann
**Votes:** 223
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/82269/](https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/82269/)

---

Python
-

    def intersect(self, nums1, nums2):
        a, b = map(collections.Counter, (nums1, nums2))
        return list((a & b).elements())

Variations:

    def intersect(self, nums1, nums2):
        C = collections.Counter
        return list((C(nums1) & C(nums2)).elements())
        
    def intersect(self, nums1, nums2):
        return list((collections.Counter(nums1) & collections.Counter(nums2)).elements())

---

C++
-

    vector<int> intersect(vector<int>& a, vector<int>& b) {
        sort(a.begin(), a.end());
        sort(b.begin(), b.end());
        a.erase(set_intersection(a.begin(), a.end(), b.begin(), b.end(), a.begin()), a.end());
        return a;
    }

Another:

    vector<int> intersect(vector<int>& a, vector<int>& b) {
        unordered_map<int, int> ctr;
        for (int i : a)
            ctr[i]++;
        vector<int> out;
        for (int i : b)
            if (ctr[i]-- > 0)
                out.push_back(i);
        return out;
    }