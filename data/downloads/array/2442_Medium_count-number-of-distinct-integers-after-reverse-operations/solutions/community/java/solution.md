# Put number & Reverse

**Author:** Rowque
**Votes:** 29
**Link:** [https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/2708140/](https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/2708140/)

---

Put every number along with its reverse.

Time - O(`n`)
Space - O(`n`)
# C++
     int reverse(int n){
        int val = 0;
        while (n){
            val = val *10 + (n % 10);
            n /= 10;
        }
        return val;
    }

    int countDistinctIntegers(vector<int> &nums) {
        unordered_set<int> st;
        for (int i: nums){
            st.insert(i);
            st.insert(reverse(i));
        }
        return st.size();
    }
	
# Java
    int reverse(int n){
        int val = 0;
        while(n > 0){
            val = val * 10 + (n % 10);
            n /= 10;
        }
        return val;
    }
    
    public int countDistinctIntegers(int[] nums) {
        HashSet<Integer> st = new HashSet<>();
        for (int i : nums) {
            st.add(i);
            st.add(reverse(i));
        }
        return st.size();
    }