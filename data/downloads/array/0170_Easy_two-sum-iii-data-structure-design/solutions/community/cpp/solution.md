# Fast and concise C++ multiset solution

**Author:** ChowTaiFok
**Votes:** 25
**Link:** [https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/52029/](https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/52029/)

---

    class TwoSum {
        unordered_multiset<int> nums;
    public:
        void add(int number) {
            nums.insert(number);
        }
        bool find(int value) {
            for (int i : nums) {
                int count = i == value - i ? 1 : 0;
                if (nums.count(value - i) > count) {
                    return true;
                }
            }
            return false;
        }
    };